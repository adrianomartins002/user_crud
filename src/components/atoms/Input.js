const { default: styled } = require("styled-components");

export const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
color: ${props => props.inputColor || "black"};
background: #FFF;
border: none;
font-family:sans-serif;
font-size: 1.1em;
border-radius: 3px;
`;
