import { useState } from "react";
import { Calendar, MapPin, Clock, Users, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import eventHero from "@/assets/event-hero.jpg";
import watArun from "@/assets/wat-arun.jpg";
import meditationGroup from "@/assets/meditation-group.jpg";
import retreatAerial from "@/assets/retreat-aerial.jpg";

const Events = () => {
  const [activeTab, setActiveTab] = useState("information");

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

  const recommendedEvents = [
    {
      id: 1,
      title: "Mindfulness Workshop",
      date: "April 5, 2026",
      location: "Tokyo, Japan",
      image: meditationGroup,
    },
    {
      id: 2,
      title: "Temple Stay Experience",
      date: "May 10-12, 2026",
      location: "Kyoto, Japan",
      image: retreatAerial,
    },
    {
      id: 3,
      title: "Meditation & Wellness Retreat",
      date: "June 1-7, 2026",
      location: "Bali, Indonesia",
      image: watArun,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img
              src={mainEvent.image}
              alt={mainEvent.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          <div className="relative h-full flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <p className="text-primary font-medium mb-2">Featured Event</p>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                {mainEvent.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {mainEvent.subtitle}
              </p>
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{mainEvent.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{mainEvent.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{mainEvent.attendees} Attendees</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full justify-start bg-muted/50 p-1 rounded-lg mb-8">
                    <TabsTrigger 
                      value="information" 
                      className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all"
                    >
                      Information
                    </TabsTrigger>
                    <TabsTrigger 
                      value="schedule"
                      className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all"
                    >
                      Schedule
                    </TabsTrigger>
                    <TabsTrigger 
                      value="includes"
                      className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all"
                    >
                      What's Included
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="information" className="mt-0">
                    <div className="prose prose-lg max-w-none">
                      <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                        About This Event
                      </h2>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {mainEvent.description}
                      </div>
                      <div className="mt-8">
                        <img
                          src={watArun}
                          alt="Wat Arun Temple"
                          className="w-full rounded-xl shadow-lg"
                        />
                        <p className="text-sm text-muted-foreground mt-3 text-center">
                          Wat Arun Meditation Center - Our retreat venue
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="schedule" className="mt-0">
                    <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                      Daily Schedule
                    </h2>
                    <div className="space-y-4">
                      {mainEvent.schedule.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-2 min-w-[100px]">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="font-medium text-foreground">
                              {item.time}
                            </span>
                          </div>
                          <span className="text-muted-foreground">
                            {item.activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="includes" className="mt-0">
                    <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                      What's Included
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {mainEvent.includes.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-lg bg-muted/30"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar - Registration Card */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24 bg-card border-border shadow-xl">
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
                      className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Register Now
                    </Button>

                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-4">
                        Event Details
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Date</p>
                            <p className="text-sm text-muted-foreground">
                              {mainEvent.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Time</p>
                            <p className="text-sm text-muted-foreground">
                              {mainEvent.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Location</p>
                            <p className="text-sm text-muted-foreground">
                              {mainEvent.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground text-center">
                        Limited spots available. Reserve your place today.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Events */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8">
              Recommended Events
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {recommendedEvents.map((event) => (
                  <CarouselItem
                    key={event.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="overflow-hidden bg-card border-border hover:shadow-lg transition-shadow cursor-pointer group">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4" />
              <CarouselNext className="hidden md:flex -right-4" />
            </Carousel>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
