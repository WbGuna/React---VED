import './MyAccount.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import Title from '../../components/title/Title'
import InputGroup from '../../components/inputGroup/InputGroup'
import Button from '../../components/button/Button'
import ClientContext from '../../context/Client.provider'
import React, { useState, useEffect, useContext } from 'react'
import { Modal, Alert } from 'react-bootstrap'
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import iconOk from '../../components/asserts/imagens/iconOk.png'
import UpdateClientModal from '../../models/UpdateClient'
import { baseCliente } from '../../environments'
import axios from 'axios'

function MyAccount() {
    const { getCliente, client, getDadosDoCliente, clienteDados, getIdCliente } = useContext(ClientContext)
    const [update, setUpdate] = useState(UpdateClientModal)
    const [show, setShow] = useState(false);
    const [successUpdate, setSuccessUpdate] = useState(false);
    const [successError, setSuccessError] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validacao, setValidacao] = useState(false)
    const [senha, setSenha] = useState('')
    const [senhaOk, setSenhaOk] = useState('d-none')
    const [senhaError, setSenhaError] = useState('d-none')
    const [senhaConfirmar, setSenhaConfirmar] = useState('')
    const [senhaConfirmOk, setSenhaconfirmOk] = useState('d-none')
    const [senhaConfirmError, setSenhaConfirmError] = useState('d-none')
    const [cliente , setCliente ] = useState ([])
    
    useEffect(() => {

        getDadosDoCliente()
        setUpdate({
            nome: clienteDados.nome,
            sobrenome: clienteDados.sobrenome,
            nomeSocial: clienteDados.nomeSocial,
            telefone: clienteDados.telefone,
            email: clienteDados.email
        })

        console.log(clienteDados)
    }, [])

    function setAtualizaCliente(atualiza) {
        axios.put(`${baseCliente}/atualizar`, atualiza)
            .then(() => {
                setSuccessUpdate(true)
                setSuccessError(false)
            })
            .catch((error) => {
                console.error(error)
                setSuccessUpdate(false)
                setSuccessError(true)
            })
    }

    function feedback() {
        if (successUpdate) {
            return (
                <Alert key='success' variant='success'>
                    <AiFillCheckCircle size="30" /> Dados Alterados com Sucesso!
                </Alert>
            )
        } else if (successError) {
            return (
                <Alert key='error' variant='dark'>
                    <AiOutlineCloseCircle size="30" /> Error ao Alterar Dados!
                </Alert>
            )
        }
        return (
            <></>
        )
    }


    return (
        <>
            <Header />
            <div className="container mt-3 mb-4  ">
                <div className="row ">
                    <div className="col-2 col-sm-3 ">
                        <CustomerMenu />
                    </div>

                    <div className="col-12 col-sm-9 order-md-last  align-items-center justify-content-center  mb-3">
                        <Title label="Meus Dados" />
                        {feedback()}

                        {/* <!--  inicio do formulario de cadastro --> */}
                        {/* <!--  campo nome --> */}
                        <div className="row border">
                            <InputGroup value={update.nome} change={(e) => { setUpdate({ ...update, nome: e.target.value }) }} required info="Primeiro Nome" label="Nome: " type="text" id="Nome" col="col-12 col-sm-6" />
                            <InputGroup value={update.sobrenome} change={(e) => { setUpdate({ ...update, sobrenome: e.target.value }) }} required label="Sobrenome: " info="Sobrenome" type="text" id="sobrenome" col="col-12 col-sm-6" />
                            <InputGroup info="Nome Social" value={update.nomeSocial} label="Nome Social: " change={(e) => { setUpdate({ ...update, nomeSocial: e.target.value }) }} id="Nome-Social" col="col-12 col-sm-6" />
                            <InputGroup block value={clienteDados.cpf} required label="CPF: " info="Apenas Números " mask="999.999.999-99" type="number" id="cpf" col="col-12 col-sm-6" />
                            <InputGroup block value={clienteDados.dataNascimento} required mask="99/99/9999" info="dia/mês/ano" label="Data de Nasc.: " id="nascimento" type="text" col="col-12 col-sm-3" />
                            <InputGroup block value={clienteDados.email} required label="Email: " info="seu email" id="email" type="email" col="col-12 col-sm-5" />
                            <InputGroup value={update.telefone} change={(e) => { setUpdate({ ...update, telefone: e.target.value }) }} required mask="(99) 99999-9999" info="fixo ou celular " label="Telefone: " id="telefone" type="number" col="col-12 col-sm-4" />
                            <div class="d-grid justify-content-center align-items-center gap-2   align-cen  ter mt-3 mb-3">
                                <Button success label="Atualizar Dados" confirm click={() => { handleShow() }}></Button >
                            </div>
                        </div>
                    </div >

                </div>
            </div>


            {/* //modal update */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='body-success text-center d-flex align-items-center justify-content-center'>
                        <h4 className="text-center">Atualizar Dados</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column align-items-center'>
                    <h6>Informe a Senha do Cadastro para Confirmação</h6>
                    <div className="col-12 col-sm-6">
                        <label for="form-senha  " className="text-input">Digite sua Senha</label>
                        <input required placeholder='informe a senha' type="password" onChange={(e) => {
                            if (e.target.value.length <= 8) {
                                setSenhaOk('msg-success displayFeedbackError ');
                                setSenhaError('msg-error d-flex')
                            } else {
                                setSenhaOk('msg-success displayFeedbackOk ');
                                setSenhaError('msg-error displayFeedbackError ')
                            }
                            console.log(senha);
                            setSenha(e.target.value)
                        }}
                            className="form-control" id="form-senha" />
                    </div>

                    <div className="col-12 col-sm-6">
                        <label for="form-senha-confirma " className="text-input">Confirme sua senha</label>
                        <input required placeholder='Confirme a senha' type="password" onChange={(ev) => {
                            setSenhaConfirmar(ev.target.value)
                            if (ev.target.value != senha) {
                                setSenhaconfirmOk('msg-success displayFeedbackError ');
                                setSenhaConfirmError('msg-error d-flex')
                                setValidacao(false)
                            } else {
                                setSenhaconfirmOk('msg-success displayFeedbackOk ');
                                setSenhaConfirmError('msg-error displayFeedbackError ')
                                setUpdate({ ...update, senha: senha })
                                setValidacao(true)
                            }
                        }}
                            className="form-control" id="form-senha-confirma" />
                        <span className={senhaConfirmError} >Senha Divergente</span>
                        <div className={senhaConfirmOk + " "} >
                            <img src={iconOk} width='24px' height='24px' />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className=" col-12 justify-content-center align-items-center d-flex">
                        {validacao
                            ? <><button className='btn btn-success btn-lg' onClick={() => {
                                setAtualizaCliente(update)
                                handleClose()
                                console.log('opa')
                                setTimeout(
                                    () => {
                                        handleClose()
                                        setSuccessUpdate(false)
                                        setSuccessError(false)
                                        getDadosDoCliente()
                                    }, 4000)

                            }}>Salvar e enviar</button></>
                            : <> <button className='btn btn-delete btn-lg' onClick={
                                () => { handleClose() }} >Cancelar</button></>
                        }
                    </div>

                </Modal.Footer>
            </Modal>
            <Footer />
        </>
    )
}
export default MyAccount

