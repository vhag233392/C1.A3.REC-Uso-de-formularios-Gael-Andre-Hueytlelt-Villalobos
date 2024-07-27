import Input from "../atoms/Input";

import './Formulario.css'

function Formulario(props){

    return(

        <div id="divFormulario" >

            
            <Input onChange = {props.onChange} type={props.type} placeholder={props.placeholder} value={props.value}></Input>

        </div>
    )

}

export default Formulario;