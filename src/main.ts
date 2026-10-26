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
