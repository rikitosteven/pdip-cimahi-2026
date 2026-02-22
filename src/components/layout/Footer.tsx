"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="container-custom grid md:grid-cols-3 gap-10">

        <div>
          <h4 className="text-xl font-semibold mb-4">
            PDIP Kota Cimahi
          </h4>
          <p className="text-neutral-400 text-sm">
            Gerakan progresif untuk masa depan Cimahi
            yang transparan dan berpihak pada rakyat.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">
            Kontak
          </h4>
          <p className="text-neutral-400 text-sm">
            Jl. Contoh No. 123, Cimahi<br />
            Email: info@pdipcimahi.id<br />
            Telp: (022) 1234567
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">
            Ikuti Kami
          </h4>
          <p className="text-neutral-400 text-sm">
            Instagram<br />
            Facebook<br />
            YouTube
          </p>
        </div>

      </div>

      <div className="mt-12 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} PDIP Kota Cimahi. All rights reserved.
      </div>
    </footer>
  );
}