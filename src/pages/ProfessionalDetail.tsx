"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import { Star, MapPin, MessageCircle, Check, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfessionalDetail = () => {
  const { id } = useParams();
  const { professionals } = useApp();
  
  const prof = professionals.find(p => p.id === id);

  if (!prof) return <div className="p-32 text-center font-serif text-2xl">Profissional não encontrado.</div>;

  const whatsappLink = `https://wa.me/${prof.whatsappNumber}?text=Olá ${prof.nome}, vi seu perfil no Harmonix e gostaria de agendar uma avaliação.`;

  // Mock de galeria de resultados
  const gallery = [
    'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=600'
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <div className="container mx-auto px-12 py-24">
        <Link to="/profissionais" className="inline-flex items-center gap-4 text-[#1C1917]/40 hover:text-[#1C1917] mb-24 transition-colors text-[10px] font-medium uppercase tracking-[0.4em]">
          <ArrowLeft size={14} strokeWidth={1} />
          Retornar ao Diretório
        </Link>

        <div className="max-w-7xl mx-auto">
          {/* Editorial Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-48">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#1C1917]/40">
                  {prof.especialidade}
                </span>
                <div className="h-[1px] w-8 bg-[#1C1917]/10" />
                <div className="flex items-center gap-1.5 text-[#EC4899]">
                  <Check size={12} strokeWidth={3} />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Elite Member</span>
                </div>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-serif text-[#1C1917] mb-12 leading-[0.9]">
                {prof.nome.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>

              <div className="flex items-center gap-12 text-[#1C1917]/40">
                <div className="flex items-center gap-3">
                  <MapPin size={18} strokeWidth={1} />
                  <span className="text-xs font-light tracking-widest uppercase">{prof.cidade}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star size={18} strokeWidth={1} className="fill-[#1C1917]/10" />
                  <span className="text-xs font-bold tracking-widest uppercase">{prof.avaliacao} / 5.0</span>
                </div>
              </div>
            </div>

            <div className="aspect-[3/4] rounded-sm overflow-hidden editorial-shadow">
              <img src={prof.fotoUrl} alt={prof.nome} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 border-t border-[#1C1917]/5 pt-32 mb-48">
            <div className="lg:col-span-7">
              <section className="mb-32">
                <h2 className="text-[10px] font-medium uppercase tracking-[0.5em] text-[#1C1917]/30 mb-12">A Filosofia</h2>
                <p className="text-4xl font-serif italic text-[#1C1917]/80 leading-[1.4]">
                  "{prof.descricao}"
                </p>
              </section>

              <section className="mb-32">
                <h2 className="text-[10px] font-medium uppercase tracking-[0.5em] text-[#1C1917]/30 mb-12">Expertise</h2>
                <div className="grid grid-cols-1 gap-8">
                  {prof.procedimentos.map(proc => (
                    <div key={proc} className="flex items-center justify-between py-6 border-b border-[#1C1917]/5 group">
                      <span className="text-2xl font-serif text-[#1C1917] group-hover:translate-x-4 transition-transform duration-500">{proc}</span>
                      <div className="h-2 w-2 rounded-full bg-[#1C1917]/10 group-hover:bg-[#5B2EFF] transition-colors" />
                    </div>
                  ))}
                </div>
              </section>

              {/* Gallery Section */}
              <section>
                <h2 className="text-[10px] font-medium uppercase tracking-[0.5em] text-[#1C1917]/30 mb-12">Resultados & Estética</h2>
                <div className="grid grid-cols-2 gap-8">
                  {gallery.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden bg-slate-100">
                      <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Resultado" />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-40 p-16 bg-[#1C1917] text-[#FDFBF7] editorial-shadow">
                <h3 className="text-4xl font-serif mb-8">Solicitar Consulta</h3>
                <p className="text-[#FDFBF7]/50 font-light mb-12 leading-relaxed text-lg">
                  Acesse a agenda exclusiva e inicie seu protocolo de rejuvenescimento personalizado.
                </p>
                
                <div className="space-y-8 mb-16">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#5B2EFF]" />
                    <span>Vagas limitadas para este mês</span>
                  </div>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full h-20 bg-gradient-to-r from-[#5B2EFF] to-[#A855F7] hover:opacity-90 text-white rounded-none text-[11px] font-bold uppercase tracking-[0.4em] shadow-2xl shadow-primary/20 transition-all">
                    <MessageCircle size={20} className="mr-4" />
                    Agendar via Concierge
                  </Button>
                </a>
                
                <p className="text-center text-[8px] font-light uppercase tracking-[0.5em] text-[#FDFBF7]/30 mt-8">
                  Atendimento Prioritário
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