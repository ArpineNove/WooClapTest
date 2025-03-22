import styled from 'styled-components';

export const FormSection = styled.section`
  display: flex;
  padding: var(--spacing-xl);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) auto;
  background: var(--color-background-secondary);
  border-radius: var(--border-radius-md);
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  box-shadow: var(--shadow-lg);
  align-items: center;
  height: max-content;

  @media (max-width: 992px) {
    flex-direction: column;
    margin: var(--spacing-lg) var(--spacing-md);
    padding: var(--spacing-lg);
  }
`;

export const BlueCircle = styled.div`
  position: absolute;
  background: radial-gradient(var(--color-primary), var(--color-secondary));
  width: 100%;
  height: 202%;
  border-radius: 50%;
  z-index: 0;
  right: -60%;
  top: -50%;
  opacity: 0.8;

  @media (max-width: 992px) {
    right: -100%;
  }
`;
