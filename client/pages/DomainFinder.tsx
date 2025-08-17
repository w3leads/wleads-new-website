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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import {
  Search,
  Globe,
  Users,
  Building,
  Mail,
  CheckCircle,
  Star,
  Download,
  Filter,
  Target,
  Zap,
  Shield,
  BarChart3,
  Clock,
  ArrowRight,
  MapPin,
  Phone,
  ExternalLink,
  Database,
  Brain,
  TrendingUp,
  Award,
  Lock,
  Sparkles,
  Eye,
  FileText,
  Calendar,
  MessageSquare,
  UserCheck,
  Layers,
  Briefcase,
  Settings,
  ChevronRight,
} from "lucide-react";

export default function DomainFinder() {
  const [searchDomain, setSearchDomain] = useState("");
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleDomainSearch = async () => {
    if (!searchDomain) return;

    setIsSearching(true);

    // Simulate API call with comprehensive demo data
    setTimeout(() => {
      setSearchResults({
        domain: searchDomain,
        companyName: "TechCorp Enterprise Solutions",
        totalEmails: 2847,
        departments: 23,
        employees: "5,000-10,000",
        industry: "Enterprise Software & Technology",
        location: "San Francisco, CA",
        website: `https://${searchDomain}`,
        confidence: 98.7,
        techStack: ["React", "Node.js", "AWS", "Salesforce", "HubSpot"],
        revenue: "$500M - $1B",
        founded: "2015",
        socialScore: 94,
        companyGrowth: "+15%",
        emails: [
          {
            name: "Sarah Chen",
            email: "sarah.chen@techcorp.com",
            department: "Engineering",
            role: "VP of Engineering",
            verified: true,
            socialLinks: ["LinkedIn", "Twitter"],
            lastActive: "2 days ago"
          },
          {
            name: "Michael Rodriguez",
            email: "michael.rodriguez@techcorp.com",
            department: "Sales",
            role: "Chief Revenue Officer",
            verified: true,
            socialLinks: ["LinkedIn"],
            lastActive: "1 day ago"
          },
          {
            name: "Jennifer Park",
            email: "jennifer.park@techcorp.com",
            department: "Marketing",
            role: "CMO",
            verified: true,
            socialLinks: ["LinkedIn", "Twitter"],
            lastActive: "3 hours ago"
          },
          {
            name: "David Thompson",
            email: "david.thompson@techcorp.com",
            department: "Product",
            role: "Head of Product Strategy",
            verified: true,
            socialLinks: ["LinkedIn"],
            lastActive: "5 hours ago"
          },
          {
            name: "Amanda Foster",
            email: "amanda.foster@techcorp.com",
            department: "Operations",
            role: "COO",
            verified: false,
            socialLinks: ["LinkedIn"],
            lastActive: "1 week ago"
          },
        ],
      });
      setIsSearching(false);
    }, 2500);
  };

  const companyInsights = [
    { label: "Annual Revenue", value: "$500M - $1B", icon: TrendingUp },
    { label: "Founded", value: "2015", icon: Calendar },
    { label: "Growth Rate", value: "+15% YoY", icon: BarChart3 },
    { label: "Funding Stage", value: "Series D", icon: Award },
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Discovery",
      description: "Advanced machine learning algorithms analyze web patterns, social signals, and corporate structures to uncover hidden contact information with 98.7% accuracy.",
      benefits: ["Pattern Recognition", "Predictive Analytics", "Behavioral Insights"],
      color: "from-brand-primary to-blue-600"
    },
    {
      icon: Database,
      title: "Multi-Source Intelligence",
      description: "Aggregates data from 200+ premium sources including corporate directories, social networks, professional platforms, and public records.",
      benefits: ["Real-time Updates", "Cross-verification", "Data Enrichment"],
      color: "from-brand-secondary to-brand-purple"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, GDPR adherence, and zero-trust architecture ensuring your searches remain completely confidential.",
      benefits: ["End-to-end Encryption", "Audit Trails", "Privacy Controls"],
      color: "from-brand-success to-green-600"
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Real-time email verification with deliverability scoring, spam trap detection, and role-based email identification for maximum campaign success.",
      benefits: ["Live Validation", "Quality Scoring", "Bounce Prevention"],
      color: "from-brand-purple to-purple-600"
    }
  ];

  const useCases = [
    {
      title: "Sales Prospecting",
      description: "Build targeted prospect lists with verified decision-maker contacts",
      icon: Target,
      metrics: "400% pipeline growth",
      companies: "2,500+"
    },
    {
      title: "Recruitment",
      description: "Source top talent and hiring managers across industries",
      icon: UserCheck,
      metrics: "50% faster hiring",
      companies: "800+"
    },
    {
      title: "Partnership Development", 
      description: "Connect with strategic partners and business development leads",
      icon: Briefcase,
      metrics: "300% more partnerships",
      companies: "1,200+"
    },
    {
      title: "Market Research",
      description: "Analyze competitive landscapes and industry contacts",
      icon: Eye,
      metrics: "90% market coverage",
      companies: "5,000+"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "VP Sales, DataFlow Systems",
      company: "Fortune 500",
      content: "Domain Finder transformed our prospecting process. We discovered 3,000+ qualified leads in our ICP that we never knew existed. Our conversion rate increased by 340%.",
      avatar: "SM",
      rating: 5,
      results: "+340% conversion rate"
    },
    {
      name: "James Kim",
      role: "Head of Talent Acquisition, InnovateHR",
      company: "Series C Startup",
      content: "The quality of contact data is exceptional. We reduced our time-to-hire by 50% and improved candidate quality significantly. The verification accuracy is outstanding.",
      avatar: "JK", 
      rating: 5,
      results: "50% faster hiring"
    },
    {
      name: "Maria Rodriguez",
      role: "Chief Marketing Officer, GrowthTech",
      company: "Public Company",
      content: "Finally, a tool that delivers what it promises. The company insights and contact mapping features have revolutionized our account-based marketing strategy.",
      avatar: "MR",
      rating: 5,
      results: "5x better targeting"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
        {/* Background Pattern */}
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%234f46e5\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"}></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-brand-purple mr-2" />
                <span className="text-brand-purple text-sm font-medium">
                  #1 Domain Intelligence Platform
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Domain{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-success via-brand-purple to-brand-orange">
                    Intelligence
                  </span>
                  <br />
                  Platform
                </h1>
                
                <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                  Unlock comprehensive company insights and verified contact information from any domain. 
                  Powered by AI and trusted by 10,000+ enterprise teams worldwide.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-brand-primary">98.7%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-brand-success">50M+</div>
                  <div className="text-sm text-gray-600">Contacts Found</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-brand-purple">10K+</div>
                  <div className="text-sm text-gray-600">Companies Trust Us</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  Watch 2-Min Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-sm text-gray-600">
                Trusted by teams at Fortune 500 companies, unicorn startups, and high-growth SaaS companies
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="relative">
              {/* Demo Container */}
              <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-gray-50/80 rounded-2xl p-6 shadow-inner">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Try Domain Intelligence
                    </h3>
                    <Badge className="bg-brand-success/10 text-brand-success border-brand-success/20">
                      Live Demo
                    </Badge>
                  </div>

                  <div className="space-y-6">
                    {/* Search Input */}
                    <div className="flex space-x-3">
                      <div className="relative flex-1">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <Input
                          placeholder="Enter company domain (e.g., stripe.com)"
                          value={searchDomain}
                          onChange={(e) => setSearchDomain(e.target.value)}
                          className="pl-10 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-xl focus:border-brand-primary focus:ring-brand-primary"
                          onKeyPress={(e) =>
                            e.key === "Enter" && handleDomainSearch()
                          }
                        />
                      </div>
                      <Button
                        onClick={handleDomainSearch}
                        disabled={isSearching || !searchDomain}
                        className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary px-6 rounded-xl"
                      >
                        {isSearching ? (
                          <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                        ) : (
                          <Search className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    {/* Demo Results */}
                    {searchResults && (
                      <div className="space-y-4 p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                        {/* Company Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm">
                              {searchResults.companyName.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm">
                                {searchResults.companyName}
                              </h4>
                              <p className="text-gray-600 text-xs">
                                {searchResults.industry}
                              </p>
                            </div>
                          </div>
                          <Badge className="bg-brand-success/10 text-brand-success border-brand-success/20 text-xs">
                            {searchResults.confidence}% match
                          </Badge>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                            <div className="text-lg font-bold text-brand-primary">
                              {searchResults.totalEmails.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-600">Contacts</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                            <div className="text-lg font-bold text-brand-success">
                              {searchResults.departments}
                            </div>
                            <div className="text-xs text-gray-600">Departments</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                            <div className="text-lg font-bold text-brand-purple">
                              {searchResults.employees}
                            </div>
                            <div className="text-xs text-gray-600">Employees</div>
                          </div>
                        </div>

                        {/* Sample Contacts */}
                        <div className="space-y-2">
                          <div className="text-xs text-gray-600 mb-2">Sample verified contacts:</div>
                          {searchResults.emails.slice(0, 2).map((contact: any, index: number) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100">
                              <div>
                                <div className="text-gray-900 text-sm font-medium">{contact.name}</div>
                                <div className="text-gray-600 text-xs">{contact.role}</div>
                              </div>
                              <CheckCircle className="w-4 h-4 text-brand-success" />
                            </div>
                          ))}
                        </div>

                        <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white text-sm">
                          <Download className="w-4 h-4 mr-2" />
                          View All {searchResults.totalEmails.toLocaleString()} Contacts
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-success rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-brand-primary rounded-full animate-pulse opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 mb-6">
              Advanced Intelligence
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Domain Intelligence
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Go beyond basic contact finding. Our AI-powered platform delivers comprehensive company insights, 
              organizational mapping, and verified contact data with unmatched accuracy and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="group bg-white border-gray-200 hover:border-brand-primary/30 transition-all duration-500 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-gray-900 text-xl group-hover:text-brand-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-brand-success flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Results Preview */}
      {searchResults && (
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Domain Analysis
              </h2>
              <p className="text-xl text-gray-700">
                Deep insights for {searchResults.domain} - Everything you need to know
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Company Intelligence */}
              <Card className="bg-white border-gray-200 lg:col-span-1 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center text-lg">
                    <Building className="w-5 h-5 mr-3 text-brand-primary" />
                    Company Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Company Overview */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center text-white font-bold">
                        {searchResults.companyName.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold">{searchResults.companyName}</h3>
                        <p className="text-gray-600 text-sm">{searchResults.industry}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {companyInsights.map((insight, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                          <div className="flex items-center space-x-2 mb-1">
                            <insight.icon className="w-4 h-4 text-brand-primary" />
                            <span className="text-gray-600 text-xs">{insight.label}</span>
                          </div>
                          <div className="text-gray-900 font-medium text-sm">{insight.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="text-gray-900 flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-brand-primary" />
                          {searchResults.location}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Tech Stack:</span>
                        <div className="flex flex-wrap gap-1">
                          {searchResults.techStack.slice(0, 3).map((tech: string, idx: number) => (
                            <Badge key={idx} className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Confidence:</span>
                        <Badge className="bg-brand-success/10 text-brand-success border-brand-success/20">
                          {searchResults.confidence}% verified
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Results */}
              <Card className="bg-white border-gray-200 lg:col-span-2 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-gray-900 flex items-center text-lg">
                      <Users className="w-5 h-5 mr-3 text-brand-primary" />
                      Decision Makers & Key Contacts
                      <Badge className="ml-3 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
                        {searchResults.emails.length} of {searchResults.totalEmails.toLocaleString()}
                      </Badge>
                    </CardTitle>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {searchResults.emails.map((contact: any, index: number) => (
                      <div
                        key={index}
                        className="group flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center text-white font-semibold">
                            {contact.name.split(' ').map((n: string) => n.charAt(0)).join('')}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="text-gray-900 font-medium">{contact.name}</h4>
                              {contact.verified && (
                                <CheckCircle className="w-4 h-4 text-brand-success" />
                              )}
                              <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 text-xs">
                                {contact.department}
                              </Badge>
                            </div>
                            <p className="text-gray-700 text-sm mb-1">{contact.email}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-600">
                              <span>{contact.role}</span>
                              <span>•</span>
                              <span>Active {contact.lastActive}</span>
                              <span>•</span>
                              <span>{contact.socialLinks.length} social profiles</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-brand-primary hover:text-brand-secondary hover:bg-brand-primary/10"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-brand-secondary hover:text-brand-primary hover:bg-brand-secondary/10"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <Button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white px-8">
                      View All {searchResults.totalEmails.toLocaleString()} Contacts
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Use Cases */}
      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              From sales prospecting to talent acquisition, Domain Intelligence powers success across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group bg-white border-gray-200 hover:border-brand-primary/30 transition-all duration-500 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 text-xl mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-700">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-brand-primary">{useCase.metrics}</div>
                    <div className="text-sm text-gray-600">Used by {useCase.companies} companies</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-700">
              Advanced AI technology delivering results in seconds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Domain Analysis",
                desc: "AI analyzes domain architecture, DNS records, and web presence patterns",
                icon: Target,
                color: "from-brand-primary to-blue-600"
              },
              {
                step: "02", 
                title: "Multi-Source Crawling",
                desc: "Searches across 200+ premium databases, social networks, and public records",
                icon: Database,
                color: "from-brand-success to-green-600"
              },
              {
                step: "03",
                title: "AI Verification",
                desc: "Machine learning validates emails with 98.7% accuracy and quality scoring",
                icon: Brain,
                color: "from-brand-secondary to-indigo-600"
              },
              {
                step: "04",
                title: "Enriched Results",
                desc: "Organized, exportable data with company insights and contact details",
                icon: Sparkles,
                color: "from-brand-purple to-purple-600"
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-brand-primary mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-10 -right-4 w-6 h-6 text-brand-primary/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Loved by Growth Teams Worldwide
            </h2>
            <p className="text-xl text-gray-700">
              See how industry leaders achieve breakthrough results with Domain Intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-brand-primary/30 transition-all duration-500 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Results */}
                    <div className="bg-brand-success/10 border border-brand-success/20 rounded-lg p-3">
                      <div className="text-brand-success font-semibold text-sm">Result:</div>
                      <div className="text-gray-900">{testimonial.results}</div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                        <div className="text-brand-primary text-xs">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-purple">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              Ready to Scale Your Outreach?
            </Badge>
            
            <h2 className="text-6xl font-bold text-white leading-tight">
              Start Finding Your Next
              <span className="block">
                Best Customers Today
              </span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join 10,000+ companies using Domain Intelligence to build better prospect lists, 
              find key decision makers, and accelerate their growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Button
                size="lg"
                asChild
                className="bg-white text-brand-primary hover:bg-gray-100 text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Link to="/signup">Start 14-Day Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-primary text-lg px-10 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-white/80 mt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>1,000 free searches</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
