
import { Cliente } from "./types";

// Clientes iniciais
const clientes: Cliente[] = [
  { id: 1, nome: "Ana Silva", email: "ana@email.com" },
  { id: 2, nome: "João Santos", email: "joao@email.com" },
  { id: 3, nome: "Maria Oliveira", email: "maria@email.com" }
];

// Cadastrar cliente
export function cadastrarCliente(cliente: Cliente): boolean {
  if (cliente.nome.trim() === "" || cliente.email.trim() === "") {
    console.log("Erro: nome e e-mail são obrigatórios.");
    return false;
  }

  if (buscarClientePorId(cliente.id)) {
    console.log("Erro: ID já cadastrado.");
    return false;
  }

  const emailExiste = clientes.find(
    c => c.email.toLowerCase() === cliente.email.toLowerCase()
  );

  if (emailExiste) {
    console.log("Erro: e-mail já cadastrado.");
    return false;
  }

  clientes.push(cliente);
  return true;
}

// Listar clientes
export function listarClientes(): Cliente[] {
  return clientes;
}

// Buscar cliente pelo ID
export function buscarClientePorId(id: number): Cliente | undefined {
  return clientes.find(cliente => cliente.id === id);
}
