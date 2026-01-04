import { MapPin, Heart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  status: "Upcoming" | "Open Registration";
}

interface FeaturedEventsSectionProps {
  events: Event[];
}

export const FeaturedEventsSection = ({ events }: FeaturedEventsSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-primary-foreground/80 text-sm mb-1">Events</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
              Feature Events
            </h2>
          </div>
          <Link
            to="/events"
            className="flex items-center gap-1 text-primary-foreground hover:opacity-80 transition-opacity"
          >
            View More <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {events.map((event) => (
              <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-card border-border overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                      <Badge 
                        className={event.status === "Open Registration" 
                          ? "bg-orange-500 text-white" 
                          : "bg-primary text-primary-foreground"
                        }
                      >
                        {event.status}
                      </Badge>
                      <button className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="text-center min-w-[50px]">
                        <div className="text-sm text-primary font-medium">FEB</div>
                        <div className="text-2xl font-bold text-foreground">14</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-primary mb-1">{event.time} · {event.date}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                          <MapPin className="w-3 h-3" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1" asChild>
                            <Link to="/events">View Details</Link>
                          </Button>
                          <Button size="sm" className="flex-1">Register</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious className="relative inset-auto translate-y-0 bg-primary-foreground/20 border-0 text-primary-foreground hover:bg-primary-foreground/30" />
            <CarouselNext className="relative inset-auto translate-y-0 bg-primary-foreground/20 border-0 text-primary-foreground hover:bg-primary-foreground/30" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
