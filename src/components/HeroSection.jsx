import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center" id="hero">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-silogistik-blue-500">SI Logistik</span> - 
              <span className="bg-gradient-to-r from-silogistik-blue-500 via-silogistik-orange-500 to-silogistik-orange-600 text-transparent bg-clip-text"> Solusi Manajemen Logistik Terpadu</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Optimalkan operasional pengiriman dan tingkatkan efisiensi bisnis logistik Anda dengan platform manajemen yang terintegrasi dan mudah digunakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                className="bg-silogistik-orange-500 hover:bg-silogistik-orange-600 text-white px-6 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105" 
                href="#pricing"
              >
                Mulai Gratis
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                className="text-silogistik-blue-500 border-2 border-silogistik-blue-500 hover:bg-silogistik-blue-50 px-6 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105" 
                href="#demo"
              >
                Demo Produk
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            {/* <div className="mt-10 flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-white flex items-center justify-center text-base font-semibold text-silogistik-blue-500 transition-transform hover:scale-110"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-slate-900">500+ perusahaan</p>
                <p className="text-sm text-slate-600">telah menggunakan SI Logistik</p>
              </div>
            </div> */}
          </div>
          <div className="animate-zoom-in flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Accent lights */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-silogistik-orange-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-silogistik-blue-500/20 rounded-full blur-2xl"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-silogistik-blue-500/5 to-silogistik-orange-500/5 rounded-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"
                  alt="SI Logistik Dashboard"
                  className="w-full h-auto rounded-xl shadow-md transform transition-all duration-500 hover:scale-[1.02]"
                  loading="eager"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 