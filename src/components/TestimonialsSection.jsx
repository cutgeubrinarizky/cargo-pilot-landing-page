import React, { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "CargoPilot benar-benar mengubah cara kami mengelola pengiriman. Sebelumnya, tim kami menghabiskan berjam-jam menginput data dan mengatur rute secara manual. Sekarang, proses ini jauh lebih efisien dan kami bisa memantau pengiriman secara real-time.",
    name: "Budi Santoso",
    position: "Manajer Operasional",
    company: "Logistics Express",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    content:
      "Sebagai bisnis e-commerce yang berkembang pesat, kami butuh solusi logistik yang dapat mengikuti pertumbuhan kami. CargoPilot tidak hanya memenuhi kebutuhan itu, tapi juga membantu kami meningkatkan pengalaman pelanggan dengan transparansi status pengiriman.",
    name: "Siti Aminah",
    position: "CEO",
    company: "FashionStoreID",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    content:
      "Integrasi yang mudah dengan sistem e-commerce kami adalah alasan utama kami memilih CargoPilot. Tim dukungan mereka sangat membantu dalam proses implementasi, dan platform ini sangat intuitif digunakan bahkan oleh staf yang tidak terlalu paham teknologi.",
    name: "Agus Wiranto",
    position: "CTO",
    company: "Multi Retail Group",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 4,
    content:
      "Dashboard analitik CargoPilot memberikan insight yang sangat berharga bagi bisnis kami. Kami dapat dengan mudah melihat tren pengiriman, area yang perlu ditingkatkan, dan mengoptimalkan rute untuk penghematan biaya yang signifikan.",
    name: "Dewi Anggraini",
    position: "Direktur Logistik",
    company: "Cepat Antar Indonesia",
    image: "https://i.pravatar.cc/150?img=9",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const handleNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) {
      handleNext();
    } else if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Testimoni Pengguna</h2>
          <p className="section-subtitle">
            Lihat bagaimana CargoPilot membantu berbagai bisnis meningkatkan operasi logistik mereka
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative overflow-hidden rounded-2xl bg-cargo-light p-8 md:p-12 border border-slate-100 shadow-md">
            <div className="absolute top-6 left-6">
              <MessageSquare className="h-8 w-8 text-cargo opacity-20" />
            </div>
            <div className="flex justify-between items-center mb-8">
              <Button 
                variant="outline" 
                className="rounded-full h-10 w-10 p-0" 
                onClick={handlePrev}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full h-10 w-10 p-0" 
                onClick={handleNext}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>

            <div>
              <div>
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-slate-700">
                  "{testimonials[activeIndex].content}"
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{testimonials[activeIndex].name}</h3>
                    <p className="text-slate-600">
                      {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 mx-1 rounded-full ${
                    index === activeIndex ? "bg-cargo" : "bg-slate-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 