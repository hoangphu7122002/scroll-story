interface OurStorySectionProps {
  storyImage?: string;
}

export const OurStorySection = ({ storyImage }: OurStorySectionProps) => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-heading text-4xl lg:text-5xl font-medium text-foreground">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For over three decades, we have been dedicated to the preservation and 
                dissemination of Buddha's teachings. Our journey began with a simple 
                mission: to help individuals find inner peace through the practice of 
                Vipassana meditation.
              </p>
              <p>
                Through countless retreats, teachings, and community gatherings, we have 
                touched the lives of thousands across more than 22 countries. Our 
                commitment to authentic Dhamma practice remains unwavering as we continue 
                to expand our reach globally.
              </p>
              <p>
                Today, we stand as a bridge between ancient wisdom and modern seekers, 
                offering transformative experiences that heal the mind, body, and spirit.
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {storyImage ? (
              <img
                src={storyImage}
                alt="Our meditation center"
                className="w-full h-80 lg:h-96 object-cover rounded"
              />
            ) : (
              <div className="w-full h-80 lg:h-96 bg-muted rounded" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
