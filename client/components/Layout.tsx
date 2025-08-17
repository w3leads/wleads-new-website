import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Globe,
  Mail,
  Shield,
  Eye,
  Zap,
  ArrowRight,
  Sparkles,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Facebook,
  Send,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  Award,
  Star,
  Heart,
  ExternalLink,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "./ThemeToggle";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productItems = [
    {
      icon: Globe,
      title: "Domain Finder",
      description: "Find available domains for your business",
      href: "/products/domain-finder",
      color: "text-blue-500",
    },
    {
      icon: Mail,
      title: "Email Finder",
      description: "Discover professional email addresses",
      href: "/products/email-finder",
      color: "text-green-500",
    },
    {
      icon: Shield,
      title: "Email Verifier",
      description: "Validate and verify email addresses",
      href: "/products/email-verifier",
      color: "text-purple-500",
    },
    {
      icon: Eye,
      title: "Discover",
      description: "Uncover new business opportunities",
      href: "/products/discover",
      color: "text-orange-500",
    },
    {
      icon: Zap,
      title: "Campaigns",
      description: "Launch targeted outreach campaigns",
      href: "/products/campaigns",
      color: "text-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 shadow-lg shadow-black/5 border-b border-gray-200/50 dark:border-white/10"
            : "backdrop-blur-sm bg-white/60 dark:bg-slate-900/60 border-b border-gray-200/30 dark:border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/25 group-hover:shadow-brand-primary/40 transition-all duration-300">
                  <span className="text-white font-bold text-lg">W3</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-success rounded-full opacity-80 animate-pulse"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 dark:text-white font-bold text-2xl tracking-tight">
                  Leads
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1">
                  B2B Platform
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 dark:text-gray-200 hover:text-brand-primary hover:bg-gray-100/50 dark:hover:bg-white/5 transition-all duration-300 font-medium">
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 p-4 mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-xl shadow-black/10 rounded-2xl">
                  <div className="space-y-1">
                    {productItems.map((item, index) => (
                      <DropdownMenuItem key={index} asChild>
                        <Link
                          to={item.href}
                          className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50/50 dark:hover:bg-white/5 transition-all duration-300"
                        >
                          <div
                            className={`p-2 rounded-lg bg-gray-100/50 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300 ${item.color}`}
                          >
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-primary transition-colors duration-300">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {item.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  <DropdownMenuSeparator className="my-3" />
                  <div className="p-3 rounded-xl bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/20">
                    <div className="flex items-center space-x-2 text-brand-primary font-semibold mb-1">
                      <Sparkles className="w-4 h-4" />
                      <span>New Feature</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      AI-powered lead scoring now available
                    </p>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/pricing"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-white/5 ${
                  isActive("/pricing")
                    ? "text-brand-primary bg-brand-primary/10"
                    : "text-gray-700 dark:text-gray-200 hover:text-brand-primary"
                }`}
              >
                Pricing
              </Link>

              <Link
                to="/blog"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-white/5 ${
                  isActive("/blog")
                    ? "text-brand-primary bg-brand-primary/10"
                    : "text-gray-700 dark:text-gray-200 hover:text-brand-primary"
                }`}
              >
                Blog
              </Link>

              <Link
                to="/about"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-white/5 ${
                  isActive("/about")
                    ? "text-brand-primary bg-brand-primary/10"
                    : "text-gray-700 dark:text-gray-200 hover:text-brand-primary"
                }`}
              >
                About
              </Link>
            </div>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <ThemeToggle />

              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 dark:text-gray-200 hover:text-brand-primary hover:bg-gray-100/50 dark:hover:bg-white/5 rounded-xl font-medium"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>

              <Link
                to="/login"
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-brand-primary font-medium rounded-xl hover:bg-gray-100/50 dark:hover:bg-white/5 transition-all duration-300"
              >
                Sign In
              </Link>

              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 border-0 rounded-xl px-6 py-2 font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/signup" className="flex items-center space-x-2">
                  <span>Start Free</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center space-x-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 text-gray-700 dark:text-gray-200 hover:text-brand-primary hover:bg-gray-100/50 dark:hover:bg-white/5 rounded-xl transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-white/10 shadow-xl shadow-black/5">
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
                {/* Mobile Products Section */}
                <div className="space-y-4">
                  <div className="text-gray-900 dark:text-white font-semibold text-lg border-b border-gray-200/50 dark:border-white/10 pb-3">
                    Products
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {productItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-100/50 dark:hover:bg-white/5 transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div
                          className={`p-2 rounded-lg bg-gray-100/50 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300 ${item.color}`}
                        >
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-primary transition-colors duration-300">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    to="/pricing"
                    className={`p-4 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-white/5 ${
                      isActive("/pricing")
                        ? "text-brand-primary bg-brand-primary/10"
                        : "text-gray-700 dark:text-gray-200 hover:text-brand-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/blog"
                    className={`p-4 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-white/5 ${
                      isActive("/blog")
                        ? "text-brand-primary bg-brand-primary/10"
                        : "text-gray-700 dark:text-gray-200 hover:text-brand-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/about"
                    className={`p-4 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-white/5 ${
                      isActive("/about")
                        ? "text-brand-primary bg-brand-primary/10"
                        : "text-gray-700 dark:text-gray-200 hover:text-brand-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </div>

                {/* Mobile Action Buttons */}
                <div className="grid grid-cols-1 gap-3 pt-4 border-t border-gray-200/50 dark:border-white/10">
                  <Button
                    variant="outline"
                    asChild
                    className="w-full rounded-xl border-gray-200 dark:border-white/20 hover:bg-gray-100/50 dark:hover:bg-white/5"
                  >
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full rounded-xl border-gray-200 dark:border-white/20 hover:bg-gray-100/50 dark:hover:bg-white/5"
                  >
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-purple text-white shadow-lg shadow-brand-primary/25 border-0 rounded-xl font-semibold"
                  >
                    <Link
                      to="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>Start Free</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="relative bg-slate-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Company Info & Newsletter - Takes up more space */}
              <div className="lg:col-span-5 space-y-8">
                {/* Brand Section */}
                <div className="space-y-6">
                  <Link
                    to="/"
                    className="group inline-flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-primary/25 group-hover:shadow-brand-primary/40 transition-all duration-300">
                        <span className="text-white font-bold text-xl">W3</span>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-accent rounded-full opacity-80 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-900 dark:text-white font-bold text-3xl tracking-tight">
                        Leads
                      </span>
                      <span className="text-sm text-brand-primary font-medium -mt-1">
                        B2B Platform
                      </span>
                    </div>
                  </Link>

                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-md">
                    The most advanced B2B lead generation and email verification
                    platform. Trusted by{" "}
                    <span className="text-brand-accent font-semibold">
                      50,000+
                    </span>{" "}
                    businesses worldwide.
                  </p>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center space-x-2 bg-brand-accent/10 border border-brand-accent/20 px-3 py-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-brand-accent" />
                      <span className="text-xs text-brand-accent font-medium">
                        GDPR Compliant
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 bg-brand-accent/10 border border-brand-accent/20 px-3 py-2 rounded-full">
                      <Shield className="w-4 h-4 text-brand-accent" />
                      <span className="text-xs text-brand-accent font-medium">
                        SOC 2 Certified
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 bg-brand-accent/10 border border-brand-accent/20 px-3 py-2 rounded-full">
                      <Award className="w-4 h-4 text-brand-accent" />
                      <span className="text-xs text-brand-accent font-medium">
                        99.9% Uptime
                      </span>
                    </div>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 space-y-4 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-gray-900 dark:text-white font-semibold text-lg flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-brand-primary" />
                      <span>Stay Updated</span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Get the latest updates, tips, and exclusive offers
                      delivered to your inbox.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-purple text-white shadow-lg shadow-brand-primary/25 border-0 rounded-xl px-6 transition-all duration-300 hover:scale-105">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Join 25,000+ subscribers. Unsubscribe anytime.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-brand-secondary" />
                    <span className="text-sm">
                      San Francisco, CA & Remote Worldwide
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-brand-secondary" />
                    <span className="text-sm">hello@w3leads.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Clock className="w-4 h-4 text-brand-secondary" />
                    <span className="text-sm">24/7 Customer Support</span>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Products */}
                <div className="space-y-4">
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6 relative">
                    Products
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"></div>
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Domain Finder",
                        href: "/products/domain-finder",
                        badge: "Popular",
                      },
                      {
                        name: "Email Finder",
                        href: "/products/email-finder",
                        badge: "New",
                      },
                      {
                        name: "Email Verifier",
                        href: "/products/email-verifier",
                      },
                      { name: "Discover", href: "/products/discover" },
                      {
                        name: "Campaigns",
                        href: "/products/campaigns",
                        badge: "Beta",
                      },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="group flex items-center justify-between text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1"
                      >
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="text-xs bg-brand-secondary/20 text-brand-secondary px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-4">
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6 relative">
                    Company
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"></div>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "About Us", href: "/about" },
                      {
                        name: "Careers",
                        href: "/careers",
                        badge: "We're hiring!",
                      },
                      { name: "Blog", href: "/blog" },
                      { name: "Press Kit", href: "/press" },
                      { name: "Contact", href: "/contact" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="group flex items-center justify-between text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1"
                      >
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="text-xs bg-brand-success/20 text-brand-success px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg mb-6 relative">
                    Resources
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"></div>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Documentation", href: "/docs" },
                      { name: "API Reference", href: "/api" },
                      { name: "Help Center", href: "/help" },
                      { name: "Pricing", href: "/pricing" },
                      { name: "Status Page", href: "/status" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="group flex items-center justify-between text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1"
                      >
                        <span>{item.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Legal */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg mb-6 relative">
                    Legal
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"></div>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Privacy Policy", href: "/privacy" },
                      { name: "Terms of Service", href: "/terms" },
                      { name: "Cookie Policy", href: "/cookies" },
                      { name: "GDPR", href: "/gdpr" },
                      { name: "Security", href: "/security" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="group flex items-center justify-between text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1"
                      >
                        <span>{item.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Copyright & Rating */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                <p className="text-gray-400 text-sm">
                  © 2024 W3Leads, Inc. All rights reserved.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">
                    4.9/5 from 2,500+ reviews
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                {[
                  {
                    icon: Twitter,
                    href: "https://twitter.com/w3leads",
                    label: "Twitter",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/company/w3leads",
                    label: "LinkedIn",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/w3leads",
                    label: "GitHub",
                  },
                  {
                    icon: Youtube,
                    href: "https://youtube.com/w3leads",
                    label: "YouTube",
                  },
                  {
                    icon: Instagram,
                    href: "https://instagram.com/w3leads",
                    label: "Instagram",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-brand-primary/20 hover:border-brand-primary/30 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Made with Love */}
            <div className="text-center mt-8 pt-6 border-t border-white/5">
              <p className="text-gray-500 text-xs flex items-center justify-center space-x-1">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-red-400 fill-current animate-pulse" />
                <span>in San Francisco</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
