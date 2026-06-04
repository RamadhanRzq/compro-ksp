import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import umkm3 from "../../assets/images/umkm3.jpg";
import umkm4 from "../../assets/images/umkm4.jpg";
import umkm5 from "../../assets/images/umkm5.jpg";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Solusi Kemitraan Anda",
    description:
      "Koperasi yang tumbuh bersama anggota melalui semangat gotong royong dan profesionalisme.",
    image:
      umkm3,
  },
  {
    title: "Solusi Kemitraan Anda",
    description:
      "Solusi keuangan yang aman, mudah, dan transparan untuk seluruh anggota.",
    image:
      umkm4,
  },
  {
    title: "Solusi Kemitraan Anda",
    description:
      "Memberikan akses permodalan dan pengembangan usaha yang berkelanjutan.",
    image:
      umkm5,
  },
];

const services = [
  {
    title: "Simpanan",
    items: [
      {
        title: "Simpanan Pendidikan",
        description: [
          "Simpanan dilokasikan untuk pendidikan putra / putri anda dan mempermudah memanage biaya pendidikan ",
          "Pembukaan rekening dengan setoran awal minimal Rp. 10.000,- dan selanjutnya minimal Rp. 5.000",
          "Pengambilan simpanan saldo minimal yang harus disisihkan Rp. 10.000",
          "Pengambilan atas rekomendasi Orang tua / Wali",
        ],
      },
      {
        title: "Simpanan Pendidikan Berjangka",
        description: [
          "Simpanan dilokasikan untuk biaya pendidikan dan hanya dapat diambil pada jangka waktu tertentu",
          "Pembukaan rekening dengan setoran awal minimal Rp. 50. 000,- dan setoran selanjutnya tetap",
          "Setoran setiap bulan sekali",
          "Jangka waktu bias memilih & bunga menarik"
        ],
      },
      {
        title: "Simpanan Terpimpin",
        description: [
          "Simpanan yang dapat disetor/diambil sewaktu-waktu",
          "Pembukaan rekening dengan setoran awal minimal Rp. 10.000,- dan selanjutnya minimal Rp. 5.000,-",
          "Bunga/Jasa menarik, bebas pajak & administrasi",
          "Bisa diambil/diantar staf marketing kami",
          "Undian berhadiah menarik disetiap tahunnya"
        ],
      },
      {
        title: "Simpanan Mitra",
        description: [
          "Simpanan yang dapat disetor/diambil sewaktu-waktu",
          "Pembukaan rekening dengan setoran awal minimal Rp. 50.000,- dan selanjutnya minimal Rp. 50.000,-",
          "Sistem point untuk saldo tertentu semakin besar saldo semakin besar point yang didapat",
          "Undian point berhadiah menarik setiap 4 bulan",
          "Pengambilan simpanan saldo minimal yang harus disisihkan Rp. 50.000,-"
        ],
      },
      {
        title: "Simpanan Berjangka",
        description: [
          // "Jangka waktu 3 bulan bunga 8 % per tahun",
          // "Jangka waktu 6 bulan bunga 9 % per tahun",
          "Simpanan dengan jangka waktu tertentu",
          // "Jangka waktu 12 bulan bunga 10 % per tahun",
          "Jumlah minimal Rp. 1.000.000,- (Satu Juta Rupiah)",
          "Suku bunga/jasa dapat berubah sewaktu-waktu",
        ],
      },
    ],
  },
  {
    title: "Pinjaman (Pembiayaan)",
    description:"Kami melayani pinjaman (pembiayaan) dengan proses mudah dan aman dengan syarat sbb : Nasabah mengajukan permohonan pinjaman dengan membawa berkas pinjaman antara lain : foto copy KTP suami istri, Kartu Keluarga, Surat/akta nikah, dan foto copy Jaminan",
    items: [
      {
        title: "Pinjaman Flat (Tetap)",
        description: [
          // "Suku Bunga/Jasa 24 % per tahun dengan Plafon pinjaman < Rp. 10.000.000,-",
          // "Suku bunga/jasa 21 % per tahun dengan Plafon pinjaman ≥  Rp. 10.000.000,-",
        ],
      },
      {
        title: "Pinjaman Menurun",
        description: [
          // "Suku bunga/jasa 39 % per tahun (3,25 % X Sisa pokok pinjaman per bulan)",
        ],
      },
    ],
  },
];

export default function Services() {
  const [openItem, setOpenItem] = useState("");

  const handleToggle = (title :any) => {
    setOpenItem(openItem === title ? "" : title);
  };

  return (
    <>
    <section id="home" className="h-1/2">
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
                  className="relative h-[70vh] bg-center bg-cover"
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
    <section id="services" className="py-42 bg-primary-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary">
            Produk 
          </h2>
          <p className="mt-4 text-gray-600">
            Beragam produk simpanan dan pinjaman untuk memenuhi kebutuhan anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6">
                {service.title}
              </h3>
              <span className="text-gray-600 mb-6 block">
                {!service.description ? "" : service.description}
              </span>

              <div className="space-y-4">
                {service.items.map((item) => {
                  const isOpen = openItem === item.title;

                  return (
                    <div
                      key={item.title}
                      className="border border-gray-200 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => handleToggle(item.title)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
                      >
                        <span className="font-medium">
                          {item.title}
                        </span>

                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ▼
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5">
                            <ul className="space-y-3">
                              {item.description.map((desc) => (
                                <li
                                  key={desc}
                                  className="flex gap-3 text-gray-600"
                                >
                                  <svg
                                    className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>

                                  <span>{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
          <section>
            <div className="text-center mt-12">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Admin%20KSP%20Mitra%20Sejati%20Persada,%20saya%20ingin%20mendapatkan%20informasi%20lebih%20lanjut%20tentang%20produk"
                className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
              >
                Hubungi Admin, Untuk Informasi Lebih Lanjut
              </a>
            </div>
        </section>
      </div>
    </section>
    </>
  );
}