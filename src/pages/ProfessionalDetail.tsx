"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import { Star, MapPin, MessageCircle, ShieldCheck, ArrowLeft, CheckCircle2, GraduationCap, Image as ImageIcon, Map as MapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfessionalDetail = () => {
  const { id } = useParams();
  const { professionals } = useApp();
  
  const prof = professionals.find(p => p.id === id);

  if (!prof) return <div className="p-32 text-center font-bold text-2xl">Profissional não encontrado.</div>;

  const whatsappLink = `https://wa.me/${prof.whatsappNumber}?text=Olá ${prof.nome}, vi seu perfil no Harmonix e gostaria de agendar uma avaliação.`;

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <div className="container mx-auto px-6 py-20">
        <Link to="/explorar" className="inline-flex items-center gap-3 text-gray-400 hover:text-[#1A1A1A] mb-16 transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">
          <ArrowLeft size={16} strokeWidth={1} />
          Voltar para a busca
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Profile Info & Sticky CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/5">
                <img src={prof.fotoUrl} alt={prof.nome} className="w-full h-full object-cover" />
                <div className="absolute top-8 left-8">
                  <div className="bg-white/90 backdrop-blur-md text-[#A855F7] text-[9px] font-bold uppercase tracking-[0.3em] px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                    <ShieldCheck size={14} /> Verificada
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star size={20} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-light text-[#1A1A1A]">{prof.avaliacao}</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Curadoria Harmonix</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-500">
                    <MapPin size={18} strokeWidth={1} className="text-[#A855F7] mt-1 shrink-0" />
                    <div className="text-sm font-light leading-relaxed">
                      <p className="font-bold text-[#1A1A1A] mb-1">{prof.cidade}</p>
                      <p className="text-xs">{prof.enderecoCompleto || 'Endereço disponível sob consulta'}</p>
                    </div>
                  </div>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full h-16 bg-[#1A1A1A] hover:bg-[#5B2EFF] text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 flex items-center justify-center gap-3">
                    <MessageCircle size={20} strokeWidth={1} />
                    Agendar Consulta
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Detailed Content */}
          <div className="lg:col-span-8">
            <div className="mb-16">
              <h1 className="text-6xl font-light text-[#1A1A1A] mb-6 tracking-tighter">{prof.nome}</h1>
              <p className="text-[11px] font-bold text-[#A855F7] uppercase tracking-[0.5em] mb-12">{prof.especialidade}</p>
              
              <Tabs defaultValue="sobre" className="w-full">
                <TabsList className="bg-transparent border-b border-gray-100 w-full justify-start rounded-none h-auto p-0 mb-12 gap-12">
                  <TabsTrigger value="sobre" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#5B2EFF] data-[state=active]:bg-transparent text-[10px] font-bold uppercase tracking-[0.3em] px-0 pb-4 transition-all">O Especialista</TabsTrigger>
                  <TabsTrigger value="resultados" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#5B2EFF] data-[state=active]:bg-transparent text-[10px] font-bold uppercase tracking-[0.3em] px-0 pb-4 transition-all">Resultados</TabsTrigger>
                  <TabsTrigger value="formacao" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#5B2EFF] data-[state=active]:bg-transparent text-[10px] font-bold uppercase tracking-[0.3em] px-0 pb-4 transition-all">Credenciais</TabsTrigger>
                </TabsList>

                <TabsContent value="sobre" className="space-y-16 animate-in fade-in duration-700">
                  <div className="max-w-2xl">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-8">Biografia Profissional</h3>
                    <p className="text-xl text-gray-500 font-light leading-relaxed tracking-wide">
                      {prof.descricao}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-8">Procedimentos de Elite</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {prof.procedimentos.map(proc => (
                        <div key={proc} className="bg-white border border-gray-100 p-6 rounded-2xl flex items-center gap-4 shadow-sm hover:border-[#5B2EFF]/20 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-[#5B2EFF]">
                            <CheckCircle2 size={18} />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="resultados" className="animate-in fade-in duration-700">
                  <div className="grid grid-cols-1 gap-16">
                    {prof.galeriaResultados && prof.galeriaResultados.length > 0 ? (
                      prof.galeriaResultados.map((caso, idx) => (
                        <div key={idx} className="space-y-8">
                          <div className="flex items-center justify-between">
                            <h4 className="text-2xl font-light text-[#1A1A1A] tracking-tight">{caso.titulo}</h4>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Caso Real #{idx + 1}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="relative group">
                              <img src={caso.antes} alt="Antes" className="w-full aspect-square object-cover rounded-[2rem]" />
                              <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">Antes</div>
                            </div>
                            <div className="relative group">
                              <img src={caso.depois} alt="Depois" className="w-full aspect-square object-cover rounded-[2rem]" />
                              <div className="absolute bottom-6 left-6 bg-[#5B2EFF]/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">Depois</div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="py-20 text-center bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
                        <ImageIcon size={32} className="mx-auto text-gray-300 mb-4" strokeWidth={1} />
                        <p className="text-gray-400 font-light">Galeria de resultados disponível sob consulta privada.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="formacao" className="animate-in fade-in duration-700">
                  <div className="space-y-12">
                    <div className="bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-sm">
                      <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] flex items-center justify-center text-white">
                          <GraduationCap size={24} strokeWidth={1} />
                        </div>
                        <h3 className="text-2xl font-light text-[#1A1A1A] tracking-tight">Formação Acadêmica</h3>
                      </div>
                      <ul className="space-y-8">
                        {prof.formacoes && prof.formacoes.length > 0 ? (
                          prof.formacoes.map((item, idx) => (
                            <li key={idx} className="flex gap-6 group">
                              <div className="w-px bg-gray-100 relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#5B2EFF] transition-colors" />
                              </div>
                              <p className="text-sm text-gray-500 font-light leading-relaxed pb-2">{item}</p>
                            </li>
                          ))
                        ) : (
                          <p className="text-gray-400 font-light italic">Informações de formação em processo de verificação.</p>
                        )}
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-sm">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-[#5B2EFF]">
                          <MapIcon size={24} strokeWidth={1} />
                        </div>
                        <h3 className="text-2xl font-light text-[#1A1A1A] tracking-tight">Localização</h3>
                      </div>
                      <div className="aspect-video bg-gray-50 rounded-[2rem] overflow-hidden relative group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop" 
                          className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" 
                          alt="Mapa" 
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                          <p className="text-[#1A1A1A] font-bold text-sm mb-2 uppercase tracking-widest">{prof.cidade}</p>
                          <p className="text-gray-500 text-xs font-light max-w-xs">{prof.enderecoCompleto || 'Endereço exato fornecido após agendamento'}</p>
                          <Button variant="outline" className="mt-6 rounded-full border-gray-200 text-[9px] font-bold uppercase tracking-widest">Abrir no Google Maps</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail;