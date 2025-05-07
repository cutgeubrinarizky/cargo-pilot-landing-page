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
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Optimasi Rute",
    url: "#blog-post-1",
  },
  {
    title: "Manajemen Gudang Modern: Mengintegrasikan Teknologi IoT dalam Logistik",
    excerpt:
      "Internet of Things (IoT) membawa revolusi dalam manajemen gudang. Simak bagaimana teknologi ini dapat diterapkan.",
    date: "3 Juni 2023",
    author: "Dewi Anggraini",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2334&q=80",
    category: "Teknologi",
    url: "#blog-post-2",
  },
  {
    title: "Meningkatkan Kepuasan Pelanggan melalui Transparansi Pengiriman",
    excerpt:
      "Transparansi dalam proses pengiriman tidak hanya meningkatkan kepercayaan pelanggan tetapi juga loyalitas mereka.",
    date: "21 Juni 2023",
    author: "Agus Wiranto",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Layanan Pelanggan",
    url: "#blog-post-3",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-silogistik-blue-50" id="blog">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-silogistik-blue-500">Blog dan Insight</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Artikel terbaru dan tips bermanfaat tentang manajemen logistik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <a href={post.url} className="block overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-silogistik-orange-50 text-silogistik-orange-500 px-4 py-1.5 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-sm">{post.date}</span>
                </div>
                <a href={post.url} className="block group">
                  <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-silogistik-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </a>
                <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Oleh {post.author}</span>
                  <a
                    href={post.url}
                    className="text-silogistik-blue-500 hover:text-silogistik-blue-600 text-sm font-medium flex items-center group/link"
                  >
                    Baca Selengkapnya 
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="silogistik-outline" 
            size="lg"
            className="group"
          >
            Lihat Semua Artikel
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 