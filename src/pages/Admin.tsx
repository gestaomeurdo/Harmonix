"use client";

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import { Plus, Edit2, Trash2, Star, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Professional } from '../types';
import { toast } from 'sonner';

const Admin = () => {
  const { professionals, addProfessional, updateProfessional, deleteProfessional } = useApp();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProf, setEditingProf] = useState<Professional | null>(null);

  const [formData, setFormData] = useState<Partial<Professional>>({
    nome: '', especialidade: '', cidade: '', fotoUrl: '', 
    avaliacao: 5.0, descricao: '', whatsappNumber: '', 
    procedimentos: [], destaque: false
  });

  const handleOpenAdd = () => {
    setEditingProf(null);
    setFormData({
      nome: '', especialidade: '', cidade: '', fotoUrl: '', 
      avaliacao: 5.0, descricao: '', whatsappNumber: '', 
      procedimentos: [], destaque: false
    });
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (prof: Professional) => {
    setEditingProf(prof);
    setFormData(prof);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      id: editingProf ? editingProf.id : Math.random().toString(36).substr(2, 9),
      procedimentos: typeof formData.procedimentos === 'string' 
        ? (formData.procedimentos as string).split(',').map(s => s.trim()) 
        : formData.procedimentos
    } as Professional;

    if (editingProf) {
      updateProfessional(data);
      toast.success('Registro atualizado.');
    } else {
      addProfessional(data);
      toast.success('Novo especialista integrado.');
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <div className="container mx-auto px-12 py-32">
        <div className="flex items-end justify-between mb-24 border-b border-[#1C1917]/5 pb-16">
          <div>
            <h2 className="text-[10px] font-light tracking-[0.5em] text-[#1C1917]/40 uppercase mb-8">
              Curator Dashboard
            </h2>
            <h1 className="text-6xl font-serif text-[#1C1917]">Gestão do Diretório</h1>
          </div>
          
          <Button onClick={handleOpenAdd} className="bg-[#1C1917] hover:bg-black text-[#FDFBF7] rounded-none h-16 px-10 text-[10px] font-bold uppercase tracking-[0.4em] transition-all">
            <Plus size={16} className="mr-3" /> Integrar Especialista
          </Button>
        </div>

        <div className="bg-white editorial-shadow border border-[#1C1917]/5">
          <Table>
            <TableHeader className="bg-[#FDFBF7]">
              <TableRow className="hover:bg-transparent border-b border-[#1C1917]/5">
                <TableHead className="font-serif text-[#1C1917] py-8 px-12 text-lg">Especialista</TableHead>
                <TableHead className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#1C1917]/40">Expertise</TableHead>
                <TableHead className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#1C1917]/40">Localização</TableHead>
                <TableHead className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#1C1917]/40">Status</TableHead>
                <TableHead className="text-right px-12 text-[10px] font-medium uppercase tracking-[0.3em] text-[#1C1917]/40">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {professionals.map((prof) => (
                <TableRow key={prof.id} className="hover:bg-[#FDFBF7]/50 transition-colors border-b border-[#1C1917]/5">
                  <TableCell className="py-8 px-12">
                    <div className="flex items-center gap-6">
                      <img src={prof.fotoUrl} className="h-16 w-12 object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="" />
                      <span className="font-serif text-xl text-[#1C1917]">{prof.nome}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm font-light text-[#1C1917]/60">{prof.especialidade}</TableCell>
                  <TableCell className="text-sm font-light text-[#1C1917]/60">{prof.cidade}</TableCell>
                  <TableCell>
                    {prof.destaque ? (
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#EC4899] bg-[#EC4899]/5 px-3 py-1">Premium</span>
                    ) : (
                      <span className="text-[9px] font-light uppercase tracking-widest text-[#1C1917]/20">Standard</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right px-12">
                    <div className="flex items-center justify-end gap-6">
                      <button onClick={() => handleOpenEdit(prof)} className="text-[#1C1917]/30 hover:text-[#1C1917] transition-colors">
                        <Edit2 size={16} strokeWidth={1.5} />
                      </button>
                      <button onClick={() => { deleteProfessional(prof.id); toast.error('Registro removido.'); }} className="text-[#1C1917]/30 hover:text-red-500 transition-colors">
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* CRUD Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl bg-[#FDFBF7] border-none rounded-none p-16">
          <DialogHeader className="mb-12">
            <DialogTitle className="text-4xl font-serif text-[#1C1917]">
              {editingProf ? 'Editar Registro' : 'Novo Registro'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-3">
                <label className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#1C1917]/30">Nome Completo</label>
                <input 
                  className="w-full pb-2 bg-transparent border-b border-[#1C1917]/10 outline-none font-light focus:border-[#1C1917] transition-all"
                  value={formData.nome} 
                  onChange={e => setFormData({...formData, nome: e.target.value})} 
                  required 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#1C1917]/30">Especialidade</label>
                <input 
                  className="w-full pb-2 bg-transparent border-b border-[#1C1917]/10 outline-none font-light focus:border-[#1C1917] transition-all"
                  value={formData.especialidade} 
                  onChange={e => setFormData({...formData, especialidade: e.target.value})} 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-3">
                <label className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#1C1917]/30">Cidade/UF</label>
                <input 
                  className="w-full pb-2 bg-transparent border-b border-[#1C1917]/10 outline-none font-light focus:border-[#1C1917] transition-all"
                  value={formData.cidade} 
                  onChange={e => setFormData({...formData, cidade: e.target.value})} 
                  required 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#1C1917]/30">WhatsApp Concierge</label>
                <input 
                  className="w-full pb-2 bg-transparent border-b border-[#1C1917]/10 outline-none font-light focus:border-[#1C1917] transition-all"
                  value={formData.whatsappNumber} 
                  onChange={e => setFormData({...formData, whatsappNumber: e.target.value})} 
                  required 
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#1C1917]/30">URL da Fotografia Editorial</label>
              <input 
                className="w-full pb-2 bg-transparent border-b border-[#1C1917]/10 outline-none font-light focus:border-[#1C1917] transition-all"
                value={formData.fotoUrl} 
                onChange={e => setFormData({...formData, fotoUrl: e.target.value})} 
                required 
              />
            </div>

            <div className="space-y-3">
              <label className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#1C1917]/30">Procedimentos (separados por vírgula)</label>
              <input 
                className="w-full pb-2 bg-transparent border-b border-[#1C1917]/10 outline-none font-light focus:border-[#1C1917] transition-all"
                value={Array.isArray(formData.procedimentos) ? formData.procedimentos.join(', ') : formData.procedimentos} 
                onChange={e => setFormData({...formData, procedimentos: e.target.value as any})} 
              />
            </div>

            <div className="space-y-3">
              <label className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#1C1917]/30">Filosofia / Bio</label>
              <textarea 
                className="w-full pb-2 bg-transparent border-b border-[#1C1917]/10 outline-none font-light focus:border-[#1C1917] transition-all h-24 resize-none"
                value={formData.descricao} 
                onChange={e => setFormData({...formData, descricao: e.target.value})} 
              />
            </div>

            <div className="flex items-center gap-4 py-4">
              <input 
                type="checkbox" 
                id="destaque"
                className="h-4 w-4 accent-[#1C1917]"
                checked={formData.destaque} 
                onChange={e => setFormData({...formData, destaque: e.target.checked})} 
              />
              <label htmlFor="destaque" className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#1C1917]">Definir como Membro Premium</label>
            </div>

            <DialogFooter className="pt-12">
              <button type="button" onClick={() => setIsDialogOpen(false)} className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1C1917]/30 mr-12">Cancelar</button>
              <Button type="submit" className="bg-[#1C1917] hover:bg-black text-[#FDFBF7] rounded-none h-16 px-12 text-[10px] font-bold uppercase tracking-[0.4em]">
                {editingProf ? 'Salvar Alterações' : 'Confirmar Integração'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;