interface FoundationSectionProps {
  buddhaImage: string;
}

export const FoundationSection = ({ buddhaImage }: FoundationSectionProps) => {
  return (
    <section 
      className="relative py-32 lg:py-48 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${buddhaImage})` }}
    >
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="container relative z-10">
        <div className="max-w-lg animate-fade-in">
          <h2 className="font-heading text-4xl lg:text-5xl font-medium text-card mb-6">
            Knowing<br />
            Buddha Foundation
          </h2>
          <p className="text-card/90 leading-relaxed">
            Dedicated to preserving the integrity of Buddha's image and teachings, 
            the foundation works tirelessly to educate the world about the proper 
            representation and respect for Buddhist iconography. Through global 
            campaigns and partnerships, we protect the sacred symbols of Buddhism.
          </p>
        </div>
      </div>
    </section>
  );
};
