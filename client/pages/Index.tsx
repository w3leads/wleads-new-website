import { useState, useEffect } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { VideoModal } from "@/components/VideoModal";
import {
  Search,
  Mail,
  Shield,
  Target,
  PlayCircle,
  BarChart3,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Globe,
  Building,
  Zap,
  TrendingUp,
  Eye,
  MessageSquare,
  Calendar,
  Sparkles,
  Lock,
  Award,
  ChevronRight,
  X,
} from "lucide-react";

export default function Index() {
  const [searchDomain, setSearchDomain] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState("domain");
  const [isSearching, setIsSearching] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [searchResults, setSearchResults] = useState<any>(null);
  const [verificationResults, setVerificationResults] = useState<any>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [heroSearchQuery, setHeroSearchQuery] = useState("techcorp.com");
  const [heroSearchResults, setHeroSearchResults] = useState<any>(null);
  const [isHeroSearching, setIsHeroSearching] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales, TechCorp",
      content:
        "W3Leads increased our qualified leads by 340% in just 3 months. The email verification accuracy is incredible.",
      avatar: "SJ",
    },
    {
      name: "Mike Chen",
      role: "Marketing Director, StartupXYZ",
      content:
        "The domain finder feature helped us discover 2,000+ potential prospects we never knew existed.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Business Development, Scale Inc",
      content:
        "ROI of 850% in our first quarter using W3Leads. The campaign automation saves us 20+ hours weekly.",
      avatar: "ER",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDomainSearch = async () => {
    if (!searchDomain.trim()) return;

    setIsSearching(true);
    setSearchResults(null);

    // Simulate API call with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate realistic dummy data based on domain
    const emailCount = Math.floor(Math.random() * 2000) + 500;
    const departments = Math.floor(Math.random() * 200) + 50;
    const accuracy = Math.random() * 5 + 95;

    setSearchResults({
      domain: searchDomain,
      emailsFound: emailCount,
      departments: departments,
      accuracy: accuracy.toFixed(1),
      lastUpdated: new Date().toLocaleDateString(),
      breakdown: {
        executives: Math.floor(emailCount * 0.15),
        sales: Math.floor(emailCount * 0.25),
        marketing: Math.floor(emailCount * 0.2),
        engineering: Math.floor(emailCount * 0.3),
        other: Math.floor(emailCount * 0.1),
      },
    });

    setIsSearching(false);
  };

  const handleEmailVerify = async () => {
    if (!verifyEmail.trim()) return;

    setIsVerifying(true);
    setVerificationResults(null);

    // Simulate API call with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate realistic verification results
    const isValid = Math.random() > 0.2; // 80% chance of valid email
    const confidence = isValid
      ? Math.random() * 10 + 90
      : Math.random() * 30 + 20;

    setVerificationResults({
      email: verifyEmail,
      isValid: isValid,
      confidence: confidence.toFixed(1),
      status: isValid ? "Valid" : "Invalid",
      deliverability: isValid ? "High" : "Low",
      checks: {
        syntax: isValid,
        domain: isValid,
        mxRecords: isValid,
        smtpCheck: isValid ? Math.random() > 0.1 : false,
      },
      riskLevel: isValid ? "Low" : "High",
      lastChecked: new Date().toLocaleString(),
    });

    setIsVerifying(false);
  };

  const handleHeroSearch = async () => {
    if (!heroSearchQuery.trim()) return;

    setIsHeroSearching(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate realistic dummy data
    const emailCount = Math.floor(Math.random() * 2000) + 800;
    const accuracy = Math.random() * 5 + 95;
    const departments = Math.floor(Math.random() * 150) + 80;

    setHeroSearchResults({
      domain: heroSearchQuery,
      emailsFound: emailCount,
      accuracy: accuracy.toFixed(1),
      departments: departments,
      timestamp: new Date().toLocaleString(),
    });

    setIsHeroSearching(false);
  };

  const integrations = [
    { name: "Gmail", logo: "📧" },
    { name: "Outlook", logo: "���" },
    { name: "Zapier", logo: "⚡" },
    { name: "HubSpot", logo: "����" },
    { name: "Salesforce", logo: "☁️" },
    { name: "Slack", logo: "💬" },
  ];

  const blogPosts = [
    {
      title: "10 Email Verification Best Practices for 2024",
      excerpt:
        "Learn the latest techniques to improve your email deliverability and reduce bounce rates.",
      date: "Mar 15, 2024",
      image: "📧",
    },
    {
      title: "How to Find B2B Leads Using Domain Intelligence",
      excerpt:
        "Discover advanced strategies to identify high-value prospects in your target market.",
      date: "Mar 12, 2024",
      image: "🎯",
    },
    {
      title: "The Future of Lead Generation: AI and Automation",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the way we generate and qualify leads.",
      date: "Mar 10, 2024",
      image: "🤖",
    },
  ];

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Find{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              B2B Leads
            </span>
            <br />
            That Actually Convert
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto">
            Advanced domain intelligence and email verification platform that
            helps sales teams discover, verify, and engage with qualified
            prospects at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
            >
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-primary text-lg px-8 py-6 transition-all duration-300"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Product Screenshot Mockup */}
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Search className="w-5 h-5 text-brand-primary" />
                  <Input
                    placeholder="Enter domain (e.g., microsoft.com, google.com)"
                    value={heroSearchQuery}
                    onChange={(e) => setHeroSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleHeroSearch()}
                    className="flex-1 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-brand-primary/50"
                    disabled={isHeroSearching}
                  />
                  <Button
                    className="bg-brand-primary text-white hover:bg-brand-secondary transition-all duration-300"
                    onClick={handleHeroSearch}
                    disabled={!heroSearchQuery.trim() || isHeroSearching}
                  >
                    {isHeroSearching ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Search
                      </>
                    )}
                  </Button>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm animate-in fade-in-50 duration-500">
                  <div className="bg-brand-purple/10 p-4 rounded-lg border border-brand-purple/20 transition-all duration-300 hover:bg-brand-purple/15">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-brand-purple/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-brand-purple" />
                      </div>
                      <div className="font-semibold text-brand-purple">
                        {isHeroSearching
                          ? "..."
                          : heroSearchResults
                            ? heroSearchResults.emailsFound.toLocaleString()
                            : "1,247"}{" "}
                        Emails Found
                      </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs">
                      {isHeroSearching ? "Searching..." : "Verified contacts"}
                    </div>
                  </div>
                  <div className="bg-brand-primary/10 p-4 rounded-lg border border-brand-primary/20 transition-all duration-300 hover:bg-brand-primary/15">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-brand-primary" />
                      </div>
                      <div className="font-semibold text-brand-primary">
                        {isHeroSearching
                          ? "..."
                          : heroSearchResults
                            ? heroSearchResults.accuracy + "%"
                            : "98.2%"}{" "}
                        Accuracy
                      </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs">
                      {isHeroSearching ? "Calculating..." : "Verification rate"}
                    </div>
                  </div>
                  <div className="bg-brand-secondary/10 p-4 rounded-lg border border-brand-secondary/20 transition-all duration-300 hover:bg-brand-secondary/15">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-brand-secondary/20 rounded-lg flex items-center justify-center">
                        <Building className="w-4 h-4 text-brand-secondary" />
                      </div>
                      <div className="font-semibold text-brand-secondary">
                        {isHeroSearching
                          ? "..."
                          : heroSearchResults
                            ? heroSearchResults.departments
                            : "156"}{" "}
                        Departments
                      </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs">
                      {isHeroSearching ? "Mapping..." : "Mapped structure"}
                    </div>
                  </div>
                </div>

                {/* Search Status */}
                {heroSearchResults && !isHeroSearching && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    ✓ Search completed for{" "}
                    <span className="font-medium text-brand-primary">
                      {heroSearchResults.domain}
                    </span>{" "}
                    at {heroSearchResults.timestamp}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Advanced Social Proof & Metrics Showcase */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Sophisticated Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]"></div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header with Premium Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 shadow-lg mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium tracking-wide uppercase">
                Trusted Worldwide
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Powering Success for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-purple">
                {" "}
                Industry Leaders
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join thousands of companies who trust our platform to deliver
              exceptional results and drive growth.
            </p>
          </div>

          {/* Advanced Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                number: "50M+",
                label: "Emails Verified",
                sublabel: "Monthly processing",
                icon: Mail,
                gradient: "from-brand-purple to-brand-purple",
                bgGradient:
                  "from-brand-purple/5 to-brand-purple/10 dark:from-brand-purple/10 dark:to-brand-purple/20",
                iconBg: "bg-brand-purple/20 dark:bg-brand-purple/30",
              },
              {
                number: "10K+",
                label: "Companies Served",
                sublabel: "Across 50+ countries",
                icon: Building,
                gradient: "from-brand-primary to-brand-primary",
                bgGradient:
                  "from-brand-primary/5 to-brand-primary/10 dark:from-brand-primary/10 dark:to-brand-primary/20",
                iconBg: "bg-brand-primary/20 dark:bg-brand-primary/30",
              },
              {
                number: "98.5%",
                label: "Accuracy Rate",
                sublabel: "Industry leading",
                icon: Target,
                gradient: "from-brand-secondary to-brand-secondary",
                bgGradient:
                  "from-brand-secondary/5 to-brand-secondary/10 dark:from-brand-secondary/10 dark:to-brand-secondary/20",
                iconBg: "bg-brand-secondary/20 dark:bg-brand-secondary/30",
              },
              {
                number: "24/7",
                label: "Expert Support",
                sublabel: "Always available",
                icon: Zap,
                gradient: "from-brand-primary to-brand-secondary",
                bgGradient:
                  "from-brand-primary/5 to-brand-secondary/10 dark:from-brand-primary/10 dark:to-brand-secondary/20",
                iconBg: "bg-brand-primary/20 dark:bg-brand-primary/30",
              },
            ].map((metric, index) => (
              <div key={index} className="group relative">
                {/* Subtle Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${metric.gradient} rounded-2xl blur-sm opacity-0 group-hover:opacity-20 transition-all duration-500`}
                ></div>

                {/* Main Card */}
                <div
                  className={`relative bg-gradient-to-br ${metric.bgGradient} backdrop-blur-sm border border-white/50 dark:border-white/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-translate-y-1`}
                >
                  {/* Icon Container */}
                  <div
                    className={`w-14 h-14 ${metric.iconBg} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {typeof metric.icon === "string" ? (
                      <span className="text-2xl">{metric.icon}</span>
                    ) : (
                      <metric.icon className="w-7 h-7 text-brand-primary" />
                    )}
                  </div>

                  {/* Metric Number */}
                  <div
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-2 tracking-tight`}
                  >
                    {metric.number}
                  </div>

                  {/* Primary Label */}
                  <div className="text-gray-900 dark:text-white font-semibold text-lg mb-1">
                    {metric.label}
                  </div>

                  {/* Sublabel */}
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {metric.sublabel}
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${metric.gradient} rounded-full transition-all duration-1000 transform origin-left group-hover:scale-x-100`}
                      style={{
                        width:
                          index === 0
                            ? "95%"
                            : index === 1
                              ? "87%"
                              : index === 2
                                ? "98%"
                                : "100%",
                        transform: "scaleX(0.7)",
                        animation: "none",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Company Showcase */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Trusted by Industry Leaders
            </h3>

            {/* Company Logos Grid with Modern Design */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                {
                  name: "TechCorp",
                  logo: "T",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  name: "StartupXYZ",
                  logo: "S",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  name: "Scale Inc",
                  logo: "S",
                  color: "from-emerald-500 to-emerald-600",
                },
                {
                  name: "Growth Co",
                  logo: "G",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  name: "Lead Gen",
                  logo: "L",
                  color: "from-pink-500 to-pink-600",
                },
                {
                  name: "Sales Pro",
                  logo: "P",
                  color: "from-cyan-500 to-cyan-600",
                },
              ].map((company, index) => (
                <div key={company.name} className="group relative">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                    {/* Logo */}
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${company.color} rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 transform group-hover:rotate-6 transition-transform duration-300`}
                    >
                      {company.logo}
                    </div>

                    {/* Company Name */}
                    <div className="text-gray-900 dark:text-white font-semibold text-sm">
                      {company.name}
                    </div>

                    {/* Trust Indicator */}
                    <div className="flex items-center justify-center mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-green-600 dark:text-green-400 text-xs font-medium">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Trust Banner */}
            <div className="mt-12 inline-flex items-center px-8 py-4 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center text-white text-xs font-semibold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-gray-900 dark:text-white font-semibold">
                    4.9/5 Customer Satisfaction
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    Based on 2,500+ reviews
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Feature Pillars */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Lead Generation Suite
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to find, verify, and engage with your ideal
              prospects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-brand-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">
                  Discover
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Find companies and decision makers in your target market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Advanced search filters
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time data updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Export capabilities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-brand-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">
                  Finder
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Extract email addresses from any domain or company
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bulk domain processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Department mapping
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Contact enrichment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-brand-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">
                  Verifier
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Ensure email deliverability with advanced verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    98.5% accuracy rate
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time verification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bounce protection
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-brand-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">
                  Campaigns
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Automate outreach with personalized email sequences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Smart scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    A/B testing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Performance analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. How it Works */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Simple 4-step process to supercharge your lead generation and
              start converting prospects into customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                title: "Create Campaign",
                desc: "Set up your target criteria and campaign parameters with our intuitive builder",
                icon: Sparkles,
                color: "from-blue-500 to-purple-600",
              },
              {
                step: "02",
                title: "Add Audience",
                desc: "Import prospects or use our advanced discovery tools to find ideal customers",
                icon: Users,
                color: "from-green-500 to-blue-600",
              },
              {
                step: "03",
                title: "Schedule & Launch",
                desc: "Automate your outreach with smart timing and personalized sequences",
                icon: Calendar,
                color: "from-purple-500 to-pink-600",
              },
              {
                step: "04",
                title: "Track Results",
                desc: "Monitor performance metrics and optimize campaigns for better conversion",
                icon: BarChart3,
                color: "from-orange-500 to-red-600",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-lg">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4`}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow Connector */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of sales teams who've automated their lead
                generation process and increased conversions by 340%
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white px-8 py-3 font-semibold">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-3"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Demo - Try It Yourself */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Professional Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(64,81,181,0.05),transparent_70%)]"></div>

        {/* Subtle Professional Elements */}
        <div className="absolute inset-0 opacity-30 flex flex-col justify-start items-start">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-brand-secondary/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-brand-success/8 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Professional Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
              <span className="text-brand-primary text-sm font-semibold tracking-wide uppercase">
                Interactive Demo
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Experience Our Platform
              <br />
              <span className="text-brand-primary">
                In Action
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Test our enterprise-grade platform with real data processing. Enter any domain or
              email address and see our AI-powered engine deliver instant, accurate results.
            </p>
          </div>

          {/* Professional Demo Interface */}
          <div className="max-w-5xl mx-auto">
            {/* Main Demo Container */}
            <div className="relative">
              {/* Subtle Professional Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-2xl blur-sm opacity-40"></div>

              {/* Main Content */}
              <div className="relative bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-12 shadow-xl">
                {/* Professional Browser-like Header */}
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brand-success rounded-full"></div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2">
                      <span className="text-gray-600 dark:text-gray-300 text-sm font-mono">
                        w3leads.com/demo
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 bg-brand-success/10 border border-brand-success/30 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-brand-success rounded-full"></div>
                      <span className="text-brand-success text-xs font-semibold">
                        Live System
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Real-time processing
                    </div>
                  </div>
                </div>

                {/* Professional Tabbed Interface */}
                <div className="mb-10">
                  <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-xl p-1 mb-8 w-fit mx-auto">
                    <button
                      onClick={() => {
                        setActiveTab("domain");
                        setSearchResults(null);
                        setVerificationResults(null);
                      }}
                      className={`group px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center space-x-3 ${
                        activeTab === "domain"
                          ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-xl shadow-brand-primary/25"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Globe className="w-5 h-5" />
                      <span>Domain Intelligence</span>
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeTab === "domain"
                            ? "bg-white/80"
                            : "bg-brand-primary/60 group-hover:bg-white/60"
                        }`}
                      ></div>
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("email");
                        setSearchResults(null);
                        setVerificationResults(null);
                      }}
                      className={`group px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center space-x-3 ${
                        activeTab === "email"
                          ? "bg-gradient-to-r from-brand-success to-brand-success text-white shadow-xl shadow-brand-success/25"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Shield className="w-5 h-5" />
                      <span>Email Verification</span>
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeTab === "email"
                            ? "bg-white/80"
                            : "bg-brand-success/60 group-hover:bg-white/60"
                        }`}
                      ></div>
                    </button>
                  </div>

                  {/* Domain Search Tab */}
                  {activeTab === "domain" && (
                    <div className="space-y-8 animate-in fade-in-50 duration-500">
                      {/* Search Input */}
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30 rounded-xl blur-sm opacity-40"></div>
                        <div className="relative">
                          <div className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center shadow-sm">
                                <Globe className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                                Domain Intelligence Search
                              </label>
                              <Input
                                placeholder="Enter any domain (e.g., microsoft.com, google.com, salesforce.com)"
                                value={searchDomain}
                                onChange={(e) =>
                                  setSearchDomain(e.target.value)
                                }
                                onKeyPress={(e) =>
                                  e.key === "Enter" && handleDomainSearch()
                                }
                                className="bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white text-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-lg focus:border-brand-primary focus:ring-brand-primary/50 transition-all duration-300"
                                disabled={isSearching}
                              />
                            </div>
                            <Button
                              onClick={handleDomainSearch}
                              disabled={!searchDomain.trim() || isSearching}
                              className="bg-brand-primary hover:bg-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              {isSearching ? (
                                <>
                                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                  Analyzing...
                                </>
                              ) : (
                                <>
                                  <Search className="w-5 h-5 mr-2" />
                                  Analyze Domain
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      {(isSearching || searchResults) && (
                        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
                          {/* Results Header */}
                          <div className="text-center">
                            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4">
                              <div
                                className={`w-3 h-3 rounded-full ${isSearching ? "bg-yellow-400 animate-pulse" : "bg-brand-success"}`}
                              ></div>
                              <span className="text-white font-medium">
                                {isSearching
                                  ? `Analyzing ${searchDomain}...`
                                  : `Analysis Complete: ${searchResults?.domain}`}
                              </span>
                              {!isSearching && searchResults && (
                                <Badge className="bg-brand-success/20 text-brand-success border-brand-success/30">
                                  Live Data
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Metrics Grid */}
                          {searchResults && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-brand-success to-emerald-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
                                <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform group-hover:scale-105">
                                  <div className="flex items-center justify-between mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-brand-success to-emerald-600 rounded-2xl flex items-center justify-center">
                                      <Mail className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-right">
                                      <Badge className="bg-brand-success/20 text-brand-success border-brand-success/30">
                                        Live
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="text-4xl font-bold text-white mb-2">
                                    {searchResults.emailsFound.toLocaleString()}
                                  </div>
                                  <div className="text-gray-300 mb-4">
                                    Email contacts discovered
                                  </div>
                                  <div className="flex items-center text-brand-success text-sm">
                                    <TrendingUp className="w-4 h-4 mr-1" />
                                    <span>
                                      +{Math.floor(Math.random() * 30) + 10}%
                                      from last scan
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
                                <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform group-hover:scale-105">
                                  <div className="flex items-center justify-between mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-purple-600 rounded-2xl flex items-center justify-center">
                                      <Building className="w-8 h-8 text-white" />
                                    </div>
                                    <Badge className="bg-brand-purple/20 text-brand-purple border-brand-purple/30">
                                      Mapped
                                    </Badge>
                                  </div>
                                  <div className="text-4xl font-bold text-white mb-2">
                                    {searchResults.departments}
                                  </div>
                                  <div className="text-gray-300 mb-4">
                                    Department structures
                                  </div>
                                  <div className="text-brand-purple text-sm">
                                    Complete organizational hierarchy
                                  </div>
                                </div>
                              </div>

                              <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-blue-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
                                <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform group-hover:scale-105">
                                  <div className="flex items-center justify-between mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-blue-600 rounded-2xl flex items-center justify-center">
                                      <CheckCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <Badge className="bg-brand-primary/20 text-brand-primary border-brand-primary/30">
                                      Verified
                                    </Badge>
                                  </div>
                                  <div className="text-4xl font-bold text-white mb-2">
                                    {searchResults.accuracy}%
                                  </div>
                                  <div className="text-gray-300 mb-4">
                                    Accuracy rate
                                  </div>
                                  <div className="text-brand-primary text-sm">
                                    Industry-leading precision
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Department Breakdown */}
                          {searchResults && (
                            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
                              <h4 className="text-xl font-semibold text-white mb-6 text-center">
                                Department Breakdown
                              </h4>
                              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {Object.entries(searchResults.breakdown).map(
                                  ([dept, count], index) => (
                                    <div key={dept} className="text-center">
                                      <div className="text-2xl font-bold text-white mb-1">
                                        {(count as number).toLocaleString()}
                                      </div>
                                      <div className="text-gray-400 text-sm capitalize">
                                        {dept}
                                      </div>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Email Verification Tab */}
                  {activeTab === "email" && (
                    <div className="space-y-8 animate-in fade-in-50 duration-500">
                      {/* Verification Input */}
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-success via-emerald-500 to-teal-500 rounded-3xl blur-lg opacity-40"></div>
                        <div className="relative">
                          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-gradient-to-r from-brand-success to-emerald-600 rounded-2xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <label className="block text-white text-sm font-medium mb-2">
                                Email Verification Engine
                              </label>
                              <Input
                                placeholder="Enter any email address (e.g., john.doe@company.com)"
                                value={verifyEmail}
                                onChange={(e) => setVerifyEmail(e.target.value)}
                                onKeyPress={(e) =>
                                  e.key === "Enter" && handleEmailVerify()
                                }
                                className="bg-white/10 border-white/20 text-white text-lg placeholder:text-gray-400 rounded-xl focus:border-brand-success focus:ring-brand-success/50 transition-all duration-300"
                                disabled={isVerifying}
                              />
                            </div>
                            <Button
                              onClick={handleEmailVerify}
                              disabled={!verifyEmail.trim() || isVerifying}
                              className="bg-gradient-to-r from-brand-success to-emerald-600 hover:from-emerald-600 hover:to-brand-success disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-6 rounded-2xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-brand-success/50 transform hover:scale-105"
                            >
                              {isVerifying ? (
                                <>
                                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                  Verifying...
                                </>
                              ) : (
                                <>
                                  <CheckCircle className="w-5 h-5 mr-2" />
                                  Verify Email
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Verification Results */}
                      {(isVerifying || verificationResults) && (
                        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
                          {/* Status Header */}
                          <div className="text-center">
                            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4">
                              <div
                                className={`w-3 h-3 rounded-full ${isVerifying ? "bg-yellow-400 animate-pulse" : verificationResults?.isValid ? "bg-brand-success" : "bg-red-400"}`}
                              ></div>
                              <span className="text-white font-medium">
                                {isVerifying
                                  ? `Verifying ${verifyEmail}...`
                                  : `Verification Complete: ${verificationResults?.email}`}
                              </span>
                              {!isVerifying && verificationResults && (
                                <Badge
                                  className={`${verificationResults.isValid ? "bg-brand-success/20 text-brand-success border-brand-success/30" : "bg-red-500/20 text-red-400 border-red-500/30"}`}
                                >
                                  {verificationResults.status}
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Detailed Results */}
                          {verificationResults && (
                            <div className="relative">
                              <div
                                className={`absolute -inset-1 bg-gradient-to-r ${verificationResults.isValid ? "from-brand-success to-emerald-600" : "from-red-500 to-orange-500"} rounded-3xl blur-lg opacity-40`}
                              ></div>
                              <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10">
                                {/* Main Status */}
                                <div className="text-center mb-8">
                                  <div
                                    className={`w-20 h-20 mx-auto mb-4 rounded-3xl flex items-center justify-center ${verificationResults.isValid ? "bg-gradient-to-r from-brand-success to-emerald-600" : "bg-gradient-to-r from-red-500 to-orange-500"}`}
                                  >
                                    {verificationResults.isValid ? (
                                      <CheckCircle className="w-10 h-10 text-white" />
                                    ) : (
                                      <X className="w-10 h-10 text-white" />
                                    )}
                                  </div>
                                  <h3 className="text-2xl font-bold text-white mb-2">
                                    Email {verificationResults.status}
                                  </h3>
                                  <p className="text-gray-300">
                                    Confidence Score:{" "}
                                    <span className="text-white font-semibold">
                                      {verificationResults.confidence}%
                                    </span>
                                  </p>
                                </div>

                                {/* Detailed Checks Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div className="space-y-4">
                                    <h4 className="text-lg font-semibold text-white mb-4">
                                      Verification Details
                                    </h4>
                                    {[
                                      {
                                        label: "Deliverability",
                                        value:
                                          verificationResults.deliverability,
                                        icon: Mail,
                                      },
                                      {
                                        label: "Risk Level",
                                        value: verificationResults.riskLevel,
                                        icon: Shield,
                                      },
                                      {
                                        label: "Last Checked",
                                        value: verificationResults.lastChecked,
                                        icon: Clock,
                                      },
                                    ].map((item, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0"
                                      >
                                        <div className="flex items-center space-x-3">
                                          <item.icon className="w-5 h-5 text-gray-400" />
                                          <span className="text-gray-300">
                                            {item.label}
                                          </span>
                                        </div>
                                        <span
                                          className={`font-semibold ${
                                            item.label === "Risk Level"
                                              ? verificationResults.riskLevel ===
                                                "Low"
                                                ? "text-brand-success"
                                                : "text-red-400"
                                              : item.label === "Deliverability"
                                                ? verificationResults.deliverability ===
                                                  "High"
                                                  ? "text-brand-success"
                                                  : "text-red-400"
                                                : "text-white"
                                          }`}
                                        >
                                          {item.value}
                                        </span>
                                      </div>
                                    ))}
                                  </div>

                                  <div className="space-y-4">
                                    <h4 className="text-lg font-semibold text-white mb-4">
                                      Technical Checks
                                    </h4>
                                    {Object.entries(
                                      verificationResults.checks,
                                    ).map(([check, passed], index) => (
                                      <div
                                        key={index}
                                        className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0"
                                      >
                                        <span className="text-gray-300 capitalize">
                                          {check
                                            .replace(/([A-Z])/g, " $1")
                                            .trim()}
                                        </span>
                                        <div className="flex items-center space-x-2">
                                          {passed ? (
                                            <>
                                              <CheckCircle className="w-5 h-5 text-brand-success" />
                                              <span className="text-brand-success font-medium">
                                                Passed
                                              </span>
                                            </>
                                          ) : (
                                            <>
                                              <X className="w-5 h-5 text-red-400" />
                                              <span className="text-red-400 font-medium">
                                                Failed
                                              </span>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/signup">Start Your Free Trial</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Full Demo
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No credit card required • 7-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ROI/Metrics Band - Sophisticated Results Showcase */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Complex Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(139,69,19,0.05)_50%,transparent_70%)]"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-emerald-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header with Sophisticated Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium tracking-wide uppercase">
                Performance Metrics
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-white">Proven</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                Results That
              </span>
              <br />
              <span className="text-white">Matter</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of companies who've transformed their lead
              generation with our platform. These aren't just numbers – they're
              real business outcomes.
            </p>
          </div>

          {/* Advanced Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Metric 1: Time Savings */}
            <div className="group relative">
              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-brand-primary to-brand-secondary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>

              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.12] transition-all duration-500">
                {/* Floating Icon Container */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur-lg opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  {/* Orbiting Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-secondary rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
                </div>

                {/* Metric Display */}
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl md:text-6xl font-bold text-white group-hover:text-brand-primary transition-colors duration-500">
                      20+
                    </span>
                    <span className="text-xl text-brand-primary font-medium">
                      hrs
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    Time Saved
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Per week, per sales rep. Automated prospecting and
                    verification eliminates manual research.
                  </p>

                  {/* Progress Indicator */}
                  <div className="pt-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Manual Process</span>
                      <span>Automated</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary h-2 rounded-full w-5/6 transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric 2: Lead Quality */}
            <div className="group relative">
              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange via-brand-orange to-brand-orange rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>

              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.12] transition-all duration-500">
                {/* Floating Icon Container */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-orange rounded-2xl blur-lg opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-r from-brand-orange to-brand-orange rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  {/* Orbiting Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-orange rounded-full animate-bounce delay-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-brand-orange rounded-full animate-pulse delay-500"></div>
                </div>

                {/* Metric Display */}
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl md:text-6xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-500">
                      340
                    </span>
                    <span className="text-xl text-emerald-300 font-medium">
                      %
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    Lead Quality Boost
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Increase in qualified leads through precise targeting and
                    verified contact data.
                  </p>

                  {/* Performance Chart Simulation */}
                  <div className="pt-4">
                    <div className="flex items-end space-x-1 h-16">
                      {[30, 45, 60, 85, 100].map((height, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm flex-1 transition-all duration-1000 delay-200"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400 text-center mt-2">
                      Monthly Performance
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric 3: Deliverability */}
            <div className="group relative">
              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-violet-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>

              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.12] transition-all duration-500">
                {/* Floating Icon Container */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  {/* Orbiting Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-700"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                </div>

                {/* Metric Display */}
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl md:text-6xl font-bold text-white group-hover:text-purple-300 transition-colors duration-500">
                      85
                    </span>
                    <span className="text-xl text-purple-300 font-medium">
                      %
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    Deliverability Rate
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Email deliverability improvement through advanced
                    verification and reputation management.
                  </p>

                  {/* Circular Progress */}
                  <div className="pt-4 flex justify-center">
                    <div className="relative w-16 h-16">
                      <svg
                        className="w-16 h-16 transform -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="url(#gradient-purple)"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="283"
                          strokeDashoffset="42"
                          className="transition-all duration-1000"
                        />
                        <defs>
                          <linearGradient
                            id="gradient-purple"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-semibold text-purple-300">
                          85%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white/20"
                    ></div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    Join 10,000+ companies
                  </div>
                  <div className="text-gray-300 text-sm">
                    Already seeing these results
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Advanced Integrations Ecosystem */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/30 dark:to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]"></div>

        {/* Animated Network Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            viewBox="0 0 1000 600"
          >
            <defs>
              <linearGradient
                id="network-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M100,300 Q300,100 500,300 T900,300"
              stroke="url(#network-gradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M200,400 Q400,200 600,400 T1000,400"
              stroke="url(#network-gradient)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M50,200 Q250,400 450,200 T850,200"
              stroke="url(#network-gradient)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header with Advanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100/80 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wide uppercase">
                Ecosystem Integration
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="block">Connect Everything</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                Seamlessly
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Native integrations with 100+ platforms. No complex setup, no data
              silos. Your existing workflow, supercharged.
            </p>
          </div>

          {/* Integration Hub Design */}
          <div className="relative mb-20">
            {/* Central Hub */}
            <div className="flex justify-center mb-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center border-4 border-white/20">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-2xl">W3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Categories in Orbiting Design */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="group relative">
                  {/* Connection Line to Center */}
                  <div className="absolute top-1/2 left-1/2 w-px h-20 bg-gradient-to-t from-blue-500/30 to-transparent -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2">
                      <div className="text-center">
                        <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                          {integration.logo}
                        </div>
                        <div className="text-gray-900 dark:text-white font-semibold text-sm">
                          {integration.name}
                        </div>

                        {/* Status Indicator */}
                        <div className="mt-2 inline-flex items-center px-2 py-1 rounded-full bg-green-100/80 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                          <span className="text-green-600 dark:text-green-400 text-xs font-medium">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                100+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Native integrations
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                &lt; 5min
              </div>
              <div className="text-gray-600 dark:text-gray-400">Setup time</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Uptime reliability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Enterprise Security & Trust */}
      <section className="py-32 px-4 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
        {/* Professional Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(64, 81, 181, 0.2) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-sm mb-8">
              <Shield className="w-4 h-4 text-brand-primary mr-3" />
              <span className="text-brand-primary text-sm font-semibold tracking-wide uppercase">
                Enterprise Security
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="block">Bank-Level</span>
              <span className="text-brand-primary">Security & Compliance</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Your data deserves fortress-level protection. We meet and exceed
              the highest security standards so you can focus on growing your
              business with complete peace of mind.
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Lock,
                title: "SPF/DKIM Authentication",
                desc: "Email authentication protocols ensure deliverability and reputation protection",
                color: "from-brand-primary to-brand-secondary",
                bgColor: "from-brand-primary/10 to-brand-secondary/10",
              },
              {
                icon: Shield,
                title: "GDPR Compliance",
                desc: "Full European data protection regulation compliance with automated consent management",
                color: "from-brand-primary to-brand-secondary",
                bgColor: "from-brand-primary/10 to-brand-secondary/10",
              },
              {
                icon: Award,
                title: "SOC 2 Type II",
                desc: "Certified security controls for availability, processing integrity, and confidentiality",
                color: "from-brand-primary to-brand-secondary",
                bgColor: "from-brand-primary/10 to-brand-secondary/10",
              },
              {
                icon: Eye,
                title: "Zero-Trust Architecture",
                desc: "Advanced privacy controls with end-to-end encryption and access verification",
                color: "from-brand-primary to-brand-secondary",
                bgColor: "from-brand-primary/10 to-brand-secondary/10",
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                {/* Professional Border */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.bgColor} rounded-xl blur-sm opacity-40 group-hover:opacity-60 transition-all duration-500`}
                ></div>

                <div className="relative bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-brand-primary/50 transition-all duration-500 shadow-lg">
                  {/* Professional Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl blur-sm opacity-30`}
                    ></div>
                    <div
                      className={`relative w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 shadow-lg`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Professional Status Indicator */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-success rounded-full flex items-center justify-center shadow-sm">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  {/* Professional Verification Badge */}
                  <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-brand-success/10 border border-brand-success/30">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-emerald-400 text-xs font-medium">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Trust Indicators */}
          <div className="bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-12 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted by Enterprise Leaders
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join Fortune 500 companies who trust us with their most
                sensitive data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Certification Badges */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
                  ISO 27001 Certified
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  International security management standards
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-brand-success rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
                  CCPA Compliant
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  California Consumer Privacy Act adherence
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-brand-secondary rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
                  256-bit Encryption
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Military-grade data protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Customer Success Stories - Advanced Testimonials */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Sophisticated Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/20 dark:from-slate-900 dark:via-purple-900/20 dark:to-blue-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,69,19,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(139,69,19,0.15),transparent_70%)]"></div>

        {/* Floating Quote Elements */}
        <div className="absolute top-20 left-1/4 text-6xl text-purple-200/20 dark:text-purple-400/10 font-serif">
          "
        </div>
        <div className="absolute bottom-20 right-1/4 text-6xl text-blue-200/20 dark:text-blue-400/10 font-serif transform rotate-180">
          "
        </div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-purple-200/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Advanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100/80 dark:bg-purple-500/10 border border-purple-200/50 dark:border-purple-500/20 backdrop-blur-sm mb-8">
              <MessageSquare className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-3" />
              <span className="text-purple-600 dark:text-purple-400 text-sm font-medium tracking-wide uppercase">
                Customer Success
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="block">Stories of</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Transformation
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how industry leaders are revolutionizing their lead
              generation and achieving unprecedented growth with our platform.
            </p>
          </div>

          {/* Advanced Testimonial Showcase */}
          <div className="relative">
            {/* Main Testimonial Display */}
            <div className="relative mb-16">
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60"></div>

              <div className="relative bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-12 md:p-16">
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center transform rotate-12">
                    <span className="text-white text-2xl font-serif">"</span>
                  </div>
                </div>

                {/* Star Rating with Animation */}
                <div className="flex justify-center mb-8">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative">
                        <Star
                          className="w-8 h-8 text-yellow-400 fill-current transform hover:scale-125 transition-transform duration-300"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-sm animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="text-center mb-12">
                  <blockquote className="text-2xl md:text-3xl text-gray-900 dark:text-white font-medium leading-relaxed mb-8">
                    <span className="text-purple-600 dark:text-purple-400 text-4xl font-serif absolute -ml-4 -mt-2">
                      "
                    </span>
                    {testimonials[currentTestimonial].content}
                    <span className="text-purple-600 dark:text-purple-400 text-4xl font-serif absolute ml-2 mt-2">
                      "
                    </span>
                  </blockquote>
                </div>

                {/* Enhanced Author Section */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                  {/* Avatar with Advanced Styling */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-70 animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl border-4 border-white/20">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-lg text-purple-600 dark:text-purple-400 mb-2">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100/80 dark:bg-purple-500/20 border border-purple-200/50 dark:border-purple-500/30">
                      <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">
                        Verified Customer
                      </span>
                    </div>
                  </div>

                  {/* Company Logo Placeholder */}
                  <div className="w-16 h-16 bg-gray-100 dark:bg-white/10 rounded-2xl flex items-center justify-center">
                    <Building className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200/50 dark:border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      340%
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Lead Quality Increase
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      20+
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Hours Saved Weekly
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                      85%
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Deliverability Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Navigation */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Testimonial Indicators */}
              <div className="flex space-x-4 mb-8 md:mb-0">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`group relative transition-all duration-500 ${
                      index === currentTestimonial
                        ? "scale-110"
                        : "hover:scale-105"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                          : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/20"
                      }`}
                    >
                      {testimonials[index].avatar}
                    </div>

                    {index === currentTestimonial && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-50 animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex space-x-4">
                <button
                  onClick={() =>
                    setCurrentTestimonial(
                      currentTestimonial === 0
                        ? testimonials.length - 1
                        : currentTestimonial - 1,
                    )
                  }
                  className="w-12 h-12 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-2xl flex items-center justify-center hover:bg-white dark:hover:bg-white/20 transition-all duration-300 group"
                >
                  <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transform rotate-180 transition-colors duration-300" />
                </button>
                <button
                  onClick={() =>
                    setCurrentTestimonial(
                      currentTestimonial === testimonials.length - 1
                        ? 0
                        : currentTestimonial + 1,
                    )
                  }
                  className="w-12 h-12 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-2xl flex items-center justify-center hover:bg-white dark:hover:bg-white/20 transition-all duration-300 group"
                >
                  <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Social Proof Banner */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-purple-500/10 dark:to-blue-500/10 backdrop-blur-sm border border-purple-200/50 dark:border-white/10">
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-gray-900 dark:text-white font-bold">
                    Join 10,000+ satisfied customers
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    Average rating: 4.9/5 ⭐
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Pricing Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mr-4 animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="text-emerald-300 text-sm font-semibold tracking-[0.2em] uppercase">
                Investment Tiers
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Choose Your Plan
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Simple, transparent pricing that scales with your business needs.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex p-1 bg-slate-800 border border-slate-700 rounded-xl">
              <Tabs defaultValue="monthly" className="w-full">
                <TabsList className="bg-transparent p-0 h-auto space-x-1">
                  <TabsTrigger
                    value="monthly"
                    className="px-8 py-4 rounded-xl text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 font-medium"
                  >
                    Monthly Billing
                  </TabsTrigger>
                  <TabsTrigger
                    value="yearly"
                    className="px-8 py-4 rounded-xl text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 font-medium relative"
                  >
                    Annual Billing
                    <Badge className="ml-3 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-2 py-1 text-xs">
                      Save 25%
                    </Badge>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="monthly" className="mt-16">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                    {[
                      {
                        tier: "Starter",
                        subtitle: "For Growing Teams",
                        price: "49",
                        originalPrice: null,
                        currency: "$",
                        period: "/month",
                        description:
                          "Perfect for small teams starting their lead generation journey",
                        features: [
                          "5,000 email verifications",
                          "Basic domain intelligence",
                          "Standard email support",
                          "Core integrations (5+)",
                          "Export to CSV/Excel",
                          "Basic analytics dashboard",
                        ],
                        highlight: false,
                        ctaText: "Start Free Trial",
                        gradient: "from-slate-600 to-gray-700",
                        accentColor: "text-gray-400",
                        borderGlow: "from-gray-500/30 to-slate-500/30",
                      },
                      {
                        tier: "Professional",
                        subtitle: "Most Popular Choice",
                        price: "149",
                        originalPrice: null,
                        currency: "$",
                        period: "/month",
                        description:
                          "Advanced features for high-performing sales teams",
                        features: [
                          "25,000 email verifications",
                          "Advanced domain mapping",
                          "Campaign automation suite",
                          "Priority 24/7 support",
                          "Premium integrations (50+)",
                          "Advanced analytics & reporting",
                          "A/B testing capabilities",
                          "Custom email templates",
                          "Bulk processing tools",
                        ],
                        highlight: true,
                        ctaText: "Upgrade to Pro",
                        gradient: "from-emerald-500 to-blue-600",
                        accentColor: "text-emerald-400",
                        borderGlow: "from-emerald-500/50 to-blue-500/50",
                      },
                      {
                        tier: "Enterprise",
                        subtitle: "Unlimited Scale",
                        price: "Custom",
                        originalPrice: null,
                        currency: "",
                        period: "",
                        description:
                          "White-glove service for enterprise organizations",
                        features: [
                          "Unlimited verifications",
                          "Custom domain intelligence",
                          "Dedicated account manager",
                          "99.9% SLA guarantee",
                          "Custom integrations",
                          "Advanced security (SSO/SAML)",
                          "White-label solutions",
                          "API rate limit increases",
                          "Custom onboarding & training",
                        ],
                        highlight: false,
                        ctaText: "Contact Sales",
                        gradient: "from-purple-600 to-pink-600",
                        accentColor: "text-purple-400",
                        borderGlow: "from-purple-500/30 to-pink-500/30",
                      },
                    ].map((plan, index) => (
                      <div
                        key={index}
                        className={`group relative ${plan.highlight ? "lg:scale-105 lg:z-10" : ""}`}
                      >
                        {/* Subtle Glow Effect */}
                        <div
                          className={`absolute -inset-0.5 bg-gradient-to-r ${plan.borderGlow} rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-all duration-500`}
                        ></div>

                        {/* Most Popular Badge */}
                        {plan.highlight && (
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full text-white text-sm font-semibold shadow-2xl">
                              <span className="flex items-center">
                                <Star className="w-4 h-4 mr-2 fill-current" />
                                Most Popular
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Premium Card Design */}
                        <div
                          className={`relative bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.12] transition-all duration-700 transform group-hover:scale-105 ${plan.highlight ? "ring-2 ring-emerald-500/30" : ""}`}
                        >
                          {/* Header Section */}
                          <div className="text-center mb-8">
                            <div
                              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${plan.gradient}/20 border border-white/20 mb-4`}
                            >
                              <span
                                className={`${plan.accentColor} text-sm font-medium uppercase tracking-wide`}
                              >
                                {plan.subtitle}
                              </span>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-2">
                              {plan.tier}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                              {plan.description}
                            </p>
                          </div>

                          {/* Pricing Display */}
                          <div className="text-center mb-10">
                            <div className="flex items-baseline justify-center mb-4">
                              {plan.currency && (
                                <span
                                  className={`text-3xl font-semibold ${plan.accentColor} mr-1`}
                                >
                                  {plan.currency}
                                </span>
                              )}
                              <span className="text-6xl font-bold text-white tracking-tight">
                                {plan.price}
                              </span>
                              {plan.period && (
                                <span className="text-xl text-gray-400 ml-2">
                                  {plan.period}
                                </span>
                              )}
                            </div>

                            {plan.originalPrice && (
                              <div className="text-gray-500">
                                <span className="line-through text-lg">
                                  ${plan.originalPrice}/month
                                </span>
                                <span className="ml-2 text-emerald-400 font-medium">
                                  Save 25%
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Features List */}
                          <div className="space-y-4 mb-10">
                            {plan.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-start group/item"
                              >
                                <div
                                  className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}
                                >
                                  <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <Button
                            asChild
                            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 ${
                              plan.highlight
                                ? "bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                                : `bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white`
                            }`}
                          >
                            <Link
                              to="/signup"
                              className="flex items-center justify-center"
                            >
                              {plan.ctaText}
                              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </Button>

                          {/* Trust Indicators */}
                          <div className="mt-6 text-center">
                            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                              <div className="flex items-center">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                <span>14-day free trial</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                <span>No setup fees</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="yearly" className="mt-16">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {[
                      {
                        tier: "Starter",
                        subtitle: "For Growing Teams",
                        price: "39",
                        originalPrice: "49",
                        currency: "$",
                        period: "/month",
                        description:
                          "Perfect for small teams starting their lead generation journey",
                        features: [
                          "5,000 email verifications",
                          "Basic domain intelligence",
                          "Standard email support",
                          "Core integrations (5+)",
                          "Export to CSV/Excel",
                          "Basic analytics dashboard",
                        ],
                        highlight: false,
                        ctaText: "Start Free Trial",
                        gradient: "from-slate-600 to-gray-700",
                        accentColor: "text-gray-400",
                        borderGlow: "from-gray-500/30 to-slate-500/30",
                      },
                      {
                        tier: "Professional",
                        subtitle: "Most Popular Choice",
                        price: "119",
                        originalPrice: "149",
                        currency: "$",
                        period: "/month",
                        description:
                          "Advanced features for high-performing sales teams",
                        features: [
                          "25,000 email verifications",
                          "Advanced domain mapping",
                          "Campaign automation suite",
                          "Priority 24/7 support",
                          "Premium integrations (50+)",
                          "Advanced analytics & reporting",
                          "A/B testing capabilities",
                          "Custom email templates",
                          "Bulk processing tools",
                        ],
                        highlight: true,
                        ctaText: "Upgrade to Pro",
                        gradient: "from-emerald-500 to-blue-600",
                        accentColor: "text-emerald-400",
                        borderGlow: "from-emerald-500/50 to-blue-500/50",
                      },
                      {
                        tier: "Enterprise",
                        subtitle: "Unlimited Scale",
                        price: "Custom",
                        originalPrice: null,
                        currency: "",
                        period: "",
                        description:
                          "White-glove service for enterprise organizations",
                        features: [
                          "Unlimited verifications",
                          "Custom domain intelligence",
                          "Dedicated account manager",
                          "99.9% SLA guarantee",
                          "Custom integrations",
                          "Advanced security (SSO/SAML)",
                          "White-label solutions",
                          "API rate limit increases",
                          "Custom onboarding & training",
                        ],
                        highlight: false,
                        ctaText: "Contact Sales",
                        gradient: "from-purple-600 to-pink-600",
                        accentColor: "text-purple-400",
                        borderGlow: "from-purple-500/30 to-pink-500/30",
                      },
                    ].map((plan, index) => (
                      <div
                        key={index}
                        className={`group relative ${plan.highlight ? "lg:scale-110 lg:-mt-8" : ""}`}
                      >
                        {/* Sophisticated Glow Effect */}
                        <div
                          className={`absolute -inset-1 bg-gradient-to-r ${plan.borderGlow} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700`}
                        ></div>

                        {/* Most Popular Badge */}
                        {plan.highlight && (
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full text-white text-sm font-semibold shadow-2xl">
                              <span className="flex items-center">
                                <Star className="w-4 h-4 mr-2 fill-current" />
                                Most Popular
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Premium Card Design */}
                        <div
                          className={`relative bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.12] transition-all duration-700 transform group-hover:scale-105 ${plan.highlight ? "ring-2 ring-emerald-500/30" : ""}`}
                        >
                          {/* Header Section */}
                          <div className="text-center mb-8">
                            <div
                              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${plan.gradient}/20 border border-white/20 mb-4`}
                            >
                              <span
                                className={`${plan.accentColor} text-sm font-medium uppercase tracking-wide`}
                              >
                                {plan.subtitle}
                              </span>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-2">
                              {plan.tier}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                              {plan.description}
                            </p>
                          </div>

                          {/* Pricing Display */}
                          <div className="text-center mb-10">
                            <div className="flex items-baseline justify-center mb-4">
                              {plan.currency && (
                                <span
                                  className={`text-3xl font-semibold ${plan.accentColor} mr-1`}
                                >
                                  {plan.currency}
                                </span>
                              )}
                              <span className="text-6xl font-bold text-white tracking-tight">
                                {plan.price}
                              </span>
                              {plan.period && (
                                <span className="text-xl text-gray-400 ml-2">
                                  {plan.period}
                                </span>
                              )}
                            </div>

                            {plan.originalPrice && (
                              <div className="text-gray-500">
                                <span className="line-through text-lg">
                                  ${plan.originalPrice}/month
                                </span>
                                <span className="ml-2 text-emerald-400 font-medium">
                                  Save 25%
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Features List */}
                          <div className="space-y-4 mb-10">
                            {plan.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-start group/item"
                              >
                                <div
                                  className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}
                                >
                                  <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <Button
                            asChild
                            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 ${
                              plan.highlight
                                ? "bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                                : `bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white`
                            }`}
                          >
                            <Link
                              to="/signup"
                              className="flex items-center justify-center"
                            >
                              {plan.ctaText}
                              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </Button>

                          {/* Trust Indicators */}
                          <div className="mt-6 text-center">
                            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                              <div className="flex items-center">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                <span>14-day free trial</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                <span>No setup fees</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Advanced Value Proposition Footer */}
          <div className="mt-24 text-center">
            <div className="relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-white/[0.08] to-white/[0.12] backdrop-blur-xl border border-white/20 rounded-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-lg"></div>
              <div className="relative flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      Enterprise Ready
                    </div>
                    <div className="text-gray-400 text-sm">
                      SOC 2 Type II Certified
                    </div>
                  </div>
                </div>

                <div className="w-px h-12 bg-white/20"></div>

                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/pricing" className="flex items-center">
                    View Detailed Pricing
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto">
              All plans include 14-day free trial • No setup fees • Cancel
              anytime •
              <span className="text-emerald-400 font-medium">
                {" "}
                99.9% uptime SLA
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 11. Premium Knowledge Hub - Advanced Blog Showcase */}
      <section className="py-40 px-4 relative overflow-hidden">
        {/* Ultra-sophisticated Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/40 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/40 dark:to-purple-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.15),transparent_50%)]"></div>

        {/* Dynamic Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
                               linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
                               linear-gradient(45deg, transparent 75%, rgba(147, 51, 234, 0.1) 75%),
                               linear-gradient(-45deg, transparent 75%, rgba(147, 51, 234, 0.1) 75%)`,
              backgroundSize: "60px 60px",
              backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
            }}
          ></div>
        </div>

        {/* Floating Accent Elements */}
        <div className="absolute top-32 left-20 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-emerald-400 rounded-full animate-bounce opacity-50"></div>

        {/* Large Ambient Effects */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-8xl mx-auto">
          {/* Elite Header Section */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-blue-100/80 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20 backdrop-blur-xl mb-12">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4 animate-pulse shadow-lg shadow-blue-400/50"></div>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase">
                Knowledge Hub
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
              <span className="block text-gray-900 dark:text-white mb-2">
                Expert
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative">
                Insights
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl -z-10"></div>
              </span>
            </h2>

            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Stay ahead of the curve with
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {" "}
                cutting-edge strategies
              </span>
              ,
              <span className="text-purple-600 dark:text-purple-400 font-medium">
                {" "}
                industry insights
              </span>
              , and
              <span className="text-pink-600 dark:text-pink-400 font-medium">
                {" "}
                proven methodologies
              </span>{" "}
              from our experts.
            </p>
          </div>

          {/* Advanced Blog Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="group relative">
                {/* Subtle Glow Effect - Reduced */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-all duration-500"></div>

                {/* Clean Card Design */}
                <div className="relative bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-translate-y-1">
                  {/* Advanced Header with Visual Element */}
                  <div className="relative p-8 pb-6">
                    {/* Clean Icon Design */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                        <span className="text-3xl">{post.image}</span>
                      </div>
                    </div>

                    {/* Enhanced Typography */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-blue-100/80 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30 px-3 py-1">
                          Strategy
                        </Badge>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {post.date}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="px-8 pb-8">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {post.excerpt}
                    </p>

                    {/* Advanced CTA */}
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0 font-semibold group/btn"
                      >
                        <span>Read Full Article</span>
                        <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>

                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </article>
            ))}
          </div>

          {/* Clean Footer CTA */}
          <div className="mt-24 text-center">
            <div className="inline-flex items-center px-12 py-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-lg">
              <div className="flex items-center space-x-6">
                <div className="text-left">
                  <div className="text-gray-900 dark:text-white font-semibold text-lg">
                    Explore Our Complete Library
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    50+ expert articles & case studies
                  </div>
                </div>

                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/blog" className="flex items-center">
                    View All Insights
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Ultimate Conversion CTA - Hero-Level Design */}
      <section className="py-40 px-4 relative overflow-hidden">
        {/* Ultra-Premium Background Architecture */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(16,185,129,0.12),transparent_50%)]"></div>

        {/* Dynamic Mesh Gradient Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
              `,
            }}
          ></div>
        </div>

        {/* Sophisticated Particle System */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Large Ambient Light Sources */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-l from-emerald-600/15 to-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-white/10 backdrop-blur-xl mb-16">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mr-4 animate-pulse shadow-lg shadow-emerald-400/50"></div>
            <span className="text-emerald-300 text-sm font-semibold tracking-[0.2em] uppercase">
              Ready to Transform?
            </span>
          </div>

          {/* Hero-Level Typography */}
          <h2 className="text-7xl md:text-9xl font-bold mb-8 leading-none">
            <span className="block text-white mb-4">Scale Your</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 relative">
              Success
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 blur-2xl -z-10"></div>
            </span>
          </h2>

          <p className="text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-16 font-light">
            Join
            <span className="text-emerald-400 font-semibold">
              {" "}
              10,000+ sales professionals
            </span>{" "}
            who've already
            <span className="text-blue-400 font-semibold">
              {" "}
              transformed their prospecting
            </span>{" "}
            and achieved
            <span className="text-purple-400 font-semibold">
              {" "}
              exponential growth
            </span>{" "}
            with W3Leads.
          </p>

          {/* Advanced CTA Button Group */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-16">
            {/* Primary CTA with Complex Design */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-700"></div>
              <Button
                size="lg"
                asChild
                className="relative bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white text-xl px-12 py-6 rounded-2xl font-bold shadow-2xl transform group-hover:scale-105 transition-all duration-300"
              >
                <Link to="/signup" className="flex items-center">
                  <Sparkles className="w-6 h-6 mr-3" />
                  Start Free Trial Now
                  <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Secondary CTA with Glass Morphism */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-all duration-700"></div>
              <Button
                size="lg"
                variant="outline"
                className="relative bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white/20 text-xl px-12 py-6 rounded-2xl font-bold transform group-hover:scale-105 transition-all duration-300"
              >
                <PlayCircle className="w-6 h-6 mr-3" />
                Watch Live Demo
              </Button>
            </div>
          </div>

          {/* Trust Indicators with Advanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              {
                icon: Shield,
                text: "Enterprise Security",
                subtext: "SOC 2 Type II Certified",
              },
              {
                icon: Award,
                text: "Industry Leading",
                subtext: "98.5% Accuracy Rate",
              },
              {
                icon: Users,
                text: "Trusted Globally",
                subtext: "10K+ Companies",
              },
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-xl border border-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold">{item.text}</div>
                <div className="text-gray-400 text-sm">{item.subtext}</div>
              </div>
            ))}
          </div>

          {/* Premium Footer Note */}
          <div className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-emerald-400" />
                <span>14-day free trial</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-400" />
                <span>No credit card required</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=0yVgZWgR2dQ"
        title="W3Leads Platform Demo"
        description="See how our B2B lead generation platform works in action"
      />
    </Layout>
  );
}
