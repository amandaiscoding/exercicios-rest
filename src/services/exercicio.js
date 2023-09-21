class ServicoExercicio {
    // exercício 1
    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números válidos.")
        }
        const resultado = num1 + num2
        return resultado;
    }

    // exercício 2
    CalcularSalario(valorHora, horas) {
        if(isNaN(valorHora) || isNaN(horas)){
            throw new Error("Favor informar números válidos.")
        }
        return valorHora * horas
    }

    // exercício 4
    CelsiusPraFahreinheit(celsius) {
        if(isNaN(celsius)){
            throw new Error("Favor informar números válidos.")
        }
        return (9 * celsius + 160) / 5
    }

    // exercício 5
    KmPraMilhas(milhas) { 
        if(isNaN(milhas)){
            throw new Error("Favor informar números válidos.")
        }
        return milhas * 1.60934
    }

    // exercício 9
    MediaNota(nota1, nota2, nota3) {
        if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
            throw new Error("Favor informar números válidos.")
        }
        
        const media = (nota1 + nota1 + nota3) / 3;
        if (media >= 7) {
            return `Média: ${media}; aprovado.`
        } else if (media >= 5) {
            return `Média: ${media}; recuperação.`
        } else {
            return `Reprovado.`
        }
    }

    // exercício 13
    ImparOuPar(num) {
        if(isNaN(num)){
            throw new Error("Favor informar números válidos.")
        }
        if (num % 2 == 0) {
            return `Par.`
        } else {
            return `Ímpar.`
        }
    }

    // exercício 18
    CustoCarro(custoFabrica) {
        if(isNaN(custoFabrica)){
            throw new Error("Favor informar números válidos.")
        }
        const custoConsumidor = custoFabrica * (1 + 0.28 + 0.45)
        return custoConsumidor
    }

    // exercicio 19
    CalcularJuros(capital, taxa, dias) {
        if(isNaN(capital) || isNaN(taxa) || isNaN(dias)){
            throw new Error("Favor informar números válidos.")
        }
        const juros = capital * taxa * dias
        const montante = capital + juros
        return `Capital: ${capital}; Juros: ${juros}; Montante: ${montante}.`
} 
    
    // exercicio 24
    TabuadaArray(num) {
        if(isNaN(num)){
            throw new Error("Favor informar números válidos.")
        }
        const tabuada = []
        for (let i = 1; i <= 10; i++) {
            tabuada.push(num * i)
        }
        return tabuada
    }

    // exercicio 31
    EscolhaCombustivel(numero) {
        if(isNaN(numero)){
            throw new Error("Favor informar números válidos.")
        }
        switch (numero) {
            case 1:
                return "Álcool"
            case 2:
                return "Gasolina"
            case 3:
                return "Diesel"
            default:
                return "Opção inválida"
        }
    }

    // exercicio 32
    EscolhaDiaSemana(numero) {
        if(isNaN(numero)){
            throw new Error("Favor informar números válidos.")
        }
        switch (numero) {
            case 1:
                return "Domingo"
            case 2:
                return "Segunda"
            case 3:
                return "Terça"
            case 4:
                return "Quarta"
            case 5:
                return "Quinta"
            case 6:
                return "Sexta"
            case 7:
                return "Sábado"
            default:
                return "Opção inválida"
        }
    }

    // exercicio 34
    VogalOuConsoante(letra) {
        if(!isNaN(letra)){
            throw new Error("Favor informar uma letra válida.")
        }
        switch (letra) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return "Vogal"
            default:
                return "Consoante"
        }
    }

}

module.exports = ServicoExercicio