import Hero from "@/components/sections/Hero";
import Tentang from "@/components/sections/Tentang";
import VisiMisi from "@/components/sections/VisiMisi";
import Struktur from "@/components/sections/Struktur";
import Fraksi from "@/components/sections/Fraksi";
import Program from "@/components/sections/Program";
import Agenda from "@/components/sections/Agenda";
import Galeri from "@/components/sections/Galeri";
import Impact from "@/components/sections/Impact";
import Aspirasi from "@/components/sections/Aspirasi";
import JoinMovement from "@/components/sections/JoinMovement";
import Donasi from "@/components/sections/Donasi";


export default function Home() {
  return (
    <>
      <Hero />
      <Tentang />
      <VisiMisi />
      <Struktur />
      <Fraksi/>
      <Program />
      <Agenda />
      <Galeri/>
      <Impact />
      <Aspirasi/>
      <JoinMovement />
      <Donasi />
    </>
  );
}