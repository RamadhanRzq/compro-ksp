import { Helmet } from "react-helmet-async";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import pusat from "images/pusat.jpg";
import kerjo from "images/kerjo.jpg";
import mjgd from "images/mjgd.jpg";
import jmbg from "images/jmbg.jpg";

const branches = [
  {
    name: "Kantor Pusat",
    address:
      "Jl. Batujamus-Karanganyar Km.01, Plosorejo RT.02 RW.02, Kuto, Kerjo, Karanganyar",
    phone: "(0271)-6493247",
    image: pusat,
  },
  {
    name: "Kantor Cabang Kerjo",
    address: "Jl. Batujamus-karanganyar Km.01, Bangunsari Rt.07 Rw.01, Kuto, Kerjo, Karanganyar (Depan Pasar Kwadungan)",
    phone: "(0271)-6493168",
    image: kerjo,
  },
  {
    name: "Kantor Cabang Mojogedang",
    address: "Jl. Mojogedang-Karangpandan Km.01, Mojogedang Rt.01 Rw.01, Mojogedang, Karanganyar (Timur Pasar Mojogedang)",
    phone: "(0271)-4990402",
    image: mjgd,
  },
  {
    name: "Kantor Cabang Jambangan",
    address: "Jl. Jambangan-Grompol Km.01, Jambangan Rt.13 Rw.01, Pereng, Mojogedang, Karanganyar (Barat Pasar Jambangan ±500m)",
    phone: "(0271)-7881239",
    image: jmbg,
  },
  {
    name: "Kantor Cabang Tasikmadu",
    address: ": Jl. Tasikmadu-Kebakkramat Km.01, Nlano Rt.01 Rw.01, Pandeyan, Tasikmadu, Karanganyar (Utara PG Tasikmadu)",
    phone: "(0271)-6496833",
    image: pusat,
  },
  {
    name: "Kantor Cabang Matesih",
    address: "Jl. Matesih-Karanganyar Km.01 Sidodadi Rt.01 Rw.08, Matesih, Karanganyar",
    phone: "(0271)-6494005",
    image: pusat,
  },
  {
    name: "Kantor Cabang Jumapolo",
    address: "Jl. Raya Jumapolo-Karanganyar Km.01, Jumapolo, Karanganyar (Depan Pasar/Terminal Jumapolo)",
    phone: "(0271)-494883",
    image: pusat,
  },
  {
    name: "Kantor Cabang Jatipuro",
    address: "Jl. Raya Jumapolo-Karanganyar Km.01, Jumapolo, Karanganyar (Depan Pasar/Terminal Jumapolo)",
    phone: "(0271)-494883",
    image: pusat,
  },
];

export default function Branches() {
  return (
    <>
      <Helmet>
        <title>Cabang Kami | KSP Mitra Sejati Persada</title>
      </Helmet>

      <Navbar />

      <section id="branches" className="py-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary">
              Cabang Kami
            </h2>

            <p className="mt-4 text-gray-600">
              Temukan kantor cabang KSP Mitra Sejati Persada yang terdekat dengan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {branch.name}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {branch.address}
                  </p>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">
                      Telepon
                    </p>
                    <p className="font-medium">
                      {branch.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}