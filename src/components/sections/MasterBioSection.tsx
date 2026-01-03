interface MasterBioSectionProps {
  portraitImage: string;
  groupImage?: string;
}

export const MasterBioSection = ({ portraitImage, groupImage }: MasterBioSectionProps) => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Name - Left */}
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-heading text-3xl lg:text-4xl font-medium text-foreground leading-tight">
              Master<br />
              Acharavadee<br />
              Wongsakon
            </h2>
          </div>

          {/* Portrait - Center */}
          <div className="lg:col-span-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src={portraitImage}
              alt="Master Acharavadee Wongsakon"
              className="w-full h-[500px] lg:h-[600px] object-cover object-top"
            />
          </div>

          {/* Bio - Right */}
          <div className="lg:col-span-5 space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Master Wongsakon is a Thai lay Buddhist master and former entrepreneur 
                who gave up the successful business life to dedicate for the philanthropy 
                and the pursuit of Dhamma. She has practiced vipassana for over 20,000 
                hours in almost 3 decades attaining insightful perspectives and found the 
                Dhammabodhiyan retreat to teach her findings to thousands of students from 
                over 22 countries.
              </p>
              <p>
                She currently is the president and founder of the Knowing Buddha Foundation, 
                founder of Manasikarn Museum, president of School of Life Foundation which 
                all align by the National Office of Buddhism, the Sangha Supreme Council of 
                Thailand, Department of Religious Affairs and Mahachulalongkornrajavidyalaya 
                University.
              </p>
              <p>
                Her international appearances include being especially invited for key note 
                speaker at American Academy of Anti-Aging Medicine (A4M), mentor instructor 
                at International Martial Art Hall of Fame-USA, receiving awarded in the 
                business, medical, philanthropy and religion circle. Her distinguish 
                decorations includes Grand Collar Rank-the highest honor by the Ghassanid 
                Royal Family, Life Time Achievement Award by the medical board of A4M and 
                International Sport Hall of Fame, Honorable Thai Sathudkij Museum award, 
                Honorably Dhammadhuta by the Sangha Supreme provided by the 
                Mahachulalongkornrajavidyalaya.
              </p>
            </div>

            {/* Secondary Image */}
            {groupImage && (
              <div className="pt-6">
                <img
                  src={groupImage}
                  alt="Meditation group session"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
