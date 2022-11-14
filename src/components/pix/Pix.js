import React, { useState } from 'react'
import qrcode from '../../components/asserts/imagens/qrcode.jpg'
import './Pix.css'


function Pix (props) {

    return (
        <>

        <div>
            <h4 className="d-flex justify-content-between align-items-center mb-3 mt-5">
                <span className="">Método de Pagamento : Pix</span>
            </h4>
            <div className="row gy-3 list1 mt-3">
                <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                    <h2 className="text-center mb-2" >QR code</h2>
                    <img src={qrcode}
                        width="120px" />
                    <h4>ou copie o código: </h4>
                    <div className="container mb-3">
                        <input type="text" disabled className="w-100 pix text-center" value="73fg7g6s7t65cxb78cv9c5x356h78dx4345ds6gs87vcx7" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Pix 