"use client";

import React from 'react';
import { Sparkles, Shield, Gem, Microscope, PenTool, Star } from 'lucide-react';

const categories = [
  { name: 'HARMONIZAÇÃO OROFACIAL', icon: Sparkles },
  { name: 'LENTES DE CONTATO DENTAL', icon: Gem },
  { name: 'BIOESTIMULADORES', icon: Shield },
  { name: 'REABILITAÇÃO ORAL', icon: Microscope },
  { name: 'ESCULTURA FACIAL', icon: PenTool },
  { name: 'PROTOCOLOS EXCLUSIVOS', icon: Star },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 py-12">
      {categories.map((cat) => (
        <div key={cat.name} className="flex flex-col items-center group cursor-pointer">
          <div className="w-20 h-20 rounded-full border border-gray-100 flex items-center justify-center mb-6 transition-all duration-700 group-hover:border-[#5B2EFF] group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-purple-100">
            <cat.icon size={24} strokeWidth={1} className="text-gray-300 group-hover:text-[#5B2EFF] transition-colors" />
          </div>
          <span className="text-[9px] font-bold tracking-[0.3em] text-gray-400 group-hover:text-[#1A1A1A] transition-colors text-center uppercase max-w-[120px] leading-relaxed">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;