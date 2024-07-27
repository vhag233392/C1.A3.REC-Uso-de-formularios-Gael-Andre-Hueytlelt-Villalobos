    import styled from "styled-components";

    const TextStyled = styled.h3`
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    `;

    function Text(props) {
    return <TextStyled>{props.text}</TextStyled>;
    }

    export default Text;
