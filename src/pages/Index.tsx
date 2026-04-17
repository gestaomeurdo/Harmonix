"use client";

import React, { useState } from 'react';
import { Search, Sparkles, ShieldCheck, Zap, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const { professionals } = useApp();
  const [search, setSearch] = useState('');
  
  const featured = professionals.filter(p => p.destaque);
  
  const categories = [
    { name: 'Botox', icon: <Sparkles size={20} className="text-[#A855F7]" /> },
    { name: 'Preenchimento', icon: <ShieldCheck size={20} className="text-[#5B2EFF]" /> },
    { name: 'Bioestimuladores', icon: <Zap size={20} className="text-[#EC4899]" /> },
    { name: 'Rinomodelação', icon: <Heart size={20} className="text-orange-400" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-32">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-sm font-bold tracking-[0.4em] text-slate-400 uppercase mb-8">
            Curadoria Exclusiva
          </h2>
          <h1 className="text-5xl md:text-7xl font-light text-[#1A1A1A] max-w-5xl mx-auto mb-12 leading-[1.1]">
            Sua beleza, simplificada: <br />
            <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#5B2EFF] to-[#EC4899]">
              Encontre os melhores especialistas.
            </span>
          </h1>

          {/* Pill Search */}
          <div className="max-w-3xl mx-auto mb-24">
            <div className="relative flex items-center bg-[#F9FAFB] rounded-full p-2.5 border border-slate-100 premium-shadow">
              <div className="flex-1 flex items-center px-6">
                <Search className="text-slate-400 mr-4" size={22} strokeWidth={1.5} />
                <Input 
                  placeholder="Qual procedimento você procura?" 
                  className="border-none shadow-none bg-transparent focus-visible:ring-0 text-lg h-14 placeholder:text-slate-300 font-light"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Button className="bg-[#1A1A1A] hover:bg-black text-white rounded-full px-10 h-14 font-bold text-sm uppercase tracking-widest transition-all">
                Buscar
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((cat) => (
              <button key={cat.name} className="group flex flex-col items-center gap-4">
                <div className="h-20 w-20 rounded-[2rem] bg-white border border-slate-100 flex items-center justify-center premium-shadow-hover group-hover:border-[#5B2EFF]/20">
                  {cat.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-[#1A1A1A] transition-colors">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-32 bg-[#F9FAFB]/50">
        <div className="container mx-auto px-8">
          <div className="flex items-end justify-between mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Especialistas em Destaque</h2>
              <p className="text-lg text-slate-500 font-light">
                Profissionais selecionados por nossa equipe técnica com base em excelência e resultados naturais.
              </p>
            </div>
            <Button variant="link" className="text-[#5B2EFF] font-bold text-sm uppercase tracking-widest p-0 h-auto hover:no-underline group">
              Ver todos <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {featured.map(prof => (
              <ProfessionalCard key={prof.id} professional={prof} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;