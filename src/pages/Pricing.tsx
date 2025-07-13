import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Home,
  Check,
  X,
  MessageSquare,
  FileText,
  Users,
  Zap,
  Star,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for landlords with 1-3 units",
      monthlyPrice: 29,
      annualPrice: 290,
      color: "border-slate-200 bg-white",
      headerColor: "bg-slate-50",
      buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white",
      popular: false,
      features: [
        { name: "Up to 3 rental units", included: true },
        { name: "Auto-generated listings", included: true },
        { name: "Basic message responses", included: true },
        { name: "Email support", included: true },
        { name: "Monthly usage reports", included: true },
        { name: "Smart tenant screening", included: false },
        { name: "Advanced AI responses", included: false },
        { name: "Priority support", included: false },
        { name: "Custom integrations", included: false },
      ],
    },
    {
      name: "Professional",
      description: "Ideal for landlords with 4-8 units",
      monthlyPrice: 79,
      annualPrice: 790,
      color: "border-stayll-blue bg-white ring-2 ring-stayll-blue",
      headerColor: "bg-stayll-blue text-white",
      buttonStyle: "bg-stayll-blue hover:bg-stayll-blue/90 text-white",
      popular: true,
      features: [
        { name: "Up to 8 rental units", included: true },
        { name: "Auto-generated listings", included: true },
        { name: "Advanced AI message responses", included: true },
        { name: "Smart tenant screening", included: true },
        { name: "Priority email support", included: true },
        { name: "Weekly usage reports", included: true },
        { name: "Platform integrations", included: true },
        { name: "Custom screening criteria", included: true },
        { name: "Phone support", included: false },
      ],
    },
    {
      name: "Enterprise",
      description: "For landlords with 9+ units or property managers",
      monthlyPrice: 149,
      annualPrice: 1490,
      color: "border-stayll-green bg-white",
      headerColor: "bg-stayll-green text-white",
      buttonStyle: "bg-stayll-green hover:bg-stayll-green/90 text-white",
      popular: false,
      features: [
        { name: "Unlimited rental units", included: true },
        { name: "Auto-generated listings", included: true },
        { name: "Advanced AI message responses", included: true },
        { name: "Smart tenant screening", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Daily usage reports", included: true },
        { name: "All platform integrations", included: true },
        { name: "Custom AI training", included: true },
        { name: "Dedicated account manager", included: true },
      ],
    },
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.",
    },
    {
      question: "What happens if I exceed my unit limit?",
      answer:
        "We'll notify you when you're approaching your limit. You can either upgrade to a higher plan or pay a small overage fee of $5 per additional unit per month.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! All new users get a 14-day free trial on any plan. No credit card required to start.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer:
        "Absolutely! Annual billing gives you 2 months free (about 17% savings) compared to monthly billing.",
    },
    {
      question: "What's included in the AI message responses?",
      answer:
        "Our AI handles common inquiries about rent, availability, showings, and property details. Professional and Enterprise plans include more sophisticated responses and context awareness.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-stayll-blue to-stayll-green rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">Stayll</span>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your rental property portfolio. Start
            with a 14-day free trial, no credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span
              className={`mr-3 text-sm font-medium ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-stayll-blue focus:ring-offset-2 ${
                isAnnual ? "bg-stayll-blue" : "bg-slate-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`ml-3 text-sm font-medium ${isAnnual ? "text-slate-900" : "text-slate-500"}`}
            >
              Annual
            </span>
            {isAnnual && (
              <Badge className="ml-3 bg-stayll-green-light text-stayll-green border-stayll-green">
                Save 17%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.color} overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-stayll-blue text-white border-stayll-blue px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className={`p-6 ${plan.headerColor}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p
                    className={`text-sm ${plan.popular ? "text-white/90" : "text-slate-600"} mb-4`}
                  >
                    {plan.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      $
                      {isAnnual
                        ? Math.floor(plan.annualPrice / 12)
                        : plan.monthlyPrice}
                    </span>
                    <span
                      className={`ml-1 text-sm ${plan.popular ? "text-white/90" : "text-slate-600"}`}
                    >
                      /month
                    </span>
                  </div>
                  {isAnnual && (
                    <p
                      className={`text-xs ${plan.popular ? "text-white/75" : "text-slate-500"} mt-1`}
                    >
                      Billed annually at ${plan.annualPrice}
                    </p>
                  )}
                </div>

                <div className="p-6">
                  <Button
                    className={`w-full mb-6 ${plan.buttonStyle}`}
                    size="lg"
                  >
                    Start Free Trial
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-stayll-green mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-slate-300 mr-3 flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm ${feature.included ? "text-slate-900" : "text-slate-500"}`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Everything you need to automate your rentals
            </h2>
            <p className="text-xl text-slate-600">
              All plans include our core AI automation features
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-stayll-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-stayll-blue" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Smart Listings
              </h3>
              <p className="text-slate-600 text-sm">
                AI-generated property descriptions that convert browsers into
                renters
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-stayll-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-stayll-green" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                24/7 AI Assistant
              </h3>
              <p className="text-slate-600 text-sm">
                Never miss an inquiry with intelligent automated responses
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-stayll-blue-light to-stayll-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-stayll-blue" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Tenant Screening
              </h3>
              <p className="text-slate-600 text-sm">
                Automated background checks and application processing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Multi-Platform
              </h3>
              <p className="text-slate-600 text-sm">
                Post and manage listings across all major rental platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-stayll-blue to-stayll-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to automate your rental business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-stayll-blue hover:bg-slate-50 font-semibold px-8"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold px-8"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-stayll-blue to-stayll-green rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Stayll</span>
            </div>

            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link
                to="/"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            <p className="text-slate-400 text-sm">
              © 2024 Stayll. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
