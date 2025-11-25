import { Instagram, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InstagramFeed = () => {
  const instagramHandle = "elaichi_raipur";
  const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

  // Sample Instagram post IDs - replace these with actual post URLs from Instagram
  const instagramPosts = [
    "https://www.instagram.com/p/SAMPLE1/embed",
    "https://www.instagram.com/p/SAMPLE2/embed",
    "https://www.instagram.com/p/SAMPLE3/embed",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-10 w-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Follow Us on Instagram
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Stay updated with our latest dishes, events, and special offers
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white border-0"
            >
              <Instagram className="mr-2 h-5 w-5" />
              @{instagramHandle}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured Instagram Content Cards */}
          <Card className="border-primary/20 hover:border-accent transition-all hover:shadow-elegant group animate-fade-in">
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Instagram className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Daily Specials
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Check out our delicious daily menu updates and chef's special creations
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-accent transition-all hover:shadow-elegant group animate-fade-in">
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-warm-gold opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Instagram className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Event Highlights
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      See memorable moments from weddings, parties, and celebrations at Elaichi
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-accent transition-all hover:shadow-elegant group animate-fade-in">
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-warm-gold to-primary opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Instagram className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Behind The Scenes
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Get a glimpse of our kitchen, chefs at work, and the art of cooking
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-primary rounded-lg shadow-glow p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Join Our Community
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Follow us on Instagram for exclusive behind-the-scenes content, special offers,
            and mouth-watering food photography. Tag us in your photos @{instagramHandle}!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent text-primary hover:bg-warm-gold shadow-glow"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow @{instagramHandle}
              </Button>
            </a>
            <a href="tel:9179909595">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Book Your Table
              </Button>
            </a>
          </div>
        </div>

        {/* Instagram Embed Instructions */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Want to see live Instagram posts here?{" "}
            <button className="text-accent hover:text-warm-gold underline font-medium">
              Upgrade to live feed integration
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
