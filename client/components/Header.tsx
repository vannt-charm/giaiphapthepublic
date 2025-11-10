import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/compare-cards", label: "Compare Cards" },
    { path: "/news-training", label: "News & Training" },
    { path: "/register-ctv", label: "Register CTV" },
  ];

  const getLinkClasses = (path: string) => {
    const baseClasses = "text-sm font-medium transition-colors duration-200";
    const activeClasses = "text-accent font-semibold";
    const inactiveClasses = "text-foreground hover:text-primary";
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center justify-center w-10 h-10 bg-accent text-white rounded-lg font-bold text-base">
              AI
            </div>
            <span className="text-base md:text-lg font-bold text-primary hidden sm:inline">
              AIHub Finance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={getLinkClasses(item.path)}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right section - Login button and Mobile menu toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-xs md:text-sm px-4 md:px-6 py-2 h-auto rounded-lg transition-all"
            >
              <Link to="/login">Login</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-primary" />
              ) : (
                <Menu size={24} className="text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-3 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-accent/10 text-accent font-semibold"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
