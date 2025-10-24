"use client";
import Image from "next/image";
import { InstagramLogoIcon, GlobeIcon, CopyIcon } from "@phosphor-icons/react";

export default function Home() {
    const code = "LAVERIE-1234";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("Code copié !");
  };
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center bg-background p-6">
      <Image
        src="/assets/LOGO_BULLES_DE_PRESTIGE_WHITE.png"
        alt="Bulles de Prestige Logo"
        width={300}
        height={300}
      />
      <div className="flex flex-col text-center">
        <h1 className="font-sans text-2xl">Bienvenue dans la laverie Bulles de Prestige</h1>
        <p>Voici le code wifi pour vous connecter :</p>
       <div className="bg-white flex items-center justify-between rounded-2xl w-full px-5 py-2 my-4">
  <p className="text-background font-semibold">Je connais pas le code</p>
  <button onClick={handleCopy}>
    <CopyIcon size={20} className="fill-background hover:scale-110 transition-transform" />
  </button>
</div>
      </div>
      <div>
        <p>Voici nos réseaux</p>
        <div className="flex gap-4 justify-center mt-2">
          <a href="https://www.instagram.com/laverie_creon/" target="_blank">
        <InstagramLogoIcon size={40} />
      </a>
      <a href="https://laverie-creon.fr/" target="_blank">
        <GlobeIcon size={40} />
        </a>
        </div>
      </div>
    </div>
  );
}
