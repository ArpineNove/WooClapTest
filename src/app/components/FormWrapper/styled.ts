import styled from 'styled-components';

export const FormSection = styled.section`
  display: flex;
  padding: var(--spacing-xl);
  gap: 40px;
  margin: var(--spacing-md) var(--spacing-page-horizontal);
  background: var(--color-background-secondary);
  border-radius: var(--border-radius-lg);
  position: relative;
  overflow: hidden;
`;

export const BlueCircle = styled.div`
  position: absolute;
  background: radial-gradient(var(--color-primary), #2da3ff);
  width: 100%;
  height: 202%;
  border-radius: 50%;
  z-index: 0;
  right: -60%;
  top: -50%;
`;
