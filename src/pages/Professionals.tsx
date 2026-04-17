"use client";

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import Navbar from '../components/Navbar';
import { Search, SlidersHorizontal } from 'lucide-react';

const Professionals = () => {
  const { professionals } = useApp();
  const [search, setSearch] = useState('');

  const filtered = professionals.filter(p => 
    p.nome.toLowerCase().includes(search.toLowerCase()) ||
    p.especialidade.toLowerCase().includes(search.toLowerCase()) ||
    p.procedimentos.some(proc => proc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <div className="container mx-auto px-12 py-32">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32 border-b border-[#1C1917]/5 pb-16">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-light tracking-[0.5em] text-[#1C1917]/40 uppercase mb-8">
              The Directory
            </h2>
            <h1 className="text-6xl font-serif text-[#1C1917] mb-6">Nossa Curadoria</h1>
            <p className="text-xl font-light text-[#1C1917]/50 leading-relaxed">
              Explore nossa seleção exclusiva de especialistas em rejuvenescimento e estética facial de alta performance.
            </p>
          </div>
          
          <div className="flex items-center gap-12 w-full md:w-auto">
            <div className="relative flex-1 md:w-96 group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-[#1C1917]/20 group-focus-within:text-[#1C1917] transition-colors" size={18} strokeWidth={1} />
              <input 
                placeholder="Buscar por nome ou expertise..." 
                className="w-full pl-8 pb-3 bg-transparent border-b border-[#1C1917]/10 outline-none text-lg font-light placeholder:text-[#1C1917]/20 focus:border-[#1C1917] transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#1C1917]/40 hover:text-[#1C1917] transition-colors">
              <SlidersHorizontal size={16} strokeWidth={1} />
              Filtros
            </button>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24">
            {filtered.map(prof => (
              <ProfessionalCard key={prof.id} professional={prof} />
            ))}
          </div>
        ) : (
          <div className="text-center py-48">
            <p className="text-[#1C1917]/30 font-serif italic text-3xl">Nenhum especialista encontrado para sua busca.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Professionals;