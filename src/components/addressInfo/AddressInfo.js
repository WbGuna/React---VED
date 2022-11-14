import './Addressinfo.css'
import { AiOutlineCloseCircle } from "react-icons/ai"
import {  Modal } from 'react-bootstrap' 
import React, {useState} from 'react'

function AddressInfo(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validacao, setValidacao] = useState(true)
    

    return (
        <>
            <div className="col-12 mb-1 border-address mocall">
                <label className="margin" for={props.id}> Avenida: <div className="border-top">{props.av}</div></label>
                <label className="margin" for={props.id}>N°: {props.n}</label>
                <label className="margin" for={props.id}>Complemento: {props.complement}</label>
                <label className="margin" for={props.id}>Bairro: {props.district}</label>
                <label className="margin" for={props.id}>CEP: {props.zipcode} </label>
                <label className="margin" for={props.id}>Cidade: {props.city}</label>
                <label className="margin" for={props.id}>Estado: {props.states}</label> 
                <label className="margin" for={props.id}>Estado: {props.uf}</label>
                <div className="col-12 col-sm-4   ">
                    <button onClick={() => handleShow() } className="btn-delete"> Excluir</button>
                </div>
            </div>



              {/* //modal delete */}
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
    )
}

export default AddressInfo