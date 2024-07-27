import styled from "styled-components";

const InputStyled = styled.input`
    border: 2px solid;
    border-radius: 0px;
    border-color: black;
    background-color: #f4faff;
    color: black;
    margin: 5px;
`;

function Input(props) {
    return (
    <InputStyled
        onChange={props.onChange}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
    ></InputStyled>
    )
}

export default Input;
