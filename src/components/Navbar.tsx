"use client";

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, LogOut, Menu } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './ui/button';

const Navbar = () => {
  const { auth, logout } = useApp();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          {/* Placeholder para o logo image_73e6ac.png */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B2EFF] to-[#A855F7] text-white font-bold text-xl shadow-lg shadow-primary/20">
              H
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-slate-900">Harmonix</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-400 uppercase">Marketplace</span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/profissionais" className="text-sm font-medium text-slate-600 hover:text-[#5B2EFF] transition-colors">
            Profissionais
          </Link>
          {auth.isAuthenticated ? (
            <>
              <Link to="/admin" className="text-sm font-medium text-slate-600 hover:text-[#5B2EFF] transition-colors">
                Painel Admin
              </Link>
              <Button variant="ghost" size="sm" onClick={() => { logout(); navigate('/'); }} className="gap-2 text-slate-600">
                <LogOut size={16} /> Sair
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="outline" size="sm" className="rounded-full border-[#5B2EFF] text-[#5B2EFF] hover:bg-[#5B2EFF] hover:text-white transition-all duration-300">
                Área do Profissional
              </Button>
            </Link>
          )}
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;