import { motion } from "framer-motion";
import { Eye, Target, Building2, Calendar, Award } from "lucide-react";
import gmbr1 from "../../assets/images/pusat.jpg";

const misi = [
  "Menjadi mitra usaha yang bisa menjadi solusi keuangan bagi anggota dan masyarakat dengan menjalankan prinsip-prinsip koperasi yang sehat.",
  "Selalu melakukan peningkatan kualitas di bidang masing-masing unit usaha dan peningkatan kualitas SDM sehingga koperasi memiliki daya saing dan bisa diandalkan.",
];

const highlights = [
  { icon: Calendar, label: "Tahun Berdiri", value: "21 Maret 2006" },
  { icon: Award, label: "Badan Hukum", value: "No. 180/518/44 Tahun 2006" },
  { icon: Building2, label: "Lokasi Pusat", value: "Kerjo, Karanganyar" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Profile() {
  return (
    <section style={{ background: "#F4F7F4" }}>
      {/* ── Hero Banner ── */}
      <div
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D3D22, #1B7543)" }}
      >
        <div
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full"
          style={{ background: "rgba(38,168,98,0.15)", filter: "blur(60px)" }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full"
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
            <span className="w-2 h-2 rounded-full" style={{ background: "#F4B400" }} />
            Tentang Kami
          </span>
          <h1
            className="font-extrabold text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Profil KSP Mitra Sejati Persada
          </h1>
          <p className="mt-4 mx-auto w-full" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            Mengenal lebih dekat Koperasi Simpan Pinjam yang melayani masyarakat Karanganyar sejak 2006
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Split-screen: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #1B7543, #26A862)",
                opacity: 0.15,
              }}
            />
            <img
              src={gmbr1}
              alt="Kantor Pusat KSP Mitra Sejati Persada"
              className="relative w-full object-cover rounded-3xl"
              style={{
                height: "420px",
                boxShadow: "0 24px 60px rgba(27,117,67,0.2)",
              }}
            />
            {/* Floating badge on image */}
            <div
              className="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.96)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "#1B7543" }}
              >
                Kantor Pusat
              </p>
              <p className="text-sm font-medium" style={{ color: "#1A2B1F", lineHeight: 1.5 }}>
                Jl. Batujamus-Karanganyar Km.01, Plosorejo, Kuto, Kerjo, Karanganyar
              </p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{
                background: "#EAF6EF",
                border: "1px solid #26A862",
                color: "#1B7543",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Sejarah Kami
            </span>
            <h2
              className="font-extrabold mb-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                color: "#1A2B1F",
                letterSpacing: "-0.02em",
              }}
            >
              KSP Mitra Sejati Persada
            </h2>
            <p
              className="mb-4"
              style={{ color: "#3D5046", lineHeight: 1.85, fontSize: "0.975rem" }}
            >
              KSP "MITRA SEJATI PERSADA" berdiri pada tanggal 21 Maret 2006, yang disahkan oleh
              kepala kantor Departemen Koperasi dengan Badan Hukum : Nomor 180/518/44 Tahun 2006.
            </p>
            <p style={{ color: "#3D5046", lineHeight: 1.85, fontSize: "0.975rem" }}>
              Koperasi kami berbentuk Koperasi Serba Usaha dengan nama KSP MITRA SEJATI PERSADA
              yang terdiri dari Unit Koperasi Simpan Pinjam, Unit Usaha Bengkel Las &amp; Tralis,
              Unit Usaha Toko Grosir, Unit Usaha Transportasi dan Unit Usaha Percetakan.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-3">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-2xl"
                    style={{ background: "white", border: "1px solid #D4E8DC" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#1B7543" }}
                    >
                      <Icon size={18} color="white" />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{ color: "#5A7566" }}
                      >
                        {h.label}
                      </p>
                      <p
                        className="text-sm font-bold mt-0.5"
                        style={{ color: "#1A2B1F" }}
                      >
                        {h.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ── Visi & Misi ── */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2
              className="font-extrabold"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                color: "#1A2B1F",
                letterSpacing: "-0.02em",
              }}
            >
              Visi &amp; Misi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* VISI */}
            <div
              className="p-8 rounded-3xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0D3D22 0%, #1B7543 100%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  transform: "translate(20px,-20px)",
                }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Eye size={28} color="white" />
              </div>
              <h3
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Visi
              </h3>
              <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.85, fontSize: "0.975rem" }}>
                Menjadi Koperasi Serba Usaha yang sehat dan terdepan dalam memberikan pelayanan
                kepada anggota dan masyarakat pada umumnya.
              </p>
            </div>

            {/* MISI */}
            <div
              className="p-8 rounded-3xl"
              style={{
                background: "white",
                border: "1px solid #D4E8DC",
                boxShadow: "0 8px 32px rgba(27,117,67,0.08)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "#EAF6EF" }}
              >
                <Target size={28} style={{ color: "#1B7543" }} />
              </div>
              <h3
                className="text-xl font-bold mb-5"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#1A2B1F",
                }}
              >
                Misi
              </h3>
              <ul className="space-y-4">
                {misi.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-white"
                      style={{ background: "#1B7543", minWidth: "24px" }}
                    >
                      {i + 1}
                    </span>
                    <p
                      className="text-sm"
                      style={{ color: "#3D5046", lineHeight: 1.85 }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}