import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CoreValues from "@/components/sections/CoreValues";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import AppLaunch from "@/components/sections/AppLaunch";
import Insights from "@/components/sections/Insights";
import Dashboard from "@/components/sections/Dashboard";
import CTA from "@/components/sections/CTA";
import Prototype from "@/components/sections/Prototype";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreValues />
        <HowItWorks />
        <Features />
        <AppLaunch />
        <Insights />
        <Dashboard />
        <CTA />
        <Prototype />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
