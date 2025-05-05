import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566843972142-a7fcb70de1a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                alt="Tim CargoPilot"
                className="rounded-lg shadow-md w-full"
              />
              <div className="absolute inset-0 bg-cargo/10 rounded-lg" />
              <div className="absolute -bottom-6 -right-6 bg-cargo/10 w-40 h-40 rounded-full blur-2xl z-[-1]" />
              <div className="absolute -top-6 -left-6 bg-blue-500/10 w-40 h-40 rounded-full blur-2xl z-[-1]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="section-title">Tentang CargoPilot</h2>
            <p className="text-lg text-slate-600 mb-6">
              CargoPilot didirikan pada tahun 2020 dengan misi untuk membantu bisnis di Indonesia mengoptimalkan operasi logistik mereka melalui teknologi yang inovatif dan terjangkau.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Tim kami terdiri dari para ahli di bidang logistik, teknologi, dan layanan pelanggan yang berdedikasi untuk membantu bisnis Anda berkembang melalui solusi logistik yang efisien.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Dalam 3 tahun perjalanan kami, CargoPilot telah membantu lebih dari 500 perusahaan di Indonesia meningkatkan efisiensi pengiriman, mengurangi biaya operasional, dan meningkatkan kepuasan pelanggan mereka.
            </p>
            
            <Button className="bg-cargo hover:bg-cargo-dark">
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 