import { Button } from "@/components/ui/button";

interface MeditationGuidanceSectionProps {
  image: string;
}

export const MeditationGuidanceSection = ({ image }: MeditationGuidanceSectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-primary text-sm mb-1">About Meditation</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Anapanassati Meditation Guidance
          </h2>
          <Button>Join us</Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
            <img
              src={image}
              alt="Meditation Guidance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
