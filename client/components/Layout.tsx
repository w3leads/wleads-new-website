import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-brand-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W3</span>
              </div>
              <span className="text-white font-bold text-xl">Leads</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-brand-success transition-colors">
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass border border-white/20">
                  <DropdownMenuItem asChild>
                    <Link
                      to="/products/domain-finder"
                      className="text-white hover:text-brand-success"
                    >
                      Domain Finder
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/products/email-finder"
                      className="text-white hover:text-brand-success"
                    >
                      Email Finder
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/products/email-verifier"
                      className="text-white hover:text-brand-success"
                    >
                      Email Verifier
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/products/discover"
                      className="text-white hover:text-brand-success"
                    >
                      Discover
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/products/campaigns"
                      className="text-white hover:text-brand-success"
                    >
                      Campaigns
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/pricing"
                className={`text-white hover:text-brand-success transition-colors ${isActive("/pricing") ? "text-brand-success" : ""}`}
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className={`text-white hover:text-brand-success transition-colors ${isActive("/blog") ? "text-brand-success" : ""}`}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className={`text-white hover:text-brand-success transition-colors ${isActive("/about") ? "text-brand-success" : ""}`}
              >
                About
              </Link>
              <Link
                to="/login"
                className="text-white hover:text-brand-success transition-colors"
              >
                Sign In
              </Link>
              <Button
                asChild
                className="bg-gradient-to-r from-brand-success to-brand-purple hover:from-brand-purple hover:to-brand-success text-white border-0"
              >
                <Link to="/signup">Start Free</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <div className="space-y-2">
                <div className="text-white font-medium">Products</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/products/domain-finder"
                    className="block text-gray-300 hover:text-brand-success"
                  >
                    Domain Finder
                  </Link>
                  <Link
                    to="/products/email-finder"
                    className="block text-gray-300 hover:text-brand-success"
                  >
                    Email Finder
                  </Link>
                  <Link
                    to="/products/email-verifier"
                    className="block text-gray-300 hover:text-brand-success"
                  >
                    Email Verifier
                  </Link>
                  <Link
                    to="/products/discover"
                    className="block text-gray-300 hover:text-brand-success"
                  >
                    Discover
                  </Link>
                  <Link
                    to="/products/campaigns"
                    className="block text-gray-300 hover:text-brand-success"
                  >
                    Campaigns
                  </Link>
                </div>
              </div>
              <Link
                to="/pricing"
                className="block text-white hover:text-brand-success"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="block text-white hover:text-brand-success"
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="block text-white hover:text-brand-success"
              >
                About
              </Link>
              <Link
                to="/login"
                className="block text-white hover:text-brand-success"
              >
                Sign In
              </Link>
              <Button
                asChild
                className="bg-gradient-to-r from-brand-success to-brand-purple hover:from-brand-purple hover:to-brand-success text-white border-0 w-full"
              >
                <Link to="/signup">Start Free</Link>
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900/90 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W3</span>
                </div>
                <span className="text-white font-bold text-xl">Leads</span>
              </div>
              <p className="text-gray-400 text-sm">
                Advanced B2B lead generation and email verification platform.
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <div className="space-y-2">
                <Link
                  to="/products/domain-finder"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  Domain Finder
                </Link>
                <Link
                  to="/products/email-finder"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  Email Finder
                </Link>
                <Link
                  to="/products/email-verifier"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  Email Verifier
                </Link>
                <Link
                  to="/products/discover"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  Discover
                </Link>
                <Link
                  to="/products/campaigns"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  Campaigns
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <Link
                  to="/about"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  About Us
                </Link>
                <Link
                  to="/blog"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  Blog
                </Link>
                <Link
                  to="/pricing"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <Link
                  to="/privacy"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/gdpr"
                  className="block text-gray-400 hover:text-brand-success text-sm"
                >
                  GDPR
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 W3Leads. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-xs text-gray-500 bg-brand-success/20 px-2 py-1 rounded">
                GDPR Compliant
              </span>
              <span className="text-xs text-gray-500 bg-brand-success/20 px-2 py-1 rounded">
                SPF/DKIM Ready
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
