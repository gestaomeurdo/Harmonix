"use client";

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import Navbar from '../components/Navbar';
import { Search, SlidersHorizontal, Sparkles, Loader2 } from 'lucide-react';

const Explorar = () => {
  const { professionals, loading } = useApp();
  const [search, setSearch] = useState('');

  const filtered = professionals.filter(p => 
    p.nome.toLowerCase().includes(search.toLowerCase()) ||
    p.especialidade.toLowerCase().includes(search.toLowerCase()) ||
    (p.procedimentos && p.procedimentos.some(proc => proc.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 text-[#A855F7] mb-8">
                <Sparkles size={14} strokeWidth={1} />
                <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Diretório Completo</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light text-[#1A1A1A] tracking-tighter">
                Encontre sua <br />
                <span className="italic font-serif opacity-70">referência.</span>
              </h1>
            </div>

            <div className="w-full md:w-96 relative group">
              <div className="relative bg-white border border-gray-100 p-1.5 rounded-full flex items-center shadow-sm transition-all duration-500 hover:shadow-md">
                <div className="flex-1 flex items-center px-6">
                  <Search className="text-gray-300 mr-3" size={18} strokeWidth={1} />
                  <input 
                    placeholder="Nome ou especialidade..." 
                    className="w-full bg-transparent border-none outline-none text-sm font-light tracking-wider placeholder:text-gray-200 text-[#1A1A1A]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-40 text-gray-300 gap-6">
              <Loader2 className="animate-spin" size={32} strokeWidth={1} />
              <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Sincronizando especialistas...</p>
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {filtered.map(prof => (
                <ProfessionalCard key={prof.id} professional={prof} />
              ))}
            </div>
          ) : (
            <div className="text-center py-40 bg-white/50 rounded-[3rem] border border-dashed border-gray-100">
              <p className="text-gray-300 font-light text-xl tracking-wide">Nenhum especialista encontrado para sua busca.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Explorar;