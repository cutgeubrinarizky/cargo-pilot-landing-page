import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "5 Strategi Mengoptimalkan Rute Pengiriman untuk Efisiensi Maksimal",
    excerpt:
      "Pelajari bagaimana optimasi rute dapat menghemat waktu dan biaya bahan bakar untuk operasional logistik Anda.",
    date: "12 Mei 2023",
    author: "Budi Santoso",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    category: "Optimasi Rute",
    url: "#blog-post-1",
  },
  {
    title: "Manajemen Gudang Modern: Mengintegrasikan Teknologi IoT dalam Logistik",
    excerpt:
      "Internet of Things (IoT) membawa revolusi dalam manajemen gudang. Simak bagaimana teknologi ini dapat diterapkan.",
    date: "3 Juni 2023",
    author: "Dewi Anggraini",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2334&q=80",
    category: "Teknologi",
    url: "#blog-post-2",
  },
  {
    title: "Meningkatkan Kepuasan Pelanggan melalui Transparansi Pengiriman",
    excerpt:
      "Transparansi dalam proses pengiriman tidak hanya meningkatkan kepercayaan pelanggan tetapi juga loyalitas mereka.",
    date: "21 Juni 2023",
    author: "Agus Wiranto",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    category: "Layanan Pelanggan",
    url: "#blog-post-3",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-cargo-light" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Blog dan Insight</h2>
          <p className="section-subtitle">
            Artikel terbaru dan tips bermanfaat tentang manajemen logistik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <a href={post.url} className="block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-cargo/10 text-cargo px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-sm">{post.date}</span>
                </div>
                <a href={post.url} className="block group">
                  <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-cargo transition-colors">
                    {post.title}
                  </h3>
                </a>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Oleh {post.author}</span>
                  <a
                    href={post.url}
                    className="text-cargo hover:text-cargo-dark text-sm font-medium flex items-center"
                  >
                    Baca Selengkapnya <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-cargo text-cargo hover:bg-cargo/10">
            Lihat Semua Artikel
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 