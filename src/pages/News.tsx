import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Newspaper, ExternalLink } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { InstagramEmbed } from "react-social-media-embed";

const posts = [
  "https://www.instagram.com/reel/DM6qmQPS9zB/",
  "https://www.instagram.com/reel/DNNDS46SumO/",
  "https://www.instagram.com/reel/DIvCs97yNOZ/",
  "https://www.instagram.com/p/DIabEjlSsUO/",
  "https://www.instagram.com/reel/DISqojFyDRy/",
  "https://www.instagram.com/p/DHcqmmPyBeK/",
];


export default function News() {
  return (
    <>
      <Helmet>
        <title>Artikel & Berita | KSP Mitra Sejati Persada</title>
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
            <Newspaper size={14} />
            Update Terbaru
          </span>
          <h1
            className="font-extrabold text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Artikel &amp; Berita
          </h1>
          <p className="mt-4 mx-auto w-full" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
            Informasi dan kegiatan terbaru KSP Mitra Sejati Persada melalui Instagram resmi kami
          </p>

          {/* Instagram Badge */}
          <a
            href="https://www.instagram.com/kspmspersada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "white",
              backdropFilter: "blur(12px)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.25)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
          >
            @kspmspersada
            <ExternalLink size={13} style={{ opacity: 0.7 }} />
          </a>
        </div>
      </div>

      {/* Content */}
      <section
        id="news"
        style={{ background: "#F4F7F4", paddingTop: "5rem", paddingBottom: "5rem", minHeight: "60vh" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Info bar */}
          <div
            className="flex items-center gap-3 p-4 rounded-2xl mb-10"
            style={{
              background: "white",
              border: "1px solid #D4E8DC",
              boxShadow: "0 2px 12px rgba(27,117,67,0.06)",
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "#EAF6EF" }}
            >
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#1A2B1F", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Konten dari Instagram resmi kami
              </p>
              <p className="text-xs" style={{ color: "#5A7566" }}>
                Menampilkan {posts.length} postingan terbaru dari akun @kspmspersada
              </p>
            </div>
            <a
              href="https://www.instagram.com/kspmspersada"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm font-semibold flex items-center gap-1.5 shrink-0"
              style={{
                color: "#1B7543",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "all 0.2s ease",
              }}
            >
              Lihat Semua
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((url, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid #D4E8DC",
                  boxShadow: "0 4px 20px rgba(27,117,67,0.07)",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 16px 36px rgba(27,117,67,0.13)",
                }}
              >
                <div className="p-3 flex justify-center">
                  <InstagramEmbed url={url} width="100%" captioned />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/kspmspersada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm"
              style={{
                background: "linear-gradient(135deg, #1B7543, #26A862)",
                color: "white",
                boxShadow: "0 6px 20px rgba(27,117,67,0.3)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(27,117,67,0.4)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(27,117,67,0.3)"; }}
            >
              Kunjungi Instagram Kami
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}