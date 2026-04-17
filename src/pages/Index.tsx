"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, ShieldCheck, Zap, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import Navbar from '../components/Navbar';

const Index = () => {
  const { professionals } = useApp();
  const [search, setSearch] = useState('');
  
  const featured = professionals.filter(p => p.destaque);
  
  const categories = [
    { name: 'Botox', icon: <Sparkles size={18} strokeWidth={1} /> },
    { name: 'Preenchimento', icon: <ShieldCheck size={18} strokeWidth={1} /> },
    { name: 'Bioestimuladores', icon: <Zap size={18} strokeWidth={1} /> },
    { name: 'Rinomodelação', icon: <Heart size={18} strokeWidth={1} /> },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-12 text-center">
          <h2 className="text-[10px] font-light tracking-[0.6em] text-[#1C1917]/40 uppercase mb-12">
            The Art of Aesthetics
          </h2>
          <h1 className="text-6xl md:text-8xl font-serif text-[#1C1917] max-w-6xl mx-auto mb-16 leading-[1.05]">
            Sua beleza, simplificada. <br />
            <span className="italic font-normal text-[#1C1917]/60">Encontre a excelência.</span>
          </h1>

          {/* Minimalist Search */}
          <div className="max-w-2xl mx-auto mb-32">
            <div className="relative flex items-center border-b border-[#1C1917]/10 pb-4 group focus-within:border-[#1C1917]/40 transition-colors">
              <Search className="text-[#1C1917]/20 mr-4" size={20} strokeWidth={1} />
              <input 
                placeholder="Qual procedimento você deseja?" 
                className="flex-1 bg-transparent border-none outline-none text-xl font-light placeholder:text-[#1C1917]/20"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#1C1917] hover:opacity-60 transition-opacity ml-4">
                Explorar
              </button>
            </div>
          </div>

          {/* Floating Categories */}
          <div className="flex flex-wrap justify-center gap-16">
            {categories.map((cat) => (
              <button key={cat.name} className="group flex flex-col items-center gap-4">
                <div className="text-[#1C1917]/30 group-hover:text-[#1C1917] transition-colors duration-500">
                  {cat.icon}
                </div>
                <span className="text-[10px] font-light uppercase tracking-[0.3em] text-[#1C1917]/40 group-hover:text-[#1C1917] transition-all duration-500 luxury-underline pb-1">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-32 border-t border-[#1C1917]/5">
        <div className="container mx-auto px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-serif text-[#1C1917] mb-8">Especialistas em Destaque</h2>
              <p className="text-lg text-[#1C1917]/50 font-light leading-relaxed">
                Uma seleção rigorosa de profissionais que definem os novos padrões da estética facial contemporânea.
              </p>
            </div>
            <Link to="/profissionais" className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#1C1917] luxury-underline pb-1">
              Ver Diretório Completo
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
            {featured.map(prof => (
              <ProfessionalCard key={prof.id} professional={prof} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-48 text-center border-t border-[#1C1917]/5">
        <div className="max-w-3xl mx-auto px-12">
          <p className="text-3xl font-serif italic text-[#1C1917]/60 leading-relaxed">
            "A verdadeira sofisticação reside na harmonia entre a ciência e a arte do rejuvenescimento natural."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;