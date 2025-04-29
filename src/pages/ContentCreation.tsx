
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ContentCreation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const caseStudies = [
    {
      title: "AI-Assisted Content Strategy",
      bestPractice: "Use AI tools for content ideation and planning.",
      caseStudy: "HubSpot's Content Strategy Tool",
      description: "HubSpot integrated AI into their content strategy tool to help marketers identify topics and keywords that are most likely to perform well. Users reported a 50% increase in organic traffic within six months of implementing AI-driven content strategies.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
    },
    {
      title: "AI for Research and Data Analysis",
      bestPractice: "Leverage AI to gather and analyze data for content creation.",
      caseStudy: "The Associated Press",
      description: "The Associated Press uses AI to analyze financial reports and generate news stories about company earnings. This has allowed them to increase their coverage from 300 companies to over 4,000 without significantly expanding their workforce.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    },
    {
      title: "AI-Powered Writing Assistance",
      bestPractice: "Use AI writing tools to improve efficiency and quality.",
      caseStudy: "Grammarly",
      description: "Grammarly's AI-powered writing assistant helps millions of users improve their writing. A study showed that 76% of Grammarly users reported increased writing confidence, and 99% of students saw improved grades.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path><path d="M14 2v4h4"></path><path d="M18 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path><path d="M18 14v1"></path><path d="M18 11v1"></path></svg>
    },
    {
      title: "AI for Content Personalization",
      bestPractice: "Utilize AI to tailor content to individual user preferences.",
      caseStudy: "Netflix",
      description: "Netflix uses AI algorithms to personalize content recommendations for each user. This AI-driven approach has been credited with saving the company $1 billion per year through increased customer retention.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><circle cx="12" cy="10" r="2"></circle><line x1="8" x2="8" y1="2" y2="4"></line><line x1="16" x2="16" y1="2" y2="4"></line></svg>
    },
    {
      title: "AI in Visual Content Creation",
      bestPractice: "Incorporate AI-generated or AI-enhanced visuals in your content.",
      caseStudy: "Coca-Cola's AI-Generated Ad",
      description: "Coca-Cola used AI to create an ad for its Sprite brand. The AI analyzed thousands of existing ads to generate a new, unique advertisement. The campaign resulted in a 6% increase in sales and a 22% increase in brand awareness.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
    },
    {
      title: "AI for Content Optimization",
      bestPractice: "Use AI tools to optimize content for search engines and user engagement.",
      caseStudy: "The Washington Post's Heliograf",
      description: "The Washington Post uses Heliograf, an AI system, to generate and optimize short reports and social media posts. In its first year, Heliograf produced approximately 850 articles and generated over 500,000 clicks.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg>
    },
    {
      title: "AI-Assisted Video Content",
      bestPractice: "Leverage AI for video creation, editing, and optimization.",
      caseStudy: "YouTube's AI-Powered Thumbnails",
      description: "YouTube uses AI to generate and test multiple thumbnails for videos. Creators using this feature have seen up to a 20% increase in click-through rates.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18 6-6-6-6"></path><path d="M3 6v12"></path></svg>
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Content Creation Using AI: <span className="gradient-text">Best Practices and Case Studies</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Discover how leading companies are leveraging AI to create better content faster, 
              increase engagement, and drive significant business results.
            </p>
            <Button onClick={() => scrollToSection('case-studies')} className="gradient-bg text-white">
              Explore Case Studies
            </Button>
          </div>

          <div id="case-studies" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {study.icon}
                    </div>
                    <CardTitle>{study.title}</CardTitle>
                  </div>
                  <CardDescription className="font-medium text-base text-primary">
                    {study.bestPractice}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-bold mb-2">Case Study: {study.caseStudy}</h4>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 p-6 border rounded-xl bg-card shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <div className="text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p>AI is a powerful tool for enhancing content creation, but it should not replace human creativity and expertise.</p>
              </li>
              <li className="flex gap-3">
                <div className="text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p>The most successful applications of AI in content creation involve a symbiotic relationship between AI and human creators.</p>
              </li>
              <li className="flex gap-3">
                <div className="text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p>AI can significantly improve efficiency, allowing content creators to focus on higher-level strategy and creativity.</p>
              </li>
              <li className="flex gap-3">
                <div className="text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p>Ethical considerations and transparency about AI use are crucial for maintaining audience trust.</p>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t">
              <p className="italic">Remember, while AI can greatly assist in content creation, the most valuable content still requires human insight, creativity, and expertise. The goal should be to use AI as a tool to enhance your content creation process, not to replace human involvement entirely.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Creating AI-Powered Content?</h3>
            <p className="text-muted-foreground mb-6">Explore our monetization methods and resources to learn how you can leverage AI for content creation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={() => scrollToSection('newsletter')}>
                Subscribe for Updates
              </Button>
              <Button className="gradient-bg text-white" asChild>
                <a href="/">
                  Explore Monetization Methods <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div id="newsletter">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default ContentCreation;
