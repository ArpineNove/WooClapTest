import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  margin-bottom: var(--spacing-sm);
  padding: var(--spacing-xs);
  border: 1px solid #ccc;
  border-radius: var(--border-radius-md);

  &:focus-visible {
    border-color: var(--color-primary);
    outline: none;
  }
`;

// extract svg
export const Select = styled.select`
  width: 100%;
  margin-bottom: var(--spacing-sm);
  padding: var(--spacing-xs) 30px var(--spacing-xs) var(--spacing-xs);
  border: 1px solid #ccc;
  background: var(--color-background-primary);
  border-radius: var(--border-radius-md);
  color: var(--color-text-secondary);
  appearance: none;
  position: relative;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M5 7l3-3H2z" fill="gray"/></svg>')
    no-repeat right 10px center;
  background-size: 15px;
  background-position: 92%;

  &:focus-visible {
    border-color: var(--color-primary);
    outline: none;
  }
`;
export const Option = styled.option`
  color: var(--color-text-secondary);
`;

export const Label = styled.label`
  font-size: var(--font-size-xs);
`;

export const Button = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-primary);
  display: flex;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
  border-radius: var(--border-radius-lg);
  color: var(--color-background-primary);
  border: none;
  cursor: pointer;
  margin: 0 auto;
`;

export const FormBlock = styled.section`
  background: var(--color-background-primary);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  width: 85%;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
`;

export const UserName = styled.section`
  display: flex;
  gap: var(--spacing-sm);
`;

export const UserNameBox = styled.div`
  display: flex;
  width: 100%;
  gap: var(--spacing-sm);
  flex-direction: column;
`;
