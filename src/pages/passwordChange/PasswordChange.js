import './PasswordChange.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Title from '../../components/title/Title'
import React, { useState } from 'react'
import iconCancel from '../../components/asserts/imagens/iconCancel.png'
import iconOk from '../../components/asserts/imagens/iconOk.png'
import PasswordValid from '../../components/passwordValid/PasswordValid'

export default function PasswordChange() {


    const [senhaOk, setSenhaOk] = useState('d-none')
    const [senhaError, setSenhaError] = useState('d-none')

    const [senhaConfirmOk, setSenhaconfirmOk] = useState('d-none')
    const [senhaConfirmError, setSenhaConfirmError] = useState('d-none')



    const [senha, setSenha] = useState('')
    const [senhaConfirmar, setSenhaConfirmar] = useState('')

    return (
        <>
            <Header />
            <div className="container ">
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-sm-5 mx-auto border">
                        <div className="white">
                            <div className="row ">
                                <div className=" col-12">
                                    <Title label="Alterar sua Senha" />
                                </div>

                                <div className="col-12 mt-5">

                                    <PasswordValid />


                                    <div className="d-grid gap-2 col-12 col-sm-6  mx-auto mt-2 mb-2">
                                        <Link to="/login" className="btn btn-success btn-block" type="submit">Salvar</Link>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </>

    )
}

