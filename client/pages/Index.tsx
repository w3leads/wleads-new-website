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
} from "lucide-react";

export default function Index() {
  const [searchDomain, setSearchDomain] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState('domain');

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

  const handleDomainSearch = () => {
    console.log("Searching domain:", searchDomain);
  };

  const handleEmailVerify = () => {
    console.log("Verifying email:", verifyEmail);
  };

  const integrations = [
    { name: "Gmail", logo: "📧" },
    { name: "Outlook", logo: "���" },
    { name: "Zapier", logo: "⚡" },
    { name: "HubSpot", logo: "🎯" },
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
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-purple/10 dark:from-brand-primary dark:via-brand-secondary dark:to-brand-purple dark:opacity-90"></div>
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
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
            >
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-primary text-lg px-8 py-6 transition-all duration-300"
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
                  <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 text-left text-gray-600">
                    Search domain: techcorp.com
                  </div>
                  <Button className="bg-brand-primary text-white">
                    Search
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-brand-success/10 p-3 rounded-lg">
                    <div className="font-semibold text-brand-success">
                      1,247 Emails Found
                    </div>
                    <div className="text-gray-600">Verified contacts</div>
                  </div>
                  <div className="bg-brand-purple/10 p-3 rounded-lg">
                    <div className="font-semibold text-brand-purple">
                      98.2% Accuracy
                    </div>
                    <div className="text-gray-600">Verification rate</div>
                  </div>
                  <div className="bg-brand-primary/10 p-3 rounded-lg">
                    <div className="font-semibold text-brand-primary">
                      156 Departments
                    </div>
                    <div className="text-gray-600">Mapped structure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Social Proof */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary dark:text-white">
                50M+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Emails Verified
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary dark:text-white">
                10K+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Companies Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary dark:text-white">
                98.5%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Accuracy Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary dark:text-white">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-300">Support</div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "TechCorp",
              "StartupXYZ",
              "Scale Inc",
              "Growth Co",
              "Lead Gen",
              "Sales Pro",
            ].map((company) => (
              <div
                key={company}
                className="text-gray-700 dark:text-white font-semibold text-lg"
              >
                {company}
              </div>
            ))}
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
                <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white px-8 py-3 font-semibold">
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
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
              <span className="text-brand-primary text-sm font-medium">Interactive Experience</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Try It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-purple">
                Yourself
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Experience the power of our platform with live demo data. See real results in real-time.
            </p>
          </div>

          {/* Demo Interface */}
          <div className="max-w-5xl mx-auto">
            {/* Main Demo Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-purple rounded-3xl blur opacity-20"></div>

              {/* Main Content */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                {/* Browser-like Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-sm font-mono">w3leads.com/demo</div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live Demo</span>
                  </div>
                </div>

                {/* Tabbed Interface */}
                <div className="mb-8">
                  <div className="flex space-x-1 bg-white/5 rounded-xl p-1 mb-6 w-fit">
                    <button
                      onClick={() => setActiveTab('domain')}
                      className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeTab === 'domain'
                          ? 'bg-brand-primary text-white shadow-lg'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Globe className="w-4 h-4 inline mr-2" />
                      Domain Search
                    </button>
                    <button
                      onClick={() => setActiveTab('email')}
                      className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeTab === 'email'
                          ? 'bg-brand-success text-white shadow-lg'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Shield className="w-4 h-4 inline mr-2" />
                      Email Verification
                    </button>
                  </div>

                  {/* Domain Search Tab */}
                  {activeTab === 'domain' && (
                    <div className="space-y-6 animate-in fade-in-50 duration-500">
                      {/* Search Input */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-2xl blur"></div>
                        <div className="relative flex items-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                          <Globe className="w-6 h-6 text-brand-primary flex-shrink-0" />
                          <Input
                            placeholder="Enter domain (e.g., microsoft.com, google.com, salesforce.com)"
                            value={searchDomain}
                            onChange={(e) => setSearchDomain(e.target.value)}
                            className="flex-1 bg-transparent border-none text-white text-lg placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                          />
                          <Button
                            onClick={handleDomainSearch}
                            className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            <Search className="w-5 h-5 mr-2" />
                            Analyze
                          </Button>
                        </div>
                      </div>

                      {/* Results */}
                      {searchDomain && (
                        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-700">
                          {/* Results Header */}
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-white">Analysis Results</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span>Processing: {searchDomain}</span>
                            </div>
                          </div>

                          {/* Metrics Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="group relative">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-success to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="w-12 h-12 bg-brand-success/20 rounded-xl flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-brand-success" />
                                  </div>
                                  <Badge className="bg-brand-success/20 text-brand-success border-brand-success/30">Live</Badge>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">1,247</div>
                                <div className="text-sm text-gray-300">Email contacts found</div>
                                <div className="text-xs text-brand-success mt-2">+23% from last scan</div>
                              </div>
                            </div>

                            <div className="group relative">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="w-12 h-12 bg-brand-purple/20 rounded-xl flex items-center justify-center">
                                    <Building className="w-6 h-6 text-brand-purple" />
                                  </div>
                                  <Badge className="bg-brand-purple/20 text-brand-purple border-brand-purple/30">Updated</Badge>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">156</div>
                                <div className="text-sm text-gray-300">Department structure</div>
                                <div className="text-xs text-brand-purple mt-2">Mapped hierarchy</div>
                              </div>
                            </div>

                            <div className="group relative">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-brand-primary" />
                                  </div>
                                  <Badge className="bg-brand-primary/20 text-brand-primary border-brand-primary/30">Verified</Badge>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">98.2%</div>
                                <div className="text-sm text-gray-300">Accuracy rate</div>
                                <div className="text-xs text-brand-primary mt-2">Industry leading</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Email Verification Tab */}
                  {activeTab === 'email' && (
                    <div className="space-y-6 animate-in fade-in-50 duration-500">
                      {/* Verification Input */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-success/20 to-emerald-600/20 rounded-2xl blur"></div>
                        <div className="relative flex items-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                          <Shield className="w-6 h-6 text-brand-success flex-shrink-0" />
                          <Input
                            placeholder="Enter email to verify (e.g., john.doe@company.com)"
                            value={verifyEmail}
                            onChange={(e) => setVerifyEmail(e.target.value)}
                            className="flex-1 bg-transparent border-none text-white text-lg placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                          />
                          <Button
                            onClick={handleEmailVerify}
                            className="bg-gradient-to-r from-brand-success to-emerald-600 hover:from-emerald-600 hover:to-brand-success text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Verify
                          </Button>
                        </div>
                      </div>

                      {/* Verification Results */}
                      {verifyEmail && (
                        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-700">
                          <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-success to-emerald-600 rounded-2xl blur opacity-30"></div>
                            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                              <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold text-white">Verification Complete</h3>
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="w-5 h-5 text-brand-success" />
                                  <span className="text-brand-success font-medium">Verified</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-300">Status</span>
                                    <Badge className="bg-brand-success/20 text-brand-success border-brand-success/30 px-3 py-1">
                                      Valid
                                    </Badge>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-300">Confidence</span>
                                    <span className="text-white font-semibold">98.5%</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-300">Deliverability</span>
                                    <span className="text-brand-success font-semibold">High</span>
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-300">Domain Check</span>
                                    <span className="text-brand-success">✓ Valid</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-300">Syntax Check</span>
                                    <span className="text-brand-success">✓ Valid</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-300">MX Records</span>
                                    <span className="text-brand-success">✓ Found</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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

      {/* 6. ROI/Metrics Band */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Proven Results That Matter
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                20+ Hours
              </div>
              <div className="text-gray-200">Saved per week</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">340%</div>
              <div className="text-gray-200">Increase in qualified leads</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-gray-200">Improvement in deliverability</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Integrations Carousel */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300">
              Connect with your existing tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="glass border-white/20 p-6 text-center hover:border-brand-success/50 transition-all duration-300"
              >
                <div className="text-4xl mb-2">{integration.logo}</div>
                <div className="text-white font-semibold">
                  {integration.name}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Security & Compliance */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Your data security and compliance are our top priorities
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Lock, title: "SPF/DKIM", desc: "Email authentication" },
                {
                  icon: Shield,
                  title: "GDPR",
                  desc: "Compliant data handling",
                },
                { icon: Award, title: "SOC 2", desc: "Security standards" },
                { icon: Eye, title: "Privacy", desc: "Data protection" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-success to-brand-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            What Our Customers Say
          </h2>

          <Card className="glass-card border-gray-200 dark:border-white/20 p-8">
            <CardContent className="space-y-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-xl text-gray-900 dark:text-white italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="text-gray-900 dark:text-white font-semibold">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                      index === currentTestimonial
                        ? "bg-brand-primary scale-110"
                        : "bg-gray-300 dark:bg-white/30 hover:bg-brand-primary/50"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 10. Pricing Teaser */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your business needs
            </p>

            <Tabs defaultValue="monthly" className="mt-8">
              <TabsList className="glass border-white/20">
                <TabsTrigger value="monthly" className="text-white">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="yearly" className="text-white">
                  Yearly{" "}
                  <Badge className="ml-2 bg-brand-success">Save 20%</Badge>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="monthly" className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Starter",
                      price: "$29",
                      period: "/month",
                      features: [
                        "1,000 email verifications",
                        "Basic domain search",
                        "Email support",
                        "Standard integrations",
                      ],
                      popular: false,
                    },
                    {
                      name: "Professional",
                      price: "$99",
                      period: "/month",
                      features: [
                        "10,000 email verifications",
                        "Advanced search filters",
                        "Campaign automation",
                        "Priority support",
                        "All integrations",
                      ],
                      popular: true,
                    },
                    {
                      name: "Enterprise",
                      price: "Custom",
                      period: "",
                      features: [
                        "Unlimited verifications",
                        "Custom integrations",
                        "Dedicated support",
                        "Advanced analytics",
                        "White-label options",
                      ],
                      popular: false,
                    },
                  ].map((plan, index) => (
                    <Card
                      key={index}
                      className={`bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 p-6 relative shadow-lg ${
                        plan.popular
                          ? "border-green-500 ring-2 ring-green-500/20"
                          : ""
                      }`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                          Most Popular
                        </Badge>
                      )}
                      <CardHeader>
                        <CardTitle className="text-gray-900 dark:text-white text-xl">
                          {plan.name}
                        </CardTitle>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          {plan.price}
                          <span className="text-lg text-gray-600 dark:text-gray-300">
                            {plan.period}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {plan.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-600 dark:text-gray-300"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full mt-6 ${
                            plan.popular
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-blue-600 hover:bg-blue-700"
                          } text-white`}
                          asChild
                        >
                          <Link to="/signup">Get Started</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="yearly" className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Starter",
                      price: "$23",
                      period: "/month",
                      originalPrice: "$29",
                      features: [
                        "1,000 email verifications",
                        "Basic domain search",
                        "Email support",
                        "Standard integrations",
                      ],
                      popular: false,
                    },
                    {
                      name: "Professional",
                      price: "$79",
                      period: "/month",
                      originalPrice: "$99",
                      features: [
                        "10,000 email verifications",
                        "Advanced search filters",
                        "Campaign automation",
                        "Priority support",
                        "All integrations",
                      ],
                      popular: true,
                    },
                    {
                      name: "Enterprise",
                      price: "Custom",
                      period: "",
                      originalPrice: "",
                      features: [
                        "Unlimited verifications",
                        "Custom integrations",
                        "Dedicated support",
                        "Advanced analytics",
                        "White-label options",
                      ],
                      popular: false,
                    },
                  ].map((plan, index) => (
                    <Card
                      key={index}
                      className={`bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 p-6 relative shadow-lg ${
                        plan.popular
                          ? "border-green-500 ring-2 ring-green-500/20"
                          : ""
                      }`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                          Most Popular
                        </Badge>
                      )}
                      <CardHeader>
                        <CardTitle className="text-gray-900 dark:text-white text-xl">
                          {plan.name}
                        </CardTitle>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          {plan.price}
                          <span className="text-lg text-gray-600 dark:text-gray-300">
                            {plan.period}
                          </span>
                          {plan.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">
                              was {plan.originalPrice}
                              {plan.period}
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {plan.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-600 dark:text-gray-300"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full mt-6 ${
                            plan.popular
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-blue-600 hover:bg-blue-700"
                          } text-white`}
                          asChild
                        >
                          <Link to="/signup">Get Started</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              asChild
              className="bg-transparent border-2 border-brand-success text-brand-success hover:bg-brand-success hover:text-white"
            >
              <Link to="/pricing">View Full Pricing Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 11. Blog Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-300">
              Stay updated with the latest lead generation insights and
              strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="glass border-white/20 hover:border-brand-success/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{post.image}</div>
                  <CardTitle className="text-white text-lg leading-tight">
                    {post.title}
                  </CardTitle>
                  <div className="text-gray-400 text-sm">{post.date}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="text-brand-success hover:text-brand-success/90 p-0"
                  >
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-transparent border-2 border-brand-success text-brand-success hover:bg-brand-success hover:text-white"
            >
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to 10x Your Lead Generation?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of sales teams who've transformed their prospecting
            with W3Leads
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-white text-brand-primary hover:bg-gray-100 text-lg px-8 py-6"
            >
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-primary text-lg px-8 py-6"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Book a Demo
            </Button>
          </div>

          <p className="text-gray-200 text-sm mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </Layout>
  );
}
