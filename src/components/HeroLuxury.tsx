"use client";

import React from 'react';
import { Search, ArrowDown } from 'lucide-react';

const HeroLuxury = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          alt="Luxury Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#FDFBF7]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-6 animate-fade-in">
            <div className="h-px w-20 bg-[#A855F7]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.8em] text-[#A855F7]">Private Curated Directory</span>
            <div className="h-px w-20 bg-[#A855F7]" />
          </div>

          <h1 className="text-7xl md:text-[12rem] font-light text-white leading-[0.8] tracking-tighter animate-slide-up">
            Onde o investimento <br />
            <span className="italic font-serif text-[#FDFBF7]/90">encontra a imortalidade.</span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed tracking-wide animate-fade-in-delayed">
            A Harmonix é o portal definitivo para quem não aceita nada menos que a perfeição absoluta em odontologia estética e harmonização orofacial.
          </p>

          <div className="pt-12 animate-fade-in-delayed">
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-2xl p-2 rounded-full border border-white/20 shadow-2xl">
              <div className="flex items-center">
                <div className="flex-1 flex items-center px-10">
                  <Search className="text-white/40 mr-6" size={24} strokeWidth={1} />
                  <input 
                    placeholder="Busque por procedimento ou mestre..." 
                    className="w-full bg-transparent border-none outline-none text-lg font-light tracking-widest placeholder:text-white/20 text-white"
                  />
                </div>
                <button className="bg-white text-[#1A1A1A] rounded-full px-16 h-16 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-[#5B2EFF] hover:text-white transition-all duration-700">
                  Iniciar Busca
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
        <ArrowDown size={32} strokeWidth={1} />
      </div>
    </section>
  );
};

export default HeroLuxury;