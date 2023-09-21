const express = require('express')
const ControllerExercicio = require('../controllers/exercicio')

const controller = new ControllerExercicio()
const router = express.Router()
router.post('/api/ex1', controller.Somar)
router.post('/api/ex2', controller.CalcularSalario)
router.post('/api/ex4', controller.CelsiusPraFahreinheit)
router.post('/api/ex5', controller.KmPraMilhas)
router.post('/api/ex9', controller.MediaNota)
router.post('/api/ex13', controller.ImparOuPar)
router.post('/api/ex18', controller.CustoCarro)
router.post('/api/ex19', controller.CalcularJuros)
router.post('/api/ex24', controller.TabuadaArray)
router.post('/api/ex31', controller.EscolhaCombustivel)
router.post('/api/ex32', controller.EscolhaDiaSemana)
router.post('/api/ex34', controller.VogalOuConsoante)


module.exports = router