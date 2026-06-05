import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Briefcase, Bell, Clock, Users } from "lucide-react";

const perks = [
  { icon: Users, title: "Tim yang Solid", desc: "Bergabung dengan tim profesional yang berdedikasi dan penuh semangat gotong royong." },
  { icon: Clock, title: "Lingkungan Berkembang", desc: "Kami mendorong setiap karyawan untuk terus tumbuh dan meningkatkan kualitas diri." },
  { icon: Bell, title: "Notifikasi Lowongan", desc: "Pantau terus halaman ini atau ikuti Instagram kami untuk mendapatkan info lowongan terbaru." },
];

export default function Career() {
  return (
    <>
      <Helmet>
        <title>Karir | KSP Mitra Sejati Persada</title>
      </Helmet>

      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D3D22, #1B7543)" }}
      >
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
          style={{ background: "rgba(38,168,98,0.15)", filter: "blur(70px)" }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full"
          style={{ background: "rgba(244,180,0,0.1)", filter: "blur(50px)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <Briefcase size={14} />
            Bergabung Bersama Kami
          </span>
          <h1
            className="font-extrabold text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Karir di KSP Mitra Sejati Persada
          </h1>
          <p className="mt-4 mx-auto w-full" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
            Jadilah bagian dari keluarga besar KSP Mitra Sejati Persada dan tumbuh bersama kami
          </p>
        </div>
      </div>

      <section
        id="career"
        style={{ background: "#F4F7F4", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="max-w-4xl mx-auto px-6">

          {/* Empty State Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center rounded-3xl overflow-hidden"
            style={{
              background: "white",
              border: "1px solid #D4E8DC",
              boxShadow: "0 8px 40px rgba(27,117,67,0.1)",
            }}
          >
            {/* Top gradient strip */}
            <div
              className="h-2 w-full"
              style={{ background: "linear-gradient(90deg, #1B7543, #26A862, #F4B400)" }}
            />

            <div className="p-12">
              {/* Animated icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="relative w-24 h-24 rounded-3xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #EAF6EF, #D4E8DC)" }}
                >
                  <Briefcase size={44} style={{ color: "#1B7543" }} />
                  {/* Pulse ring */}
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      border: "2px solid rgba(27,117,67,0.3)",
                      animation: "pulse-ring 2s ease-out infinite",
                    }}
                  />
                </div>
              </div>

              <h2
                className="text-2xl font-extrabold mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1A2B1F" }}
              >
                Belum Ada Lowongan Tersedia
              </h2>

              <p className="mb-2" style={{ color: "#5A7566", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 0.75rem" }}>
                Terima kasih atas minat Anda untuk bergabung bersama{" "}
                <span className="font-semibold" style={{ color: "#1B7543" }}>
                  KSP Mitra Sejati Persada
                </span>.
              </p>
              <p style={{ color: "#5A7566", lineHeight: 1.8, maxWidth: "460px", margin: "0 auto" }}>
                Saat ini kami belum membuka lowongan pekerjaan. Silakan kunjungi halaman ini secara
                berkala atau ikuti Instagram resmi kami untuk mendapatkan informasi terbaru.
              </p>

              {/* Instagram CTA */}
              <a
                href="https://www.instagram.com/kspmspersada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full font-semibold text-sm"
                style={{
                  background: "linear-gradient(135deg, #1B7543, #26A862)",
                  color: "white",
                  boxShadow: "0 6px 20px rgba(27,117,67,0.25)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(27,117,67,0.35)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(27,117,67,0.25)"; }}
              >
                Ikuti @kspmspersada di Instagram
              </a>
            </div>
          </motion.div>

          {/* Why Join Us */}
          <div className="mt-12">
            <h3
              className="text-center text-xl font-bold mb-8"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1A2B1F" }}
            >
              Mengapa Bergabung Bersama Kami?
            </h3>
            <br />
            <div className="grid md:grid-cols-3 gap-5">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                    className="p-6 rounded-2xl"
                    style={{
                      background: "white",
                      border: "1px solid #D4E8DC",
                      boxShadow: "0 2px 12px rgba(27,117,67,0.06)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "#EAF6EF" }}
                    >
                      <Icon size={20} style={{ color: "#1B7543" }} />
                    </div>
                    <h4
                      className="font-bold text-base mb-2"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1A2B1F" }}
                    >
                      {perk.title}
                    </h4>
                    <p className="text-sm" style={{ color: "#5A7566", lineHeight: 1.75 }}>
                      {perk.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.35); opacity: 0; }
        }
      `}</style>

      <Footer />
    </>
  );
}