import React, { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Untuk bisnis kecil",
    priceMonthly: "1.500.000",
    priceYearly: "15.000.000",
    features: [
      "Manajemen pengiriman dasar",
      "Pelacakan real-time",
      "Hingga 500 pengiriman/bulan",
      "Dukungan email",
      "Label & invoice otomatis",
      "2 akun pengguna"
    ],
    cta: "Mulai Uji Coba Gratis",
    popular: false
  },
  {
    name: "Professional",
    description: "Untuk bisnis menengah",
    priceMonthly: "3.000.000",
    priceYearly: "30.000.000",
    features: [
      "Semua fitur Starter",
      "Analitik & laporan lanjutan",
      "Hingga 2.000 pengiriman/bulan",
      "Optimasi rute otomatis",
      "Dukungan prioritas",
      "5 akun pengguna",
      "Integrasi API"
    ],
    cta: "Mulai Uji Coba Gratis",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Untuk perusahaan besar",
    priceMonthly: "Hubungi Kami",
    priceYearly: "Hubungi Kami",
    features: [
      "Solusi kustom",
      "Volume pengiriman tak terbatas",
      "Analitik prediktif berbasis AI",
      "Integrasi sistem lengkap",
      "Akun pengguna tak terbatas",
      "Dukungan 24/7",
      "Manajer akun khusus"
    ],
    cta: "Hubungi Tim Sales",
    popular: false
  }
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white to-silogistik-blue-50" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-silogistik-blue-500">Paket Harga yang Fleksibel</h2>
            <p className="text-lg text-slate-600 mb-8">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda
            </p>
            
            {/* Toggle Pills */}
            <div className="inline-flex p-1 bg-slate-100 rounded-full">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  !isYearly 
                  ? 'bg-silogistik-orange-500 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Bulanan
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isYearly 
                  ? 'bg-silogistik-orange-500 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                <span>Tahunan</span>
                <span className="text-xs opacity-75">(-15%)</span>
              </button>
            </div>
          </div>

          {/* Paid Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl group transition-all duration-300 ease-in-out 
                  hover:scale-[1.02] hover:-translate-y-1 cursor-pointer flex flex-col
                  ${plan.popular 
                    ? "border-2 border-silogistik-orange-500 shadow-lg hover:shadow-2xl hover:shadow-silogistik-orange-100" 
                    : "border border-slate-200 hover:border-silogistik-orange-200 shadow-sm hover:shadow-xl"}`}
              >
                {/* Highlight effect on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-silogistik-orange-50/50 via-white to-silogistik-orange-50/30"
                    : "bg-gradient-to-b from-silogistik-blue-50/30 via-white to-silogistik-blue-50/20"
                }`} />

                {plan.popular && (
                  <div className="absolute -top-5 inset-x-0 mx-auto z-10">
                    <span className="bg-silogistik-orange-500 text-white px-8 py-2 rounded-full text-sm font-medium shadow-lg">
                      Paling Populer
                    </span>
                  </div>
                )}

                <div className="p-8 relative z-10 h-full flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-silogistik-blue-500 group-hover:text-silogistik-blue-600 transition-colors duration-300">{plan.name}</h3>
                    <p className="text-slate-600">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-silogistik-blue-500 group-hover:text-silogistik-blue-600 transition-colors duration-300">
                      {plan.name === "Enterprise" 
                        ? plan.priceMonthly 
                        : `Rp${isYearly ? plan.priceYearly : plan.priceMonthly}`}
                    </span>
                    {plan.name !== "Enterprise" && (
                      <span className="text-slate-600">/{isYearly ? 'tahun' : 'bulan'}</span>
                    )}
                    {isYearly && plan.name !== "Enterprise" && (
                      <div className="text-sm text-silogistik-orange-500 mt-2">
                        Hemat Rp{(parseInt(plan.priceMonthly.replace(/\./g, '')) * 12 * 0.15).toLocaleString('id-ID')}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 transition-transform duration-300 ease-in-out" style={{ transitionDelay: `${i * 50}ms` }}>
                        <Check className={`h-5 w-5 shrink-0 mt-0.5 ${
                          plan.popular 
                          ? 'text-silogistik-orange-500'
                          : 'text-silogistik-blue-500'
                        }`} />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 mt-auto
                      ${plan.popular
                        ? "bg-silogistik-orange-500 text-white hover:bg-silogistik-orange-600"
                        : "bg-white border border-silogistik-blue-500 text-silogistik-blue-500 hover:bg-silogistik-blue-50"
                      }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="bg-gradient-to-b from-silogistik-blue-50 to-white" style={{ paddingBottom: '100px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-silogistik-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
              Gratis 14 Hari
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-silogistik-blue-500 mt-6 mb-4">
              Belum Yakin? Coba Dulu Gratis!
            </h2>
            
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
              Rasakan langsung kemudahan mengelola logistik dengan CargoPilot. 
              Akses fitur-fitur dasar selama 14 hari tanpa biaya dan tanpa kartu kredit.
            </p>

            <div className="bg-white rounded-2xl border border-silogistik-blue-100 p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-silogistik-blue-500 font-medium">
                    <Check className="h-5 w-5" />
                    <span>Fitur yang Bisa Anda Coba</span>
                  </div>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-silogistik-blue-500 mt-1">•</span>
                      <span>Manajemen pengiriman dasar untuk 50 pengiriman</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-silogistik-blue-500 mt-1">•</span>
                      <span>Pelacakan real-time untuk semua pengiriman aktif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-silogistik-blue-500 mt-1">•</span>
                      <span>Template dokumen standar untuk invoice dan label</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-silogistik-blue-500 font-medium">
                    <Check className="h-5 w-5" />
                    <span>Dukungan Penuh</span>
                  </div>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-silogistik-blue-500 mt-1">•</span>
                      <span>Panduan lengkap penggunaan platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-silogistik-blue-500 mt-1">•</span>
                      <span>Dukungan email prioritas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-silogistik-blue-500 mt-1">•</span>
                      <span>Konsultasi setup awal via video call</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button className="bg-silogistik-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-silogistik-blue-600 transition-colors duration-300">
                  Mulai Uji Coba Gratis
                </button>
                <p className="mt-4 text-sm text-slate-500">
                  Tidak perlu kartu kredit • Bisa langsung berhenti kapan saja
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection; 