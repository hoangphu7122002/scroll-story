interface AwardsSectionProps {
  conferenceImage: string;
  awardImage: string;
}

export const AwardsSection = ({ conferenceImage, awardImage }: AwardsSectionProps) => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        {/* Conference Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 animate-fade-in">
          <img
            src={conferenceImage}
            alt="Speaking at international conference"
            className="w-full h-48 lg:h-64 object-cover rounded"
          />
          <img
            src={conferenceImage}
            alt="Conference audience"
            className="w-full h-48 lg:h-64 object-cover rounded"
          />
        </div>

        <p className="text-center text-sm text-muted-foreground mb-16 max-w-4xl mx-auto">
          Special key note Speaker at <strong className="text-foreground">American Academy of Anti-Aging Medicine (A4M)</strong> Las Vegas 2023 speaking "Heal at the Core" in front of over a thousand audience of medical doctors, specialists and licensed medical personals.
        </p>

        {/* Awards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-heading text-3xl lg:text-4xl font-medium text-foreground">
              International Awards<br />
              and Thailand's Recognitions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Given by the government official, private sectors, the Royal House, the 
              Sangha Supreme and the religious circle.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <img
              src={awardImage}
              alt="Award ceremony"
              className="w-full h-64 object-cover rounded"
            />
          </div>
        </div>

        {/* Grand Collar Rank */}
        <div className="bg-muted rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-4">
                <h3 className="font-heading text-2xl text-foreground">GRAND COLLAR RANK</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  The Highest Honor by the Ghassanid Royal Family
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gold/20 to-gold/40 p-8 lg:p-12">
              <div className="text-center space-y-4">
                <h4 className="font-heading text-xl text-foreground">LIFETIME ACHIEVEMENT AWARD</h4>
                <p className="text-sm text-muted-foreground">Presented to</p>
                <p className="font-heading text-2xl text-foreground">Master Acharavadee Wongsakon</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In recognition of her contributions to the World of Health, Spirituality and Wellness - to Heal at the Core.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
