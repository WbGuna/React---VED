import './CustomerMenu.css'
import menuhamburguer from '../asserts/imagens/Header/hamburger_menu.png'
import { Link } from 'react-router-dom'


function CustomerMenu() {

    const sairClient = () => {
        //limpa tudo da memoria e revoga tudo da memoria
        console.log('sair')

        // delete axios.defaults.headers.common["Authorization"]
    }

    return (
        <>
            {/* ************** BEGIN Parte do Menu lateral  **************   */}
            <div className="text-left menu-lateral-mobile">
                <main className="flex-fill cor-nav mt-4">
                    <div className="list-group  ">
                        <h4 className="text-center mt-2 menu-title"> Menu</h4>
                        <Link to="/myAccount" className="list-group-item list-group-item-action  ">
                            <i className="bnt-hover fs-6"></i> Dados Pessoais
                        </Link>
                        <Link to="/requests" className="list-group-item list-group-item-action">
                            <i className="bi-mailbox fs-6"></i> Meus Pedidos
                        </Link>
                        <Link to="/address" className="list-group-item list-group-item-action">
                            <i className="bi-house-door fs-6"></i> Meus Endereços
                        </Link>
                        <Link to="/favorites" className="list-group-item list-group-item-action">
                            <i className="bi-truck fs-6"></i> Meus Favoritos
                        </Link>
                        <Link to="/paymentCards" className="list-group-item list-group-item-action">
                            <i className="bi-heart fs-6"></i> Meus Cartões
                        </Link>
                        <Link to="/login" className="list-group-item list-group-item-action">
                            <i className="bi-door-open fs-6"></i> Sair
                        </Link>
                    </div>
                </main>
            </div>
            {/* ************** END Parte do Menu lateral  **************   */}



            {/* ************** COMEÇO da parte do OFFCANVAS  **************   */}
            <div className="col-3 menu-lateral-canvas">

                {/* COMEÇO DO CANVAS */}
                <div className="col-12 col-sm-6 menucanvas">

                    <button className="btn border " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvascategoria"
                        aria-controls="offcanvasExample"><img src={menuhamburguer} alt="" />
                    </button>


                    <div className="offcanvas menucanvasdentro  offcanvas-start" tabindex="-1" id="offcanvascategoria"
                        aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header menucanvasdentro ">
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="menucanvasdentro">

                            <div className="offcanvas-body ">
                                <div className="flex-column">
                                    <ul className="ul-canvas-menu">
                                        <Link to="/myAccount">
                                            <li className="li-item-menuLateral">Dados Pessoais</li>
                                        </Link>
                                        <Link to="/requests">
                                            <li className="li-item-menuLateral">Meus Pedidos</li>
                                        </Link>
                                        <Link to="/address">
                                            <li className="li-item-menuLateral">Meus Endereços</li>
                                        </Link>
                                        <Link to="/favorites">
                                            <li className="li-item-menuLateral">Meus Favoritos</li>
                                        </Link>
                                        <Link to="/paymentCards">
                                            <li className="li-item-menuLateral">Meus Cartões</li>
                                        </Link>
                                        <hr />
                                        <Link >
                                            <li className="li-item-menuLateral" onClick={() => {
                                                localStorage.removeItem('token')
                                                localStorage.removeItem('id')
                                                localStorage.removeItem("nome")
                                                localStorage.removeItem('cliente')
                                            }}>Sair</li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* corpo canvas */}

                {/* ****END  CANVAS DO MENU LATERAL */}
            </div>

        </>
    )
}
export default CustomerMenu;