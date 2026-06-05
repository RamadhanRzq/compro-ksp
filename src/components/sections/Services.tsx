import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  PiggyBank,
  CreditCard,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Wallet,
  Clock,
  Users,
  MessageCircle,
} from "lucide-react";
import umkm3 from "../../assets/images/umkm3.jpg";
import umkm4 from "../../assets/images/umkm4.jpg";
import umkm5 from "../../assets/images/umkm5.jpg";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { title: "Produk Simpanan & Pinjaman", description: "Koperasi yang tumbuh bersama anggota melalui semangat gotong royong dan profesionalisme.", image: umkm3 },
  { title: "Solusi Keuangan Terpercaya", description: "Solusi keuangan yang aman, mudah, dan transparan untuk seluruh anggota.", image: umkm4 },
  { title: "Akses Permodalan UMKM", description: "Memberikan akses permodalan dan pengembangan usaha yang berkelanjutan.", image: umkm5 },
];

const services = [
  {
    title: "Simpanan",
    icon: PiggyBank,
    color: "#1B7543",
    colorLight: "#EAF6EF",
    items: [
      {
        title: "Simpanan Pendidikan",
        icon: GraduationCap,
        description: [
          "Simpanan dilokasikan untuk pendidikan putra / putri anda dan mempermudah memanage biaya pendidikan",
          "Pembukaan rekening dengan setoran awal minimal Rp. 10.000,- dan selanjutnya minimal Rp. 5.000",
          "Pengambilan simpanan saldo minimal yang harus disisihkan Rp. 10.000",
          "Pengambilan atas rekomendasi Orang tua / Wali",
        ],
      },
      {
        title: "Simpanan Pendidikan Berjangka",
        icon: BookOpen,
        description: [
          "Simpanan dilokasikan untuk biaya pendidikan dan hanya dapat diambil pada jangka waktu tertentu",
          "Pembukaan rekening dengan setoran awal minimal Rp. 50.000,- dan setoran selanjutnya tetap",
          "Setoran setiap bulan sekali",
          "Jangka waktu bisa memilih & bunga menarik",
        ],
      },
      {
        title: "Simpanan Terpimpin",
        icon: Wallet,
        description: [
          "Simpanan yang dapat disetor/diambil sewaktu-waktu",
          "Pembukaan rekening dengan setoran awal minimal Rp. 10.000,- dan selanjutnya minimal Rp. 5.000,-",
          "Bunga/Jasa menarik, bebas pajak & administrasi",
          "Bisa diambil/diantar staf marketing kami",
          "Undian berhadiah menarik disetiap tahunnya",
        ],
      },
      {
        title: "Simpanan Mitra",
        icon: Users,
        description: [
          "Simpanan yang dapat disetor/diambil sewaktu-waktu",
          "Pembukaan rekening dengan setoran awal minimal Rp. 50.000,- dan selanjutnya minimal Rp. 50.000,-",
          "Sistem point untuk saldo tertentu semakin besar saldo semakin besar point yang didapat",
          "Undian point berhadiah menarik setiap 4 bulan",
          "Pengambilan simpanan saldo minimal yang harus disisihkan Rp. 50.000,-",
        ],
      },
      {
        title: "Simpanan Berjangka",
        icon: Clock,
        description: [
          "Simpanan dengan jangka waktu tertentu",
          "Jumlah minimal Rp. 1.000.000,- (Satu Juta Rupiah)",
          "Suku bunga/jasa dapat berubah sewaktu-waktu",
        ],
      },
    ],
  },
  {
    title: "Pinjaman (Pembiayaan)",
    icon: CreditCard,
    color: "#145A34",
    colorLight: "#EAF6EF",
    items: [
      {
        title: "Pinjaman Flat (Tetap)",
        icon: CreditCard,
        description: [
          "Kami melayani pinjaman (pembiayaan) dengan proses mudah dan aman",
          "Syarat: foto copy KTP suami istri, Kartu Keluarga, Surat/akta nikah, dan foto copy Jaminan",
        ],
      },
      {
        title: "Pinjaman Menurun",
        icon: CreditCard,
        description: [
          "Pinjaman dengan sistem angsuran yang semakin menurun",
          "Syarat: foto copy KTP suami istri, Kartu Keluarga, Surat/akta nikah, dan foto copy Jaminan",
        ],
      },
    ],
    description:
      "Kami melayani pinjaman (pembiayaan) dengan proses mudah dan aman dengan syarat sbb : Nasabah mengajukan permohonan pinjaman dengan membawa berkas pinjaman antara lain : foto copy KTP suami istri, Kartu Keluarga, Surat/akta nikah, dan foto copy Jaminan",
  },
];

