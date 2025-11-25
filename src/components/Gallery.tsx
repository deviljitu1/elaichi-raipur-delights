import interiorImage from "@/assets/interior.png";

const Gallery = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Ambiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Step into our elegant space designed for memorable dining experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in group">
            <img
              src={interiorImage}
              alt="Elaichi Restaurant Interior"
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-primary-foreground">
                <h3 className="text-2xl font-bold mb-2">Modern Elegance</h3>
                <p>Experience dining in sophisticated comfort</p>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-6">
            <div className="bg-gradient-primary rounded-lg shadow-elegant p-8 text-primary-foreground animate-fade-in hover:shadow-glow transition-shadow">
              <h3 className="text-3xl font-bold mb-4">Visit Us Today</h3>
              <p className="text-lg mb-4">
                Experience the finest vegetarian multi-cuisine dining in Raipur
              </p>
              <div className="space-y-2 text-sm">
                <p>📍 1st Floor, Avsar Arcade</p>
                <p>📞 9179909595, 7354277000</p>
                <p>⏰ Open Daily: 11:00 AM - 11:00 PM</p>
              </div>
            </div>

            <div className="bg-accent rounded-lg shadow-elegant p-8 text-primary animate-fade-in hover:shadow-glow transition-shadow">
              <h3 className="text-3xl font-bold mb-4">100% Pure Veg</h3>
              <p className="text-lg mb-4">
                Authentic flavors crafted with the finest vegetarian ingredients
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                  Indian
                </span>
                <span className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                  Chinese
                </span>
                <span className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                  Continental
                </span>
                <span className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                  Tandoor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
