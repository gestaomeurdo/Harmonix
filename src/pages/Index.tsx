"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Star, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import Navbar from '../components/Navbar';
import CategoryGrid from '../components/CategoryGrid';
import PhilosophySection from '../components/PhilosophySection';
import Footer from '../components/Footer';
import HeroLuxury from '../components/HeroLuxury';
import MapSelector from '../components/MapSelector';

const Index = () => {
  const { professionals } = useApp();
  const featured = professionals.filter(p => p.destaque).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <HeroLuxury />

      {/* The "Investment" Section */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#5B2EFF]">Patrimônio Estético</h2>
              <h3 className="text-7xl font-light text-[#1A1A1A] tracking-tighter leading-[0.9]">
                Sua face é seu <br />
                <span className="italic font-serif text-[#A855F7]">maior ativo.</span>
              </h3>
              <p className="text-2xl text-gray-400 font-light leading-relaxed tracking-wide">
                Em um mundo de resultados genéricos, a Harmonix oferece o acesso aos mestres que dominam a anatomia do luxo. Investir em si mesmo é o único retorno garantido.
              </p>
              <div className="flex items-center gap-12 pt-8">
                <div className="text-center">
                  <p className="text-5xl font-light text-[#1A1A1A] mb-2">5%</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Taxa de Admissão</p>
                </div>
                <div className="w-px h-16 bg-gray-100" />
                <div className="text-center">
                  <p className="text-5xl font-light text-[#1A1A1A] mb-2">100%</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Membros Verificados</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Luxury Aesthetic"
                />
              </div>
              <div className="absolute -top-12 -right-12 bg-[#1A1A1A] text-white p-12 rounded-[3rem] shadow-2xl max-w-[300px] space-y-6">
                <Award size={40} strokeWidth={1} className="text-[#A855F7]" />
                <p className="text-sm font-light leading-relaxed">
                  "A Harmonix não é um diretório, é um selo de garantia para quem busca o topo da pirâmide estética."
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">— Forbes Health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - The Services of Exception */}
      <section className="py-40 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-32 space-y-8">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#5B2EFF]">Protocolos de Exceção</h2>
            <p className="text-6xl font-light text-[#1A1A1A] tracking-tighter leading-tight">
              A ciência da <br />
              <span className="italic font-serif opacity-70">beleza absoluta.</span>
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Map Selector - Geographic Hubs */}
      <MapSelector />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Featured Selection - The Dossier */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
            <div className="max-w-3xl space-y-8">
              <h2 className="text-7xl font-light text-[#1A1A1A] tracking-tighter leading-[0.9]">O Dossier <br /><span className="italic font-serif text-[#A855F7]">Harmonix.</span></h2>
              <p className="text-2xl text-gray-400 font-light tracking-wide leading-relaxed">
                Uma seleção rigorosa dos profissionais que estão redefinindo os padrões de beleza e saúde orofacial no Brasil.
              </p>
            </div>
            <Link to="/explorar" className="group flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.6em] text-[#1A1A1A] transition-all">
              Ver Todos <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500"><ChevronRight size={20} /></div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {featured.length > 0 ? (
              featured.map(prof => (
                <ProfessionalCard key={prof.id} professional={prof} />
              ))
            ) : (
              <div className="col-span-full py-32 text-center">
                <div className="inline-block animate-pulse text-[10px] font-bold uppercase tracking-[0.8em] text-gray-300">Sincronizando Seleção de Elite...</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final Invitation */}
      <section className="py-64 relative overflow-hidden bg-[#1A1A1A] text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Luxury Background"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10 space-y-20">
          <div className="space-y-8">
            <h2 className="text-7xl md:text-[11rem] font-light tracking-tighter leading-[0.8]">
              Sua melhor versão <br />
              <span className="italic font-serif text-[#A855F7]">é uma decisão.</span>
            </h2>
            <p className="text-2xl text-gray-400 font-light tracking-[0.3em] uppercase">Agende sua consulta com a elite nacional.</p>
          </div>
          
          <Link to="/explorar">
            <button className="group relative overflow-hidden bg-white text-[#1A1A1A] rounded-full px-24 h-28 text-[13px] font-bold uppercase tracking-[0.6em] transition-all duration-1000 hover:px-32 shadow-2xl">
              <span className="relative z-10">Encontrar Especialista</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5B2EFF] to-[#A855F7] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            </button>
          </Link>
        </div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[25rem] font-bold text-white/[0.02] select-none pointer-events-none leading-none">
          ELITE
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;