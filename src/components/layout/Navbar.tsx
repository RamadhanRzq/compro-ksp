import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logoksp.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-22 flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-20" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/product">Produk</Link>
          <Link to="/profile">Profil</Link>
          <Link to="/branches">Cabang Kami</Link>
          <Link to="/career">Karir</Link>
          {/* <Link to="/news">Artikel & Berita</Link> */}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col p-4 gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Produk</Link></li>
            <li><Link to="/profile">Profil</Link></li>
            <li><Link to="/branches">Cabang Kami</Link></li>
            <li><Link to="/career">Karir</Link></li>
            {/* <li><Link to="/news">Artikel & Berita</Link></li> */}
          </ul>
        </div>
      )}
    </nav>
  );
}