"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import Navbar from '../components/Navbar';
import CategoryGrid from '../components/CategoryGrid';
import { motion } from 'framer-motion';

const Index = () => {
  const { professionals } = useApp();
  const [search, setSearch] = useState('');
  
  const featured = professionals.filter(p => p.destaque).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      {/* Hero Section - Alto Luxo */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 text-[#A855F7] mb-10">
              <Sparkles size={16} strokeWidth={1.5} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Curadoria Exclusiva</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light text-[#1A1A1A] mb-12 leading-[1.05] tracking-tight">
              A excelência em cada detalhe da sua <span className="italic font-serif">beleza.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto mb-20 leading-relaxed tracking-wide">
              Conectamos você aos especialistas mais renomados do país para procedimentos de alta performance e resultados naturais.
            </p>

            {/* Busca de Elite - Minimalista Flutuante */}
            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-0 bg-black/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-white/80 backdrop-blur-xl border border-gray-100 p-1.5 rounded-full flex items-center shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
                <div className="flex-1 flex items-center px-8">
                  <Search className="text-gray-300 mr-4" size={18} strokeWidth={1.5} />
                  <input 
                    placeholder="Busque por procedimento ou cidade..." 
                    className="w-full bg-transparent border-none outline-none text-sm font-light tracking-wide placeholder:text-gray-300 text-[#1A1A1A]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <button className="bg-[#1A1A1A] text-white rounded-full px-8 h-12 text-[10px] font-bold uppercase tracking-widest hover:bg-[#5B2EFF] transition-all duration-500">
                  Explorar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="py-20 border-y border-gray-100 bg-white">
        <div className="container mx-auto px-6">
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Professionals Section */}
      <section className="py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-light text-[#1A1A1A] mb-6 tracking-tight">Especialistas em Destaque</h2>
              <p className="text-gray-500 font-light tracking-wide">Uma seleção rigorosa dos profissionais que estão redefinindo os padrões da estética facial.</p>
            </div>
            <Link to="/profissionais" className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]">
              Ver todos os membros <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {featured.map(prof => (
              <ProfessionalCard key={prof.id} professional={prof} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalista */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-[#1A1A1A] mb-12 tracking-tight">
              Faça parte da nossa <span className="italic font-serif">elite.</span>
            </h2>
            <p className="text-lg text-gray-500 font-light mb-16 max-w-xl mx-auto leading-relaxed">
              Se você é um profissional de alta performance, junte-se ao diretório mais exclusivo do Brasil.
            </p>
            <Link to="/login">
              <button className="border border-[#1A1A1A] text-[#1A1A1A] rounded-full px-12 h-16 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-700">
                Solicitar Credenciamento
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;