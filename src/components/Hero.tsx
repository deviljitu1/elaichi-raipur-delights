import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elaichi Multi Cuisine Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Elaichi Multi Cuisine
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-accent animate-fade-in">
          Restaurant & Pure Veg
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
          Experience the finest multi-cuisine dining in Raipur with authentic flavors
          and a sophisticated ambiance
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-scale-in">
          <a href="tel:9179909595">
            <Button size="lg" className="bg-accent text-primary hover:bg-warm-gold shadow-glow">
              <Phone className="mr-2 h-5 w-5" />
              Call: 9179909595
            </Button>
          </a>
          <a href="https://share.google/QWf7nVWdlHfl0D2X7" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-primary"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </a>
        </div>

        <div className="text-sm text-primary-foreground/80 animate-fade-in">
          <p>1st Floor, Avsar Arcade Opp. Chithuran Hanuman Mandir</p>
          <p>Mala Road, Choubey Colony, Raipur C.G, 492001</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
