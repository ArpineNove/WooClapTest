import styled from 'styled-components';

interface PresentBlockProps {
  reversed?: boolean;
}

export const PresentInfoBlock = styled.section`
  display: flex;
  gap: var(--spacing-xl);
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-xl) 0;
`;

export const PresentBlock = styled.div<PresentBlockProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};

  @media (max-width: 992px) {
    flex-direction: column;
    gap: var(--spacing-lg);
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`;
