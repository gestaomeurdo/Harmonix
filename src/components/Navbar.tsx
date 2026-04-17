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
    <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">Harmonix</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/profissionais" className="text-sm font-medium text-[#4D4D4D] hover:text-[#5B2EFF] transition-colors">
            Explorar Profissionais
          </Link>
          <Link to="/" className="text-sm font-medium text-[#4D4D4D] hover:text-[#5B2EFF] transition-colors">
            Como Funciona
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {auth.isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link to="/admin">
                <Button variant="ghost" className="rounded-full text-sm font-medium">Painel Admin</Button>
              </Link>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-gray-200"
                onClick={() => { logout(); navigate('/'); }}
              >
                <LogOut size={18} className="text-gray-500" />
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button className="bg-brand-gradient hover:opacity-90 text-white rounded-full px-6 font-medium shadow-lg shadow-purple-200 transition-all">
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