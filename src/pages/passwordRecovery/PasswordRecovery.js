import './PasswordRecovery.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Title from '../../components/title/Title' 
import InputGroup from '../../components/inputGroup/InputGroup' 

export default function PasswordRecovery() {
    return (
        <>

            <Header />
            <div className="row mt-5 mb-5">
                <div className="col-12 col-sm-5 mx-auto border">
                    <div className="white">
                        <div className="row ">
                            <div className="col-12 mb-3">
                                <Title label="Recuperar Senha" />

                            </div>
                            <div className="col-12">

                                <form id="feedbackForm" >
                                <InputGroup required label="Email: " info="seu email" id="email-login" type="email" col="col-12 " /> 

                                    <div className="d-grid gap-2 col-12 col-sm-6 mx-auto mt-3 mb-5">
                                        <Link to="/passwordChange" className="btn btn-success btn-block" type="button">Enviar</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>

    )
}
