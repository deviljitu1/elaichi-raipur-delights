import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
// import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Services />
      <Gallery />
      {/* <InstagramFeed /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
