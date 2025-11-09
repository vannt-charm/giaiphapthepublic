import { Wallet, CreditCard, Home } from "lucide-react";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  descriptionVi: string;
}

const services: ServiceCard[] = [
  {
    icon: <Wallet className="w-8 h-8 text-accent" />,
    title: "Withdrawal Services",
    subtitle: "Dịch vụ rút tiền",
    description: "Quick and secure cash withdrawal with competitive rates",
    descriptionVi: "Rút tiền nhanh chóng và an toàn với lãi suất cạnh tranh",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-accent" />,
    title: "Card Opening",
    subtitle: "Mở thẻ",
    description: "Compare and apply for the best credit cards instantly",
    descriptionVi: "So sánh và đăng ký mở thẻ tín dụng tốt nhất ngay lập tức",
  },
  {
    icon: <Home className="w-8 h-8 text-accent" />,
    title: "Unsecured & Mortgage Loans",
    subtitle: "Vay tin chỉ & Thế chấp",
    description: "Get the best loan offers tailored to your needs",
    descriptionVi: "Nhận các đề xuất cho vay tốt nhất phù hợp với nhu cầu của bạn",
  },
];

export const Services = () => {
  return (
    <section className="w-full bg-primary py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Our Services
          </h2>
          <p className="text-accent text-base md:text-lg">
            Dịch vụ của chúng tôi
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-start">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {service.icon}
                </div>
              </div>

              {/* Title and Subtitle */}
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-accent font-semibold mb-4">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-foreground text-sm md:text-base leading-relaxed mb-3">
                {service.description}
              </p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {service.descriptionVi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
