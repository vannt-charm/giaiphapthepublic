import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-secondary py-12 md:py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-accent text-white rounded-lg font-bold text-sm">
                AI
              </div>
              <span className="text-lg font-bold text-primary">AIHub Finance</span>
            </Link>
            <p className="text-md text-muted-foreground text-center">
              Smart comparison – Easy connection – Instant rewards
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs md:text-sm text-muted-foreground">
              © 2025 AIHub Finance. All rights reserved.
            </p>
            <a
              href="mailto:charm.contact@aihubfinance.com"
              className="text-xs md:text-sm text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Contact: charm.contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
