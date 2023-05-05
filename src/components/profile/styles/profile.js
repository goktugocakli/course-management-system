import styled from "styled-components/macro";

export const Text = styled.p`
  margin-left:10px;
  font-size:24px;
`;

export const TextBold = styled.p`
  margin-left:10px;
  font-size:24px;
  font-weight:bold;
`;

export const Photo = styled.img.attrs((props) => ({
  src:props.src
}))`
  width:150px;
  height:150px;
  margin-left:100px;
  margin-right:100px;
  margin-top:20px;
  margin-bottom:auto;
`;


export const Button = styled.button`

  margin-top:30px;
  margin-left:10px;
  border-radius:10px;
  width: 260px;
  height:45px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:18px;
  
  &:hover {
      outline: 2px solid green;
  }

`;