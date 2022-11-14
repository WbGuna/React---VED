import { Link } from 'react-router-dom'
import './Register.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import iconOk from '../../components/asserts/imagens/iconOk.png'
import ClientModal from '../../models/Client'
import React, { useState, useEffect } from 'react'
import { baseCliente } from '../../environments'
import axios from 'axios'
import { Alert, Modal } from 'react-bootstrap'
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import InputMask from 'react-input-mask'
import { useHistory } from 'react-router-dom'


function Register() {

    const [client, setClient] = useState(ClientModal)
    const [successRegister, setSuccessRegister] = useState(false);
    const [senha, setSenha] = useState('')
    const [senhaOk, setSenhaOk] = useState('d-none')
    const [senhaError, setSenhaError] = useState('d-none')
    const [senhaConfirmar, setSenhaConfirmar] = useState('')
    const [senhaConfirmOk, setSenhaconfirmOk] = useState('d-none')
    const [senhaConfirmError, setSenhaConfirmError] = useState('d-none')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validacao, setValidacao] = useState(true)

    const history = useHistory();

    useEffect(() => {
    }, [])

    const postClient = (cliente) => {
        axios.post(`${baseCliente}/novo`, cliente)
            .then(() => {
                console.log('cadastrou')
                setValidacao(true)
            })
            .catch((error) => {
                console.error(error.messege) 
                setValidacao(false)
            })
    }

    function cadastro() {
        postClient(client)
        handleShow()
    }

    return (
        <>
            <Header />
            <div class="container ">
                <div class="row mt-5 mb-5">
                    <div class="forms col-12 col-md-8 mx-auto border">
                        <div class="row">
                            <div class="col-12">
                                <Title label="Nova Conta" />
                            </div>
                            {/* <!--  campo de recuperar senha--> */}
                            <div class="col-12 text-center">
                                <span>Já Possui uma Conta?<Link className='link' to="/Login"> Clique Aqui.</Link></span>
                            </div>
                            {/* <!--  começo do campo de inputs --> */}
                            {/* <!--  campo nome --> */}
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <label for='nome' className="text-input">Nome:</label>
                                    <InputMask pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" className="form-control" id='nome' placeholder='Primeiro Nome' required onChange={(event) => {
                                        setClient({ ...client, nome: event.target.value })
                                    }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label for='Sobrenome' className="text-input">Sobrenome:</label>
                                    <InputMask className="form-control" id='Sobrenome' placeholder='Segundo Nome' required onChange={(event) => {
                                        setClient({ ...client, sobrenome: event.target.value })
                                    }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label for='Nome-Social' className="text-input">Nome Social:</label>
                                    <InputMask className="form-control" id='Nome-Social' placeholder='Não Obrigatório' required onChange={(event) => {
                                        setClient({ ...client, nomeSocial: event.target.value })
                                    }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label for='cpf' className="text-input">CPF:</label>
                                    <InputMask mask="999.999.999-99" className="form-control" id='cpf' placeholder='Apenas Números' required onChange={(event) => {
                                        setClient({ ...client, cpf: event.target.value })
                                    }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label for='nascimento' className="text-input">Data de Nascimento:</label>
                                    <input type='date' id='nascimento' className="form-control" name='nascimento' required
                                        onChange={(event) => {
                                            setClient({ ...client, dataNascimento: event.target.value })
                                        }} />
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label for='telefone' className="text-input">Telefone:</label>
                                    <InputMask mask="(99) 99999-9999" className="form-control" id='telefone' placeholder='Email para acesso ao Ved' required onChange={(event) => {
                                        setClient({ ...client, telefone: event.target.value })
                                    }} />
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label for='email' className="text-input">Email:</label>
                                    <InputMask type="email" className="form-control" id='email' placeholder='Email para acesso ao Ved' required onChange={(event) => {
                                        setClient({ ...client, email: event.target.value })
                                    }} />
                                </div>

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
                                    <span className={senhaError}>Senha no mínimo 8 caracteres</span>

                                    <div className={senhaOk + " "} >
                                        <img src={iconOk} width='24px' height='24px' />
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label for="form-senha-confirma " className="text-input">Confirme sua senha</label>
                                    <input required placeholder='Confirme a senha' type="password" onChange={(ev) => {
                                        setSenhaConfirmar(ev.target.value)
                                        console.log(senhaConfirmar);
                                        if (ev.target.value != senha) {
                                            setSenhaconfirmOk('msg-success displayFeedbackError ');
                                            setSenhaConfirmError('msg-error d-flex')
                                        } else {
                                            setSenhaconfirmOk('msg-success displayFeedbackOk ');
                                            setClient({ ...client, senha: ev.target.value })
                                            setSenhaConfirmError('msg-error displayFeedbackError ')
                                        }
                                    }}
                                        className="form-control" id="form-senha-confirma" />
                                    <span className={senhaConfirmError} >Senha Divergente</span>
                                    <div className={senhaConfirmOk + " "} >
                                        <img src={iconOk} width='24px' height='24px' />
                                    </div>
                                </div>
                                <div class="d-grid justify-content-center align-items-center gap-2   align-cen  ter mt-3 mb-3">
                                    <Button click={() => { cadastro() }} success label="Cadastrar" confirm></Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* //modal delete */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={validacao
                        ? "body-success"
                        : 'body-error'}>
                        {validacao
                            ? <> <AiFillCheckCircle size="30" /> Registrado com Sucesso </>
                            : <> <AiOutlineCloseCircle size="30" /> Error ao Cadastrar</>
                        }</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {validacao
                        ? <></>
                        : <> Verifique seus dados.</>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className=" col-12 justify-content-center align-items-center d-flex">
                        {validacao
                            ? <button className='btn btn-success btn-lg' onClick={() => {
                                handleClose()
                                history.push("/login")
                                console.log('opa')
                                setTimeout(
                                    () => {
                                        history.push("/login")
                                    }, 3000)
                            }}>Ir para Login</button>
                            : <> <button className='btn btn-delete btn-lg'  onClick={
                                () => { handleClose() }}  >ok</button></>
                        }



                    </div>

                </Modal.Footer>
            </Modal>
            <Footer />
        </>
    )
}

export default Register