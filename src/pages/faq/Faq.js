import './Faq.css'



import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Title from '../../components/title/Title'
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Paragraph from '../../components/paragraph/Paragraph'

function Faq() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="mb-3">
                    <Title  label="FAQ " />
                </div>


                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Como comprar?</Accordion.Header>
                        <Accordion.Body>
                            Nós da VED preparamos uma pagina só com dicas e o passo a passo de como realizare uma compra completa e facil em nosso site, você pode acessar ele atravez desse link:   <Link to="/howToBuy" className="text-success">Clique Aqui.</Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Quais cartões de crédito que são aceitos?</Accordion.Header>
                        <Accordion.Body>
                            Trabalhamos com os Principais bancos, como:  Bradesco, Itau, Santander,
                            Assim como os Digitais:  Nubank, C6 Bank, Mercado Pago

                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Este valor pode ser parcelado?</Accordion.Header>
                        <Accordion.Body>
                            Nós parcelamos em até 6x Sem Juros no cartão de crédito.
                        </Accordion.Body>
                    </Accordion.Item> 


                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Todos os produtos são Veganos?</Accordion.Header>
                        <Accordion.Body>
                           Não. trabalhos essencialmente com produtos ôrganicos, como por exemplo de mel Organicos que não é Vegano.

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <Footer />
        </>
    )
}

export default Faq