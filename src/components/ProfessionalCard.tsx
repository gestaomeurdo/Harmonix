"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import { Professional } from '../types';
import { Badge } from './ui/badge';

interface Props {
  professional: Professional;
}

const ProfessionalCard: React.FC<Props> = ({ professional }) => {
  return (
    <Link to={`/profissional/${professional.id}`} className="group block">
      <div className="premium-shadow-hover rounded-[2.5rem] bg-white overflow-hidden">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={professional.fotoUrl} 
            alt={professional.nome}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute top-6 right-6">
            <Badge className="bg-white/90 backdrop-blur-md text-[#1A1A1A] border-none px-3 py-1.5 rounded-full shadow-sm font-bold text-xs gap-1">
              <Star size={12} className="fill-[#EC4899] text-[#EC4899]" />
              {professional.avaliacao}
            </Badge>
          </div>
          {professional.destaque && (
            <div className="absolute top-6 left-6">
              <Badge className="bg-[#EC4899]/10 backdrop-blur-md text-[#EC4899] border-none px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest">
                Premium
              </Badge>
            </div>
          )}
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A855F7]">
              {professional.especialidade}
            </span>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EC4899]/5 text-[#EC4899]">
              <CheckCircle2 size={10} />
              <span className="text-[9px] font-bold uppercase tracking-wider">Verificada</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#5B2EFF] transition-colors">
            {professional.nome}
          </h3>
          
          <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-6">
            <MapPin size={14} strokeWidth={1.5} />
            <span className="font-light">{professional.cidade}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {professional.procedimentos.slice(0, 2).map(p => (
              <span key={p} className="text-[11px] font-medium text-slate-500 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfessionalCard;