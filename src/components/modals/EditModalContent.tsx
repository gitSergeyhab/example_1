import { Button } from 'antd';
import type { FC } from 'react';

interface DeleteModalContentProps {
  closeModal: () => void;
  title: string;
  text: string;
  okText?: string;
  cancelText?: string;
  onDelete: VoidFunction;
  isLoading?: boolean;
}
export const DeleteModalContent: FC<DeleteModalContentProps> = ({
  closeModal,
  title,
  text,
  okText,
  cancelText,
  onDelete,
  isLoading,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <Button onClick={closeModal}>{cancelText || 'Отмена'}</Button>
        <Button
          type="primary"
          danger
          loading={isLoading}
          disabled={isLoading}
          onClick={onDelete}
        >
          {okText || 'Удалить!'}
        </Button>
      </div>
    </div>
  );
};
