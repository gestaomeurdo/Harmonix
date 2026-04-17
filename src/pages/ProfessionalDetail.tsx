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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <Link to="/profissionais" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#5B2EFF] mb-12 transition-colors font-semibold">
          <ArrowLeft size={20} />
          Voltar para a busca
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Image and Basic Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8">
                <img src={prof.fotoUrl} alt={prof.nome} className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-md text-[#EC4899] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <ShieldCheck size={16} /> Profissional Verificada
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Star size={24} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold text-[#1A1A1A]">{prof.avaliacao}</span>
                    <span className="text-gray-400 font-medium">(120+ avaliações)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[#4D4D4D] font-medium">
                  <MapPin size={20} className="text-[#A855F7]" />
                  {prof.cidade}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Details and CTA */}
          <div className="lg:col-span-7">
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-[#1A1A1A] mb-4">{prof.nome}</h1>
              <p className="text-2xl font-semibold text-brand-gradient mb-8">{prof.especialidade}</p>
              
              <div className="prose prose-lg max-w-none text-[#4D4D4D]">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Sobre o Especialista</h3>
                <p className="leading-relaxed mb-8">{prof.descricao}</p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Procedimentos Realizados</h3>
              <div className="flex flex-wrap gap-3">
                {prof.procedimentos.map(proc => (
                  <div key={proc} className="bg-purple-50 text-[#5B2EFF] px-6 py-3 rounded-2xl font-bold flex items-center gap-2">
                    <CheckCircle2 size={18} /> {proc}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-white p-10 rounded-[2.5rem] border-2 border-purple-100 shadow-2xl shadow-purple-100">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Agende sua Avaliação</h3>
              <p className="text-gray-500 font-medium mb-8">
                Inicie sua jornada de transformação com um dos melhores especialistas da região. Atendimento personalizado e exclusivo.
              </p>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full h-20 bg-brand-gradient hover:opacity-90 text-white rounded-3xl text-xl font-bold shadow-xl shadow-purple-200 transition-all flex items-center justify-center gap-4">
                  <MessageCircle size={28} />
                  Falar no WhatsApp
                </Button>
              </a>
              <p className="text-center text-sm font-bold text-gray-400 mt-6 uppercase tracking-widest">
                Resposta em poucos minutos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail;