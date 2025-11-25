import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-primary-foreground">
            Elaichi
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
            <a href="tel:9179909595">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
                <Phone className="mr-2 h-4 w-4" />
                Book Table
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-primary-foreground hover:text-accent transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-primary-foreground hover:text-accent transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-primary-foreground hover:text-accent transition-colors text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-primary-foreground hover:text-accent transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-primary-foreground hover:text-accent transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-primary-foreground hover:text-accent transition-colors text-left"
              >
                Contact
              </button>
              <a href="tel:9179909595">
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-primary">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Table
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
