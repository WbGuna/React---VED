import React, { useState } from 'react'
import './RadioBox.css'

function RadioBox(props) {


    return (
        <>
            <div onClick={props.onClick}  class="form-check">
                <input class="form-check-input" type="radio" name={props.name} id={props.id} />
                <label class="form-check-label" for={props.id}>
                    {props.label}
                </label>
            </div>
        </>
    )
}

export default RadioBox