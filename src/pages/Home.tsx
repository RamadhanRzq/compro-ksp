import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PiggyBank, CreditCard, MapPin } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Footer from "../components/layout/Footer";

const services = [
  {
    title: "Simpanan",
    icon: PiggyBank,
    color: "#1B7543",
    colorLight: "#EAF6EF",
    items: [
      "Simpanan Pendidikan",
      "Simpanan Pendidikan Berjangka",
      "Simpanan Terpimpin",
      "Simpanan Mitra",
      "Simpanan Berjangka",
    ],
    description: "Beragam produk simpanan dengan bunga menarik, bebas administrasi, dan undian berhadiah.",
  },
  {
    title: "Pinjaman",
    icon: CreditCard,
    color: "#145A34",
    colorLight: "#E8F5EE",
    items: ["Pinjaman Flat (Tetap)", "Pinjaman Menurun"],
    description: "Layanan pinjaman mudah, aman, dan transparan dengan syarat yang terjangkau untuk semua.",
  },
];


export default function Home() {
  return (
    <>
      <Helmet>
        <title>KSP Mitra Sejati Persada</title>
        <meta property="og:title" content="KSP Mitra Sejati Persada" />
        <meta property="og:description" content="Koperasi Simpan Pinjam terpercaya untuk kebutuhan anggota." />
        <meta property="og:image" content="https://kspmitrasejatipersada.my.id/logoksp.png" />
        <meta property="og:url" content="https://kspmitrasejatipersada.my.id" />
      </Helmet>

      <Navbar />
      <Hero />

      {/* ── Produk Section ── */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(180deg, #F4F7F4 0%, white 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{
                background: "#EAF6EF",
                border: "1px solid #26A862",
                color: "#1B7543",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Layanan Kami
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "#1A2B1F",
                letterSpacing: "-0.03em",
              }}
            >
              Produk Unggulan
            </h2>
            <p
              className="mt-3 mx-auto w-full"
              style={{ color: "#5A7566", lineHeight: 1.8 }}
            >
              Solusi simpan pinjam terpercaya untuk memenuhi kebutuhan finansial Anda dan keluarga
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background: "white",
                    border: "1px solid #D4E8DC",
                    boxShadow: "0 4px 24px rgba(27,117,67,0.07)",
                    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(27,117,67,0.14)" }}
                >
                  {/* Card Top */}
                  <div
                    className="p-6 flex items-start gap-5"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`,
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(255,255,255,0.2)" }}
                    >
                      <Icon size={26} color="white" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <ul className="space-y-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm"
                          style={{ color: "#3D5046" }}
                        >
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: "#EAF6EF" }}
                          >
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path
                                d="M1 4L3.5 6.5L9 1.5"
                                stroke="#1B7543"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              to="/product"
              className="btn inline-flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #1B7543, #26A862)",
                color: "white",
                boxShadow: "0 8px 24px rgba(27,117,67,0.3)",
                padding: "0.875rem 2.25rem",
                borderRadius: "9999px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.25s ease",
              }}
            >
              Lihat Detail Semua Produk
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Alamat Section ── */}
      <section
        className="py-20"
        style={{ background: "white" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{
                background: "#EAF6EF",
                border: "1px solid #26A862",
                color: "#1B7543",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              <MapPin size={14} />
              Lokasi
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                color: "#1A2B1F",
                letterSpacing: "-0.02em",
              }}
            >
              Alamat Kantor Pusat
            </h2>
            <p className="mt-3" style={{ color: "#5A7566" }}>
              Jl. Batujamus-Karanganyar Km.01, Plosorejo RT.02 RW.02, Kuto, Kerjo, Karanganyar
            </p>
          </div>

          <div
            className="overflow-hidden rounded-3xl"
            style={{
              boxShadow: "0 20px 60px rgba(27,117,67,0.12)",
              border: "1px solid #D4E8DC",
            }}
          >
            <iframe
              title="Lokasi Kantor Pusat KSP Mitra Sejati Persada"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1045.89633758876!2d111.04970945900324!3d-7.544823098299865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1e59b0e59853%3A0x89fcb614126ddb31!2sKSU%20Mitra%20Sejati!5e0!3m2!1sid!2sid!4v1780455411004!5m2!1sid!2sid"
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}