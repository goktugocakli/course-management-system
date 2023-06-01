import styled from "styled-components/macro";
import {Colors} from "../../../constants/globalStyle";


export const Row = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  position:relative;


  @media(max-width: 600px) {
    background:green;
    flex-direction: column;
  }

`;

export const Column = styled.div`
  display:flex;
  flex-direction: column;
  position:relative;


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
  background:${Colors.primarycolor};



  @media(max-width: 600px) {
    background:green;
    flex-direction: column;
  }

`;

export const HeaderBold = styled.p`
  margin-left:40px;
  font-size:22px;
  color:#FFFFFF;
  font-weight:600;
  font-family: Arial, Verdana, sans-serif;
`;

export const HeaderNormal = styled.p`
  margin-right:40px;
  color:#FFFFFF;
  font-size:20px;
  font-family: Arial, Verdana, sans-serif;
`;





