
import { listarPedidos, buscarPedidosPorCliente } from "./pedidos";

// Relatório geral das vendas
export function exibirRelatorioGeral(): void {
  const pedidos = listarPedidos();

  let faturamento = 0;
  let produtosVendidos = 0;

  for (const pedido of pedidos) {
    faturamento += pedido.total;

    for (const item of pedido.itens) {
      produtosVendidos += item.quantidade;
    }
  }

  console.log("\n===== RELATÓRIO GERAL =====");
  console.log("Total de pedidos:", pedidos.length);
  console.log("Produtos vendidos:", produtosVendidos);
  console.log("Faturamento: R$", faturamento.toFixed(2));
}

// Relatório de vendas por cliente
export function exibirRelatorioCliente(clienteId: number): void {
  const pedidos = buscarPedidosPorCliente(clienteId);
  let total = 0;

  for (const pedido of pedidos) {
    total += pedido.total;
  }

  console.log("\n===== RELATÓRIO DO CLIENTE =====");
  console.log("Cliente ID:", clienteId);
  console.log("Quantidade de pedidos:", pedidos.length);
  console.log("Total comprado: R$", total.toFixed(2));
}
