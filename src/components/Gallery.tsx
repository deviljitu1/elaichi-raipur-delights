import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import interiorImage from "@/assets/interior.png";
import eventWedding from "@/assets/gallery/event-wedding.jpg";
import eventCorporate from "@/assets/gallery/event-corporate.jpg";
import eventBirthday from "@/assets/gallery/event-birthday.jpg";
import foodThali from "@/assets/gallery/food-thali.jpg";
import foodChinese from "@/assets/gallery/food-chinese.jpg";
import foodTandoor from "@/assets/gallery/food-tandoor.jpg";
import foodStarters from "@/assets/gallery/food-starters.jpg";
import ambianceTable from "@/assets/gallery/ambiance-table.jpg";

const galleryImages = {
  all: [
    { src: interiorImage, title: "Modern Dining Space", category: "ambiance" },
    { src: eventWedding, title: "Wedding Celebration", category: "events" },
    { src: foodThali, title: "Traditional Thali", category: "food" },
    { src: foodTandoor, title: "Tandoori Paneer Tikka", category: "food" },
    { src: eventCorporate, title: "Corporate Events", category: "events" },
    { src: foodChinese, title: "Hakka Noodles", category: "food" },
    { src: ambianceTable, title: "Elegant Table Setting", category: "ambiance" },
    { src: eventBirthday, title: "Birthday Celebrations", category: "events" },
    { src: foodStarters, title: "Appetizer Platter", category: "food" },
  ],
  food: [
    { src: foodThali, title: "Traditional Thali", category: "food" },
    { src: foodTandoor, title: "Tandoori Paneer Tikka", category: "food" },
    { src: foodChinese, title: "Hakka Noodles", category: "food" },
    { src: foodStarters, title: "Appetizer Platter", category: "food" },
  ],
  events: [
    { src: eventWedding, title: "Wedding Celebration", category: "events" },
    { src: eventCorporate, title: "Corporate Events", category: "events" },
    { src: eventBirthday, title: "Birthday Celebrations", category: "events" },
  ],
  ambiance: [
    { src: interiorImage, title: "Modern Dining Space", category: "ambiance" },
    { src: ambianceTable, title: "Elegant Table Setting", category: "ambiance" },
  ],
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our culinary delights, elegant ambiance, and memorable celebrations
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="ambiance">Ambiance</TabsTrigger>
          </TabsList>

          {Object.entries(galleryImages).map(([category, images]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-primary-foreground">
                        <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                        <p className="text-sm text-primary-foreground/80 capitalize">
                          {image.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-primary rounded-lg shadow-glow p-12 text-primary-foreground animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">Host Your Event With Us</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we provide the perfect
            setting and exceptional service for your special occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9179909595">
              <button className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-warm-gold transition-colors shadow-glow">
                Call to Book
              </button>
            </a>
            <a href="#contact">
              <button className="bg-primary-foreground/20 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/30 transition-colors border border-primary-foreground/30">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
