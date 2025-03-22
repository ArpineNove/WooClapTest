import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-xs);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.2);
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-sm)
    var(--spacing-sm);
  margin-bottom: var(--spacing-xs);
  border: 1px solid var(--color-border);
  background: var(--color-background-primary);
  border-radius: var(--border-radius-sm);
  color: var(--color-text-secondary);
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  appearance: none;
  position: relative;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M6 9l4-4H2z" fill="%230070f3"/></svg>')
    no-repeat right var(--spacing-sm) center;
  background-size: 12px;
  cursor: pointer;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.2);
    outline: none;
  }
`;

export const Option = styled.option`
  color: var(--color-text-secondary);
  font-family: var(--font-family);
`;

export const Label = styled.label`
  display: block;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
`;

export const Button = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
  border-radius: var(--border-radius-sm);
  color: var(--color-background-primary);
  border: none;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.1s;
  min-width: 160px;
  margin: 0 auto;

  &:hover {
    background-color: var(--color-secondary);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const FormBlock = styled.section`
  background: var(--color-background-primary);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  width: 100%;
  max-width: 600px;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
`;

export const UserName = styled.section`
  display: flex;
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const UserNameBox = styled.div`
  display: flex;
  width: 100%;
  gap: var(--spacing-xs);
  flex-direction: column;
`;

export const ErrorText = styled.span`
  color: var(--color-error);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: var(--spacing-sm);
`;
