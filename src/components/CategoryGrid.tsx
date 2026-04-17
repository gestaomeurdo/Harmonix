"use client";

import React from 'react';
import { Droplets, Zap, Sparkles, Scissors, Target, Heart } from 'lucide-react';

const categories = [
  { name: 'PREENCHIMENTO', icon: Droplets },
  { name: 'BOTOX', icon: Zap },
  { name: 'BIOESTIMULADORES', icon: Sparkles },
  { name: 'FIOS DE PDO', icon: Scissors },
  { name: 'RINOMODELAÇÃO', icon: Target },
  { name: 'LIPO DE PAPADA', icon: Heart },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12">
      {categories.map((cat) => (
        <div key={cat.name} className="flex flex-col items-center group cursor-pointer">
          <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center mb-4 transition-all duration-500 group-hover:border-[#A855F7] group-hover:bg-purple-50/30">
            <cat.icon size={20} strokeWidth={1} className="text-gray-400 group-hover:text-[#A855F7] transition-colors" />
          </div>
          <span className="text-[10px] font-light tracking-[0.2em] text-gray-500 group-hover:text-[#1A1A1A] transition-colors">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;