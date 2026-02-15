"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';

// --- 1. KOMPONEN BEHOLD WIDGET ---
function BeholdWidget() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://w.behold.so/widget.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://w.behold.so/widget.js";
      script.type = "module";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div data-behold-id="e2wXIcDEP5yn1xkqcLdS" className="w-full"></div>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [voted, setVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

 const handleKirim = () => {
    // 1. EFEK AUDIO (Vibe Tegas)
    const audio = new Audio('/banteng.mp3');
    audio.volume = 0.6;
    audio.play().catch(() => console.log("Audio play blocked"));

    // 2. EFEK GETAR (Vibe Power)
    const container = document.getElementById('main-content');
    if (container) {
      container.classList.add('animate-shake');
      setTimeout(() => container.classList.remove('animate-shake'), 500);
    }

    // 3. EFEK KONFETI PREMIUM (Vibe Merdeka)
    // Kita bikin dua tembakan dari pojok kiri dan kanan bawah
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 999,
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        colors: ['#dc2626', '#ffffff', '#000000'], // Merah, Putih, Hitam (Solid)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    // 4. FEEDBACK & PENUTUPAN (Vibe Responsif)
    setTimeout(() => {
      // Pake alert bawaan dulu, tapi kedepannya bisa kita ganti Modal Sukses yang keren
      alert("ASPIRASI DITERIMA! MERDEKA! ✊🚩");
      setIsOpen(false);
    }, 500);
  };

  const waNumber = "628123456789"; 

  const wilayahCimahi = [
    "Melong", "Cimindi", "Cibeber", "Cibeureum", "Leuwigajah", 
    "Utama", "Baros", "Cigugur Tengah", "Karangmekar", "Setiamanah", 
    "Padasuka", "Cibabat", "Cipageran", "Citeureup", "Pasirkaliki"
  ];

  const pollOptions = [
    { id: 1, text: "Banjir Melong & Cimindi", percent: 45 },
    { id: 2, text: "Lowongan Kerja SMK", percent: 30 },
    { id: 3, text: "Creative Space / WiFi", percent: 15 },
    { id: 4, text: "Macet Jam Pulang Kerja", percent: 10 }
  ];

  const testimonials = [
    { name: "@dikacimahi", text: "Akhirnya ada yang dengerin keluhan banjir di Melong. Gak cuma janji manis pas kampanye doang!", color: "bg-red-600" },
    { name: "@siscakece", text: "Program Creative Hub-nya ngebantu banget buat kita yang pengen mulai startup di Cimahi. Gasskeun!", color: "bg-neutral-800" },
    { name: "@reza_smk", text: "Info loker buat lulusan SMK diperbanyak bang, biar kita gak usah jauh-jauh ke luar kota.", color: "bg-red-900" }
  ];

  const programs = [
    { title: "Creative Hub", desc: "Co-working space & WiFi gratis buat konten kreator Cimahi.", icon: "🎨" },
    { title: "Siaga Banjir", desc: "Sistem lapor banjir kilat langsung ke petugas lapangan.", icon: "🌊" },
    { title: "Gen-Z Merdeka", desc: "Beasiswa kuliah khusus buat anak muda asli Cimahi.", icon: "🎓" }
  ];

  const timeline = [
    { year: "2019", title: "Akar Rumput", desc: "Memperkuat basis massa di 15 Kelurahan se-Cimahi." },
    { year: "2022", title: "Kawal Pandemi", desc: "Distribusi 50.000 paket sembako & vaksinasi massal." },
    { year: "2024", title: "Suara Pemuda", desc: "Peluncuran program beasiswa pendidikan kreatif." },
    { year: "2026", title: "Cimahi Reborn", desc: "Totalitas membangun kota dari gang terkecil." },
  ];

  const squad = [
    { name: "Agung Yudaswara", role: "Ketua DPC PDIP Cimahi", img: "/agung.jpg" },
    { name: "Pranjani Radja", role: "Sekertaris DPC PDIP Cimahi", img: "/pranjani.jfif" },
    { name: "Freddy Siagian", role: "Bendahara DPC PDIP Cimahi", img: "/freddy.jfif" },
    
  ];

  return (
    <main id="main-content" className="min-h-screen bg-[#050505] text-white p-4 md:p-8 font-sans selection:bg-red-600 relative overflow-x-hidden transition-transform duration-100">
      
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes move-slow { 0% { transform: translate(0, 0); } 50% { transform: translate(20px, 50px); } 100% { transform: translate(0, 0); } }
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        .animate-shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
        .animate-glow { animation: move-slow 10s infinite alternate; }
        .marquee-container { display: flex; width: 200%; animation: marquee 25s linear infinite; }
        .marquee-container:hover { animation-play-state: paused; }
        html { scroll-behavior: smooth; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #000; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #dc2626; border-radius: 10px; }
      `}</style>

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-red-900/20 blur-[150px] rounded-full animate-glow"></div>
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-red-600/10 blur-[130px] rounded-full animate-glow"></div>
      </div>

      <div className="relative z-10">
        
        {/* 1. RUNNING TEXT */}
        <div className="bg-red-600 overflow-hidden py-4 -mx-10 mb-10 rotate-[-1.5deg] shadow-[0_10px_30px_rgba(220,38,38,0.3)] border-y-2 border-black/20 transform transition-transform duration-500 hover:rotate-0">
          <div className="marquee-container">
            <div className="flex gap-10 items-center px-4">
               {[1,2,3,4].map((i) => (
                <span key={i} className="text-[14px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-white">
                  🔥 CIMAHI REBORN • MERDEKA! • BANTENG MUDA BERGERAK • PDIP CIMAHI SOLID • RAKYAT BERDAULAT •
                </span>
               ))}
            </div>
          </div>
        </div>

        {/* 2. NAVBAR */}
        <nav className="flex justify-between items-center mb-10 backdrop-blur-xl bg-black/40 p-5 rounded-3xl sticky top-4 z-[60] border border-white/10 shadow-2xl">
          <h1 className="text-2xl font-black tracking-tighter text-red-600 uppercase italic">PDIP <span className="text-white">CIMAHI</span></h1>
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#hero" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#program" className="hover:text-red-500 transition-colors">Program</a>
            <a href="#timeline" className="hover:text-red-500 transition-colors">Jejak</a>
            <a href="#squad" className="hover:text-red-500 transition-colors">Squad</a>
          </div>
          <button onClick={() => setIsOpen(true)} className="bg-red-600 text-white px-6 py-2 rounded-full text-[10px] font-black hover:bg-white hover:text-red-600 transition-all uppercase tracking-widest">GABUNG</button>
        </nav>

        {/* 3. HERO */}
        <section id="hero" className="mb-20 pt-10 text-center scroll-mt-24">
          <div className="bg-neutral-900/20 border border-white/5 rounded-[4rem] p-16 md:p-32 relative overflow-hidden backdrop-blur-sm shadow-2xl">
            <h2 className="text-7xl md:text-[140px] font-black italic tracking-tighter mb-8 leading-none uppercase text-white">
              SIKAT <span className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">HABIS</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed uppercase tracking-wide">
              Bukan cuma wacana, saatnya anak muda turun tangan urus kota!
            </p>
            <button onClick={() => setIsOpen(true)} className="bg-white text-black px-16 py-6 rounded-full font-black hover:bg-red-600 hover:text-white transition-all duration-500 shadow-xl uppercase text-sm tracking-[0.2em]">
              SPILL KELUHAN LO ↓
            </button>
          </div>
        </section>

        {/* 4. QUICK POLL */}
        <section className="mb-32 max-w-4xl mx-auto px-4">
          <div className="bg-neutral-900/80 border-2 border-red-600/20 p-10 md:p-16 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl font-black italic uppercase mb-2 tracking-tighter">Quick Poll</h3>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] mb-10 font-bold">Apa isu paling krusial di Cimahi saat ini?</p>
            <div className="space-y-4">
              {pollOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {setSelectedOption(opt.id); setVoted(true);}}
                  disabled={voted}
                  className={`w-full relative overflow-hidden p-6 rounded-2xl font-bold uppercase transition-all text-left ${
                    voted ? 'cursor-default' : 'hover:bg-white hover:text-black bg-black border border-white/10'
                  }`}
                >
                  <div className="relative z-10 flex justify-between items-center">
                    <span className="text-sm tracking-widest">{opt.text}</span>
                    {voted && <span className="text-red-600 font-black">{opt.percent}%</span>}
                  </div>
                  {voted && (
                    <div className="absolute inset-0 bg-red-600/20 transition-all duration-1000 ease-out" style={{ width: `${opt.percent}%` }} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PROGRAM */}
        <section id="program" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 scroll-mt-24">
          {programs.map((p, i) => (
            <div key={i} className="bg-neutral-900/50 border border-white/5 p-12 rounded-[3.5rem] hover:border-red-600/40 transition-all group hover:-translate-y-2 duration-500 text-left">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300 font-sans">{p.icon}</div>
              <h4 className="text-3xl font-black mb-4 uppercase italic tracking-tighter text-left">{p.title}</h4>
              <p className="text-gray-500 leading-relaxed font-medium text-lg text-left">{p.desc}</p>
            </div>
          ))}
        </section>

        {/* 6. BENTO GRID */}
        <section id="bento" className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px] mb-32 scroll-mt-24">
          <div className="md:col-span-2 md:row-span-2 bg-neutral-900 rounded-[3.5rem] border border-white/5 overflow-hidden relative group cursor-pointer shadow-xl">
            <Image 
              src="/og-image.jpeg" 
              alt="Squad Action"
              fill
              className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <div className="absolute bottom-12 left-12 z-20 text-left">
              <span className="bg-red-600 text-[10px] font-black px-4 py-2 rounded-full uppercase mb-4 inline-block tracking-[0.2em]">Movement</span>
              <h3 className="font-black text-4xl uppercase tracking-tighter leading-none text-white text-left">Aksi Nyata<br/>Bukan Drama</h3>
            </div>
          </div>
          <div onClick={() => setIsOpen(true)} className="bg-red-600 rounded-[3rem] p-10 flex flex-col justify-between hover:scale-[1.02] active:scale-95 transition-all cursor-pointer shadow-[0_10px_40px_rgba(220,38,38,0.4)] text-left">
            <h3 className="font-black text-2xl uppercase italic text-left">Spill Masalah Lo Sekarang!</h3>
            <div className="text-[10px] font-black underline uppercase tracking-[0.3em] text-left">Isi Form Aspirasi →</div>
          </div>
          <div className="bg-neutral-900 border border-white/5 rounded-[3rem] p-8 flex flex-col justify-center items-center text-center shadow-lg shadow-black/50">
            <div className="text-5xl mb-2 font-sans">🚩</div>
            <div className="text-4xl font-black text-red-600 italic leading-none tracking-tighter">124</div>
            <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mt-2">Posko Aktif</div>
          </div>
          <div className="md:col-span-2 bg-neutral-800/50 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
              <span className="text-red-500 font-black uppercase text-[10px] tracking-widest">Update</span>
            </div>
            <p className="text-white text-xl font-bold italic leading-relaxed text-left">"Anak muda adalah kunci. Jangan biarkan masa depan Cimahi ditentukan tanpa suara lo!"</p>
          </div>
        </section>

        {/* 7. NEW SECTION: TESTIMONIALS */}
        <section className="mb-32 px-4">
          <h3 className="text-sm font-black uppercase tracking-[0.5em] text-red-600 mb-12 text-center">Apa Kata Mereka?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className={`${t.color} p-8 rounded-[2.5rem] border border-white/5 shadow-2xl hover:-rotate-2 transition-transform cursor-default`}>
                <p className="text-white font-bold italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-[10px]">C</div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. REAL-TIME PROGRESS */}
        <section className="mb-32 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "ASPIRASI MASUK", value: 1452, icon: "📩" },
              { label: "AKSI TERLAKSANA", value: 890, icon: "✅" },
              { label: "RELAWAN AKTIF", value: 3200, icon: "✊" },
              { label: "KELURAHAN TERKONEKSI", value: 15, icon: "📍" },
            ].map((item, index) => (
              <div key={index} className="bg-neutral-900/40 border border-white/5 p-8 rounded-[2.5rem] text-center hover:border-red-600/50 transition-all group shadow-xl">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-2 text-center">
                  <span suppressHydrationWarning>
                    {isMounted ? item.value.toLocaleString() : item.value}
                  </span>
                  {item.value === 15 ? "" : "+"}
                </div>
                <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-red-600 text-center">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. TIMELINE */}
        <section id="timeline" className="mb-32 scroll-mt-24 text-center">
          <h3 className="text-sm font-black uppercase tracking-[0.5em] text-red-600 mb-16">Jejak Perjuangan</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 z-0"></div>
             {timeline.map((t, i) => (
               <div key={i} className="relative z-10 bg-neutral-900 p-8 rounded-[2rem] border border-white/5 text-left">
                  <div className="text-red-600 text-3xl font-black italic mb-2 tracking-tighter">{t.year}</div>
                  <h5 className="font-black uppercase mb-4 text-xs tracking-widest">{t.title}</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* 10. THE SQUAD */}
<section id="squad" className="mb-40 scroll-mt-24">
  <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-12 uppercase text-center">THE <span className="text-red-600">SQUAD</span></h2>
  
  {/* UPDATE CLASS DI BAWAH INI: Tambahkan justify-center dan ganti grid-cols */}
  <div className="flex flex-wrap justify-center gap-8"> 
    {squad.map((person, index) => (
      <div key={index} className="group relative bg-neutral-900 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl transition-all cursor-pointer w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-2rem)] max-w-[350px]">
        <div className="aspect-[3/4] relative overflow-hidden">
          <Image 
            src={person.img} 
            alt={person.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        <div className="absolute bottom-8 left-8 text-left">
          <p className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-2 font-sans text-left">{person.role}</p>
          <h4 className="text-2xl font-black uppercase italic leading-none text-left">{person.name}</h4>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* 11. INSTAGRAM LIVE FEED */}
        <section id="social" className="mb-32 max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div className="text-left">
              <p className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-2 animate-pulse">● Live Update</p>
              <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase">AKSI <span className="text-white">NYATA</span></h2>
            </div>
            <a href="https://instagram.com/rikitosteven" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-lg">Follow Instagram</a>
          </div>
          <div className="bg-neutral-900/30 border border-white/5 p-4 md:p-6 rounded-[3.5rem] backdrop-blur-sm shadow-2xl relative overflow-hidden group">
            <div className="rounded-[2.5rem] overflow-hidden min-h-[400px]">
              <BeholdWidget />
            </div>
          </div>
        </section>

        {/* 12. FOOTER */}
        <footer className="py-20 border-t border-white/5 text-center">
          <div className="text-red-600 text-5xl font-black italic mb-10 tracking-tighter">MERDEKA!</div>
          <div className="flex justify-center gap-8 mb-10 text-[10px] font-black uppercase tracking-widest text-gray-500">
             <a href="https://www.instagram.com/pdipkotacimahi/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
             <a href="https://www.tiktok.com/@pdipkotacimahi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
             <a href="https://x.com/PDI_Perjuangan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter / X</a>
          </div>
          <p className="text-gray-800 text-[10px] font-black uppercase tracking-[0.6em]">PDI PERJUANGAN CIMAHI • VICTORY 2026</p>
        </footer>
      </div>

      {/* 13. MODAL ASPIRASI */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl" onClick={() => setIsOpen(false)}></div>
          <div className="bg-neutral-900 border border-red-600/30 p-10 md:p-12 rounded-[4rem] w-full max-w-xl z-10 shadow-2xl shadow-red-900/20 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <h3 className="text-4xl font-black italic mb-8 uppercase text-center text-white">SUARA <span className="text-red-600">RAKYAT</span></h3>
            <form className="space-y-5">
              <input type="text" placeholder="NAMA LENGKAP" className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-red-600 outline-none font-bold text-white text-left transition-all" />
              
              <div className="relative">
                <select 
                  defaultValue="" 
                  className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-red-600 outline-none font-bold text-white text-left appearance-none cursor-pointer transition-all"
                >
                  <option value="" disabled>PILIH WILAYAH (KELURAHAN)</option>
                  {wilayahCimahi.map((w, idx) => (
                    <option key={idx} value={w} className="bg-neutral-900 text-white font-bold">{w.toUpperCase()}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-red-600 font-bold">▼</div>
              </div>

              <textarea placeholder="APA KELUHANMU?" rows={3} className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-red-600 outline-none font-bold text-white text-left transition-all"></textarea>
              
              <button 
                type="button" 
                onClick={handleKirim}
                className="w-full bg-red-600 p-6 rounded-2xl font-black uppercase text-lg text-white hover:bg-white hover:text-red-600 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] active:scale-90"
              >
                KIRIM & MENANG! ✊
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 14. WHATSAPP FLOATING */}
      <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 z-[99] bg-[#25D366] p-5 rounded-full shadow-2xl hover:scale-110 transition-all group">
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </main>
  );
}