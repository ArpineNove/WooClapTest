import styled from 'styled-components';

export const FormSection = styled.section`
  display: flex;
  padding: 60px;
  gap: 40px;
  margin: 30px 150px;
  background: rgb(244, 248, 255);
  border-radius: 18px;
  position: relative;
  overflow: hidden;
`;

export const BlueCircle = styled.div`
  position: absolute;
  background: radial-gradient(#146aff, #2da3ff);
  width: 100%;
  height: 202%;
  border-radius: 50%;
  z-index: 0;
  right: -60%;
  top: -50%;
`;
