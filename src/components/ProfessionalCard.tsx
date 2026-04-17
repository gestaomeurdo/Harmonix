"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { Professional } from '../types';

interface Props {
  professional: Professional;
}

const ProfessionalCard: React.FC<Props> = ({ professional }) => {
  return (
    <Link to={`/profissional/${professional.id}`} className="group block">
      <div className="bg-white rounded-[2rem] overflow-hidden transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
          <img 
            src={professional.fotoUrl} 
            alt={professional.nome}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          
          {/* Luxury Badge */}
          <div className="absolute top-6 left-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
              <ShieldCheck size={14} className="text-[#EC4899]" /> Verificada
            </div>
          </div>

          {/* Rating Overlay */}
          <div className="absolute bottom-6 right-6">
            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-[#1A1A1A]">{professional.avaliacao}</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 pb-4 px-2">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-tight">
              {professional.nome}
            </h3>
          </div>
          
          <p className="text-xs font-medium text-[#A855F7] uppercase tracking-widest mb-4">
            {professional.especialidade}
          </p>
          
          <div className="flex items-center gap-1.5 text-gray-400 mb-6">
            <MapPin size={14} strokeWidth={1.5} />
            <span className="text-xs font-medium">{professional.cidade}</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] group-hover:text-[#5B2EFF] transition-colors">
            Ver Perfil Completo <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfessionalCard;