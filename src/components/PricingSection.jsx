import React, { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Ideal untuk bisnis kecil yang baru memulai",
    price: {
      monthly: "299.000",
      yearly: "3.299.000",
    },
    features: [
      "Jumlah pengiriman: Hingga 100/bulan",
      "Pengguna: 2 akun",
      "Laporan dasar",
      "Pelacakan real-time",
      "Dukungan email",
    ],
    cta: "Mulai Gratis",
    popular: false,
  },
  {
    name: "Business",
    description: "Solusi lengkap untuk bisnis yang berkembang",
    price: {
      monthly: "799.000",
      yearly: "8.399.000",
    },
    features: [
      "Jumlah pengiriman: Hingga 500/bulan",
      "Pengguna: 10 akun",
      "Laporan lengkap & analitik",
      "Integrasi marketplace",
      "API akses",
      "Optimasi rute otomatis",
      "Dukungan prioritas",
    ],
    cta: "Coba Gratis 14 Hari",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Untuk operasi logistik skala besar",
    price: {
      monthly: "1.999.000",
      yearly: "19.999.000",
    },
    features: [
      "Jumlah pengiriman: Tak terbatas",
      "Pengguna: Tak terbatas",
      "Solusi kustom",
      "API lengkap",
      "Integrasi sistem ERP",
      "Dukungan 24/7",
      "Manajer akun dedicated",
      "Pelatihan tim",
    ],
    cta: "Hubungi Kami",
    popular: false,
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-white to-silogistik-blue-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-silogistik-blue-500">Harga Paket</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda
          </p>

          <div className="flex items-center justify-center bg-white p-1 rounded-full w-fit mx-auto border border-slate-200">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-silogistik-orange-500 text-white shadow-md"
                  : "text-slate-500 hover:text-slate-800"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Bulanan
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly
                  ? "bg-silogistik-orange-500 text-white shadow-md"
                  : "text-slate-500 hover:text-slate-800"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Tahunan <span className="text-xs font-normal">(-15%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border ${
                plan.popular
                  ? "border-silogistik-orange-500 shadow-lg scale-105 z-10"
                  : "border-slate-200 shadow-sm"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-silogistik-blue-500">{plan.name}</h3>
                <p className="text-slate-600 mt-2">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-silogistik-blue-500">
                  Rp {isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-slate-500 ml-2">/ {isYearly ? "tahun" : "bulan"}</span>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-silogistik-orange-500 shrink-0 mt-0.5 mr-3" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular 
                    ? "bg-silogistik-orange-500 hover:bg-silogistik-orange-600 text-white" 
                    : "bg-silogistik-blue-500 hover:bg-silogistik-blue-600 text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 