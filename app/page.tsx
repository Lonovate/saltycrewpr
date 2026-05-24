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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Routes />
      <WhyChooseUs />
      <Gallery />
      <History />
      <Testimonials />
      <SocialFeed />
      <Contact />
      <Footer />
    </div>
  );
}
