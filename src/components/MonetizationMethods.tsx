
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type MethodCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  examples: string[];
  monthlyPotential: string;
};

const MethodCard = ({ title, description, icon, examples, monthlyPotential }: MethodCardProps) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-medium mb-2 text-sm">Examples:</h4>
        <ul className="space-y-1 mb-4">
          {examples.map((example, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
        <div className="text-sm mt-3 pt-3 border-t border-border">
          <span className="font-medium">Monthly Potential:</span>{" "}
          <span className="text-primary font-medium">{monthlyPotential}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const MonetizationMethods = () => {
  const methods = [
    {
      title: "Content Creation",
      description: "Use AI to create valuable content faster than ever before.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"></path><path d="M18 13V5"></path><path d="M6 13V5"></path><path d="M18 9h-6"></path><path d="M12 17H6"></path></svg>,
      examples: [
        "Write and sell AI-assisted blog posts, articles and newsletters",
        "Create and sell AI-generated art, designs, and digital assets",
        "Produce and sell AI-enhanced videos and courses",
        "Develop AI-written e-books and specialized guides"
      ],
      monthlyPotential: "$1,500 - $15,000"
    },
    {
      title: "AI Services",
      description: "Offer specialized AI-powered services to clients and businesses.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>,
      examples: [
        "Develop custom AI chatbots for businesses ($500-$10,000 per project)",
        "Offer AI-powered content editing and optimization services",
        "Provide AI research and data analysis as a service",
        "Create personalized AI assistants for executives and teams"
      ],
      monthlyPotential: "$3,000 - $30,000"
    },
    {
      title: "SaaS Products",
      description: "Build and sell software products with integrated AI capabilities.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="M2 8h20"></path><path d="M6 16h.01"></path><path d="M10 16h.01"></path></svg>,
      examples: [
        "Build niche AI tools for specific industries (e.g., AI for real estate)",
        "Develop AI-powered productivity apps with subscription models",
        "Create AI-enhanced marketing automation tools for businesses",
        "Launch specialized AI writing or image generation platforms"
      ],
      monthlyPotential: "$5,000 - $100,000+"
    },
    {
      title: "Education & Training",
      description: "Share your AI knowledge through courses and training programs.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 8 10 5 10-5"></path><path d="m2 20 10-5 10 5"></path><path d="M2 14h20"></path></svg>,
      examples: [
        "Create and sell comprehensive AI courses ($99-$999 per enrollment)",
        "Host live AI workshops and training sessions ($1000+ per event)",
        "Offer one-on-one AI coaching services ($100-$500 per hour)",
        "Write technical tutorials and premium guides on AI implementation"
      ],
      monthlyPotential: "$2,000 - $50,000"
    },
    {
      title: "AI Consulting",
      description: "Help businesses integrate and leverage AI in their operations.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>,
      examples: [
        "Provide AI implementation strategies for businesses ($10,000+ per contract)",
        "Offer AI audits and optimization recommendations",
        "Develop AI roadmaps for digital transformation projects",
        "Guide companies in ethical AI adoption and compliance"
      ],
      monthlyPotential: "$10,000 - $50,000+"
    },
    {
      title: "Affiliate Marketing",
      description: "Promote AI tools and earn commissions on sales or referrals.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4 7.55 4.24"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>,
      examples: [
        "Review and promote top AI tools with high-commission affiliate programs",
        "Create detailed comparison content for AI products (15-50% commissions)",
        "Build niche sites focused on AI tools for specific industries",
        "Start a YouTube channel reviewing premium AI applications"
      ],
      monthlyPotential: "$1,000 - $25,000"
    }
  ];

  return (
    <section id="methods" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            6 Proven Ways to <span className="gradient-text">Make Money with AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore these effective strategies to start generating income using artificial intelligence in 2025. Each method offers unique opportunities based on your skills and interests.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <MethodCard 
              key={index}
              title={method.title}
              description={method.description}
              icon={method.icon}
              examples={method.examples}
              monthlyPotential={method.monthlyPotential}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonetizationMethods;
