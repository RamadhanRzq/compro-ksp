import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Produk" },
  { to: "/profile", label: "Profil" },
  { to: "/branches", label: "Cabang Kami" },
  { to: "/career", label: "Karir" },
  { to: "/news", label: "Artikel & Berita" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0D3D22 0%, #145A34 50%, #1B7543 100%)",
        color: "white",
      }}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "white" }}
            >
              KSP Mitra Sejati Persada
            </h2>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.8" }}>
              Koperasi Simpan Pinjam yang tumbuh bersama anggota melalui semangat gotong royong dan profesionalisme sejak 2006.
            </p>
            {/* Social */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                Ikuti Kami
              </p>
              <a
                href="https://www.instagram.com/kspmspersada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                }}
              >
                @kspmspersada
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Navigasi
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-all duration-200"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "white";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "4px";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Hubungi Kami
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0" style={{ color: "var(--color-accent)" }} />
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)", lineHeight: "1.7" }}>
                  Jl. Batujamus-Karanganyar Km.01, Plosorejo RT.02 RW.02, Kuto, Kerjo, Karanganyar
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" style={{ color: "var(--color-accent)" }} />
                <a href="tel:02716493247" className="text-sm transition-colors duration-200" style={{ color: "rgba(255,255,255,0.75)" }}>
                  0271-6493247
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" style={{ color: "var(--color-accent)" }} />
                <a href="mailto:ksumitrasejati2005@gmail.com" className="text-sm transition-colors duration-200" style={{ color: "rgba(255,255,255,0.75)" }}>
                  ksumitrasejati2005@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        className="py-5"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            © 2026 KSP Mitra Sejati Persada. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}