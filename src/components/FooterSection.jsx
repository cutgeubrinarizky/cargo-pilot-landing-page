import React from "react";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const FooterSection = () => {
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log("Subscribed with email:", email);
    alert("Terimakasih telah berlangganan newsletter kami!");
    form.reset();
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A2D35] to-[#363943]">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(135deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        </div>
      </div>

      <div className="relative pt-10 pb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-8 mb-8">
            {/* Logo dan Deskripsi */}
            <div className="lg:col-span-4">
              <div className="mb-4 bg-black/10 inline-block p-2 rounded-lg">
                <img
                  src="/images/logosilogistik.png"
                  alt="SI Logistik Logo"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed max-w-lg">
                Platform manajemen logistik terpadu untuk meningkatkan efisiensi pengiriman dan
                pengalaman pelanggan Anda.
              </p>
              <div className="flex gap-3">
                <a href="#" className="group">
                  <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/8 hover:bg-white/15 transition-all duration-300">
                    <Facebook className="h-4 w-4 text-gray-300 group-hover:text-white transition-all duration-300" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/8 hover:bg-white/15 transition-all duration-300">
                    <Twitter className="h-4 w-4 text-gray-300 group-hover:text-white transition-all duration-300" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/8 hover:bg-white/15 transition-all duration-300">
                    <Instagram className="h-4 w-4 text-gray-300 group-hover:text-white transition-all duration-300" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/8 hover:bg-white/15 transition-all duration-300">
                    <Youtube className="h-4 w-4 text-gray-300 group-hover:text-white transition-all duration-300" />
                  </div>
                </a>
              </div>
            </div>

            {/* Menu Links */}
            <div className="lg:col-span-2 lg:ml-8">
              <h3 className="text-sm font-medium text-white mb-3">Produk</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-gray-300 hover:text-white transition-all duration-300">
                    Fitur
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-all duration-300">
                    Harga
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-all duration-300">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-all duration-300">
                    Keamanan
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-sm font-medium text-white mb-3">Perusahaan</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-gray-300 hover:text-white transition-all duration-300">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-sm text-gray-300 hover:text-white transition-all duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-all duration-300">
                    Kontak
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-all duration-300">
                    Media
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-sm font-medium text-white mb-2">Newsletter</h3>
                <form onSubmit={handleSubscribe} className="relative">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Masukkan email Anda"
                    className="w-full bg-white/5 border-white/10 text-white placeholder-gray-400 pr-12 focus:border-white/20 focus:ring-white/20 transition-all duration-300 rounded-lg text-sm h-9"
                    required
                  />
                  <Button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-md flex items-center"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-xs">
                &copy; {year} SI Logistik. Seluruh hak cipta dilindungi.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-all duration-300">
                  Syarat Layanan
                </a>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-all duration-300">
                  Kebijakan Privasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 