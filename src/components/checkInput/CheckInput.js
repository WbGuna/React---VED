import './CheckInput.css'

function CheckInput(props) {

    let label = props.label ? <label className="form-check-label" for={props.id} >
        {props.label} <b>{props.frete}</b>
    </label> : null


    return (
        <>
            <div onClick={props.onClick} className="form-check">
                <input type="checkbox" name={props.name} value={props.value} className="form-check-input" id={props.id} />
                {label != null
                    ? label
                    : props.children}
            </div>
        </>
    )
}

export default CheckInput