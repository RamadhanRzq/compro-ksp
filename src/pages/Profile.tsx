import { Helmet } from "react-helmet-async";

import Navbar from "../components/layout/Navbar";
import Profile from "../components/sections/Profile";
import Footer from "../components/layout/Footer";

export default function Produk() {
  return (
    <>
      <Helmet>
        <title>Profil | KSP Mitra Sejati Persada</title>
      </Helmet>
      <Navbar />
      <Profile />
      <Footer />
    </>
  );
}