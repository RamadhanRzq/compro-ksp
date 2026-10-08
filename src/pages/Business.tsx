import { Helmet } from "react-helmet-async";
import { motion,AnimatePresence } from "framer-motion";
import { MapPin, Phone, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useState } from "react";

import mst from "../assets/images/mst.jpeg";
import mst1 from "../assets/images/mst1.jpg";
import mst2 from "../assets/images/mst2.jpg";
import msg from "../assets/images/msg.jpeg";
import msg1 from "../assets/images/msg1.jpeg";
import msg2 from "../assets/images/msg2.jpeg";
import mspercetakan from "../assets/images/mspercetakan.jpeg";
import mspercetakan1 from "../assets/images/mspercetakan1.jpeg";
import mspercetakan2 from "../assets/images/mspercetakan2.jpeg";
import estetika from "../assets/images/estetika.jpeg";
import estetika1 from "../assets/images/estetika.jpeg";
import estetika2 from "../assets/images/estetika.jpeg";
import msds from "../assets/images/msds.jpeg";
import msds1 from "../assets/images/msds1.png";
import msds2 from "../assets/images/msds2.png";
import miset from "../assets/images/miset.jpeg";
import miset1 from "../assets/images/miset1.jpeg";
import miset2 from "../assets/images/miset2.jpeg";

const branches = [
  {
    name: "Mitra Sejati Trans",
    address: "Jl. Batujamus - Jambangan Km. 2, Gempol, Mojodoyong, Kedawung, Sragen",
    phone: "081329703060",
    images: [mst,mst1,mst2]
  },
  {
    name: "Mitra Sejati Grosir (MSG)",
    address: "Jl. Batujamus - Jambangan Km. 1 Kutho, Kerjo, Karanganyar",
    phone: "-",
    images: [msg,msg1,msg2]
  },
  {
    name: "Mitra Sejati Percetakan",
    address: "Jl. Jambangan - Grompol Km. 1, Jambangan, Pereng, Mojogedang, Karanganyar",
    phone: "081235102885",
    images: [mspercetakan,mspercetakan1,mspercetakan2]
  },
  {
    name: "Mitra Estetika",
    address: "Jl. Jambangan-Grompol Km.01, Jambangan Rt.13 Rw.01, Pereng, Mojogedang, Karanganyar (Barat Pasar Jambangan ±500m)",
    phone: "087252750028",
    images: [estetika,estetika1,estetika2]
  },
  {
    name: "Mitra Sejati Digital Solutions",
    address: "Jl. Batujamus-Karanganyar Km.01, Plosorejo RT.02 RW.02, Kuto, Kerjo, Karanganyar",
    phone: "-",
    images: [msds,msds1,msds2]
  },
  {
    name: "Mitra Sejati Konveksi (MISET)",
    address: "Jl. Jambangan - Grompol Km. 1, Jambangan, Pereng, Mojogedang, Karanganyar",
    phone: "-",
    images: [miset,miset1,miset2]
  },
];

function BranchImageSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [current, setCurrent] = useState(0);

  const total = images.length;

  const nextImage = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative overflow-hidden group" style={{ height: "300px" , backgroundColor : "#F7F7F7"}}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="w-full h-full object-contain cursor-grab active:cursor-grabbing"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          whileHover={{ scale: 1.07 }}
          drag={total > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) nextImage();
            if (info.offset.x > 60) prevImage();
          }}
        />
      </AnimatePresence>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
            style={{
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            }}
          >
            <ChevronLeft size={18} style={{ color: "#1B7543" }} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
            style={{
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            }}
          >
            <ChevronRight size={18} style={{ color: "#1B7543" }} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className="rounded-full transition-all"
                style={{
                  width: current === index ? "22px" : "8px",
                  height: "8px",
                  background: current === index ? "#1B7543" : "rgba(255,255,255,0.85)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Branches() {
  return (
    <>
      <Helmet>
        <title>Unit Usaha | KSP Mitra Sejati Persada</title>
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
            Unit Usaha
          </span>
          <h1
            className="font-extrabold text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Unit Usaha Kami 
          </h1>
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
                className={`rounded-3xl overflow-hidden group`}
                style={{
                  background: "white",
                  boxShadow: "0 4px 20px rgba(27,117,67,0.07)",
                  transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Image with zoom on hover */}
                <div className="overflow-hidden" style={{ height: "300px" }}>
                  <BranchImageSlider
                      images={branch.images}
                      alt={branch.name}
                    />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Badge for primary */}

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