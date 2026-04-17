"use client";

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import Navbar from '../components/Navbar';
import { Search, SlidersHorizontal, Sparkles, Loader2 } from 'lucide-react';

const Professionals = () => {
  const { professionals, loading } = useApp();
  const [search, setSearch] = useState('');

  const filtered = professionals.filter(p => 
    p.nome.toLowerCase().includes(search.toLowerCase()) ||
    p.especialidade.toLowerCase().includes(search.toLowerCase()) ||
    (p.procedimentos && p.procedimentos.some(proc => proc.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-brand-gradient opacity-[0.03] rounded-b-[100px]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-[#A855F7] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Nossa Curadoria
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Especialistas <span className="text-brand-gradient">Verificados</span>
            </h1>
            <p className="text-lg text-[#4D4D4D] font-medium max-w-2xl mx-auto mb-10">
              Explore nossa seleção exclusiva de profissionais qualificados em estética facial de alta performance.
            </p>

            {/* Search Bar - Estilo igual à Home */}
            <div className="max-w-2xl mx-auto bg-white p-2 rounded-[2rem] shadow-xl shadow-purple-100 border border-purple-50 flex items-center">
              <div className="flex-1 flex items-center px-6">
                <Search className="text-gray-400 mr-3" size={20} />
                <input 
                  placeholder="Buscar por nome, especialidade ou procedimento..." 
                  className="w-full bg-transparent border-none outline-none text-lg font-medium placeholder:text-gray-300"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button className="flex items-center gap-2 px-6 text-[#A855F7] font-bold hover:bg-purple-50 rounded-full py-3 transition-colors">
                <SlidersHorizontal size={18} />
                <span className="hidden sm:inline">Filtros</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 text-gray-400 gap-4">
              <Loader2 className="animate-spin" size={40} />
              <p className="font-bold text-xl">Buscando especialistas...</p>
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filtered.map(prof => (
                <ProfessionalCard key={prof.id} professional={prof} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
              <p className="text-gray-400 font-bold text-2xl mb-2">Nenhum especialista encontrado.</p>
              <p className="text-gray-400">Tente ajustar os termos da sua busca.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Professionals;