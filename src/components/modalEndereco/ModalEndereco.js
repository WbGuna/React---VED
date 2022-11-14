import './ModalEndereco.css'
// import Button from '../../components/button/Button'
import InputMask from 'react-input-mask'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import addressModal from '../../models/Address'
import { baseEndereco, baseUf } from '../../environments'
import { Form, Modal, Button, Alert } from 'react-bootstrap'
import { AiFillCheckCircle } from "react-icons/ai";


function ModalEndereco(props) {

    const [cep, setCep] = useState(0)
    const [endereco, setEndereco] = useState()
    const [address, setAddress] = useState(addressModal)
    const [states, setStates] = useState([])
    const [show, setShow] = useState(false);
    const [successRegister, setSuccessRegister] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let id = localStorage.getItem('id')
    useEffect(() => {
      
        getStates()
    }, [])

    const getCep = (cep) => {
         axios.get(`https://viacep.com.br/ws/${cep}/json/ `)
            .then((response) => {
            setAddress({
                cep: response.data.cep ,
                rua:response.data.logradouro,
                numero: '',
                complemento: '' ,
                bairro: response.data.bairro,
                cidade:response.data.localidade,
                uf:response.data.uf
             })
            })
            .catch((error) => {
                console.error(error.messege)

            })
    }

    const postEndereco = (address) => {
        axios.post(`${baseEndereco}/${id}/novo`, address)
            .then((response) => {
                props.get()
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }
    const getStates = () => {
        axios.get(`${baseUf}`)
            .then((response) => {
                setStates(response.data)
            })
    }



    return (

        <>

            <Button className="btn btn-lg btn-success mb-2"
                onClick={() => {
                    handleShow()
                }}>
                Novo Endereço
            </Button>

            {/* //modal delete */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Endereco</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="row ">
                        <div className="col-12 col-sm-6">
                            <label for='cep' className=" text-input">Cep:</label>
                            <InputMask mask= '99999-999' onChange={(e) => {
                                setCep(e.target.value)
                                setAddress({ ...address, cep: e.target.value })
                            }} 
                                className="form-control mb-3" id="cep" placeholder='digite o cep do endereço' required />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label for='rua' className=" text-input">Rua:</label>
                            <InputMask required value={address.rua}
                                onChange={(event) => { setAddress({ ...address, rua: event.target.value }) }} className="form-control mb-3" placeholder="digite a rua" id="rua" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label for='numeracao' className=" text-input">N°:</label>
                            <InputMask required value={address.numero}
                                onChange={(event) => { setAddress({ ...address, numero: event.target.value }) }} className="form-control mb-3" placeholder="Numero da Residencia" id="numeracao " />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label for='complemento' className=" text-input">Complemento:</label>
                            <InputMask required value={address.complemento}
                                onChange={(event) => { setAddress({ ...address, complemento: event.target.value }) }} className="form-control mb-3" placeholder="c" info="seu complemento" id="Complemento" type="" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label for='cidade' className=" text-input">Cidade:</label>
                            <InputMask required value={address.cidade}
                                onChange={(event) => { setAddress({ ...address, cidade: event.target.value }) }} className="form-control mb-3" placeholder="digite sua cidade" info="sua cidade" id="cidade" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label for='bairro' className=" text-input">Bairro:</label>
                            <InputMask required value={address.bairro}
                                onChange={(event) => { setAddress({ ...address, bairro: event.target.value }) }} className="form-control mb-3" placeholder="Informe seu Município" id="estado" />
                        </div>

                        <Form.Group className="mb-3">
                            <Form.Label>Estado</Form.Label>
                            <Form.Select
                                onChange={(event) => { setAddress({ ...address, uf: event.target.value }) }}>
                                <option>Selecione um estado</option>
                                {
                                    states.map((item) => {
                                        return (
                                            <option key={item.id} value={item.id}>{item.nome}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                    </div>
                </Modal.Body>
                {
                    successRegister
                        ?
                        <Alert key='success' variant='success'>
                            <AiFillCheckCircle size="30" /> Registrado com Sucesso
                        </Alert>
                        : ''
                }
                <Modal.Footer>
                    <div className="d-flex justify-content-between container-fluid ">
                        <Button className="btn btn-delete text-center" onClick={handleClose}>
                            Sair
                        </Button>
                        <Button className="btn btn-success" onClick={() => {
                            setSuccessRegister(true)
                            postEndereco(address)
                            setTimeout(
                                () => {
                                    setSuccessRegister(false)
                                    handleClose()
                                }, 1000)
                        }}>
                            Salvar
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>

        </>


    )
}


export default ModalEndereco