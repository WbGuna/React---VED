import './ModalConsumo.css'
import Title from '../../components/title/Title'
import CarroseuHome from '../carroseu/CarroseuHome'; 
import React, { useState, useEffect } from 'react'


function ModalConsumo(props) {




  return (
    <>
      <button type="button" className="btn btn-suport " data-bs-toggle="modal" data-bs-target="#exampleModal">
        Sugestão de Consumo </button>


      <div className="modal fade container-fluid" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog  modal-dialog1 ">
          <div className="modal-content  modal-content1 ">
            <div className="d-flex">
              <div className="col-11">
                <Title label="Sugestão de Consumo" />
              </div>
              <div className="col-1  d-flex align-items-center">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>

            <div className=" col-12 container  ">
              <div>
                <hr />
                <h2 className=" row d-flex justify-content-center sugest2">{props.titulo}</h2>
              </div>

              <div className="d-flex justify-content-center">
                <img className="imagemsugestao1 imgresp " src='https://www.guiadasemana.com.br/contentFiles/system/pictures/2015/11/147421/original/bolo-de-coco.jpg' width={375} />
              </div>

              <div className="container primeiroAB mt-3 ">
                <div className="row ">
                  <div className="col-lg-6 col-md-12">
                    <h2 className="col-12 sugest2">Ingredientes</h2>
 
                    {props.ingredientes}
                  </div>
                  <div className=" col-6  d-flex justify-content-center">
                    <img className="imagemsugestao " src="https://www.guiadasemana.com.br/contentFiles/system/pictures/2015/11/147421/original/bolo-de-coco.jpg" />
                  </div>
                </div>
              </div>

              <div className="container mt-5 segundoAB text-align-justify ">
                <hr />
                <h2 className='sugest2'>Como Preparar</h2>
                <div className="row">
                  <div className="col-12">
                   
                    {props.preparo}
                  </div>
                </div>
              </div>

              <hr />

              <CarroseuHome />


            </div>
          </div>
        </div>

      </div>


    </>
  );
}

export default ModalConsumo