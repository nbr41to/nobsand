import { useRef, useCallback } from 'react';

export const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const showModal = useCallback(() => {
    if (ref.current) {
      ref.current.showModal();
    }
  }, []);

  const closeModal = useCallback(() => {
    if (ref.current) {
      ref.current.close();
    }
  }, []);

  return { ref, showModal, closeModal };
};
