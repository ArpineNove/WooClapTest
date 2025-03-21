import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 15px;

  &:focus-visible {
    border-color: #0070f3;
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px 30px 8px 8px;
  border: 1px solid #ccc;
  background: #ffffff;
  border-radius: 15px;
  color: rgb(101, 102, 134);
  appearance: none;
  position: relative;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M5 7l3-3H2z" fill="gray"/></svg>')
    no-repeat right 10px center;
  background-size: 15px;
  background-position: 92%;

  &:focus-visible {
    border-color: #0070f3;
    outline: none;
  }
`;
export const Option = styled.option`
  color: rgb(101, 102, 134);
`;

export const Label = styled.label`
  font-size: 12px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  display: flex;
  font-weight: 900;
  font-size: 17px;
  border-radius: 18px;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 0 auto;
`;

export const FormBlock = styled.section`
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 85%;
  border-radius: 15px;
  padding: 45px;
`;

export const UserName = styled.section`
  display: flex;
  gap: 10px;
`;

export const UserNameBox = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
`;
