import styled from 'styled-components';

interface PresentBlockProps {
  reversed?: boolean;
}

export const PresentInfoBlock = styled.section`
  display: flex;
  gap: var(--spacing-xl);
  flex-direction: column;
  justify-content: center;
`;

export const PresentBlock = styled.div<PresentBlockProps>`
  margin: 0 var(--spacing-page-horizontal);
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
`;

export const Title = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
`;

export const Description = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
`;
