import styled from 'styled-components';

interface ButtonProps {
  select: string;
}

export const HeaderContainer = styled.header`
  padding: var(--spacing-md) var(--spacing-page-horizontal);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background-primary);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: var(--spacing-sm) var(--spacing-md);
  }
`;

export const Logo = styled.a`
  font-weight: var(--font-weight-bold);
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--color-primary);
  display: flex;
  align-items: center;

  img {
    height: 32px;
    margin-right: var(--spacing-xs);
  }
`;

export const Button = styled.button<ButtonProps>`
  padding: var(--spacing-xs);
  color: var(--color-text-primary);
  border: none;
  background-color: ${({ select }) =>
    select === 'en'
      ? 'var(--color-primary)'
      : 'var(--color-background-primary)'};
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
`;
