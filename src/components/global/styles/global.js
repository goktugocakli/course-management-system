import styled from "styled-components/macro";


export const Row = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;


  @media(max-width: 600px) {
    background:green;
    flex-direction: column;
  }

`;

export const Column = styled.div`
  display:flex;
  flex-direction: column;


  @media(max-width: 600px) {
    background:green;
    flex-direction: column;
  }

`;

export const Space = styled.div`

  margin-left: auto; 
  margin-right: auto;

`;

export const Header = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  height:100px;
  background:gray;



  @media(max-width: 600px) {
    background:green;
    flex-direction: column;
  }

`;

export const HeaderBold = styled.p`
  margin-left:20px;
  font-size:24px;
  color:#FFFFFF;
  font-weight:bold;
`;

export const HeaderNormal = styled.p`
  margin-right:20px;
  color:#FFFFFF;
  font-size:24px;
`;





