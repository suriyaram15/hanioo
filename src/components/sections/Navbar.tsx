import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Blog", href: "#blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar + Main Navbar Wrapper - No gap between them */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar */}
        <div className="bg-primary text-primary-foreground py-2.5 text-sm">
          <div className="container mx-auto pl-24 pr-22"> 
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-[13px]">Chennai, Tamil Nadu, 600 001</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-[13px]">+91 729 900 5677</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-[13px]">salesteam@honeytranslation.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-background/20 backdrop-blur-3xl shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex items-center justify-between h-[90px]">
              {/* Logo + Hanioo Text */}
              <a href="/" className="flex items-center gap-3 ml-5">
                <img
                  src="/Hanioo-Nav.png"
                  alt="Hanioo"
                  className="h-12 w-auto object-contain"
                />
                <h1
                  className="text-4xl"
                  style={{
                    fontFamily: "'Lateef'",
                    fontWeight: 550,
                    color: "#20225E",
                    letterSpacing: "0.07em",
                  }}
                >
                  Hanioo
                </h1>
              </a>

              {/* Desktop Navigation - Pure black text */}
              <div className="hidden lg:flex items-center gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-black hover:text-primary transition-colors text-[15px] font-medium"
                    style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-4">
                <Button
                  variant="outline"
                  className="border border-primary text-primary hover:bg-primary/5 rounded-[6px] px-8 h-8.5 w-[150px] font-semibold"
                  style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
                >
                  Contact
                </Button>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-[6px] px-8 h-8.5 w-[150px]"
                  style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
                >
                  Join Wishlist
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-foreground"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="lg:hidden py-6 border-t border-border bg-background/95 backdrop-blur-3xl">
                <div className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-black hover:text-primary transition-colors py-2 text-lg font-medium"
                      style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="flex flex-col gap-4 pt-6 border-t border-border">
                    <Button
                      variant="outline"
                      className="border border-primary text-primary hover:bg-primary/5 rounded-[16px] h-10 w-[180px] font-semibold"
                      style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
                    >
                      Contact
                    </Button>
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-[16px] h-10 w-[180px] font-semibold"
                      style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
                    >
                      Join Wishlist
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Spacer */}
      <div className="h-[138px]" />
    </>
  );
};

export default Navbar;