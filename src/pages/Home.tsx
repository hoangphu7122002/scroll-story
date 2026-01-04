import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

import buddhaHero from "@/assets/buddha-hero.jpg";
import watArun from "@/assets/wat-arun.jpg";
import meditationGroup from "@/assets/meditation-group.jpg";
import masterPortrait from "@/assets/master-portrait.jpg";

// Countdown Timer Component
const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-6 text-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="border-r border-primary/30 last:border-0 pr-6 last:pr-0">
          <div className="text-3xl font-heading text-primary">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      ))}
    </div>
  );
};

// Event Card Component
const EventCard = ({ status, isFavorite }: { status: string; isFavorite?: boolean }) => (
  <div className="bg-card rounded-lg overflow-hidden shadow-md">
    <div className="relative h-48">
      <img src={watArun} alt="Event" className="w-full h-full object-cover" />
      <span className={`absolute bottom-3 left-3 px-2 py-1 rounded text-xs text-white ${
        status === "Upcoming" ? "bg-primary" : "bg-orange-500"
      }`}>
        {status}
      </span>
      <button className="absolute top-3 right-3">
        <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-white"}`} />
      </button>
    </div>
    <div className="p-4">
      <div className="flex gap-3 items-start">
        <div className="text-center border-r border-border pr-3">
          <div className="text-sm text-primary font-medium">FEB</div>
          <div className="text-2xl font-heading">14</div>
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-sm">Global Meditation Connect Greetings 2025</h3>
          <p className="text-xs text-primary mt-1">08:30 • 14 Feb, 2026</p>
          <div className="flex items-start gap-1 mt-1">
            <MapPin className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground">Wat Arun Ratchawararam, Bangkok Yai, Bangkok.</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Button variant="outline" size="sm" className="flex-1 text-xs">View Details</Button>
        <Button size="sm" className="flex-1 text-xs">Register</Button>
      </div>
    </div>
  </div>
);

// Testimonial data
const testimonials = [
  { name: "Stephanie Kuo", title: "Executive Chairwoman, Global Health & Longevity Industry Standards Committee", image: meditationGroup },
  { name: "Dr. Sarah Chen", title: "Head of Asia-Pacific Secretariat, World Intangible Cultural Heritage Organization", image: masterPortrait },
  { name: "Emily Watson", title: "International Meditation Instructor & Wellness Advocate", image: meditationGroup },
  { name: "Dr. Robert Lee", title: "Professor of Mindfulness Studies, Harvard University", image: masterPortrait },
  { name: "Dr. Mark Johnson", title: "Director of Global Wellness Initiative", image: meditationGroup },
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const targetDate = new Date("2026-02-14T08:30:00");

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img src={buddhaHero} alt="Meditation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          </div>
          <div className="relative container h-full flex items-center">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-heading text-foreground italic mb-4">
                Global Meditation Connect
              </h1>
              <p className="text-muted-foreground mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea...
              </p>
              <Button variant="outline" className="rounded-full">Join us</Button>
            </div>
          </div>
        </section>

        {/* Upcoming Highlight */}
        <section className="container -mt-24 relative z-10">
          <div className="bg-gradient-to-b from-secondary to-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl font-heading text-center mb-6">Upcoming Highlight</h2>
            <div className="flex justify-center mb-6">
              <CountdownTimer targetDate={targetDate} />
            </div>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="w-full md:w-1/2">
                <img src={watArun} alt="Wat Arun" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div className="w-full md:w-1/2 flex items-center">
                <EventCard status="Upcoming" />
              </div>
            </div>
          </div>
        </section>

        {/* What is GMC */}
        <section className="py-20 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading mb-6">What is Global Meditation Connect?</h2>
              <p className="text-muted-foreground mb-4">
                Global Meditation Connect (GMC) is an international initiative dedicated to uniting people across the world through the power of simultaneous meditation. It serves as a global network where individuals, communities, and organizations from every culture and background come together to cultivate inner peace and radiate Loving-Kindness energy for the healing of our planet.
              </p>
              <p className="text-muted-foreground mb-4">
                Rooted in Thailand and supported by the Department of Religious Affairs, Ministry of Culture, GMC aims to make Thailand a leading global hub for meditation and mindfulness. Through synchronized global meditation sessions, educational programs, and collaborative activities, GMC seeks to elevate moral awareness, strengthen collective compassion, and inspire a harmonious world.
              </p>
              <p className="text-muted-foreground mb-4">At its heart, Global Meditation Connect is a movement — a united human consciousness working together to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Build peace within each person</li>
                <li>Connect meditators across time zones</li>
                <li>Generate a shared wave of Loving-Kindness energy to heal the world</li>
              </ul>
              <p className="text-muted-foreground">It is an open invitation for everyone, everywhere, to sit together in stillness and help uplift global humanity.</p>
            </div>
            <div className="bg-muted rounded-lg aspect-video" />
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary/80">
          <div className="container">
            <div className="grid md:grid-cols-[1fr,2px,2fr] gap-8 text-primary-foreground">
              <div>
                <h3 className="text-3xl font-heading mb-4">Vision</h3>
                <p className="text-primary-foreground/90 text-sm leading-relaxed">
                  To inspire a united and harmonious world where people from all cultures, traditions, and backgrounds join together in simultaneous meditation—creating a global energy wave of Loving-Kindness that helps heal a boiling planet, restores inner peace, and elevates humanity's moral consciousness.
                </p>
              </div>
              <div className="hidden md:block bg-primary-foreground/30" />
              <div>
                <h3 className="text-3xl font-heading mb-4">Mission</h3>
                <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">
                  Global Meditation Connect (GMC) is committed to advancing global meditation practice by synchronizing meditators across all time zones to sit together as one. We strive to generate a powerful collective energy field of Loving-Kindness, support the healing of our world, and uplift the ethical awareness of humankind.
                </p>
                <p className="text-primary-foreground/90 text-sm leading-relaxed mb-3">
                  In collaboration with the Department of Religious Affairs, Ministry of Culture of Thailand, GMC works to establish Thailand as a global center for meditation and mindfulness through:
                </p>
                <ul className="list-disc list-inside text-primary-foreground/90 text-sm space-y-1">
                  <li>Empowering individuals to cultivate peace, clarity, and inner strength through meditation.</li>
                  <li>Uniting practitioners worldwide to meditate simultaneously, creating a shared wave of peace and Loving-Kindness energy for global healing.</li>
                  <li>Providing education, tools, and global gatherings that nurture meditation as a daily practice and a universal force for good.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What Loving-Kindness matters */}
        <section className="py-20 bg-gradient-to-b from-muted to-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading mb-6">What Loving-Kindness matters?</h2>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                </p>
              </div>
              <div className="bg-muted rounded-lg aspect-video" />
            </div>
          </div>
        </section>

        {/* Feature Events */}
        <section className="py-16 bg-primary">
          <div className="container">
            <div className="flex items-center justify-between mb-2">
              <span className="text-primary-foreground/70 text-sm">Events</span>
              <Link to="/events" className="text-primary-foreground text-sm flex items-center gap-1 hover:underline">
                View More →
              </Link>
            </div>
            <h2 className="text-3xl font-heading text-primary-foreground mb-8">Feature Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <EventCard status="Upcoming" />
              <EventCard status="Open Registration" isFavorite />
              <EventCard status="Upcoming" />
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-8 h-1.5 rounded-full ${i === 0 ? "bg-primary-foreground" : "bg-primary-foreground/30"}`} />
              ))}
            </div>
          </div>
        </section>

        {/* Global Map */}
        <section className="py-20 container text-center">
          <span className="text-primary text-sm">Global Map</span>
          <h2 className="text-3xl font-heading mb-8">Global Meditation Connect</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-1 max-w-2xl">
              <img src="/world-map.svg" alt="World Map" className="w-full opacity-80" 
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">World Map</div>'; }} />
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-card p-4 rounded-lg shadow-sm text-left">
                <div className="text-3xl font-heading text-primary">10,884</div>
                <div className="text-sm text-muted-foreground">People have joined us</div>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm text-left">
                <div className="text-3xl font-heading text-primary">67</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Meditation */}
        <section className="py-16 container text-center">
          <span className="text-primary text-sm">About Meditation</span>
          <h2 className="text-2xl font-heading mb-4">Anapanassati Meditation Guidance</h2>
          <Button size="sm" className="mb-8">Join us</Button>
          <div className="max-w-3xl mx-auto rounded-lg overflow-hidden">
            <img src={masterPortrait} alt="Meditation Guidance" className="w-full aspect-video object-cover" />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 container">
          <div className="text-center mb-8">
            <span className="text-primary text-sm">Testimonials</span>
            <h2 className="text-2xl font-heading">What do international practitioners say about us?</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0 bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="bg-primary p-8 text-primary-foreground">
                <p className="text-sm leading-relaxed mb-6">
                  First course was very tough last year, and I was a first-time trainee. But, I learn how to open my mind, understand enlightenment, and how we can really transcend ourselves and help others.
                </p>
                <p className="text-sm leading-relaxed mb-6">
                  Every person is shaped by three elements: what they think, what they say, and what they do. Like a 3D printer, these elements create our reality. I once believed I could change the world, but now I see the truth – we aren't changing the world; we are creating a new one.
                </p>
                <p className="text-sm leading-relaxed mb-6">
                  Meditation has transformed my life. After 20 years of working 18-hour days, I finally slowed down to understand myself and connect with the universe. As individuals, our energy is limited, but when we connect with the universe, we tap into a huge energy.
                </p>
                <h4 className="font-heading font-semibold">{testimonials[currentTestimonial].name}</h4>
                <ul className="text-xs opacity-80 mt-2 list-disc list-inside">
                  <li>{testimonials[currentTestimonial].title}</li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name} 
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-card p-2 rounded-full shadow-md hover:bg-muted hidden md:block"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-card p-2 rounded-full shadow-md hover:bg-muted hidden md:block"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-12 bg-primary">
          <div className="container">
            <h2 className="text-2xl font-heading text-primary-foreground mb-2">Join Global Meditation Connect today</h2>
            <p className="text-primary-foreground/70 text-sm">Together with 10,000+ members throughout the world</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
