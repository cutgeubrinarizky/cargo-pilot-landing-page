import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";

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
              src="/images/logosilogistik.png"
              className="h-8 w-auto"
            />
            {/* <span className="ml-2 text-xl font-bold text-cargo-dark">CargoPilot</span> */}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-700 hover:text-silogistik-orange font-medium">Fitur</a>
          <a href="#benefits" className="text-slate-700 hover:text-silogistik-orange font-medium">Keunggulan</a>
          {/* <a href="#testimonials" className="text-slate-700 hover:text-cargo font-medium">Testimoni</a> */}
          <a href="#pricing" className="text-slate-700 hover:text-silogistik-orange font-medium">Harga</a>
          <a href="#faq" className="text-slate-700 hover:text-silogistik-orange font-medium">FAQ</a>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-silogistik-blue border-silogistik-blue hover:bg-silogistik-blue/10">Masuk</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden rounded-[32px] border-none bg-white/90 backdrop-blur-md shadow-2xl animate-in zoom-in-95 duration-300">
              <div className="relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-silogistik-blue-50/50 via-white to-silogistik-orange-50/30 pointer-events-none" />
                
                <div className="relative p-8 space-y-6">
                  <DialogHeader className="space-y-2">
                    <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-silogistik-blue-600 to-silogistik-orange-500 bg-clip-text text-transparent">
                      Masuk
                    </DialogTitle>
                    <DialogDescription className="text-slate-500">
                      Masukkan email dan kata sandi Anda
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-5">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-slate-700">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="nama@perusahaan.com"
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white focus:border-silogistik-blue-500 focus:ring-2 focus:ring-silogistik-blue-500/20 transition-all duration-200 hover:border-slate-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium text-slate-700">Kata Sandi</Label>
                        <Input 
                          id="password" 
                          type="password"
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white focus:border-silogistik-blue-500 focus:ring-2 focus:ring-silogistik-blue-500/20 transition-all duration-200 hover:border-slate-300"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remember" className="rounded-xl border-2 border-slate-200 text-silogistik-blue-500 focus:ring-2 focus:ring-silogistik-blue-500/20 transition-colors duration-200" />
                          <label htmlFor="remember" className="text-sm text-slate-600 select-none">Ingat saya</label>
                        </div>
                        <a href="#" className="text-sm font-medium text-silogistik-blue-500 hover:text-silogistik-orange-500 transition-colors duration-200">
                          Lupa kata sandi?
                        </a>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-silogistik-blue-500 to-silogistik-orange-500 hover:from-silogistik-blue-600 hover:to-silogistik-orange-600 text-white py-3 rounded-2xl font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0">
                        Masuk
                      </Button>

                      <div className="text-center">
                        <span className="text-sm text-slate-500">
                          Belum punya akun? {" "}
                          <a href="#" className="font-medium text-silogistik-blue-500 hover:text-silogistik-orange-500 transition-colors duration-200">
                            Daftar sekarang
                          </a>
                        </span>
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="px-4 text-slate-500 bg-white text-sm">atau</span>
                        </div>
                      </div>

                      <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-200">
                        <img src="/images/google.svg" alt="Google" className="w-5 h-5" />
                        <span className="text-sm font-medium text-slate-700">Lanjutkan dengan Google</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-silogistik-orange hover:bg-silogistik-orange/90 text-white">Daftar</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden rounded-[32px] border-none bg-white/90 backdrop-blur-md shadow-2xl animate-in zoom-in-95 duration-300">
              <div className="relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-silogistik-orange-50/50 via-white to-silogistik-blue-50/30 pointer-events-none" />
                
                <div className="relative p-8 space-y-6">
                  <DialogHeader className="space-y-2">
                    <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-silogistik-orange-500 to-silogistik-blue-500 bg-clip-text text-transparent">
                      Daftar Akun
                    </DialogTitle>
                    <DialogDescription className="text-slate-500">
                      Buat akun baru Silogistik
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-5">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium text-slate-700">Nama Depan</Label>
                          <Input 
                            id="firstName"
                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white focus:border-silogistik-orange-500 focus:ring-2 focus:ring-silogistik-orange-500/20 transition-all duration-200 hover:border-slate-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium text-slate-700">Nama Belakang</Label>
                          <Input 
                            id="lastName"
                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white focus:border-silogistik-orange-500 focus:ring-2 focus:ring-silogistik-orange-500/20 transition-all duration-200 hover:border-slate-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email-register" className="text-sm font-medium text-slate-700">Email</Label>
                        <Input 
                          id="email-register" 
                          type="email" 
                          placeholder="nama@perusahaan.com"
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white focus:border-silogistik-orange-500 focus:ring-2 focus:ring-silogistik-orange-500/20 transition-all duration-200 hover:border-slate-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password-register" className="text-sm font-medium text-slate-700">Kata Sandi</Label>
                        <Input 
                          id="password-register" 
                          type="password"
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white focus:border-silogistik-orange-500 focus:ring-2 focus:ring-silogistik-orange-500/20 transition-all duration-200 hover:border-slate-300"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox id="terms" className="mt-1 rounded-xl border-2 border-slate-200 text-silogistik-orange-500 focus:ring-2 focus:ring-silogistik-orange-500/20 transition-colors duration-200" />
                        <label htmlFor="terms" className="text-sm text-slate-600">
                          Saya setuju dengan {" "}
                          <a href="#" className="font-medium text-silogistik-orange-500 hover:text-silogistik-blue-500 transition-colors duration-200">
                            Syarat & Ketentuan
                          </a>
                          {" "}dan{" "}
                          <a href="#" className="font-medium text-silogistik-orange-500 hover:text-silogistik-blue-500 transition-colors duration-200">
                            Kebijakan Privasi
                          </a>
                        </label>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-silogistik-orange-500 to-silogistik-blue-500 hover:from-silogistik-orange-600 hover:to-silogistik-blue-600 text-white py-3 rounded-2xl font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0">
                        Daftar Sekarang
                      </Button>

                      <div className="text-center">
                        <span className="text-sm text-slate-500">
                          Sudah punya akun? {" "}
                          <a href="#" className="font-medium text-silogistik-orange-500 hover:text-silogistik-blue-500 transition-colors duration-200">
                            Masuk disini
                          </a>
                        </span>
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="px-4 text-slate-500 bg-white text-sm">atau</span>
                        </div>
                      </div>

                      <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-200">
                        <img src="/images/google.svg" alt="Google" className="w-5 h-5" />
                        <span className="text-sm font-medium text-slate-700">Daftar dengan Google</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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
            <a href="#features" className="block py-2 text-slate-700 hover:text-silogistik-orange font-medium">
              Fitur
            </a>
            <a href="#benefits" className="block py-2 text-slate-700 hover:text-silogistik-orange font-medium">
              Keunggulan
            </a>
            <a href="#testimonials" className="block py-2 text-slate-700 hover:text-silogistik-orange font-medium">
              Testimoni
            </a>
            <a href="#pricing" className="block py-2 text-slate-700 hover:text-silogistik-orange font-medium">
              Harga
            </a>
            <a href="#faq" className="block py-2 text-slate-700 hover:text-silogistik-orange font-medium">
              FAQ
            </a>
            <div className="pt-2 flex flex-col space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="text-silogistik-blue border-silogistik-blue hover:bg-silogistik-blue/10 justify-center">
                    Masuk
                  </Button>
                </DialogTrigger>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-silogistik-orange hover:bg-silogistik-orange/90 text-white justify-center">
                    Daftar
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 