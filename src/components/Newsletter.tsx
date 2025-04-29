
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been subscribed to our AI money-making newsletter!",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 px-4 gradient-bg text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Weekly AI Money-Making Opportunities
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Join 25,000+ subscribers who receive our weekly newsletter featuring the latest AI monetization strategies, tools, and high-paying opportunities. We'll send you actionable insights you won't find anywhere else.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/20 border-white/10 text-white placeholder:text-white/70"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              variant="secondary" 
              disabled={isLoading}
              className="whitespace-nowrap"
            >
              {isLoading ? "Subscribing..." : "Join Now"}
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-white/70">
            Join 25,000+ subscribers. Unsubscribe anytime with one click.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
