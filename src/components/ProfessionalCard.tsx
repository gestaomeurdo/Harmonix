"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Professional } from '../types';
import { Badge } from './ui/badge';

interface Props {
  professional: Professional;
}

const ProfessionalCard: React.FC<Props> = ({ professional }) => {
  return (
    <Link to={`/profissional/${professional.id}`} className="group">
      <div className="overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={professional.fotoUrl} 
            alt={professional.nome}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/90 backdrop-blur-sm text-slate-900 hover:bg-white border-none shadow-sm gap-1">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              {professional.avaliacao}
            </Badge>
          </div>
          {professional.destaque && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-[#5B2EFF] text-white border-none shadow-lg shadow-primary/20">
                Destaque
              </Badge>
            </div>
          )}
        </div>
        
        <div className="p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-[#A855F7] mb-1">
            {professional.especialidade}
          </p>
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#5B2EFF] transition-colors">
            {professional.nome}
          </h3>
          
          <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
            <MapPin size={14} />
            {professional.cidade}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {professional.procedimentos.slice(0, 2).map(p => (
              <span key={p} className="text-[10px] font-medium px-2 py-1 bg-slate-50 text-slate-600 rounded-full border border-slate-100">
                {p}
              </span>
            ))}
            {professional.procedimentos.length > 2 && (
              <span className="text-[10px] font-medium px-2 py-1 bg-slate-50 text-slate-400 rounded-full">
                +{professional.procedimentos.length - 2}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-50">
            <span className="text-sm font-semibold text-[#5B2EFF]">Ver Perfil</span>
            <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#5B2EFF] group-hover:text-white transition-all duration-300">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfessionalCard;