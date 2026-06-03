import { Helmet } from "react-helmet-async";

import Navbar from "../components/layout/Navbar";
import Services from "../components/sections/Services";
import Footer from "../components/layout/Footer";

export default function Produk() {
  return (
    <>
      <Helmet>
        <title>Produk | KSP Mitra Sejati Persada</title>
      </Helmet>
      <Navbar />
      <Services />
      <Footer />
    </>
  );
}