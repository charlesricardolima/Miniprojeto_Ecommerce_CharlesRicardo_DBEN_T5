
export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  estoque: number;
}

export interface Cliente {
  id: number;
  nome: string;
  email: string;
}

export interface ItemCarrinho {
  produtoId: number;
  quantidade: number;
}

export interface ItemPedido {
  produtoId: number;
  nome: string;
  quantidade: number;
  precoUnitario: number;
}

export interface Pedido {
  id: number;
  clienteId: number;
  itens: ItemPedido[];
  total: number;
  data: Date;
}
