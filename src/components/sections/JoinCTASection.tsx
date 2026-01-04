import { Mail, BarChart3, Headphones, Code } from "lucide-react";

export const JoinCTASection = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Join Global Meditation Connect today
            </h2>
            <p className="text-primary-foreground/80 text-sm">
              🌍 Together with 10,000+ members throughout the world
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center text-primary-foreground">
              <Mail className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center text-primary-foreground">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center text-primary-foreground">
              <Headphones className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center text-primary-foreground">
              <Code className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
