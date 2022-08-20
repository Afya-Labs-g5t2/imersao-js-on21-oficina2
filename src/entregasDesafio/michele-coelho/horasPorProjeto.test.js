const{calcularHorasDeProjeto}=require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcular hora do projeto', ()=>{
    test('calculo de projeto 64 horas', () => {

    const listaDeFuncionalidade=[
        'formulario',
        'conatrucao_1_pagina',
        'integracao_api_propria'
    ]
  const horas=calcularHorasDeProjeto(listaDeFuncionalidade)
  const horasDeProjetoEsperadas=40
    expect(calcularHorasDeProjeto).toBe(horasDeProjetoEsperadas)
})
})