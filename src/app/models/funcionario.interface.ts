import { Avaliacao } from './avaliacoes';
import { Atividade } from './monitoramento.interface';
import { Atendimento } from './atendimento.interface';

export interface Funcionario {
  _id?: string;
  criado_em: string;
  atualizado_em: string;
  nome: string;
  endereco: EnderecoFuncionario;
  cpf: string;
  rg: string;
  data_nasc: string;
  habilitacao: Habilitacao;
  foto_url: string;
  contato: ContatoFuncionario;
  login: Login;
  atendimentos?: Atendimento[];
  atendimentos_hoje?: Atendimento[];
  concluido: Atendimento[];
  media: number;
  estado: Estado;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
  ativo: boolean;
  atividades: Atividade[];
  avaliacao?: Avaliacao;
}

interface Login {
  tipo: string[];
  username: string;
  password: string;
}

interface Estado {
  tipo: string;
  estado: string;
}

interface Habilitacao {
  numero: string;
  validade: string;
}

export interface ContatoFuncionario {
  _id: string;
  nome: string;
  email: string;
  telefone: string;
  celular: string;
  observacao: string;
}

interface EnderecoFuncionario {
  _id: string;
  rua: string;
  numero: string;
  bairro: string;
  uf: string;
  cidade: string;
  cep: string;
  ponto_referencia: string;
  complemento: string;
}
