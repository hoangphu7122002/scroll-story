import { Link } from "react-router-dom";

const quickLinks = [
  "Home",
  "About Us",
  "Events",
  "About Meditation",
  "Buddha's Teachings",
  "The Movement",
  "Get Involved",
  "Gallery",
  "Donate and Support",
];

const socialLinks = ["Facebook", "Instagram", "Youtube"];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="w-24 h-16 bg-primary-foreground/10 rounded flex items-center justify-center">
              <span className="font-heading text-xl">Logo</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Dedicated to the preservation and dissemination of Buddha's teachings.
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-primary-foreground/60">Phone Number</span>
                <p className="text-primary-foreground">0123456789</p>
              </div>
              <div>
                <span className="text-primary-foreground/60">Email</span>
                <p className="text-primary-foreground">support@gmc.com</p>
              </div>
            </div>
          </div>

          {/* Quick Access */}
          <div className="md:col-span-2">
            <h4 className="font-heading text-lg mb-6">Quick Access</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link}
                  to="/"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-heading text-lg mb-6">Get in touch</h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <Link
                  key={link}
                  to="/"
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Global Meditation Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
