"use client";

import React, { useState } from 'react';
import { Search, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';

const Index = () => {
  const { professionals } = useApp();
  const [search, setSearch] = useState('');
  
  const featured = professionals.filter(p => p.destaque);
  
  const categories = [
    { name: 'Botox', icon: <Sparkles className="text-pink-500" /> },
    { name: 'Preenchimento', icon: <ShieldCheck className="text-blue-500" /> },
    { name: 'Bioestimuladores', icon: <Zap className="text-purple-500" /> },
    { name: 'Rinomodelação', icon: <Sparkles className="text-orange-500" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#5B2EFF] blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#EC4899] blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-slate-100 text-slate-600 hover:bg-slate-100 border-none px-4 py-1 rounded-full">
            ✨ O maior marketplace de harmonização facial
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6">
            Sua melhor versão <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B2EFF] via-[#A855F7] to-[#EC4899]">
              começa aqui.
            </span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
            Encontre os melhores profissionais de estética avançada e agende sua consulta de forma simples e segura.
          </p>

          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5B2EFF] to-[#EC4899] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-white rounded-2xl shadow-xl p-2 border border-slate-100">
              <div className="flex-1 flex items-center px-4">
                <Search className="text-slate-400 mr-3" size={20} />
                <Input 
                  placeholder="Buscar por nome ou procedimento..." 
                  className="border-none shadow-none focus-visible:ring-0 text-lg h-12"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Button className="bg-[#5B2EFF] hover:bg-[#4a25d1] text-white rounded-xl px-8 h-12 font-bold transition-all">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-y border-slate-50 bg-slate-50/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button key={cat.name} className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#5B2EFF]/30 transition-all group">
                <div className="p-2 rounded-xl bg-slate-50 group-hover:bg-white transition-colors">
                  {cat.icon}
                </div>
                <span className="font-semibold text-slate-700">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Profissionais em Destaque</h2>
              <p className="text-slate-500">Os especialistas mais bem avaliados da nossa rede.</p>
            </div>
            <Button variant="link" className="text-[#5B2EFF] font-bold p-0 h-auto">
              Ver todos
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featured.map(prof => (
              <ProfessionalCard key={prof.id} professional={prof} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

import { Badge } from '@/components/ui/badge';
export default Index;