"use client"

import Image from "next/image";
import { FaMedal } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation"; 

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/dashboard"); 
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center relative">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="badge-container bg-blue-200 text-blue-800 rounded-full p-2 mb-4 flex items-center"
        >
          <FaMedal className="badge-icon mr-2" />
          <span className="badge-text text-sm">
            #1 Web3 Kickstarter Platform
          </span>
        </a>
        <h1 className="text-2xl lg:text-5xl font-bold mb-4">Kicktos</h1>
        <p className="text-sm text-gray-700 mb-6 text-center">
          Backing Innovations, Empowering Creators - Together on Web3
        </p>
        <div className="flex items-center mb-4">
          <Button className="mr-2" onClick={handleRedirect}>
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
