
import { TrendingUp, DollarSign, CheckCircle, Heart } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="h-12 w-12 text-cargo" />,
    title: "Efisiensi Operasional",
    description: "Kurangi waktu proses pengiriman hingga 40% dengan bantuan otomatisasi dan optimasi rute.",
    stat: "40%",
    statLabel: "lebih efisien",
  },
  {
    icon: <DollarSign className="h-12 w-12 text-cargo" />,
    title: "Pengurangan Biaya",
    description: "Optimasi rute dan penugasan menghemat biaya operasional dan mengurangi pemborosan sumber daya.",
    stat: "30%",
    statLabel: "penghematan biaya",
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-cargo" />,
    title: "Peningkatan Akurasi",
    description: "Kurangi kesalahan pengiriman dengan sistem pelacakan terpadu dan validasi data real-time.",
    stat: "99%",
    statLabel: "tingkat akurasi",
  },
  {
    icon: <Heart className="h-12 w-12 text-cargo" />,
    title: "Pengalaman Pelanggan",
    description: "Tingkatkan kepuasan pelanggan dengan status pengiriman real-time dan komunikasi yang transparan.",
    stat: "95%",
    statLabel: "kepuasan pelanggan",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-cargo-light" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Keunggulan Produk</h2>
          <p className="section-subtitle">
            CargoPilot memberikan nilai tambah yang signifikan untuk bisnis logistik Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-200 border border-slate-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-cargo/10 p-4 rounded-xl">{benefit.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">{benefit.title}</h3>
                  <p className="text-slate-600 mb-4">{benefit.description}</p>
                  <div className="flex items-center bg-cargo/5 px-4 py-2 rounded-lg w-fit">
                    <span className="text-2xl font-bold text-cargo">{benefit.stat}</span>
                    <span className="ml-2 text-slate-700">{benefit.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
