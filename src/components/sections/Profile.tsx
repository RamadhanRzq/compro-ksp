import gmbr1 from "../../assets/images/pusat.jpg";

export default function Profile() {
  return (
    <section className="py-36 bg-primary-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Profil
          </h2>
          <p className="mt-4 text-gray-600">
            Mengenal lebih dekat KSP Mitra Sejati Persada
          </p>
        </div>

        {/* Profil */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
          <div>
            <img
              src={gmbr1}
              alt="Profil Koperasi"
              className="w-full h-125 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Deskripsi */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">
              KSP Mitra Sejati Persada
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              KSP “MITRA SEJATI PERSADA” berdiri pada tanggal 21 Maret 2006, yang disahkan oleh kepala kantor Departemen Koperasi dengan Badan Hukum : Nomor 180/518/44 Tahun 2006, 
              Koperasi kami berbentuk Koperasi Serba Usaha dengan nama KSP MITRA SEJATI PERSADA yang terdiri dari Unit Koperasi Simpan Pinjam , Unit Usaha Bengkel Las & tralis, Unit Usaha Toko Grosir, Unit Usaha Transportasi dan Unit Usaha Percetakan.
              Kantor Pusat KSP MITRA SEJATI PERSADA terletak di Jl. Batujamus-Karanganyar Km.01, Plosorejo Rt.02 Rw.02, Kuto, Kerjo, karanganyar.
            </p>
          </div>
        </div>

        {/* Visi Misi */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-10 text-primary">
              Visi & Misi
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Visi */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">
                  Visi
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi Koperasi Serba Usaha yang sehat dan terdepan dalam memberikan pelayanan kepada anggota dan masyarakat pada umumnya.
                </p>
              </div>

              {/* Misi */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">
                  Misi
                </h4>

                <ul className="space-y-3 text-gray-700 list-disc pl-5">
                  <li>
                    Menjadi mitra usaha yang bisa menjadi solusi keuangan bagi anggota dan masyarakat dengan menjalankan prinsip-prinsip koperasi yang sehat.
                  </li>
                  <li>
                    Selalu melakukan peningkatan kualitas di bidang masing-masing unit usaha dan peningkatan kualitas SDM sehingga koperasi memiliki daya saing dan bisa diandalkan.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}