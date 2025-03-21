import styled from 'styled-components';

interface PresentBlockProps {
  reversed?: boolean;
}

export const PresentInfoBlock = styled.section`
  display: flex;
  gap: 60px;
  flex-direction: column;
  justify-content: center;
`;

export const PresentBlock = styled.div<PresentBlockProps>`
  margin: 0 150px;
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
`;

export const Description = styled.p`
  font-size: 20px;
  color: rgb(101, 102, 134);
  font-weight: 600;
`;
