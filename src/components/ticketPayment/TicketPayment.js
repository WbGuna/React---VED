import React, { useState } from 'react'
import './TicketPayment.css'


function TicketPayment (props) {

    return (
        <>
          <h4 className="d-flex justify-content-between align-items-center mb-3 mt-5">
                <span className="">Método de Pagamento : Boleto</span>
            </h4>
             <div className="row gy-3 list1 mt-3">
                <div className=" d-flex flex-column align-items-center justify-content-center py-2">
                    <h2 className="text-center mb-2">Boleto gerado </h2>
                    <textarea className="boleto  border " disabled >34191.79001 01043.510047 91020.150008 7 89250026000</textarea>
                    <h4>ou </h4>
                    <div className="container d-grid gy-2 mb-3">
                        <a className="btn btn-success" target="_blank" href="http://www.sicadi.com.br/mhouse/boleto/boleto3.php?numero_banco=341-7&local_pagamento=PAG%C1VEL+EM+QUALQUER+BANCO+AT%C9+O+VENCIMENTO&cedente=VED+-+ALIMENTOS+ORG%C2NICOS+&data_documento=25%2F03%2F2022&numero_documento=DF+00113&especie=&aceite=N&data_processamento=25%2F03%2F2022&uso_banco=&carteira=179&especie_moeda=Real&quantidade=2&valor=1900&vencimento=25%2F03%2F2022&agencia=0049&codigo_cedente=10201-5&meunumero=00010435&valor_documento=260%2C00&instrucoes=Taxa+de+visita+de+suporte%0D%0AAp%F3s+o+vencimento+R%24+0%2C80+ao+dia&mensagem1=&mensagem2=&mensagem3=ATEN%C7%C3O%3A+N%C3O+RECEBER+AP%D3S+15+DIAS+DO+VENCIMENTO&sacado=&Submit=Enviar">Acesse aqui</a>
                    </div>

                </div>
            </div> 
        </>
    )
}

export default TicketPayment 