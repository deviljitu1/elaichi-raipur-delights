import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find us in the heart of Raipur, ready to serve you an unforgettable dining experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <Card className="border-primary/20 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      1st Floor, Avsar Arcade<br />
                      Opp. Chithuran Hanuman Mandir<br />
                      Mala Road, Choubey Colony<br />
                      Raipur, Chhattisgarh 492001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:9179909595" className="hover:text-accent transition-colors">
                        +91 9179909595
                      </a>
                      <br />
                      <a href="tel:7354277000" className="hover:text-accent transition-colors">
                        +91 7354277000
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday<br />
                      11:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Follow Us</h3>
                    <a
                      href="https://www.instagram.com/elaichi_raipur/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      @elaichi_raipur
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="animate-fade-in">
            <Card className="border-primary/20 overflow-hidden h-full">
              <CardContent className="p-0 h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0789667891234!2d81.6312!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddf456b59fb7%3A0x7f0c0b0e0c0c0c0c!2sAvsar%20Arcade%2C%20Choubey%20Colony%2C%20Raipur%2C%20Chhattisgarh%20492001!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Elaichi Restaurant Location"
                  className="w-full h-full"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
