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
    <section className="py-20 bg-cargo-light" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Siap untuk Meningkatkan Efisiensi Logistik Anda?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Hubungi kami untuk demo gratis atau konsultasi tentang bagaimana CargoPilot dapat membantu transformasi operasi logistik bisnis Anda.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-cargo/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-cargo" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <p className="text-slate-600">info@cargopilot.id</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-cargo/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-cargo" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Telepon</h3>
                  <p className="text-slate-600">+62 21 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-cargo/10 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-cargo" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Alamat</h3>
                  <p className="text-slate-600">
                    Menara Cargo, Lantai 12<br />
                    Jl. Sudirman Kav. 52-53<br />
                    Jakarta Selatan, 12190
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@perusahaan.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">No. Telepon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 8XX-XXXX-XXXX"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Perusahaan</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nama perusahaan"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan atau pertanyaan Anda disini..."
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-cargo hover:bg-cargo-dark">
                Kirim Pesan
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 