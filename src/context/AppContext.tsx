"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Professional, AuthState } from '../types';

interface AppContextType {
  professionals: Professional[];
  addProfessional: (p: Professional) => void;
  updateProfessional: (p: Professional) => void;
  deleteProfessional: (id: string) => void;
  auth: AuthState;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const MOCK_PROFESSIONALS: Professional[] = [
  {
    id: '1',
    nome: 'Dra. Ana Silveira',
    fotoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    cidade: 'São Paulo, SP',
    especialidade: 'Dermatologista',
    procedimentos: ['Botox', 'Preenchimento Labial', 'Bioestimuladores'],
    avaliacao: 4.9,
    descricao: 'Especialista em rejuvenescimento facial natural com mais de 10 anos de experiência.',
    whatsappNumber: '5511999999999',
    destaque: true
  },
  {
    id: '2',
    nome: 'Dr. Marcos Oliveira',
    fotoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    cidade: 'Rio de Janeiro, RJ',
    especialidade: 'Cirurgião Dentista',
    procedimentos: ['Rinomodelação', 'Lipo de Papada', 'Fios de Sustentação'],
    avaliacao: 4.8,
    descricao: 'Focado em harmonização orofacial e estética avançada.',
    whatsappNumber: '5521988888888',
    destaque: true
  },
  {
    id: '3',
    nome: 'Dra. Beatriz Costa',
    fotoUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    cidade: 'Belo Horizonte, MG',
    especialidade: 'Biomédica Esteta',
    procedimentos: ['Peeling Químico', 'Microagulhamento', 'Botox'],
    avaliacao: 4.7,
    descricao: 'Especialista em saúde estética e procedimentos minimamente invasivos.',
    whatsappNumber: '5531977777777',
    destaque: false
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [professionals, setProfessionals] = useState<Professional[]>(() => {
    const saved = localStorage.getItem('harmonix_professionals');
    return saved ? JSON.parse(saved) : MOCK_PROFESSIONALS;
  });

  const [auth, setAuth] = useState<AuthState>(() => {
    const isAuth = localStorage.getItem('harmonix_auth') === 'true';
    return { isAuthenticated: isAuth, user: isAuth ? 'Admin' : null };
  });

  useEffect(() => {
    localStorage.setItem('harmonix_professionals', JSON.stringify(professionals));
  }, [professionals]);

  const addProfessional = (p: Professional) => setProfessionals([...professionals, p]);
  
  const updateProfessional = (p: Professional) => {
    setProfessionals(professionals.map(item => item.id === p.id ? p : item));
  };

  const deleteProfessional = (id: string) => {
    setProfessionals(professionals.filter(p => p.id !== id));
  };

  const login = (email: string, pass: string) => {
    if (email === 'admin@harmonix.com' && pass === '123456') {
      setAuth({ isAuthenticated: true, user: 'Admin' });
      localStorage.setItem('harmonix_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, user: null });
    localStorage.removeItem('harmonix_auth');
  };

  return (
    <AppContext.Provider value={{ 
      professionals, addProfessional, updateProfessional, deleteProfessional,
      auth, login, logout 
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