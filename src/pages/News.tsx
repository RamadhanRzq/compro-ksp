import { Helmet } from "react-helmet-async";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { InstagramEmbed } from "react-social-media-embed";

const posts = [
    "https://www.instagram.com/reel/DM6qmQPS9zB/",
    "https://www.instagram.com/reel/DNNDS46SumO/",
    "https://www.instagram.com/reel/DIvCs97yNOZ/",
    "https://www.instagram.com/p/DIabEjlSsUO/",
    "https://www.instagram.com/reel/DISqojFyDRy/",
    "https://www.instagram.com/p/DHcqmmPyBeK/"
];

export default function News() {
  return (
    <>
      <Helmet>
        <title>Artikel & Berita | KSP Mitra Sejati Persada</title>
      </Helmet>

      <Navbar />

      <section
        id="news"
        className="py-36 bg-gray-50 min-h-screen"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-primary">
              Artikel & Berita
            </h2>

            <p className="mt-4 text-gray-600">
              Informasi dan kegiatan terbaru KSP Mitra Sejati Persada melalui
              Instagram resmi kami.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((url, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 flex justify-center"
              >
                <InstagramEmbed
                  url={url}
                  width="100%"
                  captioned
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}