"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { Professional } from '../types';

interface Props {
  professional: Professional;
}

const ProfessionalCard: React.FC<Props> = ({ professional }) => {
  return (
    <Link to={`/profissional/${professional.id}`} className="group block animate-fade-in-up">
      <div className="space-y-8">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
          <img 
            src={professional.fotoUrl} 
            alt={professional.nome}
            className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
          />
          <div className="absolute top-6 left-6">
            <div className="flex items-center gap-2 text-white/90 text-[8px] font-bold uppercase tracking-ultra">
              <ShieldCheck size={10} className="text-[#EC4899]" /> Verificada
            </div>
          </div>
        </div>
        
        <div className="space-y-2 px-2">
          <h3 className="text-3xl font-serif-luxury text-[#171717] group-hover:text-luxury-gradient transition-colors duration-500">
            {professional.nome}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-ultra">
              {professional.especialidade}
            </p>
            <span className="text-[9px] font-medium text-gray-300 uppercase tracking-widest">
              {professional.cidade}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfessionalCard;