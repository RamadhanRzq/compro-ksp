import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { Helmet } from "react-helmet-async";
import { Briefcase } from "lucide-react";

export default function Career() {
  return (
    <>
      <Helmet>
        <title>Karir | KSP Mitra Sejati Persada</title>
      </Helmet>

      <Navbar />

      <section id="career" className="py-36 bg-gray-50 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary mb-10">
              Karir
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-10">
              <div className="flex justify-center mb-6">
                <Briefcase size={60} className="text-primary" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Belum Ada Lowongan Tersedia
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Terima kasih atas minat Anda untuk bergabung bersama
                <span className="font-semibold">
                  {" "}KSP Mitra Sejati Persada
                </span>.
                Saat ini kami belum membuka lowongan pekerjaan.
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Silakan kunjungi halaman ini secara berkala untuk mendapatkan
                informasi terbaru mengenai kesempatan berkarir di KSP Mitra
                Sejati Persada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}