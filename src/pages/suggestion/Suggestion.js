import './Suggestion.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ProductCard from '../../components/productCard/ProductCard'
import Title from '../../components/title/Title'

function Suggestion() {
    return (
        <>
            <Header />
            <div className=" col-12 container  ">
                <Title label="Sugestão de Consumo"/>
                
                <hr />
                <h2 className=" row d-flex justify-content-center sugest2">Banana Caramelizada </h2>
            </div>
            <div className="d-flex justify-content-center">
                <img className="imagemsugestao1 imgresp " src='https://i.ibb.co/nP8cZL2/abacaxi.png' />
            </div>

            <div className="container  primeiroAB mt-3 justify-content-between">
                <div className="row ">
                    <div className="col-lg-6 col-md-12">
                        <h2 className="col-12 sugest2">Ingredientes</h2>
                        <ul className="col-12">
                            <li className="ponto">4 Banana (4 unidades).</li>
                            <li className="ponto">37 g de Amido de milho (1/4 de xícara).</li>
                            <li className="ponto">90 g de Farinha de trigo (3/4 de xícara).</li>
                            <li className="ponto">15 g de Açúcar (1 colher de sopa).</li>
                            <li className="ponto">Sal 1 pitada.</li>
                            <li className="ponto">180 mL de Água gelada (3/4 de xícara).</li>
                            <li className="ponto">5 g de Fermento químico (1 colher de chá).</li>
                        </ul>
                    </div>
                    <div className=" col-6   d-flex ">
                        <img className="imagemsugestao " src='https://i.ibb.co/nP8cZL2/abacaxi.png' />
                    </div>
                </div>
            </div>


            <div className="container mt-5 segundoAB text-align-justify ">
                <hr />
                <h2 className='sugest2'>Como Preparar</h2>
                <div className="row">
                    <div className="col-12">
                        <ul>
                            <li className="ponto">Misture em uma tigela a farinha de trigo, amido de milho, açúcar e sal.</li>
                            <li className="ponto">Adicione a água gelada e mexa até ficar homogêneo, sem pelotinhos de farinha.</li>
                            <li className="ponto">Por último acrescente o fermento químico e misture novamente.</li>
                            <li className="ponto">Adicione as bananas cortadas ao meio e envolva na massa.</li>
                            <li className="ponto">Retire com cuidado e transfira para a panela com óleo quente.</li>
                            <li className="ponto">Frite em óleo quente até começar a dourar.</li>
                            <li className="ponto">Transfira para um prato com papel toalha.</li>
                            <li className="ponto">Coloque o açúcar e a água em uma panela e misture.</li>
                            <li className="ponto">Deixe em fogo médio sem mexer.</li>
                            <li className="ponto">Quando atingir a coloração de caramelo (âmbar) retire do fogo.</li>
                            <li className="ponto">Coloque um pano levemente inclinado embaixo da panela e passe as bananas.</li>
                            <li className="ponto">Transfira para uma assadeira untada com óleo e coloque o gergelim imediatamente.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <div className="container text-center mt-md-5 ">
                <div className="row justify-content-between ">
                    <ProductCard col="col-12 col-sm-6 col-lg-3" img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                        peso={1.00} price={12.90} />
                    <ProductCard col="col-12 col-sm-6 col-lg-3" img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                        peso={1.00} price={12.90} />
                    <ProductCard col="col-12 col-sm-6 col-lg-3" img='https://i.ibb.co/nP8cZL2/abacaxi.png' nome="abacaxi"
                        peso={1.00} price={12.90} />
                    <ProductCard col="col-12 col-sm-6 col-lg-3" img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                        peso={1.00} price={12.90} />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Suggestion