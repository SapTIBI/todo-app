import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const portalRoot = document.getElementById('portal');

  if (!isOpen) return null;

  if (!portalRoot) {
    throw new Error('Элемент с id "portal" не найден в DOM');
  }

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;