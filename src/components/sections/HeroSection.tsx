import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  backgroundImage: string;
}

export const HeroSection = ({ backgroundImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Global Meditation Connect"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Global Meditation Connect
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea...
          </p>
          <Button asChild variant="outline" className="rounded-full px-8">
            <Link to="/events">Join us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
