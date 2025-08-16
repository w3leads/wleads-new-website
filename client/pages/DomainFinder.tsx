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
} from "lucide-react";

export default function DomainFinder() {
  const [searchDomain, setSearchDomain] = useState("");
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleDomainSearch = async () => {
    if (!searchDomain) return;

    setIsSearching(true);

    // Simulate API call with demo data
    setTimeout(() => {
      setSearchResults({
        domain: searchDomain,
        companyName: "TechCorp Inc.",
        totalEmails: 1247,
        departments: 156,
        employees: "1,000-5,000",
        industry: "Technology",
        location: "San Francisco, CA",
        website: `https://${searchDomain}`,
        confidence: 98.5,
        emails: [
          {
            name: "John Smith",
            email: "john.smith@techcorp.com",
            department: "Engineering",
            role: "VP Engineering",
            verified: true,
          },
          {
            name: "Sarah Johnson",
            email: "sarah.johnson@techcorp.com",
            department: "Marketing",
            role: "Marketing Director",
            verified: true,
          },
          {
            name: "Mike Chen",
            email: "mike.chen@techcorp.com",
            department: "Sales",
            role: "Sales Manager",
            verified: true,
          },
          {
            name: "Emily Davis",
            email: "emily.davis@techcorp.com",
            department: "HR",
            role: "HR Business Partner",
            verified: false,
          },
          {
            name: "Robert Wilson",
            email: "robert.wilson@techcorp.com",
            department: "Engineering",
            role: "Senior Developer",
            verified: true,
          },
        ],
      });
      setIsSearching(false);
    }, 2000);
  };

  const testimonial = {
    name: "Alex Rodriguez",
    role: "Sales Director, GrowthCorp",
    content:
      "Domain Finder helped us discover 3,000+ prospects in our target market that we never knew existed. Our pipeline grew by 400%.",
    avatar: "AR",
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-purple opacity-90"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-success to-brand-purple rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-brand-success/20 text-brand-success border-brand-success">
                  Most Popular
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Domain{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-success to-white">
                  Finder
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Discover email addresses and company insights from any domain.
                Extract verified contacts, map organizational structure, and
                build comprehensive prospect lists with industry-leading
                accuracy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-brand-success hover:bg-brand-success/90 text-white text-lg px-8 py-6"
                >
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-primary text-lg px-8 py-6"
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="glass rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Try Domain Finder
                </h3>

                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter domain (e.g., techcorp.com)"
                      value={searchDomain}
                      onChange={(e) => setSearchDomain(e.target.value)}
                      className="flex-1"
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleDomainSearch()
                      }
                    />
                    <Button
                      onClick={handleDomainSearch}
                      disabled={isSearching || !searchDomain}
                      className="bg-brand-primary hover:bg-brand-primary/90"
                    >
                      {isSearching ? (
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                      ) : (
                        <Search className="w-4 h-4" />
                      )}
                    </Button>
                  </div>

                  {searchResults && (
                    <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-800">
                          {searchResults.companyName}
                        </h4>
                        <Badge className="bg-brand-success text-white">
                          {searchResults.confidence}% confidence
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-brand-primary">
                            {searchResults.totalEmails}
                          </div>
                          <div className="text-gray-600">Emails</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-brand-success">
                            {searchResults.departments}
                          </div>
                          <div className="text-gray-600">Departments</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-brand-purple">
                            {searchResults.employees}
                          </div>
                          <div className="text-gray-600">Employees</div>
                        </div>
                      </div>

                      <Button className="w-full bg-brand-success hover:bg-brand-success/90 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Export Results
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Benefits */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Domain Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get comprehensive insights about any company and discover verified
              contact information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass border-white/20 hover:border-brand-success/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-success to-brand-purple rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Advanced Search</CardTitle>
                <CardDescription className="text-gray-300">
                  Deep crawl technology finds hidden email patterns and contact
                  structures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Pattern recognition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Deep web crawling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Real-time updates
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 hover:border-brand-success/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-success rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Company Insights</CardTitle>
                <CardDescription className="text-gray-300">
                  Comprehensive company data including size, industry, and
                  location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Industry classification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Employee count
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Technology stack
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 hover:border-brand-success/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-secondary to-brand-purple rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Contact Mapping</CardTitle>
                <CardDescription className="text-gray-300">
                  Map organizational structure and identify key decision makers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Department mapping
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Role identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Hierarchy insights
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 hover:border-brand-success/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Verified Results</CardTitle>
                <CardDescription className="text-gray-300">
                  Every email is verified for deliverability and accuracy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Real-time verification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Bounce protection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-2" />
                    Quality scoring
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Results View */}
      {searchResults && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Detailed Search Results
              </h2>
              <p className="text-xl text-gray-300">
                Here's what Domain Finder discovered for {searchResults.domain}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Company Overview */}
              <Card className="glass border-white/20 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Building className="w-5 h-5 mr-2 text-brand-success" />
                    Company Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold">
                      {searchResults.companyName}
                    </h3>
                    <div className="flex items-center text-gray-300 text-sm mt-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      {searchResults.website}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Industry:</span>
                      <span className="text-white">
                        {searchResults.industry}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Employees:</span>
                      <span className="text-white">
                        {searchResults.employees}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Location:</span>
                      <span className="text-white flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {searchResults.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Confidence:</span>
                      <Badge className="bg-brand-success text-white">
                        {searchResults.confidence}%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Results */}
              <Card className="glass border-white/20 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-brand-success" />
                      Found Contacts ({searchResults.emails.length} of{" "}
                      {searchResults.totalEmails})
                    </div>
                    <Button
                      size="sm"
                      className="bg-brand-success hover:bg-brand-success/90 text-white"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Export All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {searchResults.emails.map((contact: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-white font-medium">
                              {contact.name}
                            </h4>
                            {contact.verified && (
                              <Badge className="bg-brand-success/20 text-brand-success border-brand-success text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm">
                            {contact.email}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {contact.department} • {contact.role}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-brand-success hover:text-brand-success/90"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white">
                      View All {searchResults.totalEmails} Contacts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How Domain Finder Works
            </h2>
            <p className="text-xl text-gray-300">
              Advanced technology for accurate results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Domain Analysis",
                desc: "AI analyzes domain structure and patterns",
                icon: Target,
              },
              {
                step: "2",
                title: "Deep Crawling",
                desc: "Searches across web sources and databases",
                icon: Search,
              },
              {
                step: "3",
                title: "Verification",
                desc: "Real-time email validation and scoring",
                icon: Shield,
              },
              {
                step: "4",
                title: "Results",
                desc: "Organized, exportable contact data",
                icon: BarChart3,
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-success to-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-brand-success mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-brand-success" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glass border-white/20 p-8">
            <CardContent className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-xl text-white italic">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Find Your Next Customers?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Start discovering verified contacts and company insights with Domain
            Finder
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
              View Pricing
            </Button>
          </div>

          <p className="text-gray-200 text-sm mt-6">
            14-day free trial • No credit card required • 1,000 free searches
          </p>
        </div>
      </section>
    </Layout>
  );
}
