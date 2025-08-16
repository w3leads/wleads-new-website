import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import {
  Mail,
  ArrowLeft,
  Send,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sending reset email
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
    }, 2000);
  };

  const handleResendEmail = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  if (isEmailSent) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center justify-center py-20 px-4">
          <div className="w-full max-w-md mx-auto">
            <Card className="glass-card border-gray-200 dark:border-white/20 shadow-xl">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>

                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Check Your Email
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  We've sent a password reset link to your email address.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    Email sent to:
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white break-all">
                    {email}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900 dark:text-blue-300">
                        Link expires in 1 hour
                      </p>
                      <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                        For security reasons, this reset link will expire in 60
                        minutes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <Mail className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-amber-900 dark:text-amber-300">
                        Check your spam folder
                      </p>
                      <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">
                        Sometimes emails end up in spam. Check all your email
                        folders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleResendEmail}
                    variant="outline"
                    className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Resend Email</span>
                      </div>
                    )}
                  </Button>

                  <Button asChild variant="ghost" className="w-full">
                    <Link to="/login" className="flex items-center space-x-2">
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Sign In</span>
                    </Link>
                  </Button>
                </div>

                <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Still need help?{" "}
                    <Link
                      to="/contact"
                      className="text-brand-primary hover:text-brand-primary/80 font-medium"
                    >
                      Contact Support
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md mx-auto">
          <Card className="glass-card border-gray-200 dark:border-white/20 shadow-xl">
            <CardHeader className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W3</span>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Leads
                </span>
              </div>

              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Reset Your Password
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Enter your email address and we'll send you a link to reset your
                password.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-gray-900 dark:text-white"
                  >
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Sending Reset Link...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Reset Link</span>
                    </div>
                  )}
                </Button>
              </form>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Secure Password Reset
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      We'll send a secure link that expires in 1 hour for your
                      protection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Button
                  asChild
                  variant="ghost"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <Link to="/login" className="flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Sign In</span>
                  </Link>
                </Button>
              </div>

              <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-brand-primary hover:text-brand-primary/80 font-medium"
                  >
                    Create one now
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              For your security, password reset links expire after 1 hour and
              can only be used once.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
