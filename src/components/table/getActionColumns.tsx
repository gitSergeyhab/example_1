import { Button, type TableColumnsType } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
export interface getTariffColumnsArgs<T> {
  onEdit?: (record: T) => void;
  onDelete?: (tariff: T) => void;
}
export const getActionColumns = <T,>({
  onEdit,
  onDelete,
}: getTariffColumnsArgs<T>): TableColumnsType<T> => [
  {
    title: 'Действие',
    dataIndex: 'action',
    key: 'action',
    render: (_, item) => (
      <div style={{ display: 'flex', gap: '10px' }}>
        {onEdit && (
          <Button
            size="small"
            type="primary"
            shape="circle"
            onClick={() => onEdit(item)}
            icon={<EditOutlined />}
            title="Редактировать"
          />
        )}
        {onDelete && (
          <Button
            type="primary"
            shape="circle"
            danger
            onClick={() => onDelete(item)}
            icon={<DeleteOutlined />}
            size="small"
            title="Удалить"
          />
        )}
      </div>
    ),
  },
];
