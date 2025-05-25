import { Button, Input, type TableColumnsType } from 'antd';
import type { Tariff } from '../../types/tariff';
import { SearchOutlined, ClearOutlined } from '@ant-design/icons';

export const getTariffColumns = (): TableColumnsType<Tariff> => [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8, left: 0 }}>
        <Input
          placeholder="Поиск по имени"
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
          }}
          onPressEnter={() => confirm()}
          style={{ marginBottom: 8 }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            type="primary"
            danger
            size="small"
            onClick={() => {
              clearFilters?.();
              confirm();
            }}
            icon={<ClearOutlined />}
          />
          <Button
            type="primary"
            size="small"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
          />
        </div>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record.name.toLowerCase().includes((value as string).toLowerCase()),
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Активность',
    dataIndex: 'isActive',
    key: 'isActive',
    render: (isActive) => (isActive ? '+' : '-'),

    filters: [
      {
        text: 'активен',
        value: true,
      },
      {
        text: 'не активен',
        value: false,
      },
    ],

    onFilter: (value, record) => record.isActive === value,
  },
];
