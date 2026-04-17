export interface Professional {
  id: string;
  nome: string;
  fotoUrl: string;
  cidade: string;
  especialidade: string;
  procedimentos: string[];
  avaliacao: number;
  descricao: string;
  whatsappNumber: string;
  destaque: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
}