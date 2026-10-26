
import { Produto } from "./types";
// fiz algo parecido com um curso que já fiz, mas com algumas alterações, como por exemplo, a adição de validações e mensagens de erro.
// Produtos iniciais do sistema [ dados feitos com auxilio da IA] [caso dê tempo, irei fazer um arquivo externo]
const produtos: Produto[] = [
  { id: 1, nome: "Mouse", categoria: "Informática", preco: 50, estoque: 10 },
  { id: 2, nome: "Teclado", categoria: "Informática", preco: 100, estoque: 8 },
  { id: 3, nome: "Caderno", categoria: "Papelaria", preco: 20, estoque: 15 },
  { id: 4, nome: "Caneta", categoria: "Papelaria", preco: 5, estoque: 30 }
];

// Cadastrar produto
export function cadastrarProduto(produto: Produto): boolean {
  if (buscarProdutoPorId(produto.id)) {
    console.log("Erro: ID já cadastrado.");
    return false;
  }

  if (produto.nome.trim() === "" || produto.categoria.trim() === "") {
    console.log("Erro: nome e categoria são obrigatórios.");
    return false;
  }

  if (produto.preco <= 0) {
    console.log("Erro: o preço deve ser maior que zero.");
    return false;
  }

  if (produto.estoque < 0) {
    console.log("Erro: o estoque não pode ser negativo.");
    return false;
  }

  produtos.push(produto);
  return true;
}

// Listar produtos
export function listarProdutos(): Produto[] {
  return produtos;
}

// Buscar produto por ID
export function buscarProdutoPorId(id: number): Produto | undefined {
  return produtos.find(produto => produto.id === id);
}

// Buscar produtos pelo nome
export function buscarProdutosPorNome(nome: string): Produto[] {
  return produtos.filter(produto =>
    produto.nome.toLowerCase().includes(nome.toLowerCase())
  );
}

// Filtrar por categoria
export function filtrarProdutosPorCategoria(categoria: string): Produto[] {
  return produtos.filter(produto =>
    produto.categoria.toLowerCase() === categoria.toLowerCase()
  );
}

// Atualizar produto
export function atualizarProduto(
  id: number,
  nome: string,
  categoria: string,
  preco: number,
  estoque: number
): boolean {
  const produto = buscarProdutoPorId(id);

  if (!produto) {
    console.log("Erro: produto não encontrado.");
    return false;
  }

  if (nome.trim() === "" || categoria.trim() === "") {
    console.log("Erro: nome e categoria são obrigatórios.");
    return false;
  }

  if (preco <= 0 || estoque < 0) {
    console.log("Erro: preço ou estoque inválido.");
    return false;
  }

  produto.nome = nome;
  produto.categoria = categoria;
  produto.preco = preco;
  produto.estoque = estoque;

  return true;
}

// Remover produto
export function removerProduto(id: number): boolean {
  const indice = produtos.findIndex(produto => produto.id === id);

  if (indice === -1) {
    console.log("Erro: produto não encontrado.");
    return false;
  }

  produtos.splice(indice, 1);
  return true;
}
