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
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-cargo border-cargo hover:bg-cargo/10">Masuk</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-bold">Masuk ke Akun Anda</DialogTitle>
                <DialogDescription className="text-center">
                  Masukkan email dan kata sandi untuk mengakses akun Anda
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="nama@perusahaan.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Kata Sandi</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="text-sm text-slate-600">Ingat saya</label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Lupa kata sandi?</a>
                </div>
                <Button className="w-full mt-2 bg-cargo hover:bg-cargo-dark">Masuk</Button>
                <p className="text-center text-sm text-slate-600">
                  Belum punya akun? <a href="#" className="text-blue-600 hover:text-blue-800">Daftar sekarang</a>
                </p>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-cargo hover:bg-cargo-dark">Daftar</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-bold">Buat Akun Baru</DialogTitle>
                <DialogDescription className="text-center">
                  Daftar untuk mulai menggunakan CargoPilot
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="firstName">Nama Depan</Label>
                    <Input id="firstName" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nama Belakang</Label>
                    <Input id="lastName" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email-register">Email</Label>
                  <Input id="email-register" type="email" placeholder="nama@perusahaan.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password-register">Kata Sandi</Label>
                  <Input id="password-register" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Konfirmasi Kata Sandi</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-slate-600">
                    Saya setuju dengan <a href="#" className="text-blue-600 hover:text-blue-800">Syarat & Ketentuan</a> dan <a href="#" className="text-blue-600 hover:text-blue-800">Kebijakan Privasi</a>
                  </label>
                </div>
                <Button className="w-full mt-2 bg-cargo hover:bg-cargo-dark">Daftar Sekarang</Button>
                <p className="text-center text-sm text-slate-600">
                  Sudah punya akun? <a href="#" className="text-blue-600 hover:text-blue-800">Masuk disini</a>
                </p>
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="text-cargo border-cargo hover:bg-cargo/10 justify-center">
                    Masuk
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold">Masuk ke Akun Anda</DialogTitle>
                    <DialogDescription className="text-center">
                      Masukkan email dan kata sandi untuk mengakses akun Anda
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email-mobile">Email</Label>
                      <Input id="email-mobile" type="email" placeholder="nama@perusahaan.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password-mobile">Kata Sandi</Label>
                      <Input id="password-mobile" type="password" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember-mobile" />
                        <label htmlFor="remember-mobile" className="text-sm text-slate-600">Ingat saya</label>
                      </div>
                      <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Lupa kata sandi?</a>
                    </div>
                    <Button className="w-full mt-2 bg-cargo hover:bg-cargo-dark">Masuk</Button>
                    <p className="text-center text-sm text-slate-600">
                      Belum punya akun? <a href="#" className="text-blue-600 hover:text-blue-800">Daftar sekarang</a>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-cargo hover:bg-cargo-dark justify-center">
                    Daftar
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold">Buat Akun Baru</DialogTitle>
                    <DialogDescription className="text-center">
                      Daftar untuk mulai menggunakan CargoPilot
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="firstName-mobile">Nama Depan</Label>
                        <Input id="firstName-mobile" />
                      </div>
                      <div>
                        <Label htmlFor="lastName-mobile">Nama Belakang</Label>
                        <Input id="lastName-mobile" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email-register-mobile">Email</Label>
                      <Input id="email-register-mobile" type="email" placeholder="nama@perusahaan.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password-register-mobile">Kata Sandi</Label>
                      <Input id="password-register-mobile" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password-mobile">Konfirmasi Kata Sandi</Label>
                      <Input id="confirm-password-mobile" type="password" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms-mobile" />
                      <label htmlFor="terms-mobile" className="text-sm text-slate-600">
                        Saya setuju dengan <a href="#" className="text-blue-600 hover:text-blue-800">Syarat & Ketentuan</a> dan <a href="#" className="text-blue-600 hover:text-blue-800">Kebijakan Privasi</a>
                      </label>
                    </div>
                    <Button className="w-full mt-2 bg-cargo hover:bg-cargo-dark">Daftar Sekarang</Button>
                    <p className="text-center text-sm text-slate-600">
                      Sudah punya akun? <a href="#" className="text-blue-600 hover:text-blue-800">Masuk disini</a>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 