import {
  exibirRelatorioGeral,
  exibirRelatorioCliente
} from "./relatorios";

import {
  finalizarPedido,
  listarPedidos,
  buscarPedidosPorCliente
} from "./pedidos";

import {
  adicionarAoCarrinho,
  removerDoCarrinho,
  alterarQuantidade,
  listarCarrinho,
  calcularSubtotal,
  calcularTotal
} from "./carrinho";

import {
  cadastrarCliente,
  listarClientes,
  buscarClientePorId
} from "./clientes";

import {
  cadastrarProduto,
  listarProdutos,
  buscarProdutoPorId,
  buscarProdutosPorNome,
  filtrarProdutosPorCategoria,
  atualizarProduto,
  removerProduto
} from "./produtos";

console.log("==================================");
console.log("  MINI-PROJETO E-COMMERCE");
console.log("  Curso: Desenvolvedor Back-End Node");
console.log("  Turma: T5 | DBEN-T5");
console.log("==================================");

console.log("\n1. LISTAGEM DE PRODUTOS");
console.table(listarProdutos());

console.log("\n2. BUSCA POR ID");
console.log(buscarProdutoPorId(1));

console.log("\n3. BUSCA POR NOME");
console.table(buscarProdutosPorNome("mouse"));

console.log("\n4. FILTRO POR CATEGORIA");
console.table(filtrarProdutosPorCategoria("Papelaria"));

console.log("\n5. CADASTRO DE PRODUTO");
const cadastrado = cadastrarProduto({
  id: 5,
  nome: "Monitor",
  categoria: "Informática",
  preco: 800,
  estoque: 5
});
console.log("Cadastro realizado:", cadastrado);

console.log("\n6. ATUALIZAÇÃO DE PRODUTO");
const atualizado = atualizarProduto(
  5, "Monitor LED", "Informática", 750, 6
);
console.log("Atualização realizada:", atualizado);
console.log(buscarProdutoPorId(5));

console.log("\n7. REMOÇÃO DE PRODUTO");
const removido = removerProduto(5);
console.log("Remoção realizada:", removido);

console.log("\n8. TESTE DE PREÇO NEGATIVO");
const invalido = cadastrarProduto({
  id: 6,
  nome: "Produto Teste",
  categoria: "Informática",
  preco: -10,
  estoque: 5
});
console.log("Cadastro realizado:", invalido);

console.log("\n9. LISTAGEM FINAL");
console.table(listarProdutos());



console.log("\n========== CLIENTES ==========");

console.log("\n1. LISTAGEM DE CLIENTES");
console.table(listarClientes());

console.log("\n2. BUSCA DE CLIENTE POR ID");
console.log(buscarClientePorId(1));

console.log("\n3. CADASTRO DE CLIENTE");
const novoCliente = cadastrarCliente({
  id: 4,
  nome: "Carlos Souza",
  email: "carlos@email.com"
});
console.log("Cadastro realizado:", novoCliente);

console.log("\n4. TESTE DE E-MAIL DUPLICADO");
const clienteDuplicado = cadastrarCliente({
  id: 5,
  nome: "Pedro Lima",
  email: "ana@email.com"
});
console.log("Cadastro realizado:", clienteDuplicado);

console.log("\n5. LISTAGEM FINAL DE CLIENTES");
console.table(listarClientes());



console.log("\n========== CARRINHO ==========");

// Adicionar produtos
console.log("\n1. ADICIONAR PRODUTOS");
console.log("Mouse:", adicionarAoCarrinho(1, 2));
console.log("Teclado:", adicionarAoCarrinho(2, 1));
console.table(listarCarrinho());

// Adicionar novamente o mesmo produto
console.log("\n2. ADICIONAR MOUSE NOVAMENTE");
console.log("Resultado:", adicionarAoCarrinho(1, 1));
console.table(listarCarrinho());

// Alterar quantidade
console.log("\n3. ALTERAR QUANTIDADE DO TECLADO");
console.log("Resultado:", alterarQuantidade(2, 2));
console.table(listarCarrinho());

// Calcular valores
console.log("\n4. SUBTOTAIS E TOTAL");

