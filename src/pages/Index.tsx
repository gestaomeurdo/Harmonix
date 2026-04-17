"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, ShieldCheck, Zap, Heart, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { professionals } = useApp();
  const [search, setSearch] = useState('');
  
  const featured = professionals.filter(p => p.destaque);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section com Gradiente Moderno */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-gradient opacity-[0.03] rounded-b-[100px]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-[#A855F7] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles size={14} /> O Futuro da Harmonização Facial
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-8 leading-[1.1]">
              Encontre os melhores especialistas em <span className="text-brand-gradient">Harmonização.</span>
            </h1>
            <p className="text-xl text-[#4D4D4D] font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              Conectamos você aos profissionais mais qualificados e verificados do Brasil para realçar sua beleza natural.
            </p>

            {/* Modern Search Bar */}
            <div className="max-w-2xl mx-auto bg-white p-2 rounded-[2rem] shadow-2xl shadow-purple-100 border border-purple-50 flex items-center">
              <div className="flex-1 flex items-center px-6">
                <Search className="text-gray-400 mr-3" size={20} />
                <input 
                  placeholder="Qual procedimento ou cidade busca?" 
                  className="w-full bg-transparent border-none outline-none text-lg font-medium placeholder:text-gray-300"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Button className="bg-brand-gradient hover:opacity-90 text-white rounded-[1.5rem] px-8 h-14 font-bold text-lg shadow-lg shadow-purple-200">
                Buscar
              </Button>
            </div>
          </div>

          {/* Hero Image / Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { label: 'Profissionais Verificados', value: '500+', icon: <ShieldCheck className="text-[#5B2EFF]" /> },
              { label: 'Procedimentos Realizados', value: '15k+', icon: <Zap className="text-[#A855F7]" /> },
              { label: 'Satisfação dos Clientes', value: '99%', icon: <Heart className="text-[#EC4899]" /> },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-50 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#1A1A1A] mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals Grid */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Especialistas em Destaque</h2>
              <p className="text-lg text-[#4D4D4D] font-medium">Os profissionais mais bem avaliados da nossa rede.</p>
            </div>
            <Link to="/profissionais">
              <Button variant="ghost" className="text-[#5B2EFF] font-bold gap-2 hover:bg-purple-50 rounded-full">
                Ver todos <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featured.map(prof => (
              <ProfessionalCard key={prof.id} professional={prof} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-brand-gradient rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-purple-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Você é um profissional?</h2>
              <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto mb-12">
                Junte-se à maior plataforma de harmonização facial do Brasil e alcance novos pacientes todos os dias.
              </p>
              <Link to="/login">
                <Button className="bg-white text-[#5B2EFF] hover:bg-gray-50 rounded-full px-12 h-16 font-bold text-xl shadow-xl">
                  Cadastrar meu Perfil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;