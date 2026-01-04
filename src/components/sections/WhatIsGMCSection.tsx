interface WhatIsGMCSectionProps {
  image: string;
}

export const WhatIsGMCSection = ({ image }: WhatIsGMCSectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              What is Global Meditation Connect?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Global Meditation Connect (GMC) is an international initiative dedicated to uniting people across the world through the power of simultaneous meditation. It serves as a global network where individuals, communities, and organizations from every culture and background come together to cultivate inner peace and radiate Loving-Kindness energy for the healing of our planet.
              </p>
              <p>
                Rooted in Thailand and supported by the Department of Religious Affairs, Ministry of Culture, GMC aims to make Thailand a leading global hub for meditation and mindfulness. Through synchronized global meditation sessions, educational programs, and collaborative activities, GMC seeks to elevate moral awareness, strengthen collective compassion, and inspire a harmonious world.
              </p>
              <p>
                At its heart, Global Meditation Connect is a movement — a united human consciousness working together to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Build peace within each person</li>
                <li>Connect meditators across time zones</li>
                <li>Generate a shared wave of Loving-Kindness energy to heal the world</li>
              </ul>
              <p>
                It is an open invitation for everyone, everywhere, to sit together in stillness and help uplift global humanity.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-2xl aspect-square flex items-center justify-center">
            <img
              src={image}
              alt="Global Meditation"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
