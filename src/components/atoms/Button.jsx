import styled from "styled-components";

const ButtonStyled = styled.button`

border-radius: 5px;
background-color: #0b4f6c;
color: #f4faff;
border: none;
width: 80%;

&:hover{
    background-color: #f4faff;
    color: #0b4f6c;
    border: 3px solid;
    border-color: #0b4f6c;
}
`;

function Button(props) {

    return (<ButtonStyled onClick={props.onClick} >{props.boton}</ButtonStyled>);
}

export default Button;
