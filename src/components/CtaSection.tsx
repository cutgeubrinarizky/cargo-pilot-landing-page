
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CtaSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Permintaan Terkirim!",
      description: "Tim kami akan menghubungi Anda segera.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-white" id="demo">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-cargo to-blue-700 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Siap Meningkatkan Efisiensi Logistik Anda?
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Isi form ini untuk request demo atau konsultasi gratis dengan tim ahli kami. Kami akan membantu Anda menemukan solusi yang tepat untuk kebutuhan bisnis Anda.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-white">
                  <ArrowRight className="h-5 w-5" />
                  <span>Demo produk tanpa kewajiban</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <ArrowRight className="h-5 w-5" />
                  <span>Konsultasi gratis dengan ahli logistik</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <ArrowRight className="h-5 w-5" />
                  <span>Paket uji coba gratis 14 hari</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">
                  Hubungi Tim Kami
                </h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="nama@perusahaan.com"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                    Perusahaan
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Nama perusahaan Anda"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Pesan (Opsional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan kebutuhan bisnis Anda"
                    className="w-full h-28"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-cargo hover:bg-cargo-dark gap-2">
                  Kirim Permintaan
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
