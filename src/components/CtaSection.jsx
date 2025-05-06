import React, { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Label } from "@/components/ui/label.jsx";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real app, you would send this data to your backend
    alert("Pesan Anda telah dikirim. Tim kami akan menghubungi Anda segera!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-silogistik-blue-50" id="contact">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-4xl font-bold text-silogistik-blue-500 mb-6">
              Siap untuk Meningkatkan Efisiensi Logistik Anda?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Hubungi kami untuk demo gratis atau konsultasi tentang bagaimana SI Logistik dapat membantu transformasi operasi logistik bisnis Anda.
            </p>

            <div className="space-y-8 mb-8">
              <div className="flex items-start group">
                <div className="bg-silogistik-blue-50 p-4 rounded-xl mr-5 group-hover:bg-silogistik-blue-100 transition-colors">
                  <Mail className="h-6 w-6 text-silogistik-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                  <a href="mailto:info@silogistik.id" className="text-slate-600 hover:text-silogistik-blue-500 transition-colors">
                    info@silogistik.id
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-silogistik-blue-50 p-4 rounded-xl mr-5 group-hover:bg-silogistik-blue-100 transition-colors">
                  <Phone className="h-6 w-6 text-silogistik-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Telepon</h3>
                  <a href="tel:+622112345678" className="text-slate-600 hover:text-silogistik-blue-500 transition-colors">
                    +62 21 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-silogistik-blue-50 p-4 rounded-xl mr-5 group-hover:bg-silogistik-blue-100 transition-colors">
                  <MapPin className="h-6 w-6 text-silogistik-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Alamat</h3>
                  <p className="text-slate-600">
                    Menara SI Logistik, Lantai 12<br />
                    Jl. Sudirman Kav. 52-53<br />
                    Jakarta Selatan, 12190
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-silogistik-blue-500 mb-8">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700">Nama Lengkap</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="focus:border-silogistik-blue-500 focus:ring-silogistik-blue-500/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@perusahaan.com"
                    className="focus:border-silogistik-blue-500 focus:ring-silogistik-blue-500/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700">No. Telepon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 8XX-XXXX-XXXX"
                    className="focus:border-silogistik-blue-500 focus:ring-silogistik-blue-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700">Perusahaan</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nama perusahaan"
                    className="focus:border-silogistik-blue-500 focus:ring-silogistik-blue-500/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700">Pesan</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan atau pertanyaan Anda disini..."
                  className="focus:border-silogistik-blue-500 focus:ring-silogistik-blue-500/20 min-h-[120px]"
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="silogistik-orange"
                size="lg"
                className="w-full group"
              >
                Kirim Pesan
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 