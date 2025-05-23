
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/components/ui/use-toast';

type ContentItem = {
  title: string;
  description: string;
  date: string;
};

const AutoUpdatingAIContent = () => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  // Function to fetch new AI content
  const fetchAIContent = async () => {
    setLoading(true);
    try {
      // In a real implementation, this would be an API call to an AI service
      // For demo purposes, we're simulating AI-generated content
      const simulatedAIContent = [
        {
          title: "AI Art Generators Revenue Doubles in Q1 2025",
          description: "The latest market analysis shows AI art generation platforms have seen a 112% increase in revenue, creating opportunities for artists who adapt to these new tools.",
          date: new Date().toISOString(),
        },
        {
          title: "New ChatGPT Fine-Tuning API Slashes Costs by 60%",
          description: "OpenAI's latest update allows businesses to fine-tune models at significantly reduced costs, opening new possibilities for specialized AI applications.",
          date: new Date().toISOString(),
        },
        {
          title: "Voice Cloning Market Projected to Hit $8 Billion",
          description: "AI voice synthesis technologies are creating lucrative opportunities in audiobook creation, localization, and accessibility services for entrepreneurs.",
          date: new Date().toISOString(),
        },
      ];
      
      // Simulate API delay
      setTimeout(() => {
        setContent(simulatedAIContent);
        setLoading(false);
        setLastUpdated(new Date().toLocaleString());
        localStorage.setItem('aiContent', JSON.stringify(simulatedAIContent));
        localStorage.setItem('lastContentUpdate', new Date().toISOString());
        
        toast({
          title: "Content Updated",
          description: "Latest AI trends and opportunities have been refreshed.",
        });
      }, 1500);
      
    } catch (error) {
      console.error("Error fetching AI content:", error);
      setLoading(false);
      toast({
        title: "Update Failed",
        description: "Could not refresh AI content. Please try again later.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    // Check if we need to update content (once a week)
    const lastUpdate = localStorage.getItem('lastContentUpdate');
    const savedContent = localStorage.getItem('aiContent');
    
    const needsUpdate = () => {
      if (!lastUpdate) return true;
      
      const lastUpdateDate = new Date(lastUpdate);
      const currentDate = new Date();
      
      // Calculate difference in days
      const diffTime = currentDate.getTime() - lastUpdateDate.getTime();
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      
      return diffDays >= 7; // Update if it's been 7 days or more
    };
    
    if (savedContent && !needsUpdate()) {
      // Use cached content if it's less than a week old
      setContent(JSON.parse(savedContent));
      setLastUpdated(new Date(lastUpdate!).toLocaleString());
      setLoading(false);
    } else {
      // Fetch new content
      fetchAIContent();
    }
    
    // Set up weekly auto-update
    const weeklyInterval = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const updateInterval = setInterval(fetchAIContent, weeklyInterval);
    
    return () => clearInterval(updateInterval);
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">AI Trends</span> & Opportunities
          </h2>
          <div className="text-sm text-muted-foreground">
            {lastUpdated ? (
              <div className="flex flex-col items-end">
                <span>Last updated: {lastUpdated}</span>
                <button 
                  onClick={fetchAIContent}
                  className="text-primary hover:underline text-xs mt-1"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update now"}
                </button>
              </div>
            ) : (
              <span>Updating...</span>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            // Loading skeletons
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="h-full">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))
          ) : (
            // Actual content
            content.map((item, index) => (
              <Card key={index} className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default AutoUpdatingAIContent;
