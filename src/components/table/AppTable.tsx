import { Button, Table, type TableColumnsType } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getActionColumns } from './getActionColumns';

export interface AppTableProps<T> {
  dataSource: T[];
  columns: TableColumnsType<T>;
  isLoading?: boolean;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onAdd?: () => void;
}
export const AppTable = <T,>({
  dataSource,
  columns,
  isLoading,
  onEdit,
  onDelete,
  onAdd,
}: AppTableProps<T>) => {
  const actionColumns = getActionColumns({ onEdit, onDelete });

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {onAdd && (
        <Button icon={<PlusOutlined />} onClick={onAdd}>
          Добавить
        </Button>
      )}

      <Table
        style={{ marginTop: 20, width: '100%' }}
        dataSource={dataSource}
        columns={[...columns, ...actionColumns]}
        loading={isLoading}
        pagination={{
          pageSizeOptions: [5, 10, 20],
          defaultPageSize: 10,
          showSizeChanger: true,
          // locale: {
          //   items_per_page: ' на странице',
          //   jump_to: 'Перейти',
          //   jump_to_confirm: 'подтвердить',
          //   page: 'Страница',
          //   prev_page: 'Назад',
          //   next_page: 'Вперед',
          // },
        }}
      />
    </div>
  );
};
