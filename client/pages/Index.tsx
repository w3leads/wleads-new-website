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
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/5 dark:bg-brand-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-secondary/5 dark:bg-brand-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
              <span className="text-brand-primary text-sm font-medium">Interactive Experience</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Try It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-purple">
                Yourself
              </span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
              <div className="relative bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                {/* Browser-like Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200/50 dark:border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm font-mono">w3leads.com/demo</div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live Demo</span>
                  </div>
                </div>

                {/* Tabbed Interface */}
                <div className="mb-8">
                  <div className="flex space-x-1 bg-gray-100/80 dark:bg-white/5 rounded-xl p-1 mb-6 w-fit">
                    <button
                      onClick={() => setActiveTab('domain')}
                      className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeTab === 'domain'
                          ? 'bg-brand-primary text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/10'
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
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/10'
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
                        <div className="relative flex items-center space-x-4 bg-gray-50/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-2xl p-6">
                          <Globe className="w-6 h-6 text-brand-primary flex-shrink-0" />
                          <Input
                            placeholder="Enter domain (e.g., microsoft.com, google.com, salesforce.com)"
                            value={searchDomain}
                            onChange={(e) => setSearchDomain(e.target.value)}
                            className="flex-1 bg-transparent border-none text-gray-900 dark:text-white text-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-0 focus:outline-none"
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
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Analysis Results</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span>Processing: {searchDomain}</span>
                            </div>
                          </div>

                          {/* Metrics Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="group relative">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-success to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                              <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-300">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="w-12 h-12 bg-brand-success/20 rounded-xl flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-brand-success" />
                                  </div>
                                  <Badge className="bg-brand-success/20 text-brand-success border-brand-success/30">Live</Badge>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">1,247</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Email contacts found</div>
                                <div className="text-xs text-brand-success mt-2">+23% from last scan</div>
                              </div>
                            </div>

                            <div className="group relative">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                              <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-300">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="w-12 h-12 bg-brand-purple/20 rounded-xl flex items-center justify-center">
                                    <Building className="w-6 h-6 text-brand-purple" />
                                  </div>
                                  <Badge className="bg-brand-purple/20 text-brand-purple border-brand-purple/30">Updated</Badge>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">156</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Department structure</div>
                                <div className="text-xs text-brand-purple mt-2">Mapped hierarchy</div>
                              </div>
                            </div>

                            <div className="group relative">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                              <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-2xl p-6 hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-300">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-brand-primary" />
                                  </div>
                                  <Badge className="bg-brand-primary/20 text-brand-primary border-brand-primary/30">Verified</Badge>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">98.2%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Accuracy rate</div>
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
                        <div className="relative flex items-center space-x-4 bg-gray-50/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-2xl p-6">
                          <Shield className="w-6 h-6 text-brand-success flex-shrink-0" />
                          <Input
                            placeholder="Enter email to verify (e.g., john.doe@company.com)"
                            value={verifyEmail}
                            onChange={(e) => setVerifyEmail(e.target.value)}
                            className="flex-1 bg-transparent border-none text-gray-900 dark:text-white text-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-0 focus:outline-none"
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
                            <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-2xl p-8">
                              <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Verification Complete</h3>
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="w-5 h-5 text-brand-success" />
                                  <span className="text-brand-success font-medium">Verified</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">Status</span>
                                    <Badge className="bg-brand-success/20 text-brand-success border-brand-success/30 px-3 py-1">
                                      Valid
                                    </Badge>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">Confidence</span>
                                    <span className="text-gray-900 dark:text-white font-semibold">98.5%</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">Deliverability</span>
                                    <span className="text-brand-success font-semibold">High</span>
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">Domain Check</span>
                                    <span className="text-brand-success">✓ Valid</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">Syntax Check</span>
                                    <span className="text-brand-success">✓ Valid</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">MX Records</span>
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
              <span className="text-blue-300 text-sm font-medium tracking-wide uppercase">Performance Metrics</span>
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
              Join thousands of companies who've transformed their lead generation with our platform.
              These aren't just numbers – they're real business outcomes.
            </p>
          </div>

          {/* Advanced Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Metric 1: Time Savings */}
            <div className="group relative">
              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>

              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.12] transition-all duration-500">
                {/* Floating Icon Container */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  {/* Orbiting Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </div>

                {/* Metric Display */}
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl md:text-6xl font-bold text-white group-hover:text-blue-300 transition-colors duration-500">
                      20+
                    </span>
                    <span className="text-xl text-blue-300 font-medium">hrs</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">Time Saved</h3>
                  <p className="text-gray-300 leading-relaxed">Per week, per sales rep. Automated prospecting and verification eliminates manual research.</p>

                  {/* Progress Indicator */}
                  <div className="pt-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Manual Process</span>
                      <span>Automated</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-5/6 transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric 2: Lead Quality */}
            <div className="group relative">
              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>

              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/[0.12] transition-all duration-500">
                {/* Floating Icon Container */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  {/* Orbiting Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-500"></div>
                </div>

                {/* Metric Display */}
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl md:text-6xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-500">
                      340
                    </span>
                    <span className="text-xl text-emerald-300 font-medium">%</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">Lead Quality Boost</h3>
                  <p className="text-gray-300 leading-relaxed">Increase in qualified leads through precise targeting and verified contact data.</p>

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
                    <div className="text-xs text-gray-400 text-center mt-2">Monthly Performance</div>
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
                    <span className="text-xl text-purple-300 font-medium">%</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">Deliverability Rate</h3>
                  <p className="text-gray-300 leading-relaxed">Email deliverability improvement through advanced verification and reputation management.</p>

                  {/* Circular Progress */}
                  <div className="pt-4 flex justify-center">
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none"/>
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
                          <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6"/>
                            <stop offset="100%" stopColor="#ec4899"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-semibold text-purple-300">85%</span>
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
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white/20"></div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Join 10,000+ companies</div>
                  <div className="text-gray-300 text-sm">Already seeing these results</div>
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
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="network-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <path d="M100,300 Q300,100 500,300 T900,300" stroke="url(#network-gradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
            <path d="M200,400 Q400,200 600,400 T1000,400" stroke="url(#network-gradient)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
            <path d="M50,200 Q250,400 450,200 T850,200" stroke="url(#network-gradient)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '2s'}}/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header with Advanced Typography */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100/80 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wide uppercase">Ecosystem Integration</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="block">Connect Everything</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                Seamlessly
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Native integrations with 100+ platforms. No complex setup, no data silos.
              Your existing workflow, supercharged.
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
                          <span className="text-green-600 dark:text-green-400 text-xs font-medium">Active</span>
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
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-gray-600 dark:text-gray-400">Native integrations</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">&lt; 5min</div>
              <div className="text-gray-600 dark:text-gray-400">Setup time</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">Uptime reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Enterprise Security & Trust */}
      <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Security Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Security Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-50"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm mb-8">
              <Shield className="w-4 h-4 text-green-400 mr-3" />
              <span className="text-green-400 text-sm font-medium tracking-wide uppercase">Enterprise Security</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="block">Bank-Level</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                Security & Compliance
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your data deserves fortress-level protection. We meet and exceed the highest security standards
              so you can focus on growing your business with complete peace of mind.
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Lock,
                title: "SPF/DKIM Authentication",
                desc: "Email authentication protocols ensure deliverability and reputation protection",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-500/20 to-emerald-500/20"
              },
              {
                icon: Shield,
                title: "GDPR Compliance",
                desc: "Full European data protection regulation compliance with automated consent management",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: Award,
                title: "SOC 2 Type II",
                desc: "Certified security controls for availability, processing integrity, and confidentiality",
                color: "from-purple-500 to-violet-500",
                bgColor: "from-purple-500/20 to-violet-500/20"
              },
              {
                icon: Eye,
                title: "Zero-Trust Architecture",
                desc: "Advanced privacy controls with end-to-end encryption and access verification",
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-500/20 to-red-500/20"
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.bgColor} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500`}></div>

                <div className="relative bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.12] transition-all duration-500">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-lg opacity-50`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  {/* Verification Badge */}
                  <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Trusted by Enterprise Leaders</h3>
              <p className="text-gray-300">Join Fortune 500 companies who trust us with their most sensitive data</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Certification Badges */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">ISO 27001 Certified</h4>
                <p className="text-gray-400 text-sm">International security management standards</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">CCPA Compliant</h4>
                <p className="text-gray-400 text-sm">California Consumer Privacy Act adherence</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">256-bit Encryption</h4>
                <p className="text-gray-400 text-sm">Military-grade data protection</p>
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
        <div className="absolute top-20 left-1/4 text-6xl text-purple-200/20 dark:text-purple-400/10 font-serif">"</div>
        <div className="absolute bottom-20 right-1/4 text-6xl text-blue-200/20 dark:text-blue-400/10 font-serif transform rotate-180">"</div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-purple-200/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Advanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100/80 dark:bg-purple-500/10 border border-purple-200/50 dark:border-purple-500/20 backdrop-blur-sm mb-8">
              <MessageSquare className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-3" />
              <span className="text-purple-600 dark:text-purple-400 text-sm font-medium tracking-wide uppercase">Customer Success</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="block">Stories of</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                Transformation
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how industry leaders are revolutionizing their lead generation and
              achieving unprecedented growth with our platform.
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
                        <Star className="w-8 h-8 text-yellow-400 fill-current transform hover:scale-125 transition-transform duration-300"
                              style={{animationDelay: `${i * 100}ms`}} />
                        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-sm animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="text-center mb-12">
                  <blockquote className="text-2xl md:text-3xl text-gray-900 dark:text-white font-medium leading-relaxed mb-8">
                    <span className="text-purple-600 dark:text-purple-400 text-4xl font-serif absolute -ml-4 -mt-2">"</span>
                    {testimonials[currentTestimonial].content}
                    <span className="text-purple-600 dark:text-purple-400 text-4xl font-serif absolute ml-2 mt-2">"</span>
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
                      <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">Verified Customer</span>
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
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">340%</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Lead Quality Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Hours Saved Weekly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">85%</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Deliverability Rate</div>
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
                      index === currentTestimonial ? 'scale-110' : 'hover:scale-105'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/20'
                    }`}>
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
                  onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
                  className="w-12 h-12 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-2xl flex items-center justify-center hover:bg-white dark:hover:bg-white/20 transition-all duration-300 group"
                >
                  <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transform rotate-180 transition-colors duration-300" />
                </button>
                <button
                  onClick={() => setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)}
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
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-gray-900 dark:text-white font-bold">Join 10,000+ satisfied customers</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Average rating: 4.9/5 ⭐</div>
                </div>
              </div>
            </div>
          </div>
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
