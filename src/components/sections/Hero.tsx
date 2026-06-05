import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gmbr1 from "../../assets/images/pusat.jpg";
import umkm1 from "../../assets/images/umkm1.jpg";
import umkm2 from "../../assets/images/umkm2.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Solusi Kemitraan Anda",
    description: "Koperasi yang tumbuh bersama anggota melalui semangat gotong royong dan profesionalisme.",
    image: gmbr1,
    badge: "KSP Mitra Sejati Persada",
  },
  {
    title: "Keuangan yang Aman & Transparan",
    description: "Solusi keuangan yang aman, mudah, dan transparan untuk seluruh anggota.",
    image: umkm1,
    badge: "Simpan & Pinjam",
  },
  {
    title: "Akses Permodalan UMKM",
    description: "Memberikan akses permodalan dan pengembangan usaha yang berkelanjutan.",
    image: umkm2,
    badge: "Berdiri Sejak 2006",
  },
];

const stats = [
  { label: "Tahun Berdiri", value: "2006" },
  { label: "Kantor Cabang", value: "8+" },
  { label: "Produk Simpanan", value: "5" },
  { label: "Wilayah", value: "Karanganyar" },
];

export default function Hero() {
  return (
    <section id="home" className="relative" style={{ height: "100vh", minHeight: "600px" }}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-screen bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Multi-layer overlay for dramatic effect */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(13,61,34,0.80) 0%, rgba(27,117,67,0.55) 50%, rgba(0,0,0,0.35) 100%)",
                }}
              />
              {/* Bottom gradient for stats readability */}
              <div
                className="absolute inset-x-0 bottom-0"
                style={{ height: "50%", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
              />

              {/* Decorative blobs */}
              <div
                className="absolute top-20 right-20 w-64 h-64 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(38,168,98,0.25), transparent)",
                  filter: "blur(40px)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-3xl"
                >
                  {/* Badge */}
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      color: "white",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--color-accent)", boxShadow: "0 0 8px var(--color-accent)" }}
                    />
                    {slide.badge}
                  </span>

                  {/* Title */}
                  <h1
                    className="font-extrabold text-white mb-5"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.03em",
                      textShadow: "0 4px 24px rgba(0,0,0,0.3)",
                    }}
                  >
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p
                    className="mb-8 text-lg"
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.7,
                      maxWidth: "540px",
                    }}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link to="/product" className="btn btn-white gap-2">
                      Lihat Produk
                      <ArrowRight size={16} />
                    </Link>
                    <a
                      href="https://wa.me/6282247170756"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        color: "white",
                      }}
                    >
                      Hubungi Kami
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Stats Bar - overlapping carousel bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-12 left-0 right-0 z-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-4 px-6 text-center"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
                }}
              >
                <span
                  className="text-2xl font-extrabold text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}