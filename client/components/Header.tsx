import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center justify-center w-8 h-8 bg-accent text-white rounded font-bold text-sm">
              AI
            </div>
            <span className="text-lg md:text-xl font-bold text-primary hidden sm:inline">
              AIHub Finance
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-accent font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <Link
              to="/compare-cards"
              className="text-foreground text-sm hover:text-primary transition-colors"
            >
              Compare Cards
            </Link>
            <Link
              to="/news-training"
              className="text-foreground text-sm hover:text-primary transition-colors"
            >
              News & Training
            </Link>
            <Link
              to="/register-ctv"
              className="text-foreground text-sm hover:text-primary transition-colors"
            >
              Register CTV
            </Link>
          </nav>

          {/* Login Button */}
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-white font-semibold text-sm px-6 py-2 h-auto"
          >
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
