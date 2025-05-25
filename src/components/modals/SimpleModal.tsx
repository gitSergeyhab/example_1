import { Modal, type ModalFuncProps } from 'antd';
import React, { useRef } from 'react';

type ModalType = 'info' | 'success' | 'error' | 'warning' | 'confirm';

export interface UseModalReturn {
  openModal: (config?: ModalFuncProps) => void;
  closeModal: () => void;
  updateModal: (config: ModalFuncProps) => void;
  contextHolder: React.ReactElement;
}

export const useModal = (modalType?: ModalType): UseModalReturn => {
  const [modal, contextHolder] = Modal.useModal();
  const modalInstance = useRef<ReturnType<typeof modal.confirm>>(null);

  const openModal: UseModalReturn['openModal'] = (config = {}) => {
    modalInstance.current = modal[modalType || 'error']({
      icon: null,
      ...config,
    });
  };

  const closeModal: UseModalReturn['closeModal'] = () => {
    modalInstance.current?.destroy();
  };

  const updateModal: UseModalReturn['updateModal'] = (config) => {
    modalInstance.current?.update(config);
  };

  return {
    openModal,
    closeModal,
    updateModal,
    contextHolder,
  };
};
