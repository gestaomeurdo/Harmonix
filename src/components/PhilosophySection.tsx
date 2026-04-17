"use client";

import React from 'react';

const PhilosophySection = () => {
  return (
    <section className="py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)]">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" 
                alt="Odontologia e Estética de Luxo" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#FDFBF7] rounded-[3rem] p-10 hidden md:flex flex-col justify-center border border-gray-100 shadow-2xl">
              <span className="text-5xl font-serif italic text-[#5B2EFF] mb-6">"</span>
              <p className="text-[11px] font-bold leading-relaxed text-[#1A1A1A] uppercase tracking-[0.3em]">
                A excelência não é um ato, mas um hábito de precisão milimétrica.
              </p>
            </div>
          </div>
          
          <div className="space-y-16">
            <div className="inline-flex items-center gap-4 text-[#5B2EFF]">
              <div className="w-16 h-px bg-[#5B2EFF]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.6em]">O Padrão Harmonix</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-light text-[#1A1A1A] leading-[0.95] tracking-tighter">
              Onde o sorriso <br />
              <span className="italic font-serif opacity-70">emoldura a face.</span>
            </h2>
            
            <p className="text-2xl text-gray-400 font-light leading-relaxed tracking-wide max-w-xl">
              Unimos a precisão da odontologia estética avançada com a arte da harmonização facial. Nossa curadoria seleciona apenas profissionais que tratam a face como uma obra de arte integrada.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-10">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-[#1A1A1A]">Arquitetura Facial</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">Planejamento digital e execução guiada para resultados que transcendem o óbvio.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-[#1A1A1A]">Odontologia de Elite</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">Lentes de contato e reabilitações que devolvem a função com estética incomparável.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;