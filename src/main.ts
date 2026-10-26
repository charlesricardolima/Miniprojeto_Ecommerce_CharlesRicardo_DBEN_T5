
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
