import React, { useState } from 'react'
import './SpanOKError.css'

function OkError(props) {

    let error = "msg-nome  msg-success  disblock" 

    if (props.validador){
        
    }


    return (
        <>
          <span className={error}>ok</span>
        </>
    )
}

export default OkError