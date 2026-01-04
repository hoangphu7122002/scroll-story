import { Calendar, MapPin, Clock, Users, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import eventHero from "@/assets/event-hero.jpg";
import watArun from "@/assets/wat-arun.jpg";

const Events = () => {
  const mainEvent = {
    title: "International Meditation Retreat 2026",
    subtitle: "A Journey to Inner Peace",
    date: "March 15-22, 2026",
    time: "9:00 AM - 6:00 PM Daily",
    location: "Wat Arun Meditation Center, Bangkok, Thailand",
    attendees: 250,
    image: eventHero,
    description: `Join us for an extraordinary week-long meditation retreat at the historic Wat Arun Meditation Center in Bangkok. This transformative experience combines ancient Buddhist meditation techniques with modern mindfulness practices, guided by Master Thich Minh Tue and senior practitioners from around the world.

The retreat offers a unique opportunity to deepen your meditation practice in one of Thailand's most sacred settings. Participants will experience daily meditation sessions, dharma talks, walking meditation in the temple gardens, and personal guidance from experienced teachers.`,
    schedule: [
      { time: "5:00 AM", activity: "Morning Bell & Wake Up" },
      { time: "5:30 AM", activity: "Morning Meditation" },
      { time: "7:00 AM", activity: "Breakfast & Mindful Eating" },
      { time: "9:00 AM", activity: "Dharma Talk" },
      { time: "10:30 AM", activity: "Walking Meditation" },
      { time: "12:00 PM", activity: "Lunch & Rest" },
      { time: "2:00 PM", activity: "Guided Meditation Session" },
      { time: "4:00 PM", activity: "Q&A with Master" },
      { time: "5:30 PM", activity: "Evening Meditation" },
      { time: "7:00 PM", activity: "Light Dinner" },
      { time: "8:00 PM", activity: "Night Meditation & Rest" },
    ],
    includes: [
      "7 nights accommodation at the meditation center",
      "All vegetarian meals during the retreat",
      "Daily meditation sessions with Master Thich Minh Tue",
      "Dharma talks and Q&A sessions",
      "Walking meditation in temple gardens",
      "Personal guidance and mentorship",
      "Meditation cushion and materials",
      "Certificate of completion",
    ],
    price: "$1,200",
    earlyBird: "$980",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Image */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src={mainEvent.image}
            alt={mainEvent.title}
            className="w-full h-full object-cover"
          />
        </section>

        {/* Event Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Event Title Card */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6 md:p-8">
                    <p className="text-primary font-medium text-sm mb-2">Featured Event</p>
                    <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                      {mainEvent.title}
                    </h1>
                    <p className="text-muted-foreground mb-6">
                      {mainEvent.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{mainEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{mainEvent.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{mainEvent.attendees} Attendees</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Collapsible Sections */}
                <Accordion type="single" collapsible defaultValue="information" className="space-y-4">
                  {/* Information Section */}
                  <AccordionItem value="information" className="border border-border rounded-lg bg-card overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                      <span className="font-semibold text-foreground text-lg">Information</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="prose prose-lg max-w-none">
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
                          {mainEvent.description}
                        </div>
                        <img
                          src={watArun}
                          alt="Wat Arun Temple"
                          className="w-full rounded-lg shadow-md"
                        />
                        <p className="text-sm text-muted-foreground mt-3 text-center">
                          Wat Arun Meditation Center - Our retreat venue
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Schedule Section */}
                  <AccordionItem value="schedule" className="border border-border rounded-lg bg-card overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                      <span className="font-semibold text-foreground text-lg">Schedule</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-3">
                        {mainEvent.schedule.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center gap-2 min-w-[90px]">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground text-sm">
                                {item.time}
                              </span>
                            </div>
                            <span className="text-muted-foreground text-sm">
                              {item.activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* What's Included Section */}
                  <AccordionItem value="includes" className="border border-border rounded-lg bg-card overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                      <span className="font-semibold text-foreground text-lg">What's Included</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-3">
                        {mainEvent.includes.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Sidebar - Registration Card */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24 bg-card border-border shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground mb-1">
                        Early Bird Price
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-3xl font-bold text-primary">
                          {mainEvent.earlyBird}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          {mainEvent.price}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Per person • 7 nights all-inclusive
                      </p>
                    </div>

                    <Button 
                      className="w-full h-12 text-base font-semibold rounded-lg"
                    >
                      Register Now
                    </Button>

                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-4 text-sm">
                        Event Details
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Date</p>
                            <p className="text-xs text-muted-foreground">
                              {mainEvent.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Time</p>
                            <p className="text-xs text-muted-foreground">
                              {mainEvent.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Location</p>
                            <p className="text-xs text-muted-foreground">
                              {mainEvent.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground text-center">
                        Limited spots available. Reserve your place today.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
