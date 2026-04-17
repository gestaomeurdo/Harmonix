"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import { Star, MapPin, MessageCircle, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfessionalDetail = () => {
  const { id } = useParams();
  const { professionals } = useApp();
  
  const prof = professionals.find(p => p.id === id);

  if (!prof) return <div className="p-32 text-center font-bold text-2xl">Profissional não encontrado.</div>;

  const whatsappLink = `https://wa.me/${prof.whatsappNumber}?text=Olá ${prof.nome}, vi seu perfil no Harmonix e gostaria de agendar uma avaliação.`;

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <div className="container mx-auto px-6 py-20">
        <Link to="/explorar" className="inline-flex items-center gap-3 text-gray-400 hover:text-[#1A1A1A] mb-16 transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
          <ArrowLeft size={16} strokeWidth={1} />
          Voltar para a busca
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Image */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/5 mb-12">
                <img src={prof.fotoUrl} alt={prof.nome} className="w-full h-full object-cover" />
                <div className="absolute top-8 left-8">
                  <div className="bg-white/90 backdrop-blur-md text-[#A855F7] text-[9px] font-bold uppercase tracking-[0.3em] px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                    <ShieldCheck size={14} /> Verificada
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Star size={20} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-light text-[#1A1A1A]">{prof.avaliacao}</span>
                    <span className="text-gray-300 text-sm font-light ml-2">Curadoria Harmonix</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-500 font-light tracking-wide">
                  <MapPin size={18} strokeWidth={1} className="text-[#A855F7]" />
                  {prof.cidade}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-7">
            <div className="mb-16">
              <h1 className="text-6xl font-light text-[#1A1A1A] mb-6 tracking-tighter">{prof.nome}</h1>
              <p className="text-[11px] font-bold text-[#A855F7] uppercase tracking-[0.5em] mb-12">{prof.especialidade}</p>
              
              <div className="max-w-2xl">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-6">Sobre o Especialista</h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed tracking-wide mb-12">
                  {prof.descricao}
                </p>
              </div>
            </div>

            <div className="mb-20">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-8">Procedimentos de Elite</h3>
              <div className="flex flex-wrap gap-4">
                {prof.procedimentos.map(proc => (
                  <div key={proc} className="bg-white border border-gray-100 text-[#1A1A1A] px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 shadow-sm">
                    <CheckCircle2 size={16} className="text-[#5B2EFF]" /> {proc}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-[#1A1A1A] p-12 rounded-[3rem] shadow-2xl shadow-black/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B2EFF]/10 blur-[100px] rounded-full" />
              <h3 className="text-3xl font-light text-white mb-6 tracking-tight">Agende sua Avaliação</h3>
              <p className="text-gray-400 font-light mb-12 max-w-md leading-relaxed tracking-wide">
                Inicie sua jornada de transformação com um dos melhores especialistas da rede Harmonix.
              </p>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full h-20 bg-white hover:bg-[#5B2EFF] hover:text-white text-[#1A1A1A] rounded-3xl text-[11px] font-bold uppercase tracking-[0.4em] transition-all duration-700 flex items-center justify-center gap-4">
                  <MessageCircle size={24} strokeWidth={1} />
                  Falar no WhatsApp
                </Button>
              </a>
              <p className="text-center text-[9px] font-bold text-gray-500 mt-8 uppercase tracking-[0.5em]">
                Atendimento Exclusivo e Personalizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail;