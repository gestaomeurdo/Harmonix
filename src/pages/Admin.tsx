"use client";

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import { Plus, Edit2, Trash2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Professional } from '../types';
import { toast } from 'sonner';

const Admin = () => {
  const { professionals, loading, addProfessional, updateProfessional, deleteProfessional } = useApp();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const procedures = typeof formData.procedimentos === 'string' 
        ? (formData.procedimentos as string).split(',').map(s => s.trim()).filter(s => s !== '') 
        : formData.procedimentos;

      const data = {
        ...formData,
        procedimentos: procedures
      } as Professional;

      if (editingProf) {
        await updateProfessional({ ...data, id: editingProf.id });
        toast.success('Registro atualizado com sucesso.');
      } else {
        await addProfessional(data);
        toast.success('Novo especialista integrado à rede.');
      }
      setIsDialogOpen(false);
    } catch (error) {
      toast.error('Erro ao salvar dados. Tente novamente.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja remover este especialista?')) {
      try {
        await deleteProfessional(id);
        toast.success('Registro removido.');
      } catch (error) {
        toast.error('Erro ao remover registro.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] text-[#A855F7] uppercase mb-4">
              Painel de Controle
            </h2>
            <h1 className="text-4xl font-bold text-[#1A1A1A]">Gestão do Diretório</h1>
          </div>
          
          <Button onClick={handleOpenAdd} className="bg-brand-gradient hover:opacity-90 text-white rounded-2xl h-14 px-8 font-bold shadow-lg shadow-purple-100 transition-all">
            <Plus size={20} className="mr-2" /> Adicionar Especialista
          </Button>
        </div>

        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-purple-50/50 overflow-hidden">
          {loading ? (
            <div className="py-32 flex flex-col items-center justify-center text-gray-400 gap-4">
              <Loader2 className="animate-spin" size={32} />
              <p className="font-medium">Sincronizando dados...</p>
            </div>
          ) : (
            <Table>
              <TableHeader className="bg-gray-50/50">
                <TableRow className="hover:bg-transparent border-b border-gray-100">
                  <TableHead className="font-bold text-[#1A1A1A] py-6 px-8">Especialista</TableHead>
                  <TableHead className="font-bold text-[#1A1A1A]">Expertise</TableHead>
                  <TableHead className="font-bold text-[#1A1A1A]">Localização</TableHead>
                  <TableHead className="font-bold text-[#1A1A1A]">Status</TableHead>
                  <TableHead className="text-right px-8 font-bold text-[#1A1A1A]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {professionals.map((prof) => (
                  <TableRow key={prof.id} className="hover:bg-gray-50/30 transition-colors border-b border-gray-50">
                    <TableCell className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <img src={prof.fotoUrl} className="h-12 w-12 rounded-xl object-cover shadow-sm" alt="" />
                        <span className="font-bold text-[#1A1A1A]">{prof.nome}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm font-medium text-gray-500">{prof.especialidade}</TableCell>
                    <TableCell className="text-sm font-medium text-gray-500">{prof.cidade}</TableCell>
                    <TableCell>
                      {prof.destaque ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A855F7] bg-purple-50 px-3 py-1 rounded-full">Premium</span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300 bg-gray-50 px-3 py-1 rounded-full">Standard</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right px-8">
                      <div className="flex items-center justify-end gap-4">
                        <button onClick={() => handleOpenEdit(prof)} className="p-2 text-gray-400 hover:text-[#5B2EFF] hover:bg-purple-50 rounded-xl transition-all">
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => handleDelete(prof.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {professionals.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="py-20 text-center text-gray-400 font-medium">
                      Nenhum especialista cadastrado no momento.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </div>

      {/* CRUD Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl bg-white rounded-[2.5rem] p-10 border-none shadow-2xl">
          <DialogHeader className="mb-8">
            <DialogTitle className="text-3xl font-bold text-[#1A1A1A]">
              {editingProf ? 'Editar Especialista' : 'Novo Especialista'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Nome Completo</label>
                <input 
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none outline-none font-medium focus:ring-2 ring-purple-100 transition-all"
                  value={formData.nome} 
                  onChange={e => setFormData({...formData, nome: e.target.value})} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Especialidade</label>
                <input 
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none outline-none font-medium focus:ring-2 ring-purple-100 transition-all"
                  value={formData.especialidade} 
                  onChange={e => setFormData({...formData, especialidade: e.target.value})} 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Cidade/UF</label>
                <input 
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none outline-none font-medium focus:ring-2 ring-purple-100 transition-all"
                  value={formData.cidade} 
                  onChange={e => setFormData({...formData, cidade: e.target.value})} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">WhatsApp (DDI+DDD+Número)</label>
                <input 
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none outline-none font-medium focus:ring-2 ring-purple-100 transition-all"
                  value={formData.whatsappNumber} 
                  onChange={e => setFormData({...formData, whatsappNumber: e.target.value})} 
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">URL da Foto de Perfil</label>
              <input 
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none outline-none font-medium focus:ring-2 ring-purple-100 transition-all"
                value={formData.fotoUrl} 
                onChange={e => setFormData({...formData, fotoUrl: e.target.value})} 
                required 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Procedimentos (separados por vírgula)</label>
              <input 
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none outline-none font-medium focus:ring-2 ring-purple-100 transition-all"
                value={Array.isArray(formData.procedimentos) ? formData.procedimentos.join(', ') : formData.procedimentos} 
                onChange={e => setFormData({...formData, procedimentos: e.target.value as any})} 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Descrição / Bio Profissional</label>
              <textarea 
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none outline-none font-medium focus:ring-2 ring-purple-100 transition-all h-24 resize-none"
                value={formData.descricao} 
                onChange={e => setFormData({...formData, descricao: e.target.value})} 
              />
            </div>

            <div className="flex items-center gap-3 py-2">
              <input 
                type="checkbox" 
                id="destaque"
                className="h-5 w-5 rounded-lg accent-[#5B2EFF]"
                checked={formData.destaque} 
                onChange={e => setFormData({...formData, destaque: e.target.checked})} 
              />
              <label htmlFor="destaque" className="text-sm font-bold text-[#1A1A1A]">Definir como Membro Premium</label>
            </div>

            <DialogFooter className="pt-6 gap-4">
              <button 
                type="button" 
                onClick={() => setIsDialogOpen(false)} 
                className="px-8 py-4 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
              >
                Cancelar
              </button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-brand-gradient hover:opacity-90 text-white rounded-2xl h-14 px-10 font-bold shadow-lg shadow-purple-100"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : (editingProf ? 'Salvar Alterações' : 'Confirmar Cadastro')}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;