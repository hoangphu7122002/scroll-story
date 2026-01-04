export const VisionMissionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden">
          {/* Vision */}
          <div className="bg-primary/90 p-8 md:p-10 text-primary-foreground">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">Vision</h3>
            <p className="leading-relaxed opacity-90">
              To inspire a united and harmonious world where people from all cultures, traditions, and backgrounds join together in simultaneous meditation—creating a global energy wave of Loving-Kindness that helps heal a boiling planet, restores inner peace, and elevates humanity's moral consciousness.
            </p>
          </div>
          
          {/* Mission */}
          <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary/80 p-8 md:p-10 text-primary-foreground">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">Mission</h3>
            <div className="space-y-4 opacity-90">
              <p className="leading-relaxed">
                Global Meditation Connect (GMC) is committed to advancing global meditation practice by synchronizing meditators across all time zones to sit together as one. We strive to generate a powerful collective energy field of Loving-Kindness, support the healing of our world, and uplift the ethical awareness of humankind.
              </p>
              <p className="leading-relaxed">
                In collaboration with the Department of Religious Affairs, Ministry of Culture of Thailand, GMC works to establish Thailand as a global center for meditation and mindfulness through:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Empowering individuals to cultivate peace, clarity, and inner strength through meditation.</li>
                <li>Uniting practitioners worldwide to meditate simultaneously, creating a shared wave of peace and Loving-Kindness energy for global healing.</li>
                <li>Providing education, tools, and global gatherings that nurture meditation as a daily practice and a universal force for good.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
