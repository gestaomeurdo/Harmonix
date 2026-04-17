"use client";

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      toast.success('Login realizado com sucesso!');
      navigate('/admin');
    } else {
      toast.error('Credenciais inválidas. Tente admin@harmonix.com / 123456');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#5B2EFF] mb-8 transition-colors font-medium">
          <ArrowLeft size={18} />
          Voltar para o site
        </Link>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200 border border-slate-100">
          <div className="text-center mb-10">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B2EFF] to-[#A855F7] text-white font-bold text-3xl shadow-lg shadow-primary/20 mb-6">
              H
            </div>
            <h1 className="text-3xl font-black text-slate-900">Área do Profissional</h1>
            <p className="text-slate-500 mt-2">Gerencie seu perfil e visibilidade no marketplace.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <Input 
                  id="email"
                  type="email" 
                  placeholder="admin@harmonix.com" 
                  className="pl-10 h-12 rounded-xl border-slate-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <Input 
                  id="password"
                  type="password" 
                  placeholder="••••••" 
                  className="pl-10 h-12 rounded-xl border-slate-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full h-14 bg-[#5B2EFF] hover:bg-[#4a25d1] text-white rounded-xl text-lg font-bold shadow-lg shadow-primary/20 transition-all">
              Entrar no Painel
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-50 text-center">
            <p className="text-sm text-slate-400">
              Ainda não faz parte? <span className="text-[#5B2EFF] font-bold cursor-pointer">Cadastre sua clínica</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;