import React, { useState } from 'react'
import './PasswordValid.css'
import iconCancel from "../asserts/imagens/iconCancel.png"
import iconOk from '../asserts/imagens/iconOk.png'

function PasswordValid(props) {
    const [senhaOk, setSenhaOk] = useState('d-none')
    const [senhaError, setSenhaError] = useState('d-none')

    const [senhaConfirmOk, setSenhaconfirmOk] = useState('d-none')
    const [senhaConfirmError, setSenhaConfirmError] = useState('d-none')



    const [senha, setSenha] = useState('')
    const [senhaConfirmar, setSenhaConfirmar] = useState('')

    return (
        <>
                <div className="col-12  aa">
                    <label for="form-senha  " className="text-input">Digite sua nova senha</label>
                    <input type="password" onChange={(e) => {
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

                    <span className={senhaError}>A senha deve conter no mínimo 8 caracteres</span>
                    <div className={senhaOk + " "} >
                        <img src={iconOk} width='24px' height='24px' />
                    </div>

                </div>
                <div className="col-12  mt-1">
                    <label for="form-senha-confirma " className="text-input">Confirme sua nova senha</label>
                    <input type="password" onChange={(ev) => {
                        setSenhaConfirmar(ev.target.value)
                        console.log(senhaConfirmar);
                        if (ev.target.value != senha) {
                            setSenhaconfirmOk('msg-success displayFeedbackError ');
                            setSenhaConfirmError('msg-error d-flex')


                        } else {
                            setSenhaconfirmOk('msg-success displayFeedbackOk ');
                            setSenhaConfirmError('msg-error displayFeedbackError ')
                        }
                    }}
                        className="form-control" id="form-senha-confirma" />

                    <span className={senhaConfirmError} >Senha Divergente</span>
                    <div className={senhaConfirmOk + " "} >
                        <img src={iconOk} width='24px' height='24px' />
                    </div>

                </div> 
                
                
               

        </>
    )
}

export default PasswordValid