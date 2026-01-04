import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/", active: true },
  { label: "Events", href: "/events" },
  { label: "Buddha's Teachings", href: "/" },
  { label: "The Movement", href: "/" },
  { label: "Get Involved", href: "/" },
  { label: "Gallery", href: "/" },
  { label: "Donate & Support", href: "/" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">K</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-body transition-colors hover:text-primary ${
                item.active
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button size="sm" className="font-body">
          Login
        </Button>
      </div>
    </header>
  );
};
