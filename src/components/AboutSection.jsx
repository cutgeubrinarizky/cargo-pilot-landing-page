import React, { useState } from "react";

const founders = [
  {
    name: "Ahmad Rizki",
    position: "CEO & Co-Founder",
    image: "/images/founders/ahmad-rizki.jpg",
    description: "Berpengalaman 10+ tahun di bidang logistik dan teknologi. Sebelumnya VP Operasi di perusahaan pengiriman nasional.",
    details: [
      "Lulusan S2 Manajemen Bisnis ITB",
      "Pengalaman memimpin tim 500+ karyawan",
      "Ahli dalam optimasi rantai pasok",
      "Pembicara di berbagai konferenSilogistik"
    ]
  },
  {
    name: "Siti Nurhayati",
    position: "CTO & Co-Founder",
    image: "/images/founders/siti-nurhayati.jpg",
    description: "Insinyur software dengan spesialisasi di AI dan machine learning. Memimpin pengembangan algoritma optimasi rute Silogistik.",
    details: [
      "Doktor Ilmu Komputer dari UI",
      "10+ tahun pengalaman pengembangan software",
      "Spesialis AI & Machine Learning",
      "Pemegang 3 paten teknologi logistik"
    ]
  },
  {
    name: "Rudi Hartono",
    position: "COO",
    image: "/images/founders/rudi-hartono.jpg",
    description: "Pakar operasional dengan latar belakang konsultan manajemen. Fokus pada proses bisnis dan efisiensi operasional.",
    details: [
      "Mantan konsultan McKinsey & Company",
      "Ahli dalam optimasi proses bisnis",
      "Pengalaman di 50+ proyek logistik",
      "Mentor di startup accelerator"
    ]
  }
];

const AboutSection = () => {
  const [expandedFounder, setExpandedFounder] = useState(null);

  const toggleFounder = (index) => {
    if (expandedFounder === index) {
      setExpandedFounder(null);
    } else {
      setExpandedFounder(index);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-silogistik-blue-50 to-white" id="about">
      {/* Background dengan pola dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-silogistik-blue-50/50 to-white"></div>
      
      {/* Accent circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-silogistik-orange-200 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-silogistik-blue-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-silogistik-blue-500 relative inline-block group">
            Tim Pendiri
            <div className="absolute bottom-0 left-0 w-full h-1 bg-silogistik-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </h2>
          <p className="text-lg text-slate-600 mt-2 hover:text-silogistik-orange-500 transition-colors duration-300">
            Bertemu dengan para ahli di balik Silogistik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative mb-6 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-2 border-4 border-white shadow-lg transition-all duration-300 group-hover:shadow-2xl bg-white">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
            </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-silogistik-blue-500/0 to-silogistik-orange-500/0 group-hover:from-silogistik-blue-500/20 group-hover:to-silogistik-orange-500/20 transition-colors duration-300" />
          </div>

              <div 
                className="backdrop-blur-sm bg-white/30 p-6 rounded-xl transition-all duration-300 group-hover:bg-white/40 w-full cursor-pointer"
                onClick={() => toggleFounder(index)}
              >
                <h3 className="text-xl md:text-2xl font-bold text-silogistik-blue-500 mb-2 transition-colors duration-300 group-hover:text-silogistik-orange-500">
                  {founder.name}
                </h3>
                <p className="text-slate-600 font-medium mb-4 transition-colors duration-300 group-hover:text-silogistik-orange-500">
                  {founder.position}
                </p>
                <p className="text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-silogistik-orange-500/80">
                  {founder.description}
                </p>
                
                {/* Dropdown arrow */}
                <div className={`mt-4 transition-transform duration-300 ${expandedFounder === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 mx-auto text-silogistik-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Dropdown content */}
                <div className={`overflow-hidden transition-all duration-300 ${expandedFounder === index ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                  <div className="pt-4 border-t border-slate-200">
                    <ul className="space-y-2 text-left">
                      {founder.details.map((detail, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start text-slate-600 transition-colors duration-300 group-hover:text-silogistik-orange-500/80"
                        >
                          <span className="mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>

        <div className="max-w-3xl mx-auto text-center backdrop-blur-sm bg-white/70 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:bg-white/80 hover:shadow-xl border border-white/20 group">
          <h3 className="text-2xl font-bold text-silogistik-blue-500 mb-4 transition-colors duration-300 group-hover:text-silogistik-orange-500">
            Visi Kami
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed italic transition-colors duration-300 group-hover:text-silogistik-orange-500/80">
            "Menjadi pemimpin inovaSilogistik di Asia Tenggara, menyediakan solusi yang memungkinkan bisnis dari semua ukuran untuk bersaing secara global melalui operaSilogistik yang efisien dan cerdas."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 