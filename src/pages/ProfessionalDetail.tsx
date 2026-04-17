"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import { Star, MapPin, MessageCircle, CheckCircle2, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProfessionalDetail = () => {
  const { id } = useParams();
  const { professionals } = useApp();
  
  const prof = professionals.find(p => p.id === id);

  if (!prof) return <div className="p-20 text-center font-light">Profissional não encontrado.</div>;

  const whatsappLink = `https://wa.me/${prof.whatsappNumber}?text=Olá ${prof.nome}, vi seu perfil no Harmonix e gostaria de agendar uma avaliação.`;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-8 py-16">
        <Link to="/profissionais" className="inline-flex items-center gap-3 text-slate-400 hover:text-[#1A1A1A] mb-16 transition-colors text-xs font-bold uppercase tracking-widest">
          <ArrowLeft size={16} />
          Voltar para a curadoria
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge className="bg-[#EC4899]/5 text-[#EC4899] border-none px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest">
                {prof.especialidade}
              </Badge>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-50 text-slate-400 border border-slate-100">
                <ShieldCheck size={12} className="text-[#5B2EFF]" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Perfil Verificado</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-8">{prof.nome}</h1>
            <div className="flex items-center justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={18} strokeWidth={1.5} />
                <span className="font-light">{prof.cidade}</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-slate-200" />
              <div className="flex items-center gap-2">
                <Star size={18} className="fill-[#EC4899] text-[#EC4899]" />
                <span className="font-bold text-[#1A1A1A]">{prof.avaliacao}</span>
                <span className="font-light text-xs">(120+ avaliações)</span>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="mb-32">
            <div className="aspect-[21/9] rounded-[3rem] overflow-hidden premium-shadow">
              <img src={prof.fotoUrl} alt={prof.nome} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-7">
              <section className="mb-20">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">Biografia</h2>
                <p className="text-2xl font-light text-[#4D4D4D] leading-relaxed italic">
                  "{prof.descricao}"
                </p>
              </section>

              <section>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">Especialidades</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {prof.procedimentos.map(proc => (
                    <div key={proc} className="flex items-center gap-4 p-6 rounded-3xl bg-[#F9FAFB] border border-slate-50 group hover:bg-white hover:premium-shadow transition-all">
                      <div className="h-10 w-10 rounded-2xl bg-white flex items-center justify-center text-[#5B2EFF] shadow-sm group-hover:bg-[#5B2EFF] group-hover:text-white transition-colors">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="font-bold text-[#1A1A1A] tracking-tight">{proc}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 p-10 rounded-[3rem] bg-[#1A1A1A] text-white premium-shadow">
                <h3 className="text-3xl font-bold mb-4">Agende sua Avaliação</h3>
                <p className="text-slate-400 font-light mb-10 leading-relaxed">
                  Inicie sua jornada de transformação com um dos especialistas mais requisitados da região.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-medium">Disponível para novos pacientes</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-[#5B2EFF]" />
                    <span>Consulta inicial personalizada</span>
                  </div>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full h-20 bg-gradient-to-r from-[#5B2EFF] to-[#A855F7] hover:opacity-90 text-white rounded-full text-lg font-bold gap-4 shadow-xl shadow-primary/20 transition-all">
                    <MessageCircle size={24} />
                    Agendar via WhatsApp
                  </Button>
                </a>
                
                <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-6">
                  Resposta em até 30 minutos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail;