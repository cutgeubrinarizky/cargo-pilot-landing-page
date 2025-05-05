
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
              CargoPilot - <span className="text-gradient">Solusi Manajemen Logistik Terpadu</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Optimalkan operasional pengiriman dan tingkatkan efisiensi bisnis logistik Anda dengan platform manajemen yang terintegrasi dan mudah digunakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn btn-primary btn-lg" href="#pricing">
                Mulai Gratis
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="btn btn-secondary btn-lg" href="#demo">
                Demo Produk
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-500"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-slate-900">500+ perusahaan</p>
                <p className="text-xs text-slate-500">telah menggunakan CargoPilot</p>
              </div>
            </div>
          </div>
          <div className="animate-zoom-in flex justify-center lg:justify-end">
            <div className="relative rounded-xl bg-white shadow-xl border border-slate-100 p-1 w-full max-w-lg overflow-hidden">
              <div className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"
                  alt="CargoPilot Dashboard"
                  className="w-full rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-[1.01]"
                />
                <div className="absolute -bottom-6 -right-12 w-40 h-40 bg-cargo/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-12 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
