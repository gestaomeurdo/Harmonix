"use client";

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import Navbar from '../components/Navbar';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

const Professionals = () => {
  const { professionals } = useApp();
  const [search, setSearch] = useState('');

  const filtered = professionals.filter(p => 
    p.nome.toLowerCase().includes(search.toLowerCase()) ||
    p.especialidade.toLowerCase().includes(search.toLowerCase()) ||
    p.procedimentos.some(proc => proc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">Nossos Especialistas</h1>
            <p className="text-slate-500">Encontre o profissional ideal para o seu procedimento.</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input 
                placeholder="Nome ou procedimento..." 
                className="pl-10 bg-white border-slate-200 rounded-xl h-12"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="h-12 w-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-[#5B2EFF] transition-colors">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map(prof => (
              <ProfessionalCard key={prof.id} professional={prof} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">Nenhum profissional encontrado para sua busca.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Professionals;