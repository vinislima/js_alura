import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Vinícius", 32469189888);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1) ;
const contaPoupanca = new ContaPoupanca(200, cliente1, 1001);
const conta = new Conta(0, cliente1, 1001);

console.log(conta);

