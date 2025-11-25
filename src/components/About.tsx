import { Award, Users, Utensils } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img
                src={aboutBg}
                alt="Elaichi Restaurant Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-lg shadow-glow">
              <p className="text-4xl font-bold">100%</p>
              <p className="text-sm">Pure Veg</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Welcome to Elaichi
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Elaichi Multi Cuisine Marvels is a premium 100% pure vegetarian restaurant
              offering an exquisite blend of Indian, Chinese, and Continental cuisines.
              Located in the heart of Raipur, we pride ourselves on delivering authentic
              flavors in an elegant and welcoming atmosphere.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From traditional Indian delicacies to innovative fusion dishes, our expert
              chefs craft every meal with passion and the finest ingredients. Whether
              you're planning an intimate dinner, a family celebration, or a corporate
              event, Elaichi promises an unforgettable dining experience.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Utensils className="h-8 w-8 text-primary" />
                </div>
                <p className="font-semibold text-primary">Multi Cuisine</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <p className="font-semibold text-primary">Quality Food</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <p className="font-semibold text-primary">Expert Chefs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
