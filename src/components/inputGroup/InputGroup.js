import React, { useState } from 'react'
import InputMask from 'react-input-mask'


import './InputGroup.css'

function InputGroup(props) {

    let columns = " text-left mt-1 " + props.col;

    function inputa() {


        if (props.mask) {
            return (
                (props.block != null)
                    ? <InputMask mask={props.mask} value={props.value}  onBlur={props.blur} onChange={props.change}  class="form-control" id={props.id} placeholder={props.info} required disabled />
                    : <InputMask mask={props.mask} value={props.value} onBlur={props.blur} onChange={props.change}  class="form-control" id={props.id} placeholder={props.info} required />
            )
        } else {
            return (props.block != null
                ? <input value={props.value} onBlur={props.blur} onChange={props.change} type={props.type} disabled className="form-control" id={props.id} placeholder={props.info} required />
                : <input value={props.value} onBlur={props.blur} onChange={props.change} type={props.type} className="form-control" id={props.id} placeholder={props.info} />)
        }

    }



    return (
        <>
            <div className={columns}>
                <label for={props.id} className=" text-input">{props.label}</label>
            { inputa() }

            </div>
        </>
    )
}

export default InputGroup
