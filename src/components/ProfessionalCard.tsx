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
      <div className="bg-white rounded-[2.5rem] overflow-hidden transition-all duration-1000 ease-in-out hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem]">
          <img 
            src={professional.fotoUrl} 
            alt={professional.nome}
            className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          />
          
          {/* Elite Badge */}
          <div className="absolute top-6 left-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
              <ShieldCheck size={12} className="text-[#EC4899]" /> Verificada
            </div>
          </div>

          {/* Minimal Rating */}
          <div className="absolute bottom-6 right-6">
            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
              <Star size={10} className="fill-yellow-400 text-yellow-400" />
              <span className="text-[10px] font-bold text-[#1A1A1A]">{professional.avaliacao}</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 pb-6 px-4">
          <h3 className="text-2xl font-light text-[#1A1A1A] tracking-tight mb-2">
            {professional.nome}
          </h3>
          
          <p className="text-[10px] font-bold text-[#A855F7] uppercase tracking-[0.3em] mb-4">
            {professional.especialidade}
          </p>
          
          <div className="flex items-center gap-1.5 text-gray-400 mb-8">
            <MapPin size={14} strokeWidth={1} />
            <span className="text-xs font-light tracking-wide">{professional.cidade}</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[#1A1A1A] group-hover:text-[#5B2EFF] transition-colors border-t border-gray-50 pt-6">
            Ver Perfil <ArrowRight size={14} strokeWidth={1} className="transition-transform duration-500 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfessionalCard;