import { useEffect } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { Helmet } from "react-helmet-async";

const posts = [
    "https://www.instagram.com/reel/DM6qmQPS9zB/",
    "https://www.instagram.com/reel/DNNDS46SumO/",
    "https://www.instagram.com/reel/DIvCs97yNOZ/",
    "https://www.instagram.com/p/DIabEjlSsUO/",
    "https://www.instagram.com/reel/DISqojFyDRy/",
    "https://www.instagram.com/p/DHcqmmPyBeK/"
];

export default function News() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Refresh embed saat component dirender ulang
      // @ts-ignore
      window.instgrm?.Embeds?.process();
    }
  }, []);

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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {posts.map((url, index) => (
              <div
                key={index}
                className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <div className="p-4">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                    data-instgrm-version="14"
                    data-instgrm-captioned
                    style={{
                      margin: 0,
                      minWidth: "100%",
                    }}
                  />
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