"use client";

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, Menu, User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './ui/button';

const Navbar = () => {
  const { auth, logout } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-[#FDFBF7]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100/50">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-[#1A1A1A] rounded-2xl flex items-center justify-center text-white font-bold text-xl transition-all duration-500 group-hover:bg-[#5B2EFF] group-hover:rotate-6">
            H
          </div>
          <span className="text-2xl font-light tracking-tighter text-[#1A1A1A]">Harmonix</span>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          <Link 
            to="/explorar" 
            className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${isActive('/explorar') ? 'text-[#5B2EFF]' : 'text-gray-400 hover:text-[#1A1A1A]'}`}
          >
            Explorar Profissionais
          </Link>
          <Link 
            to="/como-funciona" 
            className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${isActive('/como-funciona') ? 'text-[#5B2EFF]' : 'text-gray-400 hover:text-[#1A1A1A]'}`}
          >
            Como Funciona
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          {auth.isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link to="/admin">
                <Button variant="ghost" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-100 rounded-full px-6">Painel Admin</Button>
              </Link>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-gray-200 hover:bg-red-50 hover:text-red-500 transition-all"
                onClick={() => { logout(); navigate('/'); }}
              >
                <LogOut size={18} />
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button className="bg-[#1A1A1A] hover:bg-[#5B2EFF] text-white rounded-full px-8 h-12 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-black/5">
                Área do Profissional
              </Button>
            </Link>
          )}
          <div className="md:hidden">
            <Menu size={24} className="text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;