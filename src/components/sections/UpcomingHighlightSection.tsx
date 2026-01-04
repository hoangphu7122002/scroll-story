import { useState, useEffect } from "react";
import { MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface UpcomingHighlightSectionProps {
  eventImage: string;
}

export const UpcomingHighlightSection = ({ eventImage }: UpcomingHighlightSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 49,
    hours: 23,
    mins: 52,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          mins--;
        }
        if (mins < 0) {
          mins = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          return { days: 0, hours: 0, mins: 0, seconds: 0 };
        }
        return { days, hours, mins, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 -mt-32 relative z-10">
      <div className="container mx-auto px-4">
        <Card className="bg-card/95 backdrop-blur-sm border-border shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="p-6 md:p-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
              Upcoming Highlight
            </h2>
            
            {/* Countdown */}
            <div className="flex justify-center gap-6 md:gap-8 mb-8">
              {[
                { value: timeLeft.days, label: "days" },
                { value: timeLeft.hours, label: "hours" },
                { value: timeLeft.mins, label: "mins" },
                { value: timeLeft.seconds, label: "seconds" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Event Card */}
            <div className="flex flex-col md:flex-row gap-6 bg-muted/30 rounded-xl overflow-hidden">
              <div className="md:w-1/3">
                <img
                  src={eventImage}
                  alt="Upcoming Event"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge className="bg-primary text-primary-foreground">Upcoming</Badge>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-sm text-primary font-medium">FEB</div>
                    <div className="text-3xl font-bold text-foreground">14</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      Global Meditation Connect Greetings 2025
                    </h3>
                    <p className="text-sm text-primary mb-2">08:30 · 14 Feb, 2026</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>Wat Arun Ratchawararam, Bangkok Yai, Bangkok.</span>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/events">View Details</Link>
                      </Button>
                      <Button size="sm">Register</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
