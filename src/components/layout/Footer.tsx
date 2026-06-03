export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-bold text-3xl">
          KSP Mitra Sejati Persada
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between gap-8 mt-6">
          <div>
            <p className="leading-relaxed">
              <strong>Hubungi Kami</strong>
              <br />
              Alamat : Jl. Batujamus-Karanganyar Km.01, Plosorejo RT.02 RW.02,
              Kuto, Kerjo, Karanganyar
              <br />
              Telp : 0271-6493247
              <br />
              Email : ksumitrasejati2005@gmail.com
            </p>
          </div>

          <div>
            <p className="leading-relaxed">
              <strong>Ikuti Kami</strong>
              <br />
              Instagram : @ksu_mitrasejati
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center md:text-left">
          © 2026 KSP Mitra Sejati Persada
        </div>
      </div>
    </footer>
  );
}