import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Lock, Zap, ArrowRight } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Sparkles className="w-6 h-6 text-accent" />,
    title: "AI-Powered Recommendations",
    description: "Smart suggestions from AIHub Advisor Bot",
  },
  {
    icon: <Lock className="w-6 h-6 text-accent" />,
    title: "Secure & Reliable",
    description: "Bank-grade security for all transactions",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent" />,
    title: "Instant Rewards",
    description: "Earn commissions in real-time",
  },
];

export const WhyChoose = () => {
  return (
    <section className="w-full bg-secondary/30 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12 lg:p-16">
            {/* Left - Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1758273705998-05655eea4635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwYmFua2luZ3xlbnwxfHx8fDE3NjI0MDI4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Woman using phone with credit card"
                className="w-full rounded-2xl shadow-lg object-cover h-96 md:h-full animate-fade-in"
              />
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2 flex flex-col gap-6 md:gap-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  Why Choose AIHub Finance?
                </h2>
                <p className="text-lg text-accent font-medium">
                  Tại sao chọn AIHub Finance?
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 md:space-y-5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300 animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg">
                      {feature.icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold text-primary mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 h-auto rounded-lg text-base flex items-center justify-center gap-2 transition-all hover:shadow-lg w-full md:w-auto"
                >
                  <Link to="/compare-cards">
                    Get Started Today <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
