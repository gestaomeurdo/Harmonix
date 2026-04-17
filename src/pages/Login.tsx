"use client";

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      toast.success('Acesso autorizado.');
      navigate('/admin');
    } else {
      toast.error('Credenciais não reconhecidas.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] p-12">
      <div className="w-full max-w-lg">
        <Link to="/" className="inline-flex items-center gap-4 text-[#1C1917]/30 hover:text-[#1C1917] mb-24 transition-colors text-[10px] font-medium uppercase tracking-[0.4em]">
          <ArrowLeft size={14} strokeWidth={1} />
          Retornar ao Início
        </Link>

        <div className="text-center mb-20">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-sm border border-[#1C1917]/10 text-[#1C1917] font-serif text-4xl mb-12">
            H
          </div>
          <h1 className="text-5xl font-serif text-[#1C1917] mb-6">Área do Membro</h1>
          <p className="text-[#1C1917]/40 font-light tracking-wide">Acesse o painel de curadoria e gestão de perfil.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-8">
            <div className="group">
              <label className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#1C1917]/30 mb-4 block">E-mail Corporativo</label>
              <input 
                type="email" 
                placeholder="admin@harmonix.com" 
                className="w-full pb-4 bg-transparent border-b border-[#1C1917]/10 outline-none text-xl font-light placeholder:text-[#1C1917]/10 focus:border-[#1C1917] transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="group">
              <label className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#1C1917]/30 mb-4 block">Senha de Acesso</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pb-4 bg-transparent border-b border-[#1C1917]/10 outline-none text-xl font-light placeholder:text-[#1C1917]/10 focus:border-[#1C1917] transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-20 bg-[#1C1917] hover:bg-black text-[#FDFBF7] rounded-none text-[11px] font-bold uppercase tracking-[0.4em] transition-all">
            Autenticar Acesso
          </Button>
        </form>

        <div className="mt-24 pt-12 border-t border-[#1C1917]/5 text-center">
          <p className="text-[10px] font-light uppercase tracking-[0.3em] text-[#1C1917]/30">
            Deseja integrar nossa curadoria? <span className="text-[#1C1917] font-bold cursor-pointer luxury-underline pb-1">Solicite Convite</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;