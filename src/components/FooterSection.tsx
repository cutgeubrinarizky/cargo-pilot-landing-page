
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const FooterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Berhasil Berlangganan!",
        description: "Terima kasih telah berlangganan newsletter kami.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/placeholder.svg"
                alt="CargoPilot Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-white">CargoPilot</span>
            </div>
            <p className="text-slate-400 mb-6">
              Platform manajemen logistik terpadu untuk mengoptimalkan operasional pengiriman dan meningkatkan efisiensi bisnis Anda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-cargo transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-cargo transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-cargo transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-cargo transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Link Cepat</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-400 hover:text-cargo transition-colors">Fitur</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-cargo transition-colors">Harga</a></li>
              <li><a href="#blog" className="text-slate-400 hover:text-cargo transition-colors">Blog</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-cargo transition-colors">Tentang Kami</a></li>
              <li><a href="#demo" className="text-slate-400 hover:text-cargo transition-colors">Request Demo</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cargo transition-colors">Karir</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-cargo mr-3 flex-shrink-0 mt-1" />
                <span className="text-slate-400">
                  Jl. Sudirman No. 123, Gedung ABC, Lantai 5, Jakarta Pusat 10220
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-cargo mr-3 flex-shrink-0" />
                <a href="tel:+6221123456789" className="text-slate-400 hover:text-cargo transition-colors">
                  +62 21 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-cargo mr-3 flex-shrink-0" />
                <a href="mailto:info@cargopilot.id" className="text-slate-400 hover:text-cargo transition-colors">
                  info@cargopilot.id
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-slate-400 mb-4">
              Dapatkan update terbaru tentang produk dan industri logistik.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  className="rounded-r-none bg-slate-800 border-slate-700 focus:border-cargo focus:ring-cargo text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-cargo hover:bg-cargo-dark rounded-l-none"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; 2023 CargoPilot. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-slate-400 hover:text-cargo transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-slate-400 hover:text-cargo transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="text-slate-400 hover:text-cargo transition-colors">Peta Situs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
