import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Users, Gift, Star } from "lucide-react";
import jainFoodImg from "@/assets/services/jain-food.jpg";
import privateRoomImg from "@/assets/services/private-room.jpg";
import banquetSpaceImg from "@/assets/services/banquet-space.jpg";
import allergyInfoImg from "@/assets/services/allergy-info.jpg";

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

const specialServices = [
  {
    image: jainFoodImg,
    title: "Jain Food Available",
    description: "Pure vegetarian Jain cuisine prepared without root vegetables, following authentic Jain dietary principles"
  },
  {
    image: privateRoomImg,
    title: "Private Room for Intimate Gathering",
    description: "Exclusive private dining spaces perfect for small celebrations and family get-togethers"
  },
  {
    image: banquetSpaceImg,
    title: "Private Banquet Space for Events",
    description: "Spacious banquet halls equipped for weddings, corporate events, and large celebrations"
  },
  {
    image: allergyInfoImg,
    title: "Kindly Inform Allergies and Mushroom",
    description: "We prioritize your health - please inform us about any food allergies or mushroom preferences"
  }
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

        <div className="mt-16 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Special Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {specialServices.map((service, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-primary/20 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                      <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
