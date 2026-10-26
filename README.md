# Mini-Projeto E-commerce — DBEN-T5

**Curso:** Desenvolvedor Back-End Node  
**Turma:** T5  
**Identificador:** DBEN-T5  
**Aluno:** Charles Ricardo Nascimento D’ Lima  
**Atividade:** Mini-Projeto Avaliativo — Módulo 1, Semana 07

## 1. Objetivo

Desenvolver um sistema simples de gerenciamento de e-commerce utilizando TypeScript e Node.js, aplicando conceitos de tipagem, funções, arrays, módulos e regras de negócio.

O sistema permite gerenciar produtos, clientes, carrinhos de compras, pedidos e relatórios de vendas diretamente pelo terminal.

## 2. Funcionalidades implementadas

### Produtos
- Cadastrar, listar, atualizar e remover produtos.
- Buscar produtos por identificador ou nome.
- Filtrar produtos por categoria.
- Validar preços, estoque e identificadores.

### Clientes
- Cadastrar e listar clientes.
- Buscar clientes por identificador.
- Impedir identificadores e e-mails duplicados.
- Validar os campos obrigatórios.

### Carrinho
- Adicionar e remover produtos.
- Alterar quantidades.
- Calcular subtotais e valor total.
- Impedir quantidades inválidas e compras acima do estoque.

### Pedidos
- Finalizar compras de clientes cadastrados.
- Registrar produtos, quantidades, preços, total e data.
- Atualizar o estoque após a finalização.
- Consultar pedidos gerais e por cliente.
- Preservar os preços praticados nas compras anteriores.

### Relatórios
- Quantidade de pedidos realizados.
- Quantidade de unidades vendidas.
- Faturamento total.
- Resumo de compras por cliente.

## 3. Tecnologias utilizadas

- TypeScript
- Node.js
- Git
- GitHub

## 4. Estrutura do projeto

- `src/types.ts` — Definições dos tipos.
- `src/produtos.ts` — Gerenciamento de produtos.
- `src/clientes.ts` — Cadastro e consulta de clientes.
- `src/carrinho.ts` — Operações do carrinho.
- `src/pedidos.ts` — Finalização e consulta de pedidos.
- `src/relatorios.ts` — Relatórios de vendas.
- `src/main.ts` — Demonstração do funcionamento.
- `tsconfig.json` — Configuração do TypeScript.
- `package.json` — Dependências e comandos de execução.

## 5. Como executar

É necessário ter Node.js e npm instalados.

Abra o terminal na pasta do projeto e execute:

**Instalar as dependências:** `npm install`

**Compilar o TypeScript:** `npm run build`

**Executar a aplicação:** `npm start`

O sistema apresentará no terminal as operações de produtos, clientes, carrinho, pedidos e relatórios.

## 6. Exemplos de funcionamento

### Cadastro de produto

Um produto pode ser cadastrado informando seu identificador, nome, categoria, preço e estoque.

O sistema impede o cadastro de produtos com preços negativos, nomes vazios ou identificadores duplicados.

### Carrinho de compras

Exemplo de compra:

- 3 Mouses de R$ 50,00 = R$ 150,00.
- 2 Teclados de R$ 100,00 = R$ 200,00.

**Total da compra: R$ 350,00.**

### Finalização de pedido

Ao finalizar uma compra válida, o sistema registra o pedido, guarda os preços praticados e atualiza o estoque.

O sistema também impede a finalização de pedidos com carrinho vazio, clientes inexistentes ou estoque insuficiente.

### Relatórios

Para o exemplo de compra:

- Pedidos realizados: 1.
- Unidades vendidas: 5.
- Faturamento total: R$ 350,00.

## 7. Regras de negócio

- Cada produto e cliente deve possuir um identificador único.
- Produtos devem possuir preço maior que zero e estoque não negativo.
- Clientes não podem possuir e-mails duplicados.
- O carrinho não aceita quantidades iguais ou menores que zero.
- Produtos repetidos no carrinho têm suas quantidades somadas.
- Um pedido somente pode ser finalizado para um cliente cadastrado.
- Todos os itens devem ser validados antes da finalização.
- O estoque é atualizado somente após a validação completa da compra.
- Os preços registrados nos pedidos são preservados.
- O carrinho é esvaziado após uma compra bem-sucedida.

## 8. Limitações

- Não possui interface gráfica.
- Não utiliza banco de dados.
- Os dados ficam armazenados em memória e são perdidos ao encerrar a aplicação.
- Utiliza um único carrinho de demonstração.
- Não possui autenticação, pagamento ou cálculo de frete.
- A demonstração é executada diretamente pelo terminal.

## 9. Desenvolvimento

O projeto foi desenvolvido como atividade prática da formação Desenvolvedor Back-End Node — Turma T5.

A implementação utiliza conceitos básicos de TypeScript e Node.js, com organização modular e funções simples, conforme os conteúdos estudados durante o módulo.

Foram utilizadas referências dos estudos e assistência de inteligência artificial na elaboração de exemplos, organização, revisão e testes do código.

## 10. Conclusão

O projeto demonstra o funcionamento integrado das principais operações de um e-commerce, desde o cadastro de produtos e clientes até a finalização dos pedidos e a apresentação dos relatórios.

As funcionalidades foram implementadas sem frameworks externos ou banco de dados, priorizando clareza, organização e aplicação dos conceitos estudados.