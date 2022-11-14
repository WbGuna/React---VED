import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ok from '../asserts/imagens/ok.png'
import error from '../asserts/imagens/error.png'
import { useHistory } from "react-router-dom";
import './Button.css'

function Button(props) {

  let btn = ' ml-0  mb-3 text-center  '
  btn += props.card ? 'btn-add-card btn-lg ' : ''
  btn += props.suporte ? 'btn-suport btn-lg ' : ''
  btn += props.delete ? 'btn-delete  ' : ''
  btn += props.success ? 'btn-success btn-lg ' : ''
  btn += props.plans ? 'w-100 btn-Plano btn-lg ' : ''
  btn += props.cart ? 'btnCardDel btn-lg ' : ''
  btn += props.img ? 'button-search btn-lg ' : ''
  btn += props.none ? "none btn-lg " : ''
  btn += props.plans2 ? 'btn-Plano btn-lg  ' : '' 

  let link = props.link ? props.link : null
  let label = props.confirm ? "Sucesso!" : "Error! tente novamente!"




    return (
      <>

        {link != null 
        ? <Link to={link} onClick={props.click} className={btn} >{props.label}</Link>
        : <button type="text" className={btn} onClick={ props.click}  >{props.label}</button>
        }
           

      </>
    )



  }

  export default Button