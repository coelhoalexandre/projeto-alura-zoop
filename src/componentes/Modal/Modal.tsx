import { useCallback, useEffect, useRef } from 'react';
import './Modal.css';
interface ModalProps extends React.HTMLProps<HTMLDialogElement> {
  estaAberta: boolean;
  ariaLabel: string;
  fecharModal: () => void;
}

const Modal = ({
  children,
  estaAberta,
  fecharModal,
  ariaLabel,
  ...rest
}: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const escutadorTecla = useCallback(
    (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        fecharModal();
      }
    },
    [fecharModal]
  );

  const capturaFoco = useCallback((evento: FocusEvent) => {
    if (!modalRef.current?.contains(evento?.target as Node)) {
      modalRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (estaAberta) {
      document.addEventListener('keydown', escutadorTecla);
      document.addEventListener('focusin', capturaFoco);
      document.body.classList.add('lock');
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', escutadorTecla);
      document.removeEventListener('focusin', capturaFoco);
      document.body.classList.remove('lock');
    };
  }, [capturaFoco, escutadorTecla, estaAberta]);

  return (
    <>
      <div className='modal__overlay' onClick={fecharModal} />
      <dialog
        className='modal__container'
        aria-label={ariaLabel}
        open={estaAberta}
        onClose={fecharModal}
        ref={modalRef}
        {...rest}
      >
        {children}
      </dialog>
    </>
  );
};

export default Modal;
