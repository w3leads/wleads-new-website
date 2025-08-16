import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Target,
  Mail,
  Shield,
  Zap,
  BarChart3,
  Filter,
  Clock,
  Eye,
  MessageSquare,
  Share2,
  BookOpen,
} from "lucide-react";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Lead Generation", "Email Marketing", "Sales Strategy", "Technology", "Case Studies"];

  const featuredPost = {
    id: 1,
    title: "The Complete Guide to B2B Lead Generation in 2024",
    excerpt: "Discover the latest strategies, tools, and best practices that are driving successful B2B lead generation campaigns in today's digital landscape.",
    content: "A comprehensive deep-dive into modern lead generation techniques that convert.",
    author: "Sarah Chen",
    authorRole: "CEO & Co-Founder",
    authorAvatar: "SC",
    date: "March 18, 2024",
    readTime: "12 min read",
    category: "Lead Generation",
    image: "🎯",
    featured: true,
    views: "12.5K",
    comments: 45,
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 Email Verification Best Practices for 2024",
      excerpt: "Learn the latest techniques to improve your email deliverability and reduce bounce rates with our comprehensive verification guide.",
      author: "Michael Rodriguez",
      authorRole: "CTO",
      authorAvatar: "MR",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Email Marketing",
      image: "📧",
      views: "8.2K",
      comments: 32,
    },
    {
      id: 3,
      title: "How AI is Revolutionizing Lead Qualification",
      excerpt: "Explore how artificial intelligence and machine learning are transforming the way sales teams identify and qualify prospects.",
      author: "Emily Johnson",
      authorRole: "VP of Engineering",
      authorAvatar: "EJ",
      date: "March 12, 2024",
      readTime: "10 min read",
      category: "Technology",
      image: "🤖",
      views: "9.7K",
      comments: 28,
    },
    {
      id: 4,
      title: "From 0 to $1M ARR: A Lead Generation Case Study",
      excerpt: "See how StartupXYZ used W3Leads to scale from zero to $1M in annual recurring revenue in just 18 months.",
      author: "David Kim",
      authorRole: "VP of Product",
      authorAvatar: "DK",
      date: "March 10, 2024",
      readTime: "15 min read",
      category: "Case Studies",
      image: "📈",
      views: "15.3K",
      comments: 67,
    },
    {
      id: 5,
      title: "Building High-Converting Email Sequences",
      excerpt: "Master the art of email sequence creation with proven templates and strategies that drive engagement and conversions.",
      author: "Lisa Zhang",
      authorRole: "VP of Customer Success",
      authorAvatar: "LZ",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Email Marketing",
      image: "✉️",
      views: "6.8K",
      comments: 24,
    },
    {
      id: 6,
      title: "The Psychology of B2B Decision Making",
      excerpt: "Understand the psychological factors that influence B2B purchase decisions and how to align your sales approach accordingly.",
      author: "James Wilson",
      authorRole: "VP of Sales",
      authorAvatar: "JW",
      date: "March 5, 2024",
      readTime: "11 min read",
      category: "Sales Strategy",
      image: "🧠",
      views: "11.2K",
      comments: 43,
    },
    {
      id: 7,
      title: "Data Privacy and GDPR Compliance in Lead Generation",
      excerpt: "Navigate the complex landscape of data privacy regulations while maintaining effective lead generation practices.",
      author: "Sarah Chen",
      authorRole: "CEO & Co-Founder",
      authorAvatar: "SC",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "Technology",
      image: "🔒",
      views: "7.4K",
      comments: 19,
    },
    {
      id: 8,
      title: "Maximizing ROI with Account-Based Marketing",
      excerpt: "Learn how to implement account-based marketing strategies that deliver measurable results and higher conversion rates.",
      author: "Michael Rodriguez",
      authorRole: "CTO",
      authorAvatar: "MR",
      date: "February 28, 2024",
      readTime: "13 min read",
      category: "Sales Strategy",
      image: "🎯",
      views: "10.1K",
      comments: 35,
    },
    {
      id: 9,
      title: "The Future of Sales Technology",
      excerpt: "Explore emerging trends and technologies that will shape the future of sales and lead generation in the next decade.",
      author: "Emily Johnson",
      authorRole: "VP of Engineering",
      authorAvatar: "EJ",
      date: "February 25, 2024",
      readTime: "14 min read",
      category: "Technology",
      image: "🚀",
      views: "13.6K",
      comments: 52,
    },
  ];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const searchFilteredPosts = searchQuery
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredPosts;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-purple/10 dark:from-brand-primary dark:via-brand-secondary dark:to-brand-purple dark:opacity-90"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            W3Leads <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Blog</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto">
            Insights, strategies, and best practices for modern B2B lead generation, 
            email marketing, and sales success.
          </p>
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Article</h2>
            <p className="text-gray-600 dark:text-gray-400">Our most popular and impactful content</p>
          </div>
          
          <Card className="glass-card border-gray-200 dark:border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">{featuredPost.image}</div>
                  <Badge className="bg-white/20 text-white border-white/30">
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{featuredPost.authorAvatar}</span>
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-medium">{featuredPost.author}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">{featuredPost.authorRole}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {featuredPost.views}
                    </span>
                    <span className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {featuredPost.comments}
                    </span>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-brand-primary text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Latest Articles</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Stay updated with the latest insights and strategies
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          {searchFilteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchFilteredPosts.map((post) => (
                <Card key={post.id} className="glass-card border-gray-200 dark:border-white/20 hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">
                        {post.category}
                      </Badge>
                      <div className="text-4xl">{post.image}</div>
                    </div>
                    
                    <CardTitle className="text-gray-900 dark:text-white group-hover:text-brand-primary transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">{post.authorAvatar}</span>
                      </div>
                      <div>
                        <div className="text-gray-900 dark:text-white font-medium text-sm">{post.author}</div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs">{post.authorRole}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {post.views}
                        </span>
                        <span className="flex items-center">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          {post.comments}
                        </span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-brand-primary hover:text-brand-primary/80 p-0">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="mt-4">
                      <Button variant="outline" className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {searchFilteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-purple/10 dark:from-brand-primary dark:via-brand-secondary dark:to-brand-purple dark:opacity-90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
            Get the latest B2B lead generation strategies, case studies, and industry insights 
            delivered directly to your inbox every week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
            <Input
              placeholder="Enter your email address"
              className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            />
            <Button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white px-8">
              Subscribe
            </Button>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Join 25,000+ sales professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Put These Strategies to Work?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Start generating high-quality B2B leads today with W3Leads' advanced platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white text-lg px-8 py-6 shadow-lg">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-lg px-8 py-6">
              <Link to="/products/domain-finder">Explore Features</Link>
            </Button>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-6">
            14-day free trial • No credit card required • Access to all features
          </p>
        </div>
      </section>
    </Layout>
  );
}
