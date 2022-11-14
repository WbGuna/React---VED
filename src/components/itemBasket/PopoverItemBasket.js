import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';




function PopoverItemBasket(props) {
    // const [qty, setQty] = useState(0)
    // const [total, setTotal] = useState(props.valor)

    // const incremento = () => {
    //     setQty(qty + 1);
    // }


    // const decremento = () => {
    //     if (qty <= 0) {
    //         setQty(0);
    //     } else {
    //         setQty(qty - 1);
    //     }
    // }

    // const valorTotal = (qty * total)
    // console.log(Math.round(valorTotal))


    return (
        <>
            
               {/*} <Row >
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
                        <h4>Valor Item: {props.valor}</h4>
                        <small className="text-secondary">Valor Total: {valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </small>
                       

                    </Col>
    </Row>*/}
    
            

        </>
    )
}

export default PopoverItemBasket
