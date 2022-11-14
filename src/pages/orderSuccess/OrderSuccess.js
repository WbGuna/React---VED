import './OrderSuccess.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Logo from '../../components/asserts/imagens/Header/logo.png'
import { Link } from 'react-router-dom'

export default function OrderSucess() {
    return (
        <>
            <Header />

            <div className="container col-4 m">
                <div className="row align-items-center justify-content-center">
                    <img src={Logo} className="logo-sucess" />
                </div>
            </div>

            <div className="container text-center">
                <div className="row  align-items-center justify-content-center">
                    <h4>Parabéns, Sua compra foi realizada com sucesso!
                    </h4>
                </div>
            </div>

            <div className="container text-center">
                <div className="row  align-items-center justify-content-center">
                    <h4>Obrigado por sua preferência, volte sempre!</h4>
                </div>
            </div>

            <div className="container text-center">
                <div className="row  align-items-center justify-content-center">
                    <h4> Estamos à disposição!</h4>
                </div>
            </div>


            <div className="container text-center">
                <div className="row  align-items-center justify-content-center">
                    <h6>Acompanhe seu pedido: via email e/ou acesse <Link to="/requests">aqui.</Link> </h6>
                </div>
            </div>

            <div className="container text-center mb-5">
                <div className="row  align-items-center justify-content-center">
                    <h3 className="pedido">Pedido #145544  </h3>
                </div>
            </div>

            <Footer />

        </>

    )
}