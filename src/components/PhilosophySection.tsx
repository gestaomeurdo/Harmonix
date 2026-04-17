"use client";

import React from 'react';

const PhilosophySection = () => {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" 
                alt="Sorriso Perfeito" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#FDFBF7] rounded-[3rem] p-8 hidden md:flex flex-col justify-center border border-gray-100 shadow-xl">
              <span className="text-4xl font-serif italic text-[#A855F7] mb-4">"</span>
              <p className="text-xs font-medium leading-relaxed text-gray-500 uppercase tracking-widest">
                O sorriso é a moldura do rosto; a harmonia é a alma da expressão.
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 text-[#A855F7]">
              <div className="w-12 h-px bg-[#A855F7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Nossa Filosofia</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-light text-[#1A1A1A] leading-[1.1] tracking-tighter">
              A arquitetura do <br />
              <span className="italic font-serif opacity-70">sorriso absoluto.</span>
            </h2>
            
            <p className="text-xl text-gray-400 font-light leading-relaxed tracking-wide max-w-xl">
              Especialistas em transformar vidas através da odontologia estética e harmonização orofacial. Unimos a precisão técnica das lentes de contato à suavidade dos injetáveis.
            </p>
            
            <div className="grid grid-cols-2 gap-12 pt-8">
              <div>
                <h4 className="text-3xl font-light text-[#1A1A1A] mb-4 tracking-tight">01.</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Odontologia de Arte</p>
                <p className="text-xs text-gray-500 font-light leading-relaxed">Lentes e facetas desenhadas para a sua anatomia única.</p>
              </div>
              <div>
                <h4 className="text-3xl font-light text-[#1A1A1A] mb-4 tracking-tight">02.</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Face em Equilíbrio</p>
                <p className="text-xs text-gray-500 font-light leading-relaxed">Botox e preenchimentos que preservam sua naturalidade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;