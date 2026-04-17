"use client";

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Menu, User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './ui/button';

const Navbar = () => {
  const { auth, logout } = useApp();
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-50">
      <div className="container mx-auto px-8 h-24 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-10 flex-1">
          <Link to="/profissionais" className="text-[13px] font-medium text-slate-500 hover:text-[#5B2EFF] transition-colors tracking-wide uppercase">
            Explorar
          </Link>
          <Link to="/" className="text-[13px] font-medium text-slate-500 hover:text-[#5B2EFF] transition-colors tracking-wide uppercase">
            Procedimentos
          </Link>
        </nav>

        <Link to="/" className="flex flex-col items-center gap-1 flex-1">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#5B2EFF] to-[#A855F7] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">
              H
            </div>
            <span className="text-2xl font-bold tracking-tighter text-[#1A1A1A]">Harmonix</span>
          </div>
          <span className="text-[9px] font-bold tracking-[0.3em] text-slate-400 uppercase ml-11">Marketplace</span>
        </Link>

        <div className="flex items-center justify-end gap-6 flex-1">
          {auth.isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link to="/admin" className="text-[13px] font-medium text-slate-500 hover:text-[#5B2EFF] transition-colors uppercase">
                Painel
              </Link>
              <Button variant="ghost" size="sm" onClick={() => { logout(); navigate('/'); }} className="text-slate-400 hover:text-red-500">
                <LogOut size={18} />
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="ghost" className="rounded-full text-[13px] font-bold text-[#5B2EFF] hover:bg-[#5B2EFF]/5 px-6 uppercase tracking-wider">
                Sou Profissional
              </Button>
            </Link>
          )}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;