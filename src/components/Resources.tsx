
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "Ultimate AI Tools Directory 2025",
      description: "A comprehensive list of 250+ AI tools and platforms you can use or promote, organized by monetization potential.",
      link: "#",
      category: "Directory"
    },
    {
      title: "AI Monetization Masterclass",
      description: "Our premium guide to building, marketing and scaling AI-powered income streams from scratch.",
      link: "#",
      category: "Premium Course"
    },
    {
      title: "AI Business Models Canvas Pack",
      description: "15 ready-to-use templates to help you structure your AI business for maximum profitability.",
      link: "#",
      category: "Templates"
    },
    {
      title: "AI Product Launch Playbook",
      description: "Step-by-step guide to successfully launching AI-powered products and services with proven marketing strategies.",
      link: "#",
      category: "Guide"
    },
    {
      title: "50 Real AI Income Case Studies",
      description: "Detailed analysis of real people making $5,000 to $50,000+ monthly with various AI technologies.",
      link: "#",
      category: "Case Studies"
    },
    {
      title: "Legal & Ethical AI Business Guide",
      description: "Critical legal considerations for AI businesses including copyright, data privacy, and compliance with emerging regulations.",
      link: "#",
      category: "Legal"
    }
  ];

  return (
    <section id="resources" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Valuable <span className="gradient-text">Resources</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access these premium resources to accelerate your journey toward AI-powered income. From practical guides to ready-to-use templates, we've got everything you need to succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary/10 text-secondary">
                    {resource.category}
                  </span>
                </div>
                <CardTitle className="mt-3">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href={resource.link}>
                    Access Resource <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
