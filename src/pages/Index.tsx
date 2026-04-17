"use client";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Sparkles, ShieldCheck, Award, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import Navbar from '../components/Navbar';
import CategoryGrid from '../components/CategoryGrid';
import PhilosophySection from '../components/PhilosophySection';
import Footer from '../components/Footer';

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
      
      {/* Hero Section - Dental & Facial Focus */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50/30 to-transparent -z-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#5B2EFF]/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="inline-flex items-center gap-4 px-6 py-2.5 bg-white rounded-full border border-gray-100 shadow-sm">
                <Sparkles size={14} className="text-[#A855F7]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#1A1A1A]">Odontologia & Harmonização de Elite</span>
              </div>
              
              <h1 className="text-6xl md:text-[8rem] font-light text-[#1A1A1A] leading-[0.85] tracking-tighter">
                O sorriso que <br />
                <span className="italic font-serif opacity-80">define você.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-xl leading-relaxed tracking-wide">
                Conectamos você aos maiores especialistas em Lentes de Contato, Facetas e Harmonização Facial do país.
              </p>

              <form onSubmit={handleSearch} className="max-w-xl relative group">
                <div className="relative bg-white border border-gray-100 p-2 rounded-full flex items-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)]">
                  <div className="flex-1 flex items-center px-8">
                    <Search className="text-gray-300 mr-4" size={20} strokeWidth={1} />
                    <input 
                      placeholder="Lentes, Botox ou cidade..." 
                      className="w-full bg-transparent border-none outline-none text-base font-light tracking-widest placeholder:text-gray-200 text-[#1A1A1A]"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="bg-[#1A1A1A] text-white rounded-full px-10 h-14 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#5B2EFF] transition-all duration-500 shadow-xl shadow-black/5">
                    Buscar
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative">
                <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-1000">
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000&auto=format&fit=crop" 
                    className="w-full h-full object-cover" 
                    alt="Estética Dental de Luxo" 
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#A855F7]">
                    Padrão Ouro em Reabilitação
                  </p>
                  <p className="text-xs font-medium text-gray-400 leading-relaxed">
                    Curadoria focada em <br /> resultados de alta fidelidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 border-y border-gray-100/50 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale">
            <span className="text-sm font-bold uppercase tracking-[0.5em]">Dental Tribune</span>
            <span className="text-sm font-bold uppercase tracking-[0.5em]">SBOE Member</span>
            <span className="text-sm font-bold uppercase tracking-[0.5em]">Health & Smile</span>
            <span className="text-sm font-bold uppercase tracking-[0.5em]">Elite Dentistry</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#A855F7] mb-6">Expertise</h2>
            <p className="text-4xl font-light text-[#1A1A1A] tracking-tighter">Excelência em cada detalhe</p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <PhilosophySection />

      {/* Standards Section */}
      <section className="py-40 bg-[#1A1A1A] text-white rounded-[4rem] mx-6 my-20">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#A855F7]">
                <ShieldCheck size={32} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-light tracking-tight">Especialistas CRO</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Verificação rigorosa de registros profissionais e especializações em odontologia estética.
              </p>
            </div>
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#A855F7]">
                <Award size={32} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-light tracking-tight">Tecnologia Digital</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Profissionais que utilizam escaneamento 3D e planejamento digital do sorriso (DSD).
              </p>
            </div>
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#A855F7]">
                <Users size={32} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-light tracking-tight">Atendimento VIP</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Conexão direta com clínicas que oferecem experiência de concierge e conforto absoluto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-light text-[#1A1A1A] mb-8 tracking-tighter">Mestres do Sorriso</h2>
              <p className="text-lg text-gray-400 font-light tracking-wide leading-relaxed">
                A seleção Harmonix dos profissionais que são referência em reabilitação oral e estética facial.
              </p>
            </div>
            <Link to="/explorar" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#1A1A1A] border-b border-[#1A1A1A] pb-2">
              Ver Todos os Especialistas <ArrowRight size={16} strokeWidth={1} className="transition-transform duration-500 group-hover:translate-x-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {featured.length > 0 ? (
              featured.map(prof => (
                <ProfessionalCard key={prof.id} professional={prof} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-300 font-light tracking-widest uppercase text-[10px] font-bold">
                Sincronizando mestres da estética...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-60 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-[8rem] font-light text-[#1A1A1A] mb-16 tracking-tighter leading-[0.9]">
            O sorriso dos seus <br />
            <span className="italic font-serif opacity-70">sonhos começa aqui.</span>
          </h2>
          <Link to="/explorar">
            <button className="bg-[#1A1A1A] text-white rounded-full px-20 h-24 text-[12px] font-bold uppercase tracking-[0.5em] hover:bg-[#5B2EFF] transition-all duration-1000 shadow-2xl shadow-black/20">
              Agendar Avaliação
            </button>
          </Link>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-gray-50/50 -z-10 select-none pointer-events-none">
          SMILE
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;