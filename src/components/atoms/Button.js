const { default: styled } = require("styled-components");

export const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "#34eb8f" : "#34eb8f"};
color: ${props => props.primary ? "#34eb8f" : "#FFF"};
font-family:sans-serif;
font-size: 1.1em;
margin: 1em;
padding: 0.5em 3em;
border: 2px solid #FFF;
border-radius: 3px;
`;