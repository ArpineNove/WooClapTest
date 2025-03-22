import styled from 'styled-components';

export const Title = styled.h1`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
`;

export const Description = styled.p`
  font-weight: var(--font-weight-bold);
`;

export const SocialProof = styled.p`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
`;

export const InfoContentWrapper = styled.div`
  display: flex;
  gap: var(--spacing-xl);
  flex-direction: column;
  color: var(--color-text-primary);
  position: relative;
  z-index: 1;
`;
