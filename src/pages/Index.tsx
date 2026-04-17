"use client";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Sparkles, ShieldCheck, Award, Users, ChevronRight } from 'lucide-react';
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
      
      {/* Hero Section - Ultra Premium Editorial */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] -z-10" />
        
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-8 space-y-16">
              <div className="inline-flex items-center gap-4">
                <span className="h-px w-12 bg-[#A855F7]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#A855F7]">The Elite Directory</span>
              </div>
              
              <h1 className="text-7xl md:text-[10rem] font-light text-[#1A1A1A] leading-[0.8] tracking-tighter">
                A Elite da <br />
                <span className="italic font-serif opacity-80">Estética Facial.</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-400 font-light max-w-2xl leading-relaxed tracking-wide">
                Onde a odontologia de alta performance encontra a harmonização orofacial de luxo. Curadoria exclusiva para quem busca o incomparável.
              </p>

              <form onSubmit={handleSearch} className="max-w-2xl relative group">
                <div className="relative bg-white p-3 rounded-full flex items-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-1000 hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)] border border-gray-50">
                  <div className="flex-1 flex items-center px-10">
                    <Search className="text-gray-300 mr-6" size={24} strokeWidth={1} />
                    <input 
                      placeholder="Busque por procedimento ou especialista..." 
                      className="w-full bg-transparent border-none outline-none text-lg font-light tracking-widest placeholder:text-gray-200 text-[#1A1A1A]"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="bg-[#1A1A1A] text-white rounded-full px-12 h-16 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-[#5B2EFF] transition-all duration-700 shadow-2xl">
                    Descobrir
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative group">
                <div className="aspect-[2/3] rounded-[5rem] overflow-hidden shadow-2xl transition-all duration-1000 group-hover:rounded-[2rem]">
                  <img 
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]" 
                    alt="Harmonix Elite" 
                  />
                </div>
                <div className="absolute -bottom-12 -left-12 bg-white/90 backdrop-blur-xl p-12 rounded-[3rem] shadow-2xl border border-white/20 space-y-6 max-w-[280px]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5B2EFF] flex items-center justify-center text-white">
                      <ShieldCheck size={24} strokeWidth={1} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">Membros Verificados</span>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Apenas profissionais com CRM/CRO ativo e portfólio de excelência comprovada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Ticket Trust Bar */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-gray-300">Referência em Publicações de Luxo</p>
            <div className="flex flex-wrap justify-center md:justify-between w-full items-center gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
              <span className="text-xl font-serif italic tracking-widest">VOGUE</span>
              <span className="text-xl font-serif italic tracking-widest">BAZAAR</span>
              <span className="text-xl font-serif italic tracking-widest">FORBES</span>
              <span className="text-xl font-serif italic tracking-widest">ELLE</span>
              <span className="text-xl font-serif italic tracking-widest">TATLER</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - High Ticket Focus */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-32 space-y-8">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#5B2EFF]">Especialidades de Elite</h2>
            <p className="text-5xl md:text-7xl font-light text-[#1A1A1A] tracking-tighter leading-tight">
              Excelência em cada <br />
              <span className="italic font-serif opacity-70">detalhe anatômico.</span>
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Philosophy Section - The Art of Precision */}
      <PhilosophySection />

      {/* The "Elite" Distinction Section */}
      <section className="py-48 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#5B2EFF]/10 blur-[120px]" />
        <div className="container mx-auto px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
              <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9]">
                Por que a <br />
                <span className="italic font-serif text-[#A855F7]">Harmonix?</span>
              </h2>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="text-4xl font-serif italic text-[#A855F7] opacity-40 group-hover:opacity-100 transition-opacity">01</div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-light tracking-tight">Curadoria Incomparável</h4>
                    <p className="text-gray-400 font-light leading-relaxed max-w-md">Não somos um diretório comum. Selecionamos apenas o topo da pirâmide da estética e odontologia nacional.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="text-4xl font-serif italic text-[#A855F7] opacity-40 group-hover:opacity-100 transition-opacity">02</div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-light tracking-tight">Foco em Resultados Naturais</h4>
                    <p className="text-gray-400 font-light leading-relaxed max-w-md">Nossos membros dominam a técnica de realçar a beleza sem descaracterizar a identidade do paciente.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="text-4xl font-serif italic text-[#A855F7] opacity-40 group-hover:opacity-100 transition-opacity">03</div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-light tracking-tight">Conexão Direta de Luxo</h4>
                    <p className="text-gray-400 font-light leading-relaxed max-w-md">Agendamento facilitado via concierge digital, conectando você diretamente ao especialista.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-full border border-white/10 p-20 animate-spin-slow">
                <div className="w-full h-full rounded-full border border-white/20 p-20">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#5B2EFF] to-[#A855F7] opacity-20 blur-3xl" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <span className="text-8xl font-light tracking-tighter">5%</span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Taxa de Aprovação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Selection - The Dossier */}
      <section className="py-48">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
            <div className="max-w-3xl space-y-8">
              <h2 className="text-6xl md:text-8xl font-light text-[#1A1A1A] tracking-tighter leading-[0.9]">O Dossier <br /><span className="italic font-serif opacity-70">Harmonix.</span></h2>
              <p className="text-2xl text-gray-400 font-light tracking-wide leading-relaxed">
                Uma seleção rigorosa dos profissionais que estão redefinindo os padrões de beleza e saúde orofacial.
              </p>
            </div>
            <Link to="/explorar" className="group flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.6em] text-[#1A1A1A] transition-all">
              Ver Todos <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all"><ChevronRight size={18} /></div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {featured.length > 0 ? (
              featured.map(prof => (
                <ProfessionalCard key={prof.id} professional={prof} />
              ))
            ) : (
              <div className="col-span-full py-32 text-center">
                <div className="inline-block animate-pulse text-[10px] font-bold uppercase tracking-[0.8em] text-gray-300">Carregando Seleção de Elite...</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA - The Invitation */}
      <section className="py-64 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 text-center relative z-10 space-y-20">
          <div className="space-y-8">
            <h2 className="text-7xl md:text-[11rem] font-light text-[#1A1A1A] tracking-tighter leading-[0.8]">
              Sua melhor versão <br />
              <span className="italic font-serif opacity-70 text-[#5B2EFF]">é uma decisão.</span>
            </h2>
            <p className="text-2xl text-gray-400 font-light tracking-[0.2em] uppercase">Agende sua consulta com a elite.</p>
          </div>
          
          <Link to="/explorar">
            <button className="group relative overflow-hidden bg-[#1A1A1A] text-white rounded-full px-24 h-28 text-[13px] font-bold uppercase tracking-[0.6em] transition-all duration-1000 hover:px-32 shadow-2xl">
              <span className="relative z-10">Encontrar Especialista</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5B2EFF] to-[#A855F7] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            </button>
          </Link>
        </div>
        
        {/* Background Watermark */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[25rem] font-bold text-gray-50 select-none pointer-events-none leading-none">
          ELITE
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;