import React, { useState } from 'react'
import './AccordionCart.css'
import { Accordion } from 'react-bootstrap'

function AccordionCart(props) {

    return (
        <>

                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Bandeira : {props.bandeira}</Accordion.Header>
                        <Accordion.Body>
                            
                        <label className="margin" for="card-01">Nome: {props.nome}</label>
                        <label Maska ="**** **** **** 9999"  className="margin" for="card-01">Nº {props.numero}</label>
                        <label className="margin" for="card-01">Val: {props.mes}/{props.ano}</label>
                        <div className="col-3">
                            <p>CVV</p>
                            <input type="password" className="form-control" id="cvv-number" required />

                            <div className="invalid-feedback">Número obrigatório</div>
                        </div>
                        <small className="text-muted">Nome conforme exibido na parte posterior do
                            cartão</small>

                            <div className="col-md-6 d-grid gy-2">
                                        <label for="parcela" className="col-12">Parcelar em</label>
                                        <select id="parcela" required>
                                            <option value="">Selecione a parcela...</option>
                                            <option value="1">1x </option>
                                            <option value="2">2x</option>
                                            <option value="3">3x</option>
                                            <option value="4">4x</option>
                                            <option value="5">5x</option>
                                            <option value="6">5x</option>
                                        </select>
                                        <div className="invalid-feedback">Selecione pelo menos 1x</div>
                                    </div>
                                        

                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
       
        </>
    )
}

export default AccordionCart;