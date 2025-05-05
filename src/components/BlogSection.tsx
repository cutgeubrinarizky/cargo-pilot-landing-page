
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "5 Cara Mengoptimalkan Rute Pengiriman untuk Bisnis Logistik",
    excerpt: "Pelajari strategi efektif untuk menghemat biaya bahan bakar dan waktu pengiriman dengan optimasi rute yang tepat.",
    image: "/placeholder.svg",
    author: "Ahmad Santoso",
    date: "10 Apr 2023",
    category: "Optimasi Logistik",
  },
  {
    title: "Tren Logistik 2023: Apa yang Perlu Diketahui oleh Bisnis E-commerce",
    excerpt: "Panduan lengkap tentang tren logistik terbaru yang mempengaruhi industri e-commerce di tahun ini.",
    image: "/placeholder.svg",
    author: "Sinta Wijaya",
    date: "28 Mar 2023",
    category: "Tren Industri",
  },
  {
    title: "Memahami Analitik Logistik: Mengubah Data Menjadi Insight Bisnis",
    excerpt: "Cara memanfaatkan data analitik untuk mengambil keputusan yang lebih baik dalam operasi logistik Anda.",
    image: "/placeholder.svg",
    author: "Budi Prakoso",
    date: "15 Mar 2023",
    category: "Analitik Data",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-cargo-light" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Resource Center</h2>
          <p className="section-subtitle">
            Artikel dan panduan terbaru untuk membantu bisnis logistik Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cargo/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 hover:text-cargo transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center text-xs font-medium text-slate-700">
                      {post.author.charAt(0)}
                    </div>
                    <div className="ml-2">
                      <p className="text-xs font-medium text-slate-800">{post.author}</p>
                      <p className="text-xs text-slate-500">{post.date}</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-cargo hover:text-cargo-dark text-sm font-medium flex items-center"
                  >
                    Baca
                    <BookOpen className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-cargo text-cargo hover:bg-cargo/10">
            Lihat Semua Artikel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