export default function Services() {
  const [openItem, setOpenItem] = useState<string>("");

  const handleToggle = (title: string) => {
    setOpenItem(openItem === title ? "" : title);
  };

  return (
    <>
      {/* Hero Banner for Product Page */}
      <section className="relative" style={{ height: "60vh", minHeight: "400px" }}>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(13,61,34,0.80) 0%, rgba(27,117,67,0.55) 60%, rgba(0,0,0,0.3) 100%)",
                  }}
                />
                <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                  >
                    <span
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        color: "white",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ background: "var(--color-accent)" }} />
                      KSP Mitra Sejati Persada
                    </span>
                    <h1
                      className="font-extrabold text-white"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(2rem, 5vw, 3.5rem)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {slide.title}
                    </h1>
                    <p className="mt-4" style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7 }}>
                      {slide.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Services Section */}
      <section id="services" style={{ background: "linear-gradient(180deg, #F4F7F4 0%, white 100%)" }} className="py-20 w-full">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-badge">Layanan Kami</span>
            <h2 className="section-title">Produk Simpanan & Pinjaman</h2>
            <p className="section-description">
              Beragam produk simpanan dan pinjaman untuk memenuhi kebutuhan finansial Anda dan keluarga
            </p>
          </div>

          {/* Service Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div key={service.title} className="card-premium">
                  {/* Card Header */}
                  <div
                    className="flex items-center gap-4 p-6 rounded-t-3xl"
                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.2)" }}
                    >
                      <ServiceIcon size={24} color="white" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>
                        {service.items.length} jenis produk tersedia
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {service.description && (
                      <div
                        className="mb-5 p-4 rounded-xl text-sm leading-relaxed"
                        style={{
                          background: "var(--color-primary-subtle)",
                          color: "var(--color-primary-dark)",
                          borderLeft: "3px solid var(--color-primary)",
                        }}
                      >
                        {service.description}
                      </div>
                    )}

                    <div className="space-y-3">
                      {service.items.map((item) => {
                        const isOpen = openItem === item.title;
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={item.title}
                            className="rounded-2xl overflow-hidden transition-all duration-200"
                            style={{
                              border: isOpen
                                ? "1px solid var(--color-primary-light)"
                                : "1px solid var(--color-border)",
                              background: isOpen ? "var(--color-primary-subtle)" : "white",
                            }}
                          >
                            <button
                              onClick={() => handleToggle(item.title)}
                              className="w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-200"
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                  style={{
                                    background: isOpen ? "var(--color-primary)" : "var(--color-primary-subtle)",
                                  }}
                                >
                                  <ItemIcon
                                    size={15}
                                    style={{ color: isOpen ? "white" : "var(--color-primary)" }}
                                  />
                                </div>
                                <span
                                  className="font-semibold text-sm"
                                  style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    color: isOpen ? "var(--color-primary)" : "var(--color-text)",
                                  }}
                                >
                                  {item.title}
                                </span>
                              </div>
                              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                                <ChevronDown
                                  size={18}
                                  style={{ color: isOpen ? "var(--color-primary)" : "var(--color-text-muted)" }}
                                />
                              </motion.span>
                            </button>

                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-5 pb-5">
                                    <ul className="space-y-2.5">
                                      {item.description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                          <span
                                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                            style={{ background: "var(--color-primary)", minWidth: "20px" }}
                                          >
                                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                              <path
                                                d="M1 4L3.5 6.5L9 1.5"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                            </svg>
                                          </span>
                                          <span style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                                            {desc}
                                          </span>
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
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            className="mt-12 p-8 rounded-3xl text-center"
            style={{
              background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)",
            }}
          >
            <MessageCircle size={32} className="mx-auto mb-4" style={{ color: "var(--color-accent)" }} />
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Butuh Informasi Lebih Lanjut?
            </h3>
            <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              Tim kami siap membantu Anda memilih produk yang paling sesuai dengan kebutuhan
            </p>
            <a
              href="https://wa.me/6282247170756?text=Halo%20Admin%20KSP%20Mitra%20Sejati%20Persada,%20saya%20ingin%20mendapatkan%20informasi%20lebih%20lanjut%20tentang%20produk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white gap-2"
            >
              <MessageCircle size={16} />
              Hubungi Admin via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}