import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight animate-fade-in">
                Smart comparison
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Easy connection
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Instant rewards
              </h3>
            </div>

            <p className="text-foreground text-sm md:text-base leading-relaxed text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              So sánh thông minh – Kết nối dễ dàng – Nhận thưởng ngay lập tức
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 h-auto rounded-lg text-base flex items-center justify-center gap-2 transition-all hover:shadow-lg"
              >
                <Link to="/compare-cards">
                  Compare Cards Now <ArrowRight size={18} />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 h-auto rounded-lg text-base transition-all hover:shadow-md"
              >
                Become a Partner
              </Button>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative rounded-3xl shadow-2xl">

              {/* Team image */}
              <div className="relative aspect-square flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=700&fit=crop"
                  alt="Team"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />

                {/* Trusted by Card */}
                <div className="absolute hidden lg:block -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-2xl max-w-xs animate-slide-up" style={{ animationDelay: "0.7s" }}>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    Trusted by
                  </p>
                  <p className="text-4xl font-bold text-primary">
                    10,000+
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Financial Partners
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Trusted Card */}
          <div className="lg:hidden bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm font-semibold text-muted-foreground mb-3">
              Trusted by
            </p>
            <p className="text-5xl font-bold text-primary mb-2">10,000+</p>
            <p className="text-base text-muted-foreground">Financial Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};
