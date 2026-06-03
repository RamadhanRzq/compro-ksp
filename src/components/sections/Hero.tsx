import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import gmbr1 from "../../assets/images/pusat.jpg";
import umkm1 from "../../assets/images/umkm1.jpg";
import umkm2 from "../../assets/images/umkm2.jpg";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Solusi Kemitraan Anda",
    description:
      "Koperasi yang tumbuh bersama anggota melalui semangat gotong royong dan profesionalisme.",
    image:
      gmbr1,
  },
  {
    title: "Solusi Kemitraan Anda",
    description:
      "Solusi keuangan yang aman, mudah, dan transparan untuk seluruh anggota.",
    image:
      umkm1,
  },
  {
    title: "Solusi Kemitraan Anda",
    description:
      "Memberikan akses permodalan dan pengembangan usaha yang berkelanjutan.",
    image:
      umkm2,
  },
];

export default function Hero() {
  return (
    <section id="home" className="h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-screen bg-center bg-cover"
              style={{
                backgroundImage: `url(${slide.image}?w=1920&q=80)`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm">
                    KSP Mitra Sejati Persada
                  </span>

                  <h1 className="mt-6 text-5xl md:text-7xl font-bold text-white leading-tight">
                    "{slide.title}"
                  </h1>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}