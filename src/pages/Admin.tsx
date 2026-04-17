"use client";

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import { Plus, Edit2, Trash2, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Professional } from '../types';
import { toast } from 'sonner';

const Admin = () => {
  const { professionals, addProfessional, updateProfessional, deleteProfessional } = useApp();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProf, setEditingProf] = useState<Professional | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<Professional>>({
    nome: '',
    especialidade: '',
    cidade: '',
    fotoUrl: '',
    avaliacao: 5.0,
    descricao: '',
    whatsappNumber: '',
    procedimentos: [],
    destaque: false
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
      toast.success('Profissional atualizado!');
    } else {
      addProfessional(data);
      toast.success('Profissional adicionado!');
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Gerenciar Diretório</h1>
            <p className="text-slate-500">Adicione ou edite os profissionais da plataforma.</p>
          </div>
          
          <Button onClick={handleOpenAdd} className="bg-[#5B2EFF] hover:bg-[#4a25d1] text-white rounded-xl gap-2 h-12 px-6 font-bold shadow-lg shadow-primary/20">
            <Plus size={20} /> Novo Profissional
          </Button>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="font-bold py-6 px-8">Profissional</TableHead>
                <TableHead className="font-bold">Especialidade</TableHead>
                <TableHead className="font-bold">Cidade</TableHead>
                <TableHead className="font-bold">Avaliação</TableHead>
                <TableHead className="font-bold">Destaque</TableHead>
                <TableHead className="text-right font-bold px-8">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {professionals.map((prof) => (
                <TableRow key={prof.id} className="hover:bg-slate-50/30 transition-colors">
                  <TableCell className="py-4 px-8">
                    <div className="flex items-center gap-4">
                      <img src={prof.fotoUrl} className="h-12 w-12 rounded-xl object-cover" alt="" />
                      <span className="font-bold text-slate-900">{prof.nome}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600">{prof.especialidade}</TableCell>
                  <TableCell className="text-slate-600">{prof.cidade}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 font-bold text-slate-900">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      {prof.avaliacao}
                    </div>
                  </TableCell>
                  <TableCell>
                    {prof.destaque ? (
                      <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <Check size={14} />
                      </div>
                    ) : (
                      <span className="text-slate-300">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right px-8">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleOpenEdit(prof)} className="text-slate-400 hover:text-[#5B2EFF] hover:bg-[#5B2EFF]/5">
                        <Edit2 size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => { deleteProfessional(prof.id); toast.error('Profissional removido'); }} className="text-slate-400 hover:text-red-500 hover:bg-red-50">
                        <Trash2 size={18} />
                      </Button>
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
        <DialogContent className="max-w-2xl rounded-[2rem] p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">
              {editingProf ? 'Editar Profissional' : 'Novo Profissional'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nome Completo</Label>
                <Input value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} required />
              </div>
              <div className="space-y-2">
                <Label>Especialidade</Label>
                <Input value={formData.especialidade} onChange={e => setFormData({...formData, especialidade: e.target.value})} required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Cidade/UF</Label>
                <Input value={formData.cidade} onChange={e => setFormData({...formData, cidade: e.target.value})} required />
              </div>
              <div className="space-y-2">
                <Label>WhatsApp (com DDD)</Label>
                <Input value={formData.whatsappNumber} onChange={e => setFormData({...formData, whatsappNumber: e.target.value})} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label>URL da Foto</Label>
              <Input value={formData.fotoUrl} onChange={e => setFormData({...formData, fotoUrl: e.target.value})} required />
            </div>

            <div className="space-y-2">
              <Label>Procedimentos (separados por vírgula)</Label>
              <Input 
                value={Array.isArray(formData.procedimentos) ? formData.procedimentos.join(', ') : formData.procedimentos} 
                onChange={e => setFormData({...formData, procedimentos: e.target.value as any})} 
                placeholder="Botox, Preenchimento, etc"
              />
            </div>

            <div className="space-y-2">
              <Label>Descrição/Bio</Label>
              <Textarea value={formData.descricao} onChange={e => setFormData({...formData, descricao: e.target.value})} className="h-24" />
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
              <div className="space-y-0.5">
                <Label>Destaque na Home</Label>
                <p className="text-xs text-slate-500">Aparecerá na seção principal da página inicial.</p>
              </div>
              <Switch checked={formData.destaque} onCheckedChange={val => setFormData({...formData, destaque: val})} />
            </div>

            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
              <Button type="submit" className="bg-[#5B2EFF] hover:bg-[#4a25d1] text-white px-8 font-bold">
                {editingProf ? 'Salvar Alterações' : 'Criar Profissional'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;