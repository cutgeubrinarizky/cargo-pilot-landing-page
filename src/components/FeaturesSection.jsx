import React from "react";
import { Package, Truck, MapPin, FileText, ChartBar, Users } from "lucide-react";

const features = [
  {
    title: "Manajemen Pengiriman",
    description: "Pantau status pengiriman real-time, atur jadwal, dan optimasi rute untuk efisiensi maksimal.",
    icon: <Package className="h-8 w-8 text-cargo" />,
  },
  {
    title: "Pengelolaan Kurir",
    description: "Atur penugasan, lihat performa, dan kelola kurir dengan mudah melalui satu dashboard.",
    icon: <Truck className="h-8 w-8 text-cargo" />,
  },
  {
    title: "Pelacakan Paket",
    description: "Lacak status paket secara real-time dengan tampilan peta interaktif yang mudah dipahami.",
    icon: <MapPin className="h-8 w-8 text-cargo" />,
  },
  {
    title: "Label & Invoice",
    description: "Buat dan cetak label pengiriman serta invoice dengan sekali klik tanpa kerumitan.",
    icon: <FileText className="h-8 w-8 text-cargo" />,
  },
  {
    title: "Laporan & Analitik",
    description: "Dapatkan insight bisnis melalui laporan dan dashboard analitik yang komprehensif dan informatif.",
    icon: <ChartBar className="h-8 w-8 text-cargo" />,
  },
  {
    title: "Manajemen Pengguna",
    description: "Atur akses dan peran untuk setiap anggota tim sesuai dengan tanggung jawab mereka.",
    icon: <Users className="h-8 w-8 text-cargo" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Fitur Utama</h2>
          <p className="section-subtitle">
            Solusi lengkap untuk semua kebutuhan manajemen logistik bisnis Anda, dari pengiriman hingga analisis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-cargo transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 