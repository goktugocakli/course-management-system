import styled from "styled-components/macro";

export const Label = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  background: red;
  width: 500px;
  height:100px;


  @media(max-width: 600px) {
    background:green;
    flex-direction: column;
  }

`;

export const Button = styled.button`


outline: 2px solid blue;
&:hover {
    outline: 2px solid green;
}

`;

