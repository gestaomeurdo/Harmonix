"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ShieldCheck } from 'lucide-react';
import { Professional } from '../types';
import { Button } from './ui/button';

interface Props {
  professional: Professional;
}

const ProfessionalCard: React.FC<Props> = ({ professional }) => {
  return (
    <Link to={`/profissional/${professional.id}`} className="group block">
      <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 modern-shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={professional.fotoUrl} 
            alt={professional.nome}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {professional.destaque && (
              <div className="bg-[#A855F7] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                Premium
              </div>
            )}
            <div className="bg-white/90 backdrop-blur-md text-[#EC4899] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <ShieldCheck size={12} /> Verificada
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1 shadow-sm">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-bold text-[#1A1A1A]">{professional.avaliacao}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-1 group-hover:text-[#5B2EFF] transition-colors">
            {professional.nome}
          </h3>
          <p className="text-sm font-medium text-[#A855F7] mb-3">
            {professional.especialidade}
          </p>
          
          <div className="flex items-center gap-1.5 text-[#4D4D4D] mb-6">
            <MapPin size={14} className="text-gray-400" />
            <span className="text-xs font-medium">{professional.cidade}</span>
          </div>

          <Button className="w-full bg-gray-50 hover:bg-brand-gradient hover:text-white text-[#1A1A1A] border-none rounded-2xl font-semibold transition-all duration-300">
            Ver Perfil Completo
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProfessionalCard;