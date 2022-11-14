import './Input.css'

function Input(props) {


    
    return (
        <>
            <div className="form-group">
                <label for={props.label} className="form-label">{props.label}</label>
                <InputMask mask="99/99/9999"  type={props.type} className="form-control" id={props.label} required />
                <div className="invalid-feedback">Apenas Letras</div>
                <div className="correct-feedback">Ok</div>
            </div>
        </>
    )
}

export default Input