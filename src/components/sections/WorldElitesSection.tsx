interface WorldElitesSectionProps {
  retreatImage: string;
  meditationImage: string;
}

export const WorldElitesSection = ({ retreatImage, meditationImage }: WorldElitesSectionProps) => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-medium text-foreground mb-4">
            International World Elites
          </h2>
          <p className="font-heading text-xl text-gold">
            travel across the globe to learn real experience
          </p>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            News of the World Elites from all businesses and sectors travel across the globe to Thailand spending two weeks of mindfulness including practice real Vipassana at Bodhibhammayan and stay at The Soul Luxury Wellness and Mindfulness Resort-Saraburi, Thailand
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <img
            src={retreatImage}
            alt="The Soul Luxury Wellness Resort"
            className="w-full h-64 lg:h-96 object-cover rounded-lg mb-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Master Wongsakon work expands to laying proper foundation and virtue to younger 
              generations for monthly camps and sessions in well known schools and universities.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              She has been invited for special Dhamma sessions both abroad and domestic such 
              as at PTT, Bank of Thailand, Thai Airways, Central Department Store, The Royal 
              Thai army, air force and Navy, Chulalongkorn University, Kasetsart University, 
              Mahachulalongkornrajavidyalaya University and international sport hall of 
              fame-Seattle, USA
            </p>
          </div>

          <div>
            <img
              src={retreatImage}
              alt="Traditional Thai architecture"
              className="w-full h-64 object-cover rounded"
            />
          </div>

          <div className="space-y-4">
            <img
              src={meditationImage}
              alt="Group meditation session"
              className="w-full h-40 object-cover rounded"
            />
            <img
              src={meditationImage}
              alt="Teaching session"
              className="w-full h-40 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
