
import { Link } from "lucide-react";

const integrationLogos = [
  { name: "Shopee", logo: "/placeholder.svg" },
  { name: "Tokopedia", logo: "/placeholder.svg" },
  { name: "Bukalapak", logo: "/placeholder.svg" },
  { name: "Lazada", logo: "/placeholder.svg" },
  { name: "TikTok Shop", logo: "/placeholder.svg" },
  { name: "DANA", logo: "/placeholder.svg" },
  { name: "OVO", logo: "/placeholder.svg" },
  { name: "GoPay", logo: "/placeholder.svg" },
];

const IntegrationsSection = () => {
  return (
    <section className="py-20 bg-cargo-light" id="integrations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Integrasi</h2>
          <p className="section-subtitle">
            CargoPilot terintegrasi dengan berbagai platform e-commerce dan payment gateway populer
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-slate-100 max-w-5xl mx-auto">
          <div className="flex items-start md:items-center gap-6 mb-8">
            <div className="bg-cargo/10 p-4 rounded-xl">
              <Link className="h-8 w-8 text-cargo" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">Integrasi Mudah, Tanpa Kerumitan</h3>
              <p className="text-slate-600 mt-2">
                Hubungkan CargoPilot dengan berbagai platform hanya dengan beberapa klik. API yang komprehensif dan dokumentasi yang jelas memudahkan proses integrasi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {integrationLogos.map((integration, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl hover:border-cargo/30 hover:shadow-sm transition-all duration-200"
              >
                <img
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  className="h-12 w-12 object-contain mb-2 opacity-70 hover:opacity-100 transition-opacity"
                />
                <p className="text-sm font-medium text-slate-600">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
