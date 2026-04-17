"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import ProfessionalCard from '../components/ProfessionalCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  const { professionals } = useApp();
  const featured = professionals.filter(p => p.destaque).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      {/* A. Hero Section (A Imersão) */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-105"
            alt="Luxury Aesthetic Architecture"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-[10px] font-bold uppercase tracking-ultra text-white/60 mb-8">
              A SELEÇÃO RESTRITA DOS MELHORES ESPECIALISTAS DO BRASIL. CONFIANÇA TOTAL, DE OLHOS FECHADOS.
            </p>
            <h1 className="text-6xl md:text-[9rem] font-serif-luxury text-white leading-[0.85] tracking-tighter">
              Onde o investimento <br />
              encontra a <i className="text-luxury-gradient not-italic">imortalidade.</i>
            </h1>
          </div>

          <div className="pt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/explorar">
              <button className="bg-white text-[#171717] rounded-full px-16 h-16 text-[10px] font-bold uppercase tracking-ultra hover:bg-[#5B2EFF] hover:text-white transition-all duration-700 shadow-2xl">
                DESCOBRIR A CURADORIA
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* B. Seção de Filosofia (Layout Assimétrico) */}
      <section className="py-40 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12 animate-fade-in-up">
              <h2 className="text-6xl md:text-8xl font-serif-luxury text-[#171717] leading-tight">
                Sua face é seu <br />
                <i className="text-luxury-gradient not-italic">maior ativo.</i>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed tracking-wide max-w-xl">
                Na Harmonix, não acreditamos em procedimentos isolados, mas em uma arquitetura facial integrada. Nosso processo de seleção é implacável: analisamos não apenas o currículo, mas a sensibilidade artística de cada mestre. <br /><br />
                Apenas 5% dos profissionais que aplicam para o nosso diretório são aceitos. Isso garante que, ao escolher um nome aqui, você está acessando o topo absoluto da pirâmide estética mundial.
              </p>
              <div className="pt-8">
                <Link to="/como-funciona" className="text-[10px] font-bold uppercase tracking-ultra text-[#171717] border-b border-black/10 pb-2 hover:text-[#5B2EFF] hover:border-[#5B2EFF] transition-all">
                  O RIGOR DA CURADORIA
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2000&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Aesthetic Precision"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. O Dossier Harmonix (Antigo Grid de Profissionais) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-32 space-y-8 animate-fade-in-up">
            <h2 className="text-6xl md:text-8xl font-serif-luxury text-[#171717]">O Dossier <i className="text-luxury-gradient not-italic">Harmonix.</i></h2>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              Uma coleção rigorosa dos profissionais que ditam o padrão ouro da estética no Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {featured.length > 0 ? (
              featured.map(prof => (
                <ProfessionalCard key={prof.id} professional={prof} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-300 font-light tracking-ultra uppercase text-[10px]">
                Sincronizando Dossier de Elite...
              </div>
            )}
          </div>

          <div className="mt-32 text-center animate-fade-in-up">
            <Link to="/explorar" className="inline-flex items-center gap-6 group">
              <span className="text-[10px] font-bold uppercase tracking-ultra text-[#171717]">Ver Diretório Completo</span>
              <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#171717] group-hover:text-white transition-all duration-500">
                <ChevronRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* D. Banner Final CTA (Decisão) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Final Decision"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center space-y-16 animate-fade-in-up">
          <h2 className="text-6xl md:text-[10rem] font-serif-luxury text-white leading-[0.8] tracking-tighter">
            Sua melhor versão <br />
            é uma <i className="text-luxury-gradient not-italic">decisão.</i>
          </h2>
          
          <Link to="/explorar">
            <button className="bg-white text-[#171717] rounded-full px-20 h-20 text-[11px] font-bold uppercase tracking-ultra hover:bg-[#5B2EFF] hover:text-white transition-all duration-700 shadow-2xl">
              AGENDAR CONSULTA DE ELITE
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ChevronRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default Index;