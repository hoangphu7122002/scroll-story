import { Button } from "@/components/ui/button";

interface Mission {
  title: string;
  location: string;
  image: string;
  description: string;
}

interface MissionsSectionProps {
  missions: Mission[];
}

export const MissionsSection = ({ missions }: MissionsSectionProps) => {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <h2 className="font-heading text-3xl lg:text-4xl font-medium text-center mb-16 animate-fade-in">
          The Great Missions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {missions.map((mission, index) => (
            <div 
              key={mission.location}
              className="bg-card text-card-foreground rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <img
                src={mission.image}
                alt={mission.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl text-foreground">
                  {mission.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Read more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
