
import './CardInfo.css'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { Modal } from 'react-bootstrap'
import React, { useState } from 'react'


function CardInfo(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validacao, setValidacao] = useState(true)


    return (
        <>
            <div class="col-12 border mb-2 mocall">
                <li id={props.id}>
                    <label className="margin" for={props.id}>Nome: {props.nome}</label>
                    <label className="margin" for={props.id}>Nº {props.numero}</label>
                    <label className="margin" for={props.id}>Val: {props.mes}/{props.ano}</label>
                    <div className="col-12 col-sm-4   ">
                    <button onClick={() => handleShow()} className="btn-delete"> Excluir</button>
                    </div>
                </li>
            </div>
        

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title className={validacao
                ? "body-success"
                : 'body-error'}>
                <> <AiOutlineCloseCircle size="30" /> Confirmação de exclusão</>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body >
            {validacao
                ? <></>
                : <> Verifique seus dados.</>
            }
        </Modal.Body>
        <Modal.Footer>
            <div className=" col-12 justify-content-center align-items-center d-flex">
                <> <button className='btn btn-delete btn-lg' onClick={() => {
                    props.delete(props.id)
                    setTimeout(
                        () => {
                            handleClose()
                        }, 1000)
                }}  >Confirmar</button></>
            </div>

        </Modal.Footer>
    </Modal>
    </>
)}

export default CardInfo