for (const item of listarCarrinho()) {
  console.log(
    "Produto:", item.produtoId,
    "| Quantidade:", item.quantidade,
    "| Subtotal: R$", calcularSubtotal(item).toFixed(2)
  );
}

console.log("Total: R$", calcularTotal().toFixed(2));

// Testar estoque insuficiente
console.log("\n5. TESTE DE ESTOQUE INSUFICIENTE");
console.log("Resultado:", adicionarAoCarrinho(1, 20));

// Testar produto inexistente
console.log("\n6. TESTE DE PRODUTO INEXISTENTE");
console.log("Resultado:", adicionarAoCarrinho(999, 1));

// Testar quantidade inválida
console.log("\n7. TESTE DE QUANTIDADE INVÁLIDA");
console.log("Resultado:", alterarQuantidade(1, 0));

// Remover produto
console.log("\n8. REMOVER TECLADO");
console.log("Resultado:", removerDoCarrinho(2));

// Resultado final
console.log("\n9. CARRINHO FINAL");
console.table(listarCarrinho());
console.log("Total final: R$", calcularTotal().toFixed(2));



console.log("\n========== PEDIDOS ==========");

// O carrinho já possui 3 Mouses
// Vamos adicionar 2 Teclados
console.log("\n1. PREPARAR COMPRA");
adicionarAoCarrinho(2, 2);
console.table(listarCarrinho());
console.log("Total: R$", calcularTotal().toFixed(2));

// Teste com cliente inexistente
console.log("\n2. CLIENTE INEXISTENTE");
console.log("Resultado:", finalizarPedido(999));

// Finalizar pedido para Ana Silva
console.log("\n3. FINALIZAR PEDIDO");
const pedidoFinalizado = finalizarPedido(1);

if (pedidoFinalizado) {
  console.log("ID:", pedidoFinalizado.id);
  console.log("Cliente:", pedidoFinalizado.clienteId);
  console.table(pedidoFinalizado.itens);
  console.log("Total: R$", pedidoFinalizado.total.toFixed(2));
  console.log("Data:", pedidoFinalizado.data);
}

// Verificar estoque após a compra
console.log("\n4. ESTOQUE ATUALIZADO");
console.table(listarProdutos());

// Verificar carrinho vazio
console.log("\n5. CARRINHO APÓS A COMPRA");
console.table(listarCarrinho());

// Tentar finalizar carrinho vazio
console.log("\n6. TESTE DE CARRINHO VAZIO");
console.log("Resultado:", finalizarPedido(1));

// Consultar pedidos
console.log("\n7. TODOS OS PEDIDOS");
console.log(listarPedidos());

console.log("\n8. PEDIDOS DA CLIENTE ANA");
console.log(buscarPedidosPorCliente(1));

// Verificar histórico de preços
console.log("\n9. TESTE DE PREÇO HISTÓRICO");

const mouse = buscarProdutoPorId(1);

if (mouse) {
  atualizarProduto(
    mouse.id,
    mouse.nome,
    mouse.categoria,
    60,
    mouse.estoque
  );
}

console.log("Novo preço do Mouse:",
  buscarProdutoPorId(1)?.preco
);

console.log("Preço registrado no pedido:",
  pedidoFinalizado?.itens.find(
    item => item.produtoId === 1
  )?.precoUnitario
);

// Testar estoque alterado após inclusão no carrinho
console.log("\n10. TESTE DE ESTOQUE INSUFICIENTE");

adicionarAoCarrinho(3, 2);
adicionarAoCarrinho(4, 1);

// Simular redução do estoque do Caderno
atualizarProduto(3, "Caderno", "Papelaria", 20, 1);

console.log("Resultado:", finalizarPedido(1));
console.log("Estoque da Caneta:", buscarProdutoPorId(4)?.estoque);
console.log("Quantidade de pedidos:", listarPedidos().length);
console.table(listarCarrinho());

console.log("\n========== RELATÓRIOS ==========");

// Relatório geral das vendas
exibirRelatorioGeral();

// Relatório de compras da Ana Silva
exibirRelatorioCliente(1);
