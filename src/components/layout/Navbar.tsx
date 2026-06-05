import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logoksp.jpg";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Produk" },
  { to: "/profile", label: "Profil" },
  { to: "/branches", label: "Cabang Kami" },
  { to: "/career", label: "Karir" },
  { to: "/news", label: "Artikel & Berita" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: scrolled ? "72px" : "88px",
          background: scrolled
            ? "rgba(255, 255, 255, 255)"
            : "rgba(255, 255, 255, 255)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(212, 232, 220, 0.8)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 24px rgba(27, 117, 67, 0.08)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="overflow-hidden transition-transform duration-300 group-hover:scale-105"
            >
              <img src={logo} alt="Logo KSP Mitra Sejati Persada" className="h-12 w-auto" />
            </div>
            {/* <div className="hidden sm:block">
              <p
                className="font-bold leading-tight text-sm"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "var(--color-primary)",
                }}
              >
                KSP Mitra Sejati Persada
              </p>
            </div> */}
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: isActive ? "var(--color-primary)" : "var(--color-text)",
                      background: isActive ? "var(--color-primary-subtle)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.background = "var(--color-primary-subtle)";
                        (e.currentTarget as HTMLElement).style.color = "var(--color-primary)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button - Desktop */}
          <a
            href="https://wa.me/6282247170756"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn btn-primary text-sm py-2.5 px-5"
          >
            Hubungi Kami
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200"
            style={{
              background: open ? "var(--color-primary-subtle)" : "transparent",
              color: open ? "var(--color-primary)" : "var(--color-text)",
            }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed z-40 left-0 right-0 md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          top: scrolled ? "72px" : "88px",
          maxHeight: open ? "400px" : "0",
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: open ? "1px solid var(--color-border)" : "none",
          boxShadow: open ? "0 12px 32px rgba(27,117,67,0.1)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: isActive ? "var(--color-primary)" : "var(--color-text)",
                  background: isActive ? "var(--color-primary-subtle)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/6282247170756"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-2 text-center"
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: "88px" }} />
    </>
  );
}