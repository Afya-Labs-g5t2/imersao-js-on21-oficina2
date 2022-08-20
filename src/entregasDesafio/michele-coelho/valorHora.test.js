
const {calcularValorPorHora}=require('../../src/dominio/calculadora/hora/valorHora.js')

test('1+2 é 3',()=>{

  expect(1+2),toBe()
})

//outro teste

 test('Calcular o valor por hora ',()=>{
  const salario=100
  const resultatdoCalculado=calcularValorPorHora(salario)
  const resultadoEsperado=6

  expect(resultatdoCalculado).toBe(resultadoEsperado)
  expect(resultatdoCalculado).not.toBe(resultadoEsperado)
 })
 