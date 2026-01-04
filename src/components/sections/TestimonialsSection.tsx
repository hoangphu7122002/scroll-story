import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-primary text-sm mb-1">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What do international practitioners say about us?
          </h2>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="flex-shrink-0 w-[90vw] md:w-[700px] snap-center bg-card border-border overflow-hidden"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Quote Section */}
                  <div className="md:w-1/2 p-6 md:p-8 bg-primary text-primary-foreground flex flex-col justify-between">
                    <div className="space-y-4 text-sm leading-relaxed opacity-90">
                      <p>{testimonial.quote}</p>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-sm opacity-80">{testimonial.role}</p>
                    </div>
                  </div>
                  {/* Image Section */}
                  <div className="md:w-1/2 aspect-square md:aspect-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
