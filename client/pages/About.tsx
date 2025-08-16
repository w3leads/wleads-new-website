import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import {
  Users,
  Target,
  Award,
  Globe,
  Zap,
  Shield,
  Heart,
  Lightbulb,
  CheckCircle,
  Calendar,
  TrendingUp,
  Mail,
  MessageSquare,
} from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to revolutionize B2B lead generation",
      icon: Lightbulb,
    },
    {
      year: "2020",
      title: "First 1M Emails Verified",
      description: "Achieved our first major milestone in email verification",
      icon: Mail,
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded operations to serve customers worldwide",
      icon: Globe,
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Launched AI-powered lead scoring and matching",
      icon: Zap,
    },
    {
      year: "2023",
      title: "Enterprise Ready",
      description: "Introduced enterprise-grade security and compliance",
      icon: Shield,
    },
    {
      year: "2024",
      title: "50M+ Emails Verified",
      description: "Reached 50 million verified emails and 10,000+ customers",
      icon: TrendingUp,
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Sales at HubSpot with 15+ years in B2B sales and marketing technology.",
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "Ex-Google engineer specializing in data infrastructure and machine learning systems.",
      avatar: "MR",
    },
    {
      name: "Emily Johnson",
      role: "VP of Engineering",
      bio: "Former engineering lead at Salesforce, expert in scalable SaaS platforms.",
      avatar: "EJ",
    },
    {
      name: "David Kim",
      role: "VP of Product",
      bio: "Product strategist with 12+ years building user-centric B2B solutions.",
      avatar: "DK",
    },
    {
      name: "Lisa Zhang",
      role: "VP of Customer Success",
      bio: "Customer experience leader focused on driving measurable business outcomes.",
      avatar: "LZ",
    },
    {
      name: "James Wilson",
      role: "VP of Sales",
      bio: "Sales veteran with a track record of scaling revenue from $1M to $100M+.",
      avatar: "JW",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make starts with how it benefits our customers and their success.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We protect customer data with enterprise-grade security and transparent practices.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously push boundaries to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe diverse teams and perspectives drive the best outcomes.",
    },
  ];

  const stats = [
    { label: "Customers Worldwide", value: "10,000+", icon: Users },
    { label: "Emails Verified", value: "50M+", icon: Mail },
    { label: "Countries Served", value: "150+", icon: Globe },
    { label: "Team Members", value: "200+", icon: Heart },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-purple/10 dark:from-brand-primary dark:via-brand-secondary dark:to-brand-purple dark:opacity-90"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">W3Leads</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto">
            We're on a mission to revolutionize B2B lead generation with advanced technology, 
            helping sales teams discover, verify, and engage with qualified prospects at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white text-lg px-8 py-6 shadow-lg">
              <Link to="/signup">Join Our Mission</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-primary text-lg px-8 py-6">
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                To empower sales teams worldwide with the most accurate and comprehensive B2B data platform, 
                enabling them to build meaningful connections and drive sustainable growth.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We believe that quality data is the foundation of successful sales and marketing efforts. 
                Our advanced technology ensures every interaction is backed by verified, up-to-date information.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                To become the global standard for B2B lead generation and data intelligence, 
                making high-quality prospect data accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We envision a world where sales teams spend less time searching for prospects 
                and more time building relationships that drive mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Our growth reflects the trust our customers place in us
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card border-gray-200 dark:border-white/20 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-brand-primary dark:text-white">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card border-gray-200 dark:border-white/20 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Key milestones that shaped our growth
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                    <milestone.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge className="bg-brand-primary text-white">
                      {milestone.year}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              The brilliant minds behind W3Leads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass-card border-gray-200 dark:border-white/20">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{member.avatar}</span>
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-brand-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
            Join thousands of companies that rely on W3Leads for their lead generation needs
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 mb-12">
            {["TechCorp", "StartupXYZ", "Scale Inc", "Growth Co", "Lead Gen", "Sales Pro"].map((company) => (
              <div key={company} className="text-gray-700 dark:text-white font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-brand-success" />
              <span className="text-gray-700 dark:text-gray-300">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-brand-success" />
              <span className="text-gray-700 dark:text-gray-300">GDPR Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-brand-success" />
              <span className="text-gray-700 dark:text-gray-300">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-purple/10 dark:from-brand-primary dark:via-brand-secondary dark:to-brand-purple dark:opacity-90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Ready to Transform Your Lead Generation?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
            Join the W3Leads community and discover why thousands of sales teams trust us with their success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white text-lg px-8 py-6 shadow-lg">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-primary text-lg px-8 py-6">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-6">
            14-day free trial • No credit card required • Full feature access
          </p>
        </div>
      </section>
    </Layout>
  );
}
