import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";

const HeroSection = () => {
  const highlights = [
    {
      icon: <Shield className="w-4 h-4 text-silogistik-blue-500" />,
      text: "Keamanan Data Terjamin"
    },
    {
      icon: <Zap className="w-4 h-4 text-silogistik-orange-500" />,
      text: "Setup Cepat 5 Menit"
    },
    {
      icon: <Clock className="w-4 h-4 text-green-500" />,
      text: "Dukungan 24/7"
    }
  ];

  return (
    <section className="min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white relative" id="hero">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-silogistik-orange-50 px-3 py-1.5 rounded-full mb-4">
              <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-silogistik-orange-500"></span>
              <span className="text-sm font-medium text-silogistik-orange-600">Platform Logistik Terbaru</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-silogistik-blue-500">SI Logistik</span> - 
              <span className="bg-gradient-to-r from-silogistik-blue-500 via-silogistik-orange-500 to-silogistik-orange-600 text-transparent bg-clip-text"> Solusi Manajemen Logistik Terpadu</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-6 max-w-2xl leading-relaxed">
              Optimalkan operasional pengiriman dan tingkatkan efisiensi bisnis logistik Anda dengan platform manajemen yang terintegrasi dan mudah digunakan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-silogistik-orange-500 hover:bg-silogistik-orange-600 text-white px-5 py-2.5 text-base font-medium transition-all duration-300 shadow-lg shadow-silogistik-orange-500/20 hover:shadow-xl hover:shadow-silogistik-orange-500/30" 
                href="#pricing"
              >
                Mulai Gratis 14 Hari
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="text-silogistik-blue-500 border-2 border-silogistik-blue-500 hover:bg-silogistik-blue-50 px-5 py-2.5 text-base font-medium transition-all duration-300" 
                href="#demo"
              >
                Lihat Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm"
                >
                  {item.icon}
                  <span className="text-xs font-medium text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-zoom-in flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl shadow-xl p-3">
                <div className="absolute inset-0 bg-gradient-to-tr from-silogistik-blue-500/5 to-silogistik-orange-500/5 rounded-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"
                  alt="SI Logistik Dashboard"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="eager"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                />

                {/* Floating feature highlight */}
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="bg-silogistik-blue-50 p-1.5 rounded-lg">
                      <Zap className="w-4 h-4 text-silogistik-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-900">Setup Cepat</p>
                      <p className="text-[10px] text-slate-500">Mulai dalam 5 menit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 