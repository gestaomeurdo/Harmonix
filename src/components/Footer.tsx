"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-5 space-y-10">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#1A1A1A] font-bold text-2xl transition-all duration-500 group-hover:bg-[#5B2EFF] group-hover:text-white">
                H
              </div>
              <span className="text-3xl font-light tracking-tighter">Harmonix</span>
            </Link>
            <p className="text-gray-400 font-light text-lg leading-relaxed max-w-sm">
              O diretório definitivo para quem busca a excelência em procedimentos estéticos de alta performance.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-all duration-500">
                <Instagram size={18} strokeWidth={1} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-all duration-500">
                <Linkedin size={18} strokeWidth={1} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-all duration-500">
                <Mail size={18} strokeWidth={1} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Plataforma</h4>
            <ul className="space-y-4">
              <li><Link to="/explorar" className="text-sm font-light text-gray-300 hover:text-white transition-colors">Explorar</Link></li>
              <li><Link to="/como-funciona" className="text-sm font-light text-gray-300 hover:text-white transition-colors">Como Funciona</Link></li>
              <li><Link to="/login" className="text-sm font-light text-gray-300 hover:text-white transition-colors">Área do Profissional</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Suporte</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm font-light text-gray-300 hover:text-white transition-colors">Ajuda</a></li>
              <li><a href="#" className="text-sm font-light text-gray-300 hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-sm font-light text-gray-300 hover:text-white transition-colors">Termos</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Newsletter</h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">Receba insights sobre tendências e novos especialistas.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full bg-white/5 border-b border-white/10 py-4 text-sm font-light outline-none focus:border-[#5B2EFF] transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest text-[#5B2EFF]">Assinar</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium text-gray-600 uppercase tracking-[0.2em]">
            © 2024 Harmonix Elite Directory. Todos os direitos reservados.
          </p>
          <p className="text-[10px] font-medium text-gray-600 uppercase tracking-[0.2em]">
            Desenvolvido para a Excelência
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;