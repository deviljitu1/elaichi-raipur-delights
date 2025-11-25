import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import menuImage from "@/assets/menu.png";

const menuCategories = [
  {
    name: "Indian Starters",
    items: [
      { name: "Rosemary Kabab", price: "₹269" },
      { name: "Ros by Rolls", price: "₹269" },
      { name: "Masledar Cheese Kebab", price: "₹269" },
      { name: "Dahi Papdi Chat", price: "₹129" },
    ],
  },
  {
    name: "Chinese Delights",
    items: [
      { name: "Honey Chilly Potato", price: "₹249" },
      { name: "Honey Chilly With Sesam", price: "₹299" },
      { name: "Paneer Chilly", price: "₹299" },
      { name: "Mushroom Chilly", price: "₹349" },
    ],
  },
  {
    name: "Indian Essence",
    items: [
      { name: "Redmit Kebab", price: "₹329" },
      { name: "Keema Soya Tikka", price: "₹329" },
      { name: "Paneer Makhmali Kebab", price: "₹349" },
      { name: "Paneer Kali Mirchi Tikka", price: "₹369" },
    ],
  },
  {
    name: "Main Course",
    items: [
      { name: "Lehsuni Palak", price: "₹399" },
      { name: "Paneer Lababdar", price: "₹339" },
      { name: "Malai Kofta", price: "₹339" },
      { name: "Sabz Noora Chas (Keema Veg)", price: "₹339" },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of multi-cuisine dishes,
            crafted with authentic flavors and fresh ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Menu Categories */}
          <div className="animate-fade-in">
            <Tabs defaultValue="indian" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
                <TabsTrigger value="indian">Indian</TabsTrigger>
                <TabsTrigger value="chinese">Chinese</TabsTrigger>
                <TabsTrigger value="essence">Essence</TabsTrigger>
                <TabsTrigger value="main">Main</TabsTrigger>
              </TabsList>
              
              {menuCategories.map((category, idx) => (
                <TabsContent key={idx} value={category.name.toLowerCase().split(' ')[0]}>
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-primary mb-6">
                        {category.name}
                      </h3>
                      <div className="space-y-4">
                        {category.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex justify-between items-center py-2 border-b border-border last:border-0"
                          >
                            <span className="text-foreground font-medium">
                              {item.name}
                            </span>
                            <span className="text-accent font-bold">
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Full Menu Image */}
          <div className="animate-fade-in">
            <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-shadow">
              <img
                src={menuImage}
                alt="Elaichi Complete Menu"
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => window.open(menuImage, '_blank')}
              />
            </Card>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Click to view full menu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
