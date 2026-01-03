export const CredibilitySection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-heading text-3xl lg:text-4xl font-medium text-foreground">
              Credibility
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our organization stands on a foundation of transparency, authenticity, 
                and unwavering commitment to the Dhamma. Every teaching is rooted in 
                the original Pali scriptures, ensuring the purity of Buddha's message.
              </p>
              <p>
                We are recognized and endorsed by the National Office of Buddhism, 
                the Sangha Supreme Council of Thailand, and numerous international 
                Buddhist organizations. Our retreats and programs have been featured 
                in leading medical and wellness publications worldwide.
              </p>
              <p>
                With over three decades of experience and thousands of successful 
                practitioners, our methodology has proven effective in bringing 
                lasting peace and transformation to all who seek it.
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-full h-80 lg:h-96 bg-muted rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};
