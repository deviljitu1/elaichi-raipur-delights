import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Users, Gift, Star } from "lucide-react";

const services = [
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Experience premium multi-cuisine dining in an elegant atmosphere with exceptional service.",
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Host your special occasions in our private banquet spaces designed for intimate gatherings.",
  },
  {
    icon: Gift,
    title: "Catering Services",
    description: "Professional catering services available for your events, delivering quality and taste.",
  },
  {
    icon: Star,
    title: "Food Packages",
    description: "Customized celebration packages for weddings, parties, and corporate events.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Celebrations at Elaichi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From our table to yours, thank you for being a part of our story.
            We look forward to serving you again!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="border-primary/20 hover:border-accent transition-all duration-300 hover:shadow-elegant animate-fade-in group"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-primary/5 rounded-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Special Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <p className="text-foreground">Jain Food Available</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <p className="text-foreground">Private Room for Intimate Gathering</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <p className="text-foreground">Private Banquet Space for Events</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <p className="text-foreground">Kindly Inform Allergies and Mushroom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
