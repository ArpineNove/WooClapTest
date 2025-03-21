import React, { useRef, useEffect, MouseEvent } from 'react';
import { ModalWrapper, ModalContent, CloseButton } from './syled';

interface ModalProps {
  visible: boolean;
  close: () => void;
  modalInfo: string;
  type?: 'error' | 'success';
}

const Modal: React.FC<ModalProps> = ({ visible, close, modalInfo, type }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      close();
    }
  };

  if (!visible) return null;

  return (
    <ModalWrapper onClick={handleClickOutside}>
      <ModalContent type={type} ref={modalRef}>
        <CloseButton onClick={close}>✖</CloseButton>
        <p>{modalInfo}</p>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
