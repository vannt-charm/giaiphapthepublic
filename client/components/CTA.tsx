import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-primary via-primary to-accent py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-10">
          {/* Heading */}
          <div className="text-center space-y-3 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-base md:text-lg text-white/90 font-medium">
              Sẵn sàng bắt đầu hành trình tài chính của bạn?
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button
              asChild
              className="bg-white hover:bg-white/90 text-primary font-semibold px-8 md:px-10 py-3 h-auto rounded-lg text-base transition-all hover:shadow-lg"
            >
              <Link to="/compare-cards">Compare Cards</Link>
            </Button>

            <Button
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 md:px-10 py-3 h-auto rounded-lg text-base transition-all hover:shadow-lg bg-transparent"
            >
              <Link to="/register-ctv">Register as Partner</Link> 
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
