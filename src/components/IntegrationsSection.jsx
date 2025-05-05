import React from "react";

const integrations = [
  {
    name: "WooCommerce",
    logo: "/placeholder.svg",
    description: "Integrasi langsung dengan toko online WooCommerce Anda untuk pengiriman yang mulus.",
  },
  {
    name: "Shopify",
    logo: "/placeholder.svg",
    description: "Sinkronkan pesanan Shopify dan kelola pengiriman tanpa proses manual.",
  },
  {
    name: "Tokopedia",
    logo: "/placeholder.svg",
    description: "Hubungkan akun Tokopedia untuk memproses pengiriman dalam satu dashboard.",
  },
  {
    name: "Bukalapak",
    logo: "/placeholder.svg",
    description: "Kelola pesanan dan pengiriman Bukalapak melalui platform terintegrasi.",
  },
  {
    name: "SAP",
    logo: "/placeholder.svg",
    description: "Sinkronisasi dengan sistem ERP SAP untuk data logistik yang terpadu.",
  },
  {
    name: "Oracle",
    logo: "/placeholder.svg",
    description: "Integrasi dengan solusi Oracle untuk manajemen rantai pasokan yang efisien.",
  },
];

const IntegrationsSection = () => {
  return (
    <section className="py-20 bg-white" id="integrations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Terintegrasi dengan Banyak Platform</h2>
          <p className="section-subtitle">
            CargoPilot terintegrasi dengan berbagai marketplace dan sistem ERP untuk pengalaman yang mulus
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  className="h-16 w-16 mb-4 opacity-80"
                />
                <h3 className="font-semibold text-slate-800 mb-2">{integration.name}</h3>
                <p className="text-sm text-slate-600">{integration.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection; 