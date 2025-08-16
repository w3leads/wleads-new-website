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
  Sparkles
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productItems = [
    {
      icon: Globe,
      title: "Domain Finder",
      description: "Find available domains for your business",
      href: "/products/domain-finder",
      color: "text-blue-500"
    },
    {
      icon: Mail,
      title: "Email Finder",
      description: "Discover professional email addresses",
      href: "/products/email-finder",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "Email Verifier",
      description: "Validate and verify email addresses",
      href: "/products/email-verifier",
      color: "text-purple-500"
    },
    {
      icon: Eye,
      title: "Discover",
      description: "Uncover new business opportunities",
      href: "/products/discover",
      color: "text-orange-500"
    },
    {
      icon: Zap,
      title: "Campaigns",
      description: "Launch targeted outreach campaigns",
      href: "/products/campaigns",
      color: "text-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-brand-primary transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 shadow-lg shadow-black/5 border-b border-gray-200/50 dark:border-white/10'
          : 'backdrop-blur-sm bg-white/60 dark:bg-slate-900/60 border-b border-gray-200/30 dark:border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-purple rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/25 group-hover:shadow-brand-primary/40 transition-all duration-300">
                  <span className="text-white font-bold text-lg">W3</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-success rounded-full opacity-80 animate-pulse"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 dark:text-white font-bold text-2xl tracking-tight">Leads</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1">B2B Platform</span>
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
                          <div className={`p-2 rounded-lg bg-gray-100/50 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
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

              <Button variant="ghost" size="sm" className="text-gray-700 dark:text-gray-200 hover:text-brand-primary hover:bg-gray-100/50 dark:hover:bg-white/5 rounded-xl font-medium">
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
                className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-purple text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 border-0 rounded-xl px-6 py-2 font-semibold transition-all duration-300 hover:scale-105"
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
