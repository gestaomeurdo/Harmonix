"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Professional, AuthState } from '../types';
import { supabase } from '../integrations/supabase/client';
import { toast } from 'sonner';

interface AppContextType {
  professionals: Professional[];
  loading: boolean;
  refreshProfessionals: () => Promise<void>;
  addProfessional: (p: Omit<Professional, 'id'>) => Promise<void>;
  updateProfessional: (p: Professional) => Promise<void>;
  deleteProfessional: (id: string) => Promise<void>;
  auth: AuthState;
  logout: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState<AuthState>({ isAuthenticated: false, user: null });

  const refreshProfessionals = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('professionals')
        .select('*')
        .order('destaque', { ascending: false });
      
      if (error) {
        console.error('Erro Supabase:', error);
        toast.error(`Erro ao carregar profissionais: ${error.message}`);
      } else {
        const mappedData = (data || []).map(p => ({
          id: p.id,
          nome: p.nome,
          fotoUrl: p.foto_url,
          cidade: p.cidade,
          especialidade: p.especialidade,
          procedimentos: p.procedimentos,
          avaliacao: Number(p.avaliacao),
          descricao: p.descricao,
          whatsappNumber: p.whatsapp_number,
          destaque: p.destaque,
          formacoes: p.formacoes || [],
          enderecoCompleto: p.endereco_completo,
          galeriaResultados: p.galeria_resultados || []
        }));
        setProfessionals(mappedData);
      }
    } catch (err) {
      console.error('Erro inesperado:', err);
      toast.error('Ocorreu um erro inesperado ao carregar os dados.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshProfessionals();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setAuth({ isAuthenticated: true, user: session.user.email || 'User' });
      } else {
        setAuth({ isAuthenticated: false, user: null });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const addProfessional = async (p: Omit<Professional, 'id'>) => {
    const { error } = await supabase.from('professionals').insert([{
      nome: p.nome,
      foto_url: p.fotoUrl,
      cidade: p.cidade,
      especialidade: p.especialidade,
      procedimentos: p.procedimentos,
      avaliacao: p.avaliacao,
      descricao: p.descricao,
      whatsapp_number: p.whatsappNumber,
      destaque: p.destaque,
      formacoes: p.formacoes,
      endereco_completo: p.enderecoCompleto,
      galeria_resultados: p.galeriaResultados
    }]);

    if (error) throw error;
    await refreshProfessionals();
  };
  
  const updateProfessional = async (p: Professional) => {
    const { error } = await supabase.from('professionals').update({
      nome: p.nome,
      foto_url: p.fotoUrl,
      cidade: p.cidade,
      especialidade: p.especialidade,
      procedimentos: p.procedimentos,
      avaliacao: p.avaliacao,
      descricao: p.descricao,
      whatsapp_number: p.whatsappNumber,
      destaque: p.destaque,
      formacoes: p.formacoes,
      endereco_completo: p.enderecoCompleto,
      galeria_resultados: p.galeriaResultados
    }).eq('id', p.id);

    if (error) throw error;
    await refreshProfessionals();
  };

  const deleteProfessional = async (id: string) => {
    const { error } = await supabase.from('professionals').delete().eq('id', id);
    if (error) throw error;
    await refreshProfessionals();
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AppContext.Provider value={{ 
      professionals, loading, refreshProfessionals, addProfessional, updateProfessional, deleteProfessional,
      auth, logout 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};