"use client";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import Navbar from '../components/Navbar';
import CategoryGrid from '../components/CategoryGrid';

const Index = () => {
  const { professionals } = useApp();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  
  const featured = professionals.filter(p => p.destaque).slice(0, 4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/explorar?q=${search}`);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-52 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-3 text-[#A855F7] mb-12">
            <Sparkles size={16} strokeWidth={1} />
            <span className="text-[9px] font-bold uppercase tracking-[0.5em]">Curadoria de Elite</span>
          </div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-light text-[#1A1A1A] mb-16 leading-[0.9] tracking-tighter">
            A excelência em cada <br />
            <span className="italic font-serif opacity-80">detalhe.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-24 leading-relaxed tracking-wide">
            Conectamos você aos especialistas mais renomados do país para procedimentos de alta performance e resultados naturais.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative group">
            <div className="relative bg-white border border-gray-100 p-2 rounded-full flex items-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] transition-all duration-700 hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.08)]">
              <div className="flex-1 flex items-center px-10">
                <Search className="text-gray-300 mr-5" size={20} strokeWidth={1} />
                <input 
                  placeholder="Procedimento ou cidade..." 
                  className="w-full bg-transparent border-none outline-none text-base font-light tracking-widest placeholder:text-gray-200 text-[#1A1A1A]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button type="submit" className="bg-[#1A1A1A] text-white rounded-full px-12 h-14 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#5B2EFF] transition-all duration-500 shadow-xl shadow-black/5">
                Explorar
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 border-y border-gray-100/50 bg-white/30">
        <div className="container mx-auto px-6">
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-light text-[#1A1A1A] mb-8 tracking-tighter">Especialistas em Destaque</h2>
              <p className="text-lg text-gray-400 font-light tracking-wide leading-relaxed">
                Uma seleção rigorosa dos profissionais que estão redefinindo os padrões da estética facial contemporânea.
              </p>
            </div>
            <Link to="/explorar" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#1A1A1A] border-b border-[#1A1A1A] pb-2">
              Ver Todos <ArrowRight size={16} strokeWidth={1} className="transition-transform duration-500 group-hover:translate-x-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {featured.length > 0 ? (
              featured.map(prof => (
                <ProfessionalCard key={prof.id} professional={prof} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-300 font-light tracking-widest uppercase text-[10px] font-bold">
                Sincronizando curadoria exclusiva...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-52 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-light text-[#1A1A1A] mb-14 tracking-tighter leading-tight">
            Faça parte da nossa <br />
            <span className="italic font-serif opacity-70">rede de elite.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light mb-20 max-w-xl mx-auto leading-relaxed tracking-wide">
            Se você é um profissional de alta performance focado em resultados naturais, junte-se ao diretório mais exclusivo do país.
          </p>
          <Link to="/login">
            <button className="border border-[#1A1A1A] text-[#1A1A1A] rounded-full px-16 h-20 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-1000">
              Solicitar Credenciamento
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;