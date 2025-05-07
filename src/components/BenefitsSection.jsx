import React from "react";
import { TrendingUp, DollarSign, CheckCircle, Heart } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    title: "Efisiensi Operasional",
    description: "Kurangi waktu proses pengiriman hingga 40% dengan bantuan otomatisasi dan optimasi rute.",
    stat: "40%",
    statLabel: "lebih efisien",
    bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-white" />,
    title: "Pengurangan Biaya",
    description: "Optimasi rute dan penugasan menghemat biaya operasional dan mengurangi pemborosan sumber daya.",
    stat: "30%",
    statLabel: "penghematan biaya",
    bgColor: "bg-gradient-to-br from-silogistik-blue-400 to-silogistik-blue-600",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-white" />,
    title: "Peningkatan Akurasi",
    description: "Kurangi kesalahan pengiriman dengan sistem pelacakan terpadu dan validasi data real-time.",
    stat: "99%",
    statLabel: "tingkat akurasi",
    bgColor: "bg-gradient-to-br from-emerald-400 to-emerald-600",
  },
  {
    icon: <Heart className="h-10 w-10 text-white" />,
    title: "Pengalaman Pelanggan",
    description: "Tingkatkan kepuasan pelanggan dengan status pengiriman real-time dan komunikasi yang transparan.",
    stat: "95%",
    statLabel: "kepuasan pelanggan",
    bgColor: "bg-gradient-to-br from-rose-400 to-rose-600",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-silogistik-blue-50 to-white" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-silogistik-blue-500">Solusi Logistik Terpadu untuk Era Digital</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            CargoPilot adalah platform manajemen logistik inovatif yang dirancang untuk membantu bisnis dari berbagai skala mengoptimalkan operasi pengiriman mereka. Didirikan pada 2023, kami berkomitmen untuk menyederhanakan proses logistik dengan teknologi canggih namun mudah digunakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '30px 30px'
                }} />
              </div>

              {/* Icon Circle */}
              <div className={`${benefit.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>

              {/* Stats Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1">
                  <span className="text-lg font-bold text-silogistik-blue-500">{benefit.stat}</span>
                  <span className="text-xs text-slate-600">{benefit.statLabel}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-silogistik-blue-500 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Hover Line Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full">
                <div className={`w-full h-full ${benefit.bgColor}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 