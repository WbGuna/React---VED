import './Footer.css'
import iconBc from '../asserts/imagens/Footer/iconBc.png'
import iconBoleto from '../asserts/imagens/Footer/iconBoleto.jpg'
import iconBradesco from '../asserts/imagens/Footer/iconBradesco.png'
import iconElo from '../asserts/imagens/Footer/iconElo.png'
import iconItau from '../asserts/imagens/Footer/iconItau.png'
import iconMastercard from '../asserts/imagens/Footer/iconMastercard.png'
import iconNu from '../asserts/imagens/Footer/iconNu.png'
import iconPix from '../asserts/imagens/Footer/iconPix.png'
import iconVisa from '../asserts/imagens/Footer/iconVisa.png'
import seloOrganic from '../asserts/imagens/Footer/seloOrganic.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>

      <footer className="footertext fluid mt-5">
        <div className="container-fluid mt-4 mb-4">
          <div className="container">

            <div className="row justify-content: space-around">



              <div className=" col-md-3 col-lg-3 col-sm-6 col-xs-12 mt-3">
                <ul className="list-unstyled ">
                  <li><strong>Institucional</strong></li>
                  <li className="btn-link">
                    <Link to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="btn-link">
                    <Link to="/CompanyPolicy">
                     Política da Empresa
                    </Link>
                  </li>
                  <li className="btn-link">
                    <Link to="/howToBuy">
                      Como Comprar
                    </Link>
                  </li>

                  <li className="btn-link">
                    <Link to="/policySecurity">
                      Segurança
                    </Link>
                  </li>

                  <li className="btn-link">
                    <Link to="/shippingPolicy">
                      Políticas de Frete
                    </Link>
                  </li>

                  <li className="btn-link">
                    <Link to="/contact">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12 mt-3">
                <ul className="list-unstyled">
                  <li><strong>Atendimento</strong></li>
                  <li className="btn-link "> <a href="https://web.whatsapp.com/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg> (11) 98765-1243</a>
                  </li>
                  <li className="btn-link"> <a href="https://gmail.com/" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg> 
                       sac@ved.com.br</a>
                  </li>
                </ul>
              </div>


              <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12 mt-3">
                <ul className="list-unstyled">
                  <li><strong>Minha Conta</strong></li>
                  <li className="btn-link">
                    <Link to="/myAccount">
                      Meus Dados
                    </Link>
                  </li>

                  <li className="btn-link">

                    <Link to="/requests">
                      Meus Pedidos
                    </Link>
                  </li>
                  <li className="btn-link">
                    <Link to="/favorites">
                      Meus Favoritos
                    </Link>
                  </li>

                  <li className="btn-link">
                    <Link to="/register">
                      Criar uma conta
                    </Link>
                  </li>

                </ul>
              </div>


              <div className=" col-md-3 col-lg-3 col-sm-6 col-xs-12 mt-3">
                <ul className="list-unstyled">
                  <li><strong>Certificação</strong></li>
                  <li className="btn-link"> <img src={seloOrganic} width="60px" /> </li>
                  <li><strong>Formas de Pagamentos</strong></li>
                  <li><img src={iconPix} width="30px" /> <img src={iconVisa} width="30px" /> <img src={iconElo}
                    width="30px" />
                    <img src={iconMastercard} width="30px" /><img src={iconBoleto} width="30px" />
                  </li>
                  <li><strong>Bancos</strong></li>
                  <li> <img src={iconItau} width="30px" /><img src={iconNu} width="30px" /><img
                    src={iconBc} width="30px" /><img src={iconBradesco} width="30px" /></li>
                  <li className="btn-link"> <a href="#"></a> </li>
                </ul>
              </div>

            </div>
          </div>


        </div>
        <div className="row  text-center  col-12 rodape">
          <p>©️ 2022 VED - Alimentos Orgânicos. Todos os direitos reservados.</p>
        </div>
      </footer>

    </>

  );
}

export default Footer





