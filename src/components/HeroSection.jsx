import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center overflow-hidden relative bg-gradient-to-b from-white to-slate-50" id="hero">
      {/* Background pattern dengan efek parallax */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-silogistik-blue-50/30 to-silogistik-orange-50/30 backdrop-blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-silogistik-orange-50 to-silogistik-orange-100/50 px-5 py-2.5 rounded-full backdrop-blur-sm border border-silogistik-orange-100">
              <span className="animate-pulse w-2.5 h-2.5 rounded-full bg-silogistik-orange-500"></span>
              <span className="text-sm font-semibold text-silogistik-orange-600">Platform Logistik Terbaru</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-silogistik-blue-600">Silogistik</span> - 
                <span className="bg-gradient-to-r from-silogistik-blue-600 via-silogistik-orange-500 to-silogistik-orange-600 text-transparent bg-clip-text"> Solusi Manajemen Logistik Terpadu</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-light">
                Optimalkan operasional pengiriman dan tingkatkan efisiensi bisnis logistik Anda dengan platform manajemen yang terintegrasi dan mudah digunakan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                className="bg-gradient-to-r from-silogistik-orange-500 to-silogistik-orange-600 hover:from-silogistik-orange-600 hover:to-silogistik-orange-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-xl shadow-silogistik-orange-500/20 hover:shadow-2xl hover:shadow-silogistik-orange-500/30 rounded-2xl" 
                href="#pricing"
              >
                Mulai Gratis 14 Hari
                <ArrowRight className="ml-2 animate-bounce-x" size={20} />
              </Button>
              <Button 
                variant="outline" 
                className="text-silogistik-blue-600 border-2 border-silogistik-blue-200 hover:border-silogistik-blue-300 hover:bg-silogistik-blue-50 px-8 py-6 text-lg font-semibold transition-all duration-300 rounded-2xl backdrop-blur-sm" 
                href="#demo"
              >
                Lihat Demo
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>

          <div className="animate-float flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Main image container dengan efek glassmorphism */}
              <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/40">
                <div className="absolute inset-0 bg-gradient-to-tr from-silogistik-blue-500/10 to-silogistik-orange-500/10 rounded-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"
                  alt="Silogistik Dashboard"
                  className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                  loading="eager"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                />

                {/* Floating feature highlights */}
                {/* Setup Cepat - di kanan tengah */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-silogistik-blue-50 to-silogistik-blue-100 p-3 rounded-xl shadow-inner">
                      <Zap className="w-7 h-7 text-silogistik-blue-500" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Setup Cepat</p>
                      <p className="text-sm text-slate-500">Mulai dalam 5 menit</p>
                    </div>
                  </div>
                </div>

                {/* Keamanan Data - di atas tengah */}
                <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-silogistik-blue-50 to-silogistik-blue-100 p-3 rounded-xl shadow-inner">
                      <Shield className="w-7 h-7 text-silogistik-blue-500" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Keamanan Data</p>
                      <p className="text-sm text-slate-500">100% Terjamin</p>
                    </div>
                  </div>
                </div>

                {/* Dukungan 24/7 - di bawah tengah */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-silogistik-blue-50 to-silogistik-blue-100 p-3 rounded-xl shadow-inner">
                      <Clock className="w-7 h-7 text-silogistik-blue-500" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Dukungan</p>
                      <p className="text-sm text-slate-500">24/7 Non-Stop</p>
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