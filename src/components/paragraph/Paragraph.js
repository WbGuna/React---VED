import "./Paragraph.css"


function Paragraph(props) {


    return (

        <div className="row pdd">
            <p>
                {props.children }
            </p>

        </div>


    )





}
export default Paragraph