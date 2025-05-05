
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Untuk bisnis kecil yang baru mulai",
    price: "Rp499.000",
    priceDescription: "per bulan",
    features: [
      "Hingga 300 pengiriman per bulan",
      "Manajemen pengiriman dasar",
      "Pelacakan paket",
      "Label & invoice basic",
      "1 admin user",
      "Email support",
    ],
    cta: "Mulai Basic",
    popular: false,
  },
  {
    name: "Pro",
    description: "Untuk bisnis menengah yang berkembang",
    price: "Rp1.299.000",
    priceDescription: "per bulan",
    features: [
      "Hingga 1,000 pengiriman per bulan",
      "Semua fitur Basic",
      "Optimasi rute & penugasan",
      "Analitik & reporting lengkap",
      "Hingga 5 admin users",
      "Email & telepon support",
      "Integrasi dengan 3 platform",
    ],
    cta: "Mulai Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Solusi custom untuk perusahaan besar",
    price: "Hubungi Kami",
    priceDescription: "untuk penawaran khusus",
    features: [
      "Pengiriman tidak terbatas",
      "Semua fitur Pro",
      "Solusi custom",
      "API akses penuh",
      "Integrasi tidak terbatas",
      "Dedicated account manager",
      "24/7 prioritas support",
      "On-site training",
    ],
    cta: "Hubungi Sales",
    popular: false,
  },
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "annual"

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Pricing Plan</h2>
          <p className="section-subtitle">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>

          <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg mt-6">
            <button
              className={`px-4 py-2 text-sm rounded-md ${
                billingCycle === "monthly"
                  ? "bg-white text-slate-800 shadow"
                  : "text-slate-600"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Bulanan
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-md ${
                billingCycle === "annual"
                  ? "bg-white text-slate-800 shadow"
                  : "text-slate-600"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              Tahunan <span className="text-green-500 text-xs">Hemat 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-white border ${
                plan.popular
                  ? "border-cargo shadow-lg shadow-cargo/10 relative"
                  : "border-slate-200 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-cargo text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                    Populer
                  </span>
                </div>
              )}

              <div className="p-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-800">{plan.price}</span>
                  <span className="text-slate-500 text-sm ml-1">{plan.priceDescription}</span>
                </div>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-cargo hover:bg-cargo-dark"
                      : "bg-slate-800 hover:bg-slate-700"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="p-6">
                <p className="font-medium text-sm text-slate-700 mb-4">Termasuk:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
