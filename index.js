import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Vinícius", 10000, 11122233345);

diretor.cadastrarSenha("987654321")

const gerente = new Gerente("João", 5000, 77788899965);

gerente.cadastrarSenha(789654123)

const cliente = new Cliente("Pedro", 55577733395, "753951456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "789654123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "987654321");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "753951456");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);
