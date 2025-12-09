"use client";
import Image from "next/image";
import { InstagramLogoIcon, GlobeIcon, CopyIcon } from "@phosphor-icons/react";

export default function Home() {
  const code = "Bullesdeprestige2025";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("Code copié !");
  };
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center bg-background bg-[url(/assets/FOND_SITE_APP_WIFI.png)] bg-center bg-cover bg-no-repeat p-6">
      <Image
        src="/assets/LOGO_BULLES_DE_PRESTIGE_WHITE.png"
        alt="Bulles de Prestige Logo"
        width={300}
        height={300}
      />
      <div className="flex flex-col text-center">
        <h1 className="font-sans text-2xl">Bienvenue dans la laverie Bulles de Prestige</h1>
        <p>Voici le code wifi pour vous connecter :</p>
        <div className="bg-white flex items-center justify-between rounded-4xl w-full px-5 py-2 my-4">
          <p className="text-background font-semibold">Bullesdeprestige2025</p>
          <button onClick={handleCopy}>
            <CopyIcon size={20} className="fill-background hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
      <p className="text-2xl font-medium">Voici nos réseaux</p>
      <div className="flex items-center justify-center gap-3 px-5 py-2.5 my-4 rounded-full font-medium shadow-md hover:opacity-90 transition-all bg-white text-background">

        <div className="flex gap-10 justify-center">
          <a href="https://www.instagram.com/laverie_creon/" target="_blank">
            <InstagramLogoIcon size={30} color="#0878a7" />
          </a>
          <a href="https://laverie-creon.fr/" target="_blank">
            <GlobeIcon size={30} color="#0878a7" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 align-center justify-center">
        <a className="flex items-center justify-center gap-3 px-5 py-2.5 my-4 rounded-full font-medium shadow-md hover:opacity-90 transition-all bg-white text-background"
          href="https://g.page/r/CWtrHIpU8s30EAE/review" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.63 1.22 9.09 3.6l6.77-6.77C35.7 2.71 30.24.5 24 .5 14.82.5 6.8 5.81 2.99 13.05l7.89 6.13C12.35 13.31 17.73 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.5 24c0-1.49-.13-2.93-.37-4.33H24v8.19h12.65c-.55 2.96-2.18 5.47-4.61 7.17l7.15 5.56C43.89 36.45 46.5 30.64 46.5 24z"
            />
            <path
              fill="#FBBC05"
              d="M10.88 28.82A14.42 14.42 0 0 1 9.5 24c0-1.67.29-3.28.8-4.82L2.41 13.05A23.94 23.94 0 0 0 .5 24c0 3.81.91 7.41 2.51 10.61l7.87-5.79z"
            />
            <path
              fill="#4285F4"
              d="M24 47.5c6.24 0 11.52-2.06 15.36-5.59l-7.15-5.56c-1.99 1.35-4.55 2.15-8.21 2.15-6.27 0-11.65-3.81-13.91-9.35l-7.89 6.13C6.8 42.19 14.82 47.5 24 47.5z"
            />
          </svg>
          <span>Laissez un avis Google</span>
        </a>
      </div>
    </div>
  );
}
