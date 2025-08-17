/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

// Base URL for all API requests (configurable via Vite env)
export const API_BASE_URL = (import.meta as any)?.env?.VITE_API_BASE_URL || "https://backend.w3leads.in/api";

// Local storage key for bearer token
const AUTH_TOKEN_KEY = "w3leads.auth.token";

// Cookie helpers for cross-origin (website <-> dashboard) token sharing
function getCookie(name: string): string | null {
  try {
    const cookieString = typeof document !== "undefined" ? document.cookie : "";
    if (!cookieString) return null;
    const parts = cookieString.split("; ");
    for (const part of parts) {
      const [key, ...rest] = part.split("=");
      if (key === name) {
        return decodeURIComponent(rest.join("="));
      }
    }
    return null;
  } catch {
    return null;
  }
}

function setCookie(name: string, value: string, days?: number) {
  try {
    const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";
    const parts: string[] = [];
    parts.push(`${name}=${encodeURIComponent(value)}`);
    parts.push("Path=/");
    // Share across subdomains in production
    const host = typeof window !== "undefined" ? window.location.hostname : "";
    if (host.endsWith("w3leads.in")) {
      parts.push("Domain=.w3leads.in");
    }
    if (days && days > 0) {
      const ms = days * 24 * 60 * 60 * 1000;
      const expires = new Date(Date.now() + ms);
      parts.push(`Expires=${expires.toUTCString()}`);
      parts.push(`Max-Age=${Math.floor(ms / 1000)}`);
    }
    parts.push("SameSite=Lax");
    if (isHttps) parts.push("Secure");
    document.cookie = parts.join("; ");
  } catch {
    // ignore
  }
}

function deleteCookie(name: string) {
  try {
    const host = typeof window !== "undefined" ? window.location.hostname : "";
    const base = `${name}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Max-Age=0; Path=/;`;
    if (host.endsWith("w3leads.in")) {
      document.cookie = `${base} Domain=.w3leads.in`;
    } else {
      document.cookie = base;
    }
  } catch {
    // ignore
  }
}

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiErrorBody {
  message?: string;
  errors?: Record<string, string[] | string>;
  [key: string]: unknown;
}

export class ApiError extends Error {
  status: number;
  body?: ApiErrorBody | unknown;

  constructor(status: number, message: string, body?: ApiErrorBody | unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

export function getStoredToken(): string | null {
  try {
    const fromLocal = localStorage.getItem(AUTH_TOKEN_KEY);
    if (fromLocal) return fromLocal;
    // Fallback to cookie to enable cross-app auth
    const fromCookie = getCookie("w3leads_auth");
    if (fromCookie) {
      try { localStorage.setItem(AUTH_TOKEN_KEY, fromCookie); } catch {}
      return fromCookie;
    }
    return null;
  } catch {
    return null;
  }
}

export function storeToken(token?: string | null, options?: { remember?: boolean }) {
  try {
    if (token) {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      // Mirror token to cookie for cross-origin redirects
      setCookie("w3leads_auth", token, options?.remember ? 30 : undefined);
    } else {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      deleteCookie("w3leads_auth");
    }
  } catch {
    // ignore
  }
}

export async function apiFetch<T = unknown>(path: string, options: RequestInit = {}): Promise<T> {
  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  const headers: HeadersInit = {
    Accept: "application/json",
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...(options.headers || {}),
  };

  const token = getStoredToken();
  if (token) {
    (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, { ...options, headers });

  // Try to parse JSON even on error responses
  let data: any = null;
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    try {
      data = await response.json();
    } catch {
      data = null;
    }
  } else {
    try {
      data = await response.text();
    } catch {
      data = null;
    }
  }

  if (!response.ok) {
    const message = (data && (data.message || (typeof data === "string" && data))) || `Request failed with status ${response.status}`;
    throw new ApiError(response.status, message, data);
  }

  return data as T;
}

// ===== Auth endpoints (Laravel typical) =====
export interface LoginRequest {
  email: string;
  password: string;
  remember?: boolean;
}

export interface LoginResponse {
  user?: unknown;
  token?: string; // common
  access_token?: string; // alternative
  [key: string]: unknown;
}

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const res = await apiFetch<LoginResponse>("/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const token = res.token || (res as any)?.access_token;
  if (token) storeToken(token as string, { remember: !!payload.remember });
  return res;
}

export interface RegisterRequest {
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  company?: string;
  password: string;
  password_confirmation?: string;
}

export interface RegisterResponse {
  user?: unknown;
  token?: string;
  [key: string]: unknown;
}

export async function register(payload: RegisterRequest): Promise<RegisterResponse> {
  const normalized: RegisterRequest = {
    ...payload,
    password_confirmation: payload.password_confirmation ?? payload.password,
    name: payload.name ?? (([payload.firstName, payload.lastName].filter(Boolean).join(" ").trim()) || undefined),
  };
  const res = await apiFetch<RegisterResponse>("/register", {
    method: "POST",
    body: JSON.stringify(normalized),
  });
  const token = (res as any)?.token;
  if (token) storeToken(token);
  return res;
}

export interface ForgotPasswordRequest { email: string }
export interface ForgotPasswordResponse { status?: string; message?: string; [key: string]: unknown }

export function requestPasswordReset(payload: ForgotPasswordRequest) {
  return apiFetch<ForgotPasswordResponse>("/forgot-password", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export interface ResetPasswordRequest {
  token: string;
  email: string;
  password: string;
  password_confirmation?: string;
}
export interface ResetPasswordResponse { status?: string; message?: string; [key: string]: unknown }

export function resetPassword(payload: ResetPasswordRequest) {
  const body = { ...payload, password_confirmation: payload.password_confirmation ?? payload.password };
  return apiFetch<ResetPasswordResponse>("/reset-password", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function getCurrentUser<T = unknown>() {
  return apiFetch<T>("/user", { method: "GET" });
}

export function logout() {
  storeToken(null);
  return apiFetch<unknown>("/logout", { method: "POST" });
}

export interface ResendEmailVerificationResponse { status?: string; message?: string; [key: string]: unknown }
export function resendEmailVerification() {
  return apiFetch<ResendEmailVerificationResponse>("/email/verification-notification", { method: "POST" });
}

// Utility to attach token externally if obtained by other means (e.g., OAuth)
export function setAuthToken(token?: string | null) {
  storeToken(token ?? null);
}