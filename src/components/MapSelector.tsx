"use client";

import React, { useState } from 'react';
import { MapPin, ChevronRight, Globe } from 'lucide-react';

const regions = [
  { id: 'sp', name: 'SÃO PAULO', hubs: 'Jardins, Itaim Bibi, Vila Nova Conceição', count: 12 },
  { id: 'rj', name: 'RIO DE JANEIRO', hubs: 'Leblon, Ipanema, Barra da Tijuca', count: 8 },
  { id: 'cur', name: 'CURITIBA', hubs: 'Batel, Ecoville', count: 5 },
  { id: 'bh', name: 'BELO HORIZONTE', hubs: 'Lourdes, Belvedere', count: 4 },
];

const MapSelector = () => {
  const [activeRegion, setActiveRegion] = useState('sp');

  return (
    <section className="py-48 bg-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-6">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#5B2EFF]">Geolocalização de Elite</h2>
              <h3 className="text-6xl font-light text-[#1A1A1A] tracking-tighter leading-tight">
                Selecione seu <br />
                <span className="italic font-serif opacity-70 text-[#A855F7]">Hub de Atendimento.</span>
              </h3>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Nossos especialistas estão estrategicamente localizados nos centros de excelência médica mais exclusivos do país.
              </p>
            </div>

            <div className="space-y-4">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`w-full flex items-center justify-between p-8 rounded-[2rem] transition-all duration-700 border ${
                    activeRegion === region.id 
                    ? 'bg-white border-gray-100 shadow-2xl shadow-purple-100 translate-x-4' 
                    : 'bg-transparent border-transparent hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      activeRegion === region.id ? 'bg-[#5B2EFF] text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <MapPin size={20} strokeWidth={1} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">{region.name}</h4>
                      <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-1">{region.hubs}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-[#A855F7]">{region.count} MESTRES</span>
                    <ChevronRight size={16} className={activeRegion === region.id ? 'text-[#5B2EFF]' : 'text-gray-200'} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-square bg-white rounded-[4rem] shadow-2xl border border-gray-50 overflow-hidden group">
              {/* Stylized Map Placeholder */}
              <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover"
                  alt="Map"
                />
              </div>
              
              {/* Interactive Map Pins */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/3 animate-pulse">
                    <div className="w-4 h-4 bg-[#5B2EFF] rounded-full shadow-[0_0_30px_rgba(91,46,255,0.8)]" />
                  </div>
                  <div className="absolute top-1/2 right-1/4">
                    <div className="w-4 h-4 bg-[#A855F7] rounded-full shadow-[0_0_30px_rgba(168,85,247,0.8)]" />
                  </div>
                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="w-4 h-4 bg-[#EC4899] rounded-full shadow-[0_0_30px_rgba(236,72,153,0.8)]" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 left-12 right-12 bg-[#1A1A1A]/90 backdrop-blur-xl p-10 rounded-[3rem] text-white flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <Globe size={32} strokeWidth={1} className="text-[#5B2EFF]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-1">Cobertura Nacional</p>
                    <p className="text-lg font-light">Presença nos endereços mais nobres do Brasil.</p>
                  </div>
                </div>
                <button className="text-[10px] font-bold uppercase tracking-widest border-b border-[#5B2EFF] pb-1 hover:text-[#5B2EFF] transition-colors">
                  Ver no Mapa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSelector;