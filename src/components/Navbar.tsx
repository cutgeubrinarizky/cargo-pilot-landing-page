
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img
              src="/placeholder.svg"
              alt="CargoPilot Logo"
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-cargo-dark">CargoPilot</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-700 hover:text-cargo font-medium">Fitur</a>
          <a href="#benefits" className="text-slate-700 hover:text-cargo font-medium">Keunggulan</a>
          <a href="#testimonials" className="text-slate-700 hover:text-cargo font-medium">Testimoni</a>
          <a href="#pricing" className="text-slate-700 hover:text-cargo font-medium">Harga</a>
          <a href="#faq" className="text-slate-700 hover:text-cargo font-medium">FAQ</a>
          <Button variant="outline" className="text-cargo border-cargo hover:bg-cargo/10">Masuk</Button>
          <Button className="bg-cargo hover:bg-cargo-dark">Daftar</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-md">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#features" className="block py-2 text-slate-700 hover:text-cargo font-medium">
              Fitur
            </a>
            <a href="#benefits" className="block py-2 text-slate-700 hover:text-cargo font-medium">
              Keunggulan
            </a>
            <a href="#testimonials" className="block py-2 text-slate-700 hover:text-cargo font-medium">
              Testimoni
            </a>
            <a href="#pricing" className="block py-2 text-slate-700 hover:text-cargo font-medium">
              Harga
            </a>
            <a href="#faq" className="block py-2 text-slate-700 hover:text-cargo font-medium">
              FAQ
            </a>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="text-cargo border-cargo hover:bg-cargo/10 justify-center">
                Masuk
              </Button>
              <Button className="bg-cargo hover:bg-cargo-dark justify-center">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
