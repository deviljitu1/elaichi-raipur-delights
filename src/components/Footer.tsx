import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">Elaichi</h3>
            <p className="text-primary-foreground/80 mb-4">
              Multi Cuisine Marvels - Experience the finest 100% pure vegetarian
              dining in Raipur with authentic flavors and elegant ambiance.
            </p>
            <a
              href="https://www.instagram.com/elaichi_raipur/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-warm-gold transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @elaichi_raipur
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  1st Floor, Avsar Arcade, Opp. Chithuran Hanuman Mandir,
                  Mala Road, Choubey Colony, Raipur C.G, 492001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <a href="tel:91xxx-xxx-xxxx" className="hover:text-accent transition-colors">
                    +91 xxx-xxx-xxxx
                  </a>
                  {" / "}
                  <a href="tel:7354277000" className="hover:text-accent transition-colors">
                    +91 xxx-xxx-xxxx
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Elaichi Multi Cuisine Restaurant. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            Kindly inform us of any allergies or dietary restrictions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
