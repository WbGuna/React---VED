import { useState } from 'react';
import { Button, Container, Row, Col, Popover, OverlayTrigger } from 'react-bootstrap';
import './PopoverCart.css'
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react';


function PopoverCart(props) {
    const [qty, setQty] = useState(0)
    const [total, setTotal] = useState(props.valor)

    const valorTotal = (qty * total)
    console.log(Math.round(valorTotal))


    return (

        <>
            {['bottom'].map((placement) => (
                <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                            <Popover.Header as="h3">{`Minha Cesta ${placement}`}</Popover.Header>
                            <Popover.Body>
                                <Container>

                                    <Row >
                                        <Col xs={5} md={5}>

                                            <Link to="/product">
                                                <img className="mr-3 imgfruta" src="https://i.ibb.co/nP8cZL2/abacaxi.png" alt="Banana-Prata-Organica-600g-800g-Ved" />
                                            </Link>
                                        </Col>


                                        <Col xs={7} md={7}>
                                            <Link to="product" className="text-decoration-none text-success">
                                                {props.nome}
                                            </Link>



                                            <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
                                            <h6>Valor Item: R$ 4,98{props.valor}</h6>
                                            <small className="text-secondary">Valor Total: {valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </small>
                                            <button className=" btn-sm" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>

                                        </Col>
                                    </Row>

                                </Container>
                            </Popover.Body>
                        </Popover>
                    }>
                    {/*  <Button className="shopping-cart"><img src={cart} alt="Carrinho" width="60px" />Cesta</Button>*/}
                    <Link className="icon-cesta icon-config" to='/cart'>Cesta teste</Link>

                </OverlayTrigger>
            ))}
        </>
    )
}
export default PopoverCart;