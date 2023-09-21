const ServicoExercicio = require("../services/exercicio")

const servico = new ServicoExercicio()

class ControllerExercicio {
    Somar(req, res){
        try {
            const result = servico.Somar(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }
    CalcularSalario(req, res){
        try {
            const result = servico.CalcularSalario(req.body.valorHora, req.body.horas)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }
    CelsiusPraFahreinheit(req, res){ 
        try {
            const result = servico.CelsiusPraFahreinheit(req.body.celsius)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }
    KmPraMilhas(req, res){
        try {
            const result = servico.KmPraMilhas(req.body.milhas)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }
    MediaNota(req, res){
        try {
            const result = servico.MediaNota(req.body.nota1, req.body.nota2, req.body.nota3)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }
    ImparOuPar(req, res){
        try {
            const result = servico.ImparOuPar(req.body.numero)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }
    CalcularJuros(req, res){
        try {
            const result = servico.CalcularJuros(req.body.capital, req.body.taxa, req.body.dias)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }
    CustoCarro(req, res){
        try {
            const result = servico.CustoCarro(req.body.custoFabrica)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." })
        }
    }
    TabuadaArray(req, res){
        try {
            const result = servico.TabuadaArray(req.body.num)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." }) 
        }
    }
    EscolhaCombustivel(req, res){
        try {
            const result = servico.EscolhaCombustivel(req.body.numero)
            res.status(200).json({
                message: `resultado: ${result}`
            }) 
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." }) 
        }
    }
    EscolhaDiaSemana(req, res){
        try {
            const result = servico.EscolhaDiaSemana(req.body.numero)
            res.status(200).json({
                message: `resultado: ${result}`
            }) 
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." }) 
        }
    }
    VogalOuConsoante(req, res){
        try {
            const result = servico.VogalOuConsoante(req.body.letra)
            res.status(200).json({
                message: `resultado: ${result}`
            }) 
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Algo deu errado." }) 
        }
    }
}

module.exports = ControllerExercicio
