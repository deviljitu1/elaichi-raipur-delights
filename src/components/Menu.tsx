import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import rosemaryKabab from "@/assets/menu/rosemary-kabab.jpg";
import rosRolls from "@/assets/menu/ros-rolls.jpg";
import cheeseKebab from "@/assets/menu/cheese-kebab.jpg";
import dahiPapdiChat from "@/assets/menu/dahi-papdi-chat.jpg";
import honeyChillyPotato from "@/assets/menu/honey-chilly-potato.jpg";
import honeyChillySesame from "@/assets/menu/honey-chilly-sesame.jpg";
import paneerChilly from "@/assets/menu/paneer-chilly.jpg";
import mushroomChilly from "@/assets/menu/mushroom-chilly.jpg";
import redmitKebab from "@/assets/menu/redmit-kebab.jpg";
import keemaSoyaTikka from "@/assets/menu/keema-soya-tikka.jpg";
import paneerMakhmaliKebab from "@/assets/menu/paneer-makhmali-kebab.jpg";
import paneerKaliMirchiTikka from "@/assets/menu/paneer-kali-mirchi-tikka.jpg";
import lehsuniPalak from "@/assets/menu/lehsuni-palak.jpg";
import paneerLababdar from "@/assets/menu/paneer-lababdar.jpg";
import malaiKofta from "@/assets/menu/malai-kofta.jpg";
import sabzNooraChas from "@/assets/menu/sabz-noora-chas.jpg";

const menuCategories = [
  {
    name: "Indian Starters",
    items: [
      { name: "Rosemary Kabab", price: "₹269", image: rosemaryKabab },
      { name: "Ros by Rolls", price: "₹269", image: rosRolls },
      { name: "Masledar Cheese Kebab", price: "₹269", image: cheeseKebab },
      { name: "Dahi Papdi Chat", price: "₹129", image: dahiPapdiChat },
    ],
  },
  {
    name: "Chinese Delights",
    items: [
      { name: "Honey Chilly Potato", price: "₹249", image: honeyChillyPotato },
      { name: "Honey Chilly With Sesam", price: "₹299", image: honeyChillySesame },
      { name: "Paneer Chilly", price: "₹299", image: paneerChilly },
      { name: "Mushroom Chilly", price: "₹349", image: mushroomChilly },
    ],
  },
  {
    name: "Indian Essence",
    items: [
      { name: "Redmit Kebab", price: "₹329", image: redmitKebab },
      { name: "Keema Soya Tikka", price: "₹329", image: keemaSoyaTikka },
      { name: "Paneer Makhmali Kebab", price: "₹349", image: paneerMakhmaliKebab },
      { name: "Paneer Kali Mirchi Tikka", price: "₹369", image: paneerKaliMirchiTikka },
    ],
  },
  {
    name: "Main Course",
    items: [
      { name: "Lehsuni Palak", price: "₹399", image: lehsuniPalak },
      { name: "Paneer Lababdar", price: "₹339", image: paneerLababdar },
      { name: "Malai Kofta", price: "₹339", image: malaiKofta },
      { name: "Sabz Noora Chas (Keema Veg)", price: "₹339", image: sabzNooraChas },
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

        <div className="animate-fade-in">
          <Tabs defaultValue="indian" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="indian">Indian</TabsTrigger>
              <TabsTrigger value="chinese">Chinese</TabsTrigger>
              <TabsTrigger value="essence">Essence</TabsTrigger>
              <TabsTrigger value="main">Main</TabsTrigger>
            </TabsList>
            
            {menuCategories.map((category, idx) => (
              <TabsContent key={idx} value={category.name.toLowerCase().split(' ')[0]}>
                <h3 className="text-3xl font-bold text-primary mb-8 text-center">
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <Card
                      key={itemIdx}
                      className="group overflow-hidden border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="text-foreground font-semibold mb-2 text-sm line-clamp-2 min-h-[2.5rem]">
                            {item.name}
                          </h4>
                          <p className="text-accent font-bold text-lg">
                            {item.price}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Menu;
