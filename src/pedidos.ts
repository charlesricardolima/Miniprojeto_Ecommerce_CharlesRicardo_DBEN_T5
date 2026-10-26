
import { Pedido, ItemPedido, Produto } from "./types";
import { buscarClientePorId } from "./clientes";
import { buscarProdutoPorId } from "./produtos";
import { listarCarrinho, limparCarrinho } from "./carrinho";

// Pedidos registrados
const pedidos: Pedido[] = [];

// Finalizar uma compra
export function finalizarPedido(clienteId: number): Pedido | undefined {

  const cliente = buscarClientePorId(clienteId);

  if (!cliente) {
    console.log("Erro: cliente não encontrado.");
    return undefined;
  }

  const carrinho = listarCarrinho();

  if (carrinho.length === 0) {
    console.log("Erro: carrinho vazio.");
    return undefined;
  }

  const itensPedido: ItemPedido[] = [];
  const produtosValidados: Produto[] = [];
  let total = 0;

  // Verificar todos os itens antes de finalizar
  for (const item of carrinho) {
    const produto = buscarProdutoPorId(item.produtoId);

    if (!produto) {
      console.log("Erro: produto não encontrado.");
      return undefined;
    }

    if (!Number.isInteger(item.quantidade) || item.quantidade <= 0) {
      console.log("Erro: quantidade inválida.");
      return undefined;
    }

    if (item.quantidade > produto.estoque) {
      console.log("Erro: estoque insuficiente.");
      return undefined;
    }

    itensPedido.push({
      produtoId: produto.id,
      nome: produto.nome,
      quantidade: item.quantidade,
      precoUnitario: produto.preco
    });

    produtosValidados.push(produto);
    total += produto.preco * item.quantidade;
  }

  // Criar o pedido após todas as validações
  const pedido: Pedido = {
    id: pedidos.length + 1,
    clienteId: clienteId,
    itens: itensPedido,
    total: total,
    data: new Date()
  };

  // Atualizar o estoque dos produtos
  for (let i = 0; i < produtosValidados.length; i++) {
    produtosValidados[i].estoque -= itensPedido[i].quantidade;
  }

  pedidos.push(pedido);
  limparCarrinho();

  console.log("Pedido finalizado com sucesso!");
  return pedido;
}

// Listar todos os pedidos
export function listarPedidos(): Pedido[] {
  return pedidos;
}

// Consultar pedidos de um cliente
export function buscarPedidosPorCliente(clienteId: number): Pedido[] {
  return pedidos.filter(pedido => pedido.clienteId === clienteId);
}
