import {Conta} from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }

    teste() {
        super.teste();
        console.log("teste na classe conta corrente")
    }
}
