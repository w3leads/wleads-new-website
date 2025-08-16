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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import Layout from "@/components/Layout";
import {
  CheckCircle,
  X,
  Star,
  Users,
  Zap,
  Shield,
  Headphones,
  Crown,
  ArrowRight,
  Calculator,
  TrendingUp,
  Target,
  Mail,
  Globe,
  BarChart3,
  MessageSquare,
} from "lucide-react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description:
        "Perfect for small teams getting started with lead generation",
      monthlyPrice: 29,
      yearlyPrice: 24,
      monthlyCredits: 1000,
      yearlyCredits: 1200,
      features: [
        "1,000 email verifications/month",
        "Basic domain search",
        "Email finder",
        "CSV export",
        "Email support",
        "Basic integrations",
        "Standard API access",
      ],
      limitations: [
        "Limited to 2 team members",
        "Basic search filters",
        "Standard support",
      ],
      recommended: false,
      ctaText: "Start Free Trial",
      icon: Target,
    },
    {
      name: "Professional",
      description:
        "Ideal for growing teams that need advanced features and higher limits",
      monthlyPrice: 99,
      yearlyPrice: 79,
      monthlyCredits: 10000,
      yearlyCredits: 12000,
      features: [
        "10,000 email verifications/month",
        "Advanced domain search",
        "Email finder & verifier",
        "Bulk processing",
        "Campaign automation",
        "Priority support",
        "All integrations",
        "Advanced API access",
        "Real-time verification",
        "Custom fields",
        "Team collaboration",
      ],
      limitations: ["Up to 10 team members"],
      recommended: true,
      ctaText: "Start Free Trial",
      icon: Zap,
    },
    {
      name: "Enterprise",
      description:
        "For large organizations requiring unlimited access and premium support",
      monthlyPrice: null,
      yearlyPrice: null,
      monthlyCredits: "Unlimited",
      yearlyCredits: "Unlimited",
      features: [
        "Unlimited email verifications",
        "White-label options",
        "Custom integrations",
        "Dedicated support manager",
        "Advanced analytics",
        "SLA guarantees",
        "Custom onboarding",
        "Bulk data processing",
        "Advanced security",
        "Audit logs",
        "SSO integration",
        "Custom reporting",
        "Priority feature requests",
      ],
      limitations: [],
      recommended: false,
      ctaText: "Contact Sales",
      icon: Crown,
    },
  ];

  const addOns = [
    {
      name: "Extra Email Verifications",
      description: "Additional email verification credits when you need more",
      price: "$5 per 1,000 credits",
      icon: Mail,
    },
    {
      name: "Premium Support",
      description: "24/7 phone support with dedicated success manager",
      price: "$299/month",
      icon: Headphones,
    },
    {
      name: "Custom Integrations",
      description: "Build custom integrations with our development team",
      price: "Starting at $2,500",
      icon: Zap,
    },
    {
      name: "Data Enrichment",
      description:
        "Enhanced contact data with social profiles and company insights",
      price: "$0.10 per contact",
      icon: Users,
    },
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer:
        "You get 14 days of full access to all Professional plan features with 500 free verification credits. No credit card required to start.",
    },
    {
      question: "What happens if I exceed my monthly limit?",
      answer:
        "Your account will pause verification services until the next billing cycle. You can purchase additional credits or upgrade your plan to continue.",
    },
    {
      question: "Can I change plans anytime?",
      answer:
        "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the next billing cycle.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for all paid plans. Contact support for a full refund within 30 days.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we're SOC 2 compliant and use enterprise-grade security measures. All data is encrypted in transit and at rest.",
    },
    {
      question: "Do you offer volume discounts?",
      answer:
        "Yes, Enterprise customers can get custom pricing based on volume. Contact our sales team for a personalized quote.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales, TechCorp",
      content:
        "W3Leads Professional plan helped us increase our qualified leads by 340% while staying within budget.",
      avatar: "SJ",
      plan: "Professional",
    },
    {
      name: "Mike Chen",
      role: "Marketing Director, StartupXYZ",
      content:
        "The ROI from our W3Leads investment was clear within the first month. Best lead gen tool we've used.",
      avatar: "MC",
      plan: "Starter",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Growth, Scale Inc",
      content:
        "Enterprise features like white-labeling and unlimited verifications transformed our agency operations.",
      avatar: "ER",
      plan: "Enterprise",
    },
  ];

  const getPrice = (plan: (typeof plans)[0]) => {
    if (plan.monthlyPrice === null) return "Custom";
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  };

  const getCredits = (plan: (typeof plans)[0]) => {
    return isYearly ? plan.yearlyCredits : plan.monthlyCredits;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-purple/10 dark:from-brand-primary dark:via-brand-secondary dark:to-brand-purple dark:opacity-90"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Simple,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Transparent
            </span>{" "}
            Pricing
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your team. Start with a 14-day free
            trial, then scale as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span
              className={`text-lg font-medium ${!isYearly ? "text-brand-primary" : "text-gray-600 dark:text-gray-400"}`}
            >
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-brand-primary"
            />
            <span
              className={`text-lg font-medium ${isYearly ? "text-brand-primary" : "text-gray-600 dark:text-gray-400"}`}
            >
              Yearly
            </span>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Save 20%
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`glass-card relative ${
                  plan.recommended
                    ? "border-brand-primary shadow-xl scale-105 z-10"
                    : "border-gray-200 dark:border-white/20"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-brand-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plan.recommended
                        ? "bg-gradient-to-r from-brand-primary to-brand-secondary"
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}
                  >
                    <plan.icon
                      className={`w-8 h-8 ${
                        plan.recommended
                          ? "text-white"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    />
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </CardDescription>

                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {typeof getPrice(plan) === "number" ? (
                        <>
                          ${getPrice(plan)}
                          <span className="text-lg text-gray-600 dark:text-gray-400 font-normal">
                            /{isYearly ? "year" : "month"}
                          </span>
                        </>
                      ) : (
                        <span className="text-2xl">Custom</span>
                      )}
                    </div>
                    {isYearly && typeof plan.monthlyPrice === "number" && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        ${plan.monthlyPrice}/month billed annually
                      </div>
                    )}
                    <div className="text-brand-primary font-semibold mt-2">
                      {getCredits(plan)}{" "}
                      {typeof getCredits(plan) === "string"
                        ? ""
                        : "verifications/month"}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <Button
                    asChild
                    className={`w-full mb-6 ${
                      plan.recommended
                        ? "bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Link
                      to={plan.name === "Enterprise" ? "/contact" : "/signup"}
                    >
                      {plan.ctaText}
                    </Link>
                  </Button>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Features included:
                    </h4>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}

                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                          Limitations:
                        </h4>
                        {plan.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {limitation}
                            </span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Add-ons & Extras
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Enhance your plan with additional features and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card
                key={index}
                className="glass-card border-gray-200 dark:border-white/20 text-center"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <addon.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white text-lg mb-2">
                    {addon.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {addon.description}
                  </CardDescription>
                  <div className="text-brand-primary font-bold">
                    {addon.price}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              See how W3Leads can impact your revenue
            </p>
          </div>

          <Card className="glass-card border-gray-200 dark:border-white/20 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Calculator className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  20+ Hours
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Saved per week on manual prospecting
                </p>
              </div>
              <div>
                <TrendingUp className="w-12 h-12 text-brand-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  340%
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Average increase in qualified leads
                </p>
              </div>
              <div>
                <BarChart3 className="w-12 h-12 text-brand-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  850%
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Average ROI in first quarter
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Real results from real customers across all plan tiers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass-card border-gray-200 dark:border-white/20"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-900 dark:text-white text-center italic mb-4">
                    "{testimonial.content}"
                  </blockquote>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="text-gray-900 dark:text-white font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">
                    {testimonial.plan} Plan
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="glass-card border-gray-200 dark:border-white/20"
              >
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Still have questions?
            </p>
            <Button
              variant="outline"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-purple/10 dark:from-brand-primary dark:via-brand-secondary dark:to-brand-purple dark:opacity-90">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-16 h-16 text-brand-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Need Something Custom?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
            Large organization? Custom requirements? Our Enterprise team can
            create a tailored solution that fits your exact needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white text-lg px-8 py-6 shadow-lg"
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-primary text-lg px-8 py-6"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm mt-6">
            Custom pricing • Dedicated support • SLA guarantees
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Join thousands of sales teams who trust W3Leads for their lead
            generation needs
          </p>

          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white text-lg px-12 py-6 shadow-lg"
          >
            <Link to="/signup">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <p className="text-gray-600 dark:text-gray-300 text-sm mt-6">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </Layout>
  );
}
