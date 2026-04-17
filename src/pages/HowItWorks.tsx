"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import { Search, UserCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: "01",
    title: "Busque o Especialista",
    description: "Explore nossa curadoria exclusiva de profissionais verificados em sua região através de filtros inteligentes.",
    icon: Search
  },
  {
    number: "02",
    title: "Analise o Perfil",
    description: "Visualize portfólios, especialidades e avaliações reais para garantir a melhor escolha para sua beleza.",
    icon: UserCheck
  },
  {
    number: "03",
    title: "Agende via WhatsApp",
    description: "Conecte-se diretamente com o especialista escolhido para uma consultoria personalizada e agendamento.",
    icon: MessageCircle
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-light text-[#1A1A1A] mb-12 tracking-tighter">
            Simplicidade em cada <br />
            <span className="italic font-serif opacity-70">conexão.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light mb-24 leading-relaxed tracking-wide">
            Nossa plataforma foi desenhada para oferecer uma jornada fluida e segura entre você e os melhores especialistas do país.
          </p>
        </div>
      </section>

      <section className="pb-40 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-[8rem] font-light text-gray-100 absolute -top-20 -left-4 select-none group-hover:text-[#5B2EFF]/5 transition-colors duration-700">
                  {step.number}
                </div>
                <div className="relative pt-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-8 shadow-sm group-hover:border-[#5B2EFF]/20 transition-all duration-500">
                    <step.icon size={24} strokeWidth={1} className="text-[#1A1A1A] group-hover:text-[#5B2EFF] transition-colors" />
                  </div>
                  <h3 className="text-2xl font-light text-[#1A1A1A] mb-6 tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed tracking-wide">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-40 text-center">
            <Link to="/explorar">
              <button className="group flex items-center gap-6 mx-auto text-[11px] font-bold uppercase tracking-[0.5em] text-[#1A1A1A] hover:text-[#5B2EFF] transition-all duration-500">
                Começar minha busca <ArrowRight size={18} strokeWidth={1} className="transition-transform duration-500 group-hover:translate-x-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;