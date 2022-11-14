import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import InputMask from 'react-input-mask'
import CardModal from '../../models/Card'
import { baseCartao, baseBandeira } from '../../environments'
import axios from 'axios'
import { Form, Modal, Alert } from 'react-bootstrap'
import { AiFillCheckCircle } from "react-icons/ai";


function ModelPayCard(props) {
    const [bandeira, setBandeira] = useState([])
    const [cartaomodel, setCartaomodel] = useState(CardModal)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [successRegister, setSuccessRegister] = useState(false);


    let id = localStorage.getItem('id')
    const postCartao = (cartaomodel) => {
        axios.post(`${baseCartao}/${id}/novo`, cartaomodel)
            .then(() => {
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    const getBandeira = () => {
        axios.get(`${baseBandeira}`)
            .then((response) => {
                setBandeira(response.data)
            })
    }

    useEffect(() => {

        getBandeira()
    }, [])

    return (
        <>

            <button type="button" class="btn btn-suport" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Cadastrar Cartão
            </button>
            {/* ***************  */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Dados do Novo Cartão</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/* <!--  *****************campo para o cadastro do novo cartão ******* --> */}
                            <div class="cardpay-fix">
                                {/* <!-- area do primeira cartão --> */}
                                <div class="row border  pb-3 pt-3">
                                    <div class="row ">
                                        <div class="col-12">
                                            {/* <!--******Numero do cartão ***** --> */}
                                            <label for="cc-number" class="form-label">Nº Cartão do
                                                Titular</label>
                                            <InputMask mask="9999 9999 9999 9999" class="form-control" id="cc-number"
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, numeroCartao: event.target.value }) }} />
                                            <div class="invalid-feedback">Nº Cartão Obrigatorio</div>
                                        </div>
                                        {/* <!--******NOME do cartão ***** --> */}
                                        <div class="col-12">
                                            <label for="cc-name" class="form-label">Nome do Titular</label>
                                            <input type="text" class="form-control" id="cc-name"
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, nomeTitular: event.target.value }) }} />
                                            <small class="text-muted">Nome conforme exibido no
                                                cartão</small>
                                            <div class="invalid-feedback">Nome Obrigatorio</div>
                                        </div>
                                        {/* <!--******CPF do cartão ***** --> */}
                                        <div class="col-12">
                                            <label for="cpf-titular" class="form-label">CPF do Titular do
                                                Cartão</label>
                                            <InputMask mask="999.999.999-99 " class="form-control" id="cpf-titular"
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, cpfTitular: event.target.value }) }} />
                                            <div class="invalid-feedback">Numero do Cartão Obrigatorio</div>
                                        </div>
                                        <div class="col-6 col-sm-6">
                                            {/* <!-- vencimento do cartão --> */}
                                            <label for="cc-expiration" class="form-label">Vencimento mês</label>
                                            <InputMask mask="99" class="form-control" id="cc-expiration"
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, diaVencimento: event.target.value }) }} />
                                            <div class="invalid-feedback">Data de Expiração Obrigatoria</div>
                                        </div>
                                        <div class="col-6 col-sm-6">
                                            {/* <!-- vencimento do cartão --> */}
                                            <label for="cc-expiration" class="form-label">Vencimento Ano</label>
                                            <InputMask mask="99" class="form-control" id="cc-expiration"
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, anoVencimento: event.target.value }) }} />
                                            <div class="invalid-feedback">Data de Expiração Obrigatoria</div>
                                        </div>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Bandeira</Form.Label>
                                            <Form.Select
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, idBandeira: event.target.value }) }}>
                                                <option>Selecione a Bandeira do seu Cartão</option>
                                                {
                                                    bandeira.map((bandeira) => {
                                                        return (
                                                            <option key={bandeira.id} value={bandeira.id}>{bandeira.nome}</option>
                                                        )
                                                    })
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                        {
                                            successRegister
                                                ?
                                                <Alert key='success' variant='success'>
                                                    <AiFillCheckCircle size="30" /> Registrado com Sucesso
                                                </Alert>
                                                : ''
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* <!-- FIM DO CORPO DO MODAL --> */}
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button delete  type="button" className="btn btn-delete btn-lg" data-bs-dismiss="modal"
                            >Cancelar</button>
                            <Button success label="Cadastrar" className="my-5 " click={() => {
                                setSuccessRegister(true)
                                postCartao(cartaomodel)
                                setTimeout(
                                    () => {
                                        setSuccessRegister(false)
                                        handleClose()
                                    }, 1000)
                            }
                            }
                            >Success</Button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )



}
export default ModelPayCard