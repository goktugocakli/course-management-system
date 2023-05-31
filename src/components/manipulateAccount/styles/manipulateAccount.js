import styled from 'styled-components'

export const Label = styled.p`

  margin-top:10px;
  font-size:32px;
`;

export const InputLabel = styled.p`
  margin: 25px 10px 10px 0;
  font-size: 20px;
  display: inline-block;
  
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  margin: 10px 10px 0 10px;
  border-radius: 10px;
  display: inline-block;
  font-size: medium;
  padding-left:10px;
  margin-inline-end: 100px;
  
`;

export const OutlineButton = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 10px;
  margin-left:30px;
  font-size: 15px;
  border-width:1px;
  color: ${props => props.color || 'red'};
  border-color: ${props => props.color || 'red'};
  background:white;
}
`;

export const Button = styled.button`
  width: 270px;
  height: 45px;
  border-radius: 10px;
  margin-left:125px;
  margin-inline-end: 30px;
  font-size: 15px;
  color: white;
  background-color: rgba(72, 12, 168, 1);
}
`;

export const Select = styled.select`
  width: 270px;
  height:45px;
  border-radius: 10px;
  font-size: 16px;
  font-family: Verdana;
  padding-left:15px;
  margin-left:40px;

`;

export const Option = styled.option`
    
`;

export const Div = styled.div`
    margin-left:100px;
    margin-top:100px;
    border-radius:20px;
`;

export const ButtonRow = styled.div`
    display:flex;
    flex-direction:row;
    margin-left:40px;
    margin-top:100px;
    width:900px;
    border-radius:20px;
`;