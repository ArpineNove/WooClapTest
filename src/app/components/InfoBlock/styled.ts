import styled from 'styled-components';

export const Title = styled.h1`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  margin-bottom: var(--spacing-md);

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

export const Description = styled.p`
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-md);
  line-height: 1.5;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  max-width: 650px;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;

export const SocialProof = styled.p`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin: var(--spacing-lg) 0;
`;

export const InfoContentWrapper = styled.div`
  display: flex;
  gap: var(--spacing-xl);
  flex-direction: column;
  color: var(--color-text-primary);
  position: relative;
  z-index: 1;
  padding: var(--spacing-xl) 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;
