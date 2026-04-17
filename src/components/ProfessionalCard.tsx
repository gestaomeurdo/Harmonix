"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Check } from 'lucide-react';
import { Professional } from '../types';

interface Props {
  professional: Professional;
}

const ProfessionalCard: React.FC<Props> = ({ professional }) => {
  return (
    <Link to={`/profissional/${professional.id}`} className="group block">
      <div className="editorial-shadow transition-all duration-700 hover:-translate-y-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
          <img 
            src={professional.fotoUrl} 
            alt={professional.nome}
            className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
          />
          
          {/* Glass Badges */}
          <div className="absolute top-6 right-6">
            <div className="glass-badge px-3 py-1.5 flex items-center gap-1.5">
              <Star size={10} className="fill-white/80 text-transparent" />
              {professional.avaliacao}
            </div>
          </div>
          
          {professional.destaque && (
            <div className="absolute top-6 left-6">
              <div className="glass-badge px-4 py-1.5">
                Premium
              </div>
            </div>
          )}

          {/* Subtle Overlay on Hover */}
          <div className="absolute inset-0 bg-[#1C1917]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="py-8 px-2">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[9px] font-light uppercase tracking-[0.3em] text-[#1C1917]/50">
              {professional.especialidade}
            </span>
            <div className="h-[1px] w-4 bg-[#1C1917]/10" />
            <div className="flex items-center gap-1 text-[#EC4899]">
              <Check size={10} strokeWidth={3} />
              <span className="text-[8px] font-bold uppercase tracking-widest">Verificada</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-serif text-[#1C1917] mb-2">
            {professional.nome}
          </h3>
          
          <p className="text-[11px] font-light text-[#1C1917]/40 uppercase tracking-[0.1em]">
            {professional.cidade}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProfessionalCard;