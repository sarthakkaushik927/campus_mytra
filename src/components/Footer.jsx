import React from 'react';
import { FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-10 flex flex-col items-center justify-center overflow-hidden border-t border-white/10 mt-20">
      {/* Contact Info & Socials */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-20 z-10">
        <a 
          href="#" 
          className="flex items-center gap-3 text-white/70 hover:text-purple-500 transition-colors text-lg"
          aria-label="Instagram"
        >
          <div className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
            <FaInstagram size={24} />
          </div>
          <span>@kaarma_techis</span>
        </a>

        <a 
          href="mailto:fakeemail@gmail.com" 
          className="flex items-center gap-3 text-white/70 hover:text-purple-500 transition-colors text-lg"
          aria-label="Email"
        >
          <div className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
            <FaEnvelope size={24} />
          </div>
          <span>hello@ka-arma.com</span>
        </a>

        {/* <a 
          href="tel:+1234567890" 
          className="flex items-center gap-3 text-white/70 hover:text-purple-500 transition-colors text-lg"
          aria-label="Phone"
        >
          <div className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
            <FaPhoneAlt size={20} />
          </div>
          <span>+1 (234) 567-890</span>
        </a> */}
      </div>

      {/* Massive Faded Text */}
      <div className="w-full flex justify-center pointer-events-none select-none px-4">
        <h1 className="font-londrina text-[15vw] leading-none text-white opacity-80 fade-text-bottom tracking-wider text-center">
          KA-arma
        </h1>
      </div>
    </footer>
  );
}
