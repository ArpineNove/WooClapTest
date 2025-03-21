import styled from 'styled-components';

interface ModalContentProps {
  type?: 'error' | 'success';
}

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div<ModalContentProps>`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  width: 560px;
  max-width: 90%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  color: ${({ type }) => (type === 'error' ? 'red' : 'green')};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: #ff5a5a;
  }
`;
