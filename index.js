import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Vinícius", 32469189888);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1) ;
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(200, cliente1, 1001);

contaCorrenteRicardo.teste();
