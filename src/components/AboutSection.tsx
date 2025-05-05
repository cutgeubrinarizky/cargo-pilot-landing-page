
import { Info } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Tentang Kami</h2>
          <p className="section-subtitle">
            Mengenal lebih dekat dengan CargoPilot
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-md border border-slate-100">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
            <div className="bg-cargo/10 p-4 rounded-xl">
              <Info className="h-8 w-8 text-cargo" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Cerita Kami</h3>
              <p className="text-slate-600 mb-4">
                CargoPilot didirikan pada tahun 2020 oleh sekelompok profesional teknologi dan logistik yang melihat kebutuhan akan solusi terintegrasi untuk bisnis logistik di Indonesia. Misi kami adalah menyederhanakan manajemen logistik dan meningkatkan efisiensi operasional melalui teknologi yang inovatif.
              </p>
              <p className="text-slate-600">
                Dengan pengalaman lebih dari 20 tahun di industri logistik dan teknologi, tim kami memahami tantangan yang dihadapi oleh bisnis logistik modern dan terus mengembangkan solusi yang mengatasi masalah nyata di lapangan.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Visi</h4>
                <p className="text-slate-600">
                  Menjadi platform manajemen logistik terdepan yang mendorong transformasi digital di industri logistik Indonesia, meningkatkan standar efisiensi dan transparansi dalam rantai pasok.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Misi</h4>
                <p className="text-slate-600">
                  Menyediakan solusi teknologi yang mudah digunakan, terjangkau, dan efektif untuk membantu bisnis dari semua ukuran mengoptimalkan operasi logistik mereka, mengurangi biaya, dan memberikan pengalaman pelanggan yang unggul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
