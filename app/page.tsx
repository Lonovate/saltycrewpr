import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Routes } from "./components/Routes";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Gallery } from "./components/Gallery";
import { History } from "./components/History";
import { Testimonials } from "./components/Testimonials";
import { SocialFeed } from "./components/SocialFeed";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { UnderConstruction } from "./components/UnderConstruction";

const UNDER_CONSTRUCTION = false;

export default function Home() {
  if (UNDER_CONSTRUCTION) {
    return (
      <div className="min-h-screen bg-deep-ocean">
        <UnderConstruction />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Routes />
      <WhyChooseUs />
      <Gallery />
      <History />
      {/* <Testimonials /> */}
      <SocialFeed />
      <Contact />
      <Footer />
    </div>
  );
}
