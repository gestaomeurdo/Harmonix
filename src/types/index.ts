export interface SuccessCase {
  titulo: string;
  antes: string;
  depois: string;
}

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
  formacoes?: string[];
  enderecoCompleto?: string;
  galeriaResultados?: SuccessCase[];
}

export interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
}