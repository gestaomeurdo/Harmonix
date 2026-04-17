"use client";

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Menu } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './ui/button';

const Navbar = () => {
  const { auth, logout } = useApp();
  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#FDFBF7]/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#1C1917]/5">
      <div className="container mx-auto px-12 h-28 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-12 flex-1">
          <Link to="/profissionais" className="text-[11px] font-light text-[#1C1917] hover:opacity-60 transition-opacity tracking-[0.2em] uppercase luxury-underline pb-1">
            Diretório
          </Link>
          <Link to="/" className="text-[11px] font-light text-[#1C1917] hover:opacity-60 transition-opacity tracking-[0.2em] uppercase luxury-underline pb-1">
            Curadoria
          </Link>
        </nav>

        <Link to="/" className="flex flex-col items-center gap-1 flex-1">
          <span className="text-3xl font-serif tracking-tighter text-[#1C1917]">Harmonix</span>
          <span className="text-[8px] font-light tracking-[0.5em] text-[#1C1917]/40 uppercase">Elite Marketplace</span>
        </Link>

        <div className="flex items-center justify-end gap-8 flex-1">
          {auth.isAuthenticated ? (
            <div className="flex items-center gap-6">
              <Link to="/admin" className="text-[11px] font-light tracking-[0.2em] uppercase">
                Painel
              </Link>
              <button onClick={() => { logout(); navigate('/'); }} className="text-[#1C1917]/40 hover:text-red-500 transition-colors">
                <LogOut size={16} strokeWidth={1.5} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-[11px] font-medium text-[#1C1917] tracking-[0.2em] uppercase luxury-underline pb-1">
              Membro
            </Link>
          )}
          <div className="md:hidden">
            <Menu size={20} strokeWidth={1} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;