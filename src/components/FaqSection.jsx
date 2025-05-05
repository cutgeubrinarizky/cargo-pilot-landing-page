import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";

const faqs = [
  {
    question: "Apa itu CargoPilot?",
    answer:
      "CargoPilot adalah platform manajemen logistik terpadu yang membantu bisnis untuk mengoptimalkan proses pengiriman, pelacakan barang, dan manajemen armada. Platform ini dirancang untuk meningkatkan efisiensi operasional dan menurunkan biaya logistik.",
  },
  {
    question: "Apakah CargoPilot cocok untuk bisnis kecil?",
    answer:
      "Ya, CargoPilot menawarkan paket yang fleksibel sesuai dengan skala bisnis Anda. Paket Starter kami dirancang khusus untuk bisnis kecil yang baru memulai dengan fitur yang cukup untuk mengelola pengiriman dalam skala terbatas.",
  },
  {
    question: "Bagaimana cara mengintegrasikan CargoPilot dengan platform e-commerce saya?",
    answer:
      "CargoPilot memiliki fitur integrasi dengan berbagai platform e-commerce populer seperti Shopify, WooCommerce, Tokopedia, dan Bukalapak. Proses integrasi mudah dilakukan melalui dashboard admin dan biasanya membutuhkan waktu kurang dari 1 jam untuk diatur.",
  },
  {
    question: "Apakah saya perlu memasang perangkat khusus pada kendaraan untuk pelacakan?",
    answer:
      "Tidak, CargoPilot menggunakan aplikasi mobile untuk kurir yang bisa dipasang pada smartphone biasa. Untuk fitur pelacakan armada yang lebih canggih, kami menawarkan integrasi dengan perangkat GPS yang sudah ada atau perangkat baru dengan biaya tambahan.",
  },
  {
    question: "Apakah data saya aman di CargoPilot?",
    answer:
      "Ya, kami memprioritaskan keamanan data pelanggan. CargoPilot menggunakan enkripsi tingkat tinggi, penyimpanan data terjamin, dan audit keamanan secara berkala. Kami juga mematuhi regulasi perlindungan data yang berlaku di Indonesia.",
  },
  {
    question: "Bagaimana proses implementasi CargoPilot di perusahaan saya?",
    answer:
      "Proses implementasi biasanya terdiri dari konsultasi awal, penyiapan akun, integrasi dengan sistem yang ada, pelatihan tim, dan pendampingan selama 30 hari pertama. Tim onboarding kami akan memandu Anda selama proses ini untuk memastikan transisi yang lancar.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk mengimplementasikan CargoPilot?",
    answer:
      "Waktu implementasi bervariasi tergantung pada kompleksitas bisnis Anda. Untuk bisnis kecil, biasanya membutuhkan waktu 1-3 hari. Untuk bisnis menengah, sekitar 1 minggu, dan untuk enterprise dengan kebutuhan kustom, bisa memakan waktu 2-4 minggu.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Pertanyaan Umum</h2>
          <p className="section-subtitle">
            Jawaban untuk pertanyaan yang sering diajukan tentang CargoPilot
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-lg bg-white shadow-sm"
              >
                <AccordionTrigger className="px-6 text-left hover:no-underline hover:text-cargo data-[state=open]:text-cargo">
                  <div className="font-semibold text-slate-900">{faq.question}</div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-600">
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