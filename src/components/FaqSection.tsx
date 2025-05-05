
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama waktu implementasi CargoPilot?",
    answer: "Waktu implementasi bervariasi tergantung pada kompleksitas bisnis Anda. Untuk bisnis kecil dan menengah, implementasi biasanya membutuhkan waktu 1-2 minggu. Untuk solusi Enterprise yang lebih kompleks, proses dapat memakan waktu hingga 1 bulan, termasuk integrasi custom dan pelatihan.",
  },
  {
    question: "Bagaimana keamanan data di CargoPilot?",
    answer: "CargoPilot menggunakan enkripsi end-to-end untuk semua data yang disimpan dan ditransfer. Kami menerapkan standar keamanan industri terkini, termasuk autentikasi multi-faktor, audit log, dan backup otomatis. Semua data disimpan di server dengan sertifikasi ISO 27001 dan mematuhi regulasi perlindungan data yang berlaku.",
  },
  {
    question: "Apakah CargoPilot bisa diintegrasikan dengan sistem yang sudah ada?",
    answer: "Ya, CargoPilot dirancang dengan API yang komprehensif untuk memudahkan integrasi dengan berbagai sistem seperti platform e-commerce, ERP, dan sistem akuntansi. Kami juga memiliki modul integrasi siap pakai untuk platform populer seperti Shopee, Tokopedia, dan sistem pembayaran utama.",
  },
  {
    question: "Bagaimana dukungan teknis yang disediakan?",
    answer: "Semua pelanggan mendapatkan dukungan email, akses ke portal bantuan, dan dokumentasi lengkap. Pelanggan Pro mendapatkan tambahan dukungan telepon selama jam kerja, sementara pelanggan Enterprise menikmati dukungan prioritas 24/7 dan dedicated account manager yang akan membantu semua kebutuhan Anda.",
  },
  {
    question: "Bisakah saya mencoba CargoPilot sebelum membeli?",
    answer: "Tentu, Anda dapat mendaftar untuk uji coba gratis selama 14 hari dengan akses ke semua fitur paket Pro. Tidak diperlukan kartu kredit untuk memulai, dan Anda dapat meningkatkan ke paket berbayar kapan saja selama atau setelah periode uji coba.",
  },
  {
    question: "Apa yang terjadi dengan data saya jika saya berhenti berlangganan?",
    answer: "Anda memiliki kontrol penuh atas data Anda. Jika Anda memutuskan untuk berhenti berlangganan, Anda dapat mengekspor semua data sebelum penonaktifan akun. Data akan disimpan selama 30 hari setelah penonaktifan, setelah itu akan dihapus secara permanen dari sistem kami sesuai dengan kebijakan privasi.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-cargo-light" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Jawaban untuk pertanyaan umum tentang CargoPilot
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-slate-100"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleActive(index)}
                >
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 text-cargo mr-3 flex-shrink-0" />
                    <span className="font-medium text-slate-800">{faq.question}</span>
                  </div>
                  {activeIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
