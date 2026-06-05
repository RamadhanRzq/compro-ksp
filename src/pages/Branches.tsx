import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Phone, Building2 } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import pusat from "../assets/images/pusat.jpg";
import logo from "../assets/images/logoksp.jpg";
import kerjo from "../assets/images/kerjo.jpg";
import mjgd from "../assets/images/mjgd.jpg";
import jmbg from "../assets/images/jmbg.jpg";

const branches = [
  {
    name: "Kantor Pusat",
    address: "Jl. Batujamus-Karanganyar Km.01, Plosorejo RT.02 RW.02, Kuto, Kerjo, Karanganyar",
    phone: "(0271)-6493247",
    image: pusat,
    isPrimary: true,
  },
  {
    name: "Kantor Cabang Kerjo",
    address: "Jl. Batujamus-Karanganyar Km.01, Bangunsari Rt.07 Rw.01, Kuto, Kerjo, Karanganyar (Depan Pasar Kwadungan)",
    phone: "(0271)-6493168",
    image: kerjo,
    isPrimary: false,
  },
  {
    name: "Kantor Cabang Mojogedang",
    address: "Jl. Mojogedang-Karangpandan Km.01, Mojogedang Rt.01 Rw.01, Mojogedang, Karanganyar (Timur Pasar Mojogedang)",
    phone: "(0271)-4990402",
    image: mjgd,
    isPrimary: false,
  },
  {
    name: "Kantor Cabang Jambangan",
    address: "Jl. Jambangan-Grompol Km.01, Jambangan Rt.13 Rw.01, Pereng, Mojogedang, Karanganyar (Barat Pasar Jambangan ±500m)",
    phone: "(0271)-7881239",
    image: jmbg,
    isPrimary: false,
  },
  {
    name: "Kantor Cabang Tasikmadu",
    address: "Jl. Tasikmadu-Kebakkramat Km.01, Nlano Rt.01 Rw.01, Pandeyan, Tasikmadu, Karanganyar (Utara PG Tasikmadu)",
    phone: "(0271)-6496833",
    image: logo,
    isPrimary: false,
  },
  {
    name: "Kantor Cabang Matesih",
    address: "Jl. Matesih-Karanganyar Km.01 Sidodadi Rt.01 Rw.08, Matesih, Karanganyar",
    phone: "(0271)-6494005",
    image: logo,
    isPrimary: false,
  },
  {
    name: "Kantor Cabang Jumapolo",
    address: "Jl. Raya Jumapolo-Karanganyar Km.01, Jumapolo, Karanganyar (Depan Pasar/Terminal Jumapolo)",
    phone: "(0271)-494883",
    image: logo,
    isPrimary: false,
  },
  {
    name: "Kantor Cabang Jatipuro",
    address: "Jl. Raya Jumapolo-Karanganyar Km.01, Jumapolo, Karanganyar (Depan Pasar/Terminal Jumapolo)",
    phone: "(0271)-494883",
    image: logo,
    isPrimary: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Branches() {
  return (
    <>
      <Helmet>
        <title>Cabang Kami | KSP Mitra Sejati Persada</title>
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
            <Building2 size={14} />
            Jaringan Kami
          </span>
          <h1
            className="font-extrabold text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Cabang Kami
          </h1>
          <p className="mt-4 mx-auto w-full" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
            Temukan kantor cabang KSP Mitra Sejati Persada yang terdekat dengan Anda di seluruh Karanganyar
          </p>
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>8</p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>Kantor</p>
            </div>
            <div className="w-px" style={{ background: "rgba(255,255,255,0.2)" }} />
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>1</p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>Kantor Pusat</p>
            </div>
            <div className="w-px" style={{ background: "rgba(255,255,255,0.2)" }} />
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>7</p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>Kantor Cabang</p>
            </div>
          </div>
        </div>
      </div>

      {/* Branches Grid */}
      <section style={{ background: "#F4F7F4", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, i) => (
              <motion.div
                key={branch.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`rounded-3xl overflow-hidden group ${branch.isPrimary ? "md:col-span-2 lg:col-span-1" : ""}`}
                style={{
                  background: "white",
                  border: branch.isPrimary ? "2px solid #1B7543" : "1px solid #D4E8DC",
                  boxShadow: branch.isPrimary
                    ? "0 8px 40px rgba(27,117,67,0.18)"
                    : "0 4px 20px rgba(27,117,67,0.07)",
                  transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Image with zoom on hover */}
                <div className="overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.07)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Badge for primary */}
                  {branch.isPrimary && (
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3"
                      style={{ background: "#EAF6EF", color: "#1B7543" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1B7543" }} />
                      Kantor Pusat
                    </span>
                  )}

                  <h3
                    className="text-lg font-bold mb-3"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#1A2B1F",
                    }}
                  >
                    {branch.name}
                  </h3>

                  <div className="flex items-start gap-2.5 mb-3">
                    <MapPin
                      size={15}
                      className="shrink-0 mt-0.5"
                      style={{ color: "#1B7543" }}
                    />
                    <p className="text-sm leading-relaxed" style={{ color: "#5A7566" }}>
                      {branch.address}
                    </p>
                  </div>

                  <div
                    className="flex items-center gap-2.5 pt-4 mt-4"
                    style={{ borderTop: "1px solid #D4E8DC" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "#EAF6EF" }}
                    >
                      <Phone size={14} style={{ color: "#1B7543" }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium" style={{ color: "#5A7566" }}>Telepon</p>
                      <p className="text-sm font-bold" style={{ color: "#1A2B1F" }}>
                        {branch.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}