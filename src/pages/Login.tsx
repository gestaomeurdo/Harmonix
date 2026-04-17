"use client";

import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../integrations/supabase/client';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
  const { auth } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/admin');
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] p-6 md:p-12">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-4 text-[#1C1917]/30 hover:text-[#1C1917] mb-12 transition-colors text-[10px] font-medium uppercase tracking-[0.4em]">
          <ArrowLeft size={14} strokeWidth={1} />
          Retornar ao Início
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white font-bold text-3xl mb-8 shadow-lg shadow-purple-100">
            H
          </div>
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4 tracking-tight">Área do Profissional</h1>
          <p className="text-gray-500 font-medium">Acesse seu painel para gerenciar seu perfil na Harmonix.</p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-purple-50 border border-gray-50">
          <Auth
            supabaseClient={supabase}
            providers={[]}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#5B2EFF',
                    brandAccent: '#A855F7',
                  },
                  radii: {
                    buttonRadius: '1rem',
                    inputRadius: '1rem',
                  }
                }
              }
            }}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'E-mail',
                  password_label: 'Senha',
                  button_label: 'Entrar',
                  loading_button_label: 'Entrando...',
                  link_text: 'Já tem uma conta? Entre'
                },
                sign_up: {
                  email_label: 'E-mail',
                  password_label: 'Senha',
                  button_label: 'Cadastrar',
                  loading_button_label: 'Cadastrando...',
                  link_text: 'Não tem uma conta? Cadastre-se'
                }
              }
            }}
            theme="light"
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
            Suporte ao Membro: <span className="text-[#5B2EFF] cursor-pointer">ajuda@harmonix.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;