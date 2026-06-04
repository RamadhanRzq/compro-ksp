import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Footer from "../components/layout/Footer";

const services = [ 
  { title: "Simpanan", 
    items: [ 
      "Simpanan Pendidikan", 
      "Simpanan Pendidikan Berjangka", 
      "Simpanan Terpimpin", 
      "Simpanan Mitra", 
      "Simpanan Berjangka", 
    ], 
  }, 
  { title: "Pinjaman", 
    items: [ 
      "Pinjaman Flat", 
      "Pinjaman Menurun", 
    ], 
  }, 
  ];

<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KSP Mitra Sejati Persada",
  url: "https://kspmitrasejatipersada.my.id",
  logo: "https://kspmitrasejatipersada.my.id/logoksp.png"
})}
</script>

export default function Home() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="KSP Mitra Sejati Persada" />

        <meta
          property="og:description"
          content="Koperasi Simpan Pinjam terpercaya untuk kebutuhan anggota."
        />

        <meta
          property="og:image"
          content="https://kspmitrasejatipersada.my.id/logoksp.png"
        />

        <meta
          property="og:url"
          content="https://kspmitrasejatipersada.my.id"
        />
      </Helmet>

      <Navbar />
      <Hero />

    <section className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-6"> 
        <div className="text-center mb-16"> 
          <h2 className="text-3xl font-bold">Produk</h2> 
        </div> 
        <div className="grid md:grid-cols-2 gap-8"> 
          {services.map((service) => ( 
          <div key={service.title} className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition" > 
            <h3 className="font-bold text-2xl mb-4"> 
              {service.title} 
              </h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside"> 
              {service.items.map((item) => ( 
                <li key={item}>{item}</li> ))} </ul> 
                </div> 
              ))} 
          </div> 
        </div>
        <div> 
          <div className="text-center mb-16 pt-18"> 
            <Link to="/product">
              <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"> 
                Lihat Detail Semua Produk 
              </button> 
            </Link>
          </div> 
        <div/>
      </div>
    </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Alamat Kantor Pusat
            </h2>
            <p className="text-gray-600">
              KSP Mitra Sejati Persada
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              title="Lokasi Kantor Pusat"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1045.89633758876!2d111.04970945900324!3d-7.544823098299865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1e59b0e59853%3A0x89fcb614126ddb31!2sKSU%20Mitra%20Sejati!5e0!3m2!1sid!2sid!4v1780455411004!5m2!1sid!2sid"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}