"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import { Star, MapPin, MessageCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProfessionalDetail = () => {
  const { id } = useParams();
  const { professionals } = useApp();
  
  const prof = professionals.find(p => p.id === id);

  if (!prof) return <div className="p-20 text-center">Profissional não encontrado.</div>;

  const whatsappLink = `https://wa.me/${prof.whatsappNumber}?text=Olá ${prof.nome}, vi seu perfil no Harmonix e gostaria de saber mais sobre seus procedimentos.`;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/profissionais" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#5B2EFF] mb-8 transition-colors font-medium">
          <ArrowLeft size={18} />
          Voltar para listagem
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Image and Basic Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5]">
                <img src={prof.fotoUrl} alt={prof.nome} className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-[#5B2EFF] text-white border-none">{prof.especialidade}</Badge>
                    <div className="flex items-center gap-1 text-slate-900 font-bold">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      {prof.avaliacao}
                    </div>
                  </div>
                  <h1 className="text-2xl font-black text-slate-900">{prof.nome}</h1>
                  <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                    <MapPin size={14} />
                    {prof.cidade}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Details and CTA */}
          <div className="lg:col-span-7 py-4">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre o Profissional</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {prof.descricao}
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Procedimentos Realizados</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prof.procedimentos.map(proc => (
                  <div key={proc} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[#5B2EFF] shadow-sm">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-semibold text-slate-700">{proc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#5B2EFF] to-[#A855F7] text-white shadow-xl shadow-primary/20">
              <h3 className="text-2xl font-bold mb-2">Gostou do trabalho?</h3>
              <p className="text-white/80 mb-8">Inicie uma conversa agora mesmo e tire suas dúvidas diretamente com o especialista.</p>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full h-16 bg-white text-[#5B2EFF] hover:bg-slate-50 rounded-2xl text-lg font-black gap-3 shadow-lg">
                  <MessageCircle size={24} className="fill-[#5B2EFF]" />
                  Agendar pelo WhatsApp
                </Button>
              </a>
              <p className="text-center text-xs text-white/60 mt-4">
                Resposta média em menos de 1 hora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail;