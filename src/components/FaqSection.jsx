import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";

const faqs = [
  {
    question: "Apa itu Silogistik?",
    answer:
      "Silogistik adalah platform manajemen logistik terpadu yang membantu bisnis untuk mengoptimalkan proses pengiriman, pelacakan barang, dan manajemen armada. Platform ini dirancang untuk meningkatkan efisiensi operasional dan menurunkan biaya logistik Anda.",
  },
  {
    question: "Apakah Silogistik cocok untuk bisnis kecil?",
    answer:
      "Ya, Silogistik menawarkan paket yang fleksibel sesuai dengan skala bisnis Anda. Paket Starter kami dirancang khusus untuk bisnis kecil yang baru memulai dengan fitur yang cukup untuk mengelola pengiriman dalam skala terbatas.",
  },
  {
    question: "Bagaimana cara mengintegrasikan Silogistik dengan platform e-commerce saya?",
    answer:
      "Silogistik memiliki fitur integrasi dengan berbagai platform e-commerce populer seperti Shopify, WooCommerce, Tokopedia, dan Bukalapak. Proses integrasi mudah dilakukan melalui dashboard admin dan biasanya membutuhkan waktu kurang dari 1 jam untuk diatur.",
  },
  {
    question: "Apakah saya perlu memasang perangkat khusus pada kendaraan untuk pelacakan?",
    answer:
      "Tidak, Silogistik menggunakan aplikasi mobile untuk kurir yang bisa dipasang pada smartphone biasa. Untuk fitur pelacakan armada yang lebih canggih, kami menawarkan integrasi dengan perangkat GPS yang sudah ada atau perangkat baru dengan biaya tambahan.",
  },
  {
    question: "Apakah data saya aman di Silogistik?",
    answer:
      "Ya, kami memprioritaskan keamanan data pelanggan. Silogistik menggunakan enkripsi tingkat tinggi, penyimpanan data terjamin, dan audit keamanan secara berkala. Kami juga mematuhi regulasi perlindungan data yang berlaku di Indonesia.",
  },
  {
    question: "Bagaimana proses implementasi Silogistik di perusahaan saya?",
    answer:
      "Proses implementasi biasanya terdiri dari konsultasi awal, penyiapan akun, integrasi dengan sistem yang ada, pelatihan tim, dan pendampingan selama 30 hari pertama. Tim onboarding kami akan memandu Anda selama proses ini untuk memastikan transisi yang lancar.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk mengimplementasikan Silogistik?",
    answer:
      "Waktu implementasi bervariasi tergantung pada kompleksitas bisnis Anda. Untuk bisnis kecil, biasanya membutuhkan waktu 1-3 hari. Untuk bisnis menengah, sekitar 1 minggu, dan untuk enterprise dengan kebutuhan kustom, bisa memakan waktu 2-4 minggu.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-silogistik-blue-50" id="faq">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-silogistik-blue-500">Pertanyaan Umum</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Jawaban untuk pertanyaan yang sering diajukan tentang Silogistik
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline data-[state=open]:text-silogistik-orange-500 data-[state=open]:border-b border-slate-100">
                  <div className="font-semibold text-slate-800 hover:text-silogistik-orange-500 transition-colors">
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-4 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 