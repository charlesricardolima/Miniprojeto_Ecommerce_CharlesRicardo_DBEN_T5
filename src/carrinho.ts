
import { ItemCarrinho } from "./types";
import { buscarProdutoPorId } from "./produtos";

// Itens adicionados ao carrinho
const carrinho: ItemCarrinho[] = [];

// Adicionar produto ao carrinho
export function adicionarAoCarrinho(
  produtoId: number,
  quantidade: number
): boolean {
  const produto = buscarProdutoPorId(produtoId);

  if (!produto) {
    console.log("Erro: produto não encontrado.");
    return false;
  }

  if (!Number.isInteger(quantidade) || quantidade <= 0) {
    console.log("Erro: quantidade inválida.");
    return false;
  }

  const item = carrinho.find(
    item => item.produtoId === produtoId
  );

  let quantidadeTotal = quantidade;

  if (item) {
    quantidadeTotal += item.quantidade;
  }

  if (quantidadeTotal > produto.estoque) {
    console.log("Erro: estoque insuficiente.");
    return false;
  }

  if (item) {
    item.quantidade = quantidadeTotal;
  } else {
    carrinho.push({ produtoId, quantidade });
  }

  return true;
}

// Remover produto do carrinho
export function removerDoCarrinho(produtoId: number): boolean {
  const indice = carrinho.findIndex(
    item => item.produtoId === produtoId
  );

  if (indice === -1) {
    console.log("Erro: produto não está no carrinho.");
    return false;
  }

  carrinho.splice(indice, 1);
  return true;
}

// Alterar quantidade de um produto
export function alterarQuantidade(
  produtoId: number,
  quantidade: number
): boolean {
  const item = carrinho.find(
    item => item.produtoId === produtoId
  );

  if (!item) {
    console.log("Erro: produto não está no carrinho.");
    return false;
  }

  if (!Number.isInteger(quantidade) || quantidade <= 0) {
    console.log("Erro: quantidade inválida.");
    return false;
  }

  const produto = buscarProdutoPorId(produtoId);

  if (!produto) {
    console.log("Erro: produto não encontrado.");
    return false;
  }

  if (quantidade > produto.estoque) {
    console.log("Erro: estoque insuficiente.");
    return false;
  }

  item.quantidade = quantidade;
  return true;
}

// Listar itens do carrinho
export function listarCarrinho(): ItemCarrinho[] {
  return carrinho;
}

// Calcular subtotal de um item
export function calcularSubtotal(item: ItemCarrinho): number {
  const produto = buscarProdutoPorId(item.produtoId);

  if (!produto) {
    console.log("Erro: produto não encontrado.");
    return 0;
  }

  return produto.preco * item.quantidade;
}

// Calcular total do carrinho
export function calcularTotal(): number {
  let total = 0;

  for (const item of carrinho) {
    total += calcularSubtotal(item);
  }

  return total;
}

// Limpar carrinho
export function limparCarrinho(): void {
  carrinho.length = 0;
}
