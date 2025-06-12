import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface ExampleSubData {
  name: string;
  description: string;
  value: number;
}

interface ExampleData {
  id: number;
  name: string;
  description: string;
  isFree: boolean;
  price: number;
  subData: ExampleSubData[];
}

// Тестовые данные
const data: ExampleData[] = [
  {
    id: 1,
    name: 'Product A',
    description: 'Main product',
    isFree: false,
    price: 99.99,
    subData: [
      { name: 'Feature 1', description: 'Basic feature', value: 10 },
      { name: 'Feature 2', description: 'Advanced feature', value: 20 },
    ],
  },
  {
    id: 2,
    name: 'Product B',
    description: 'Secondary product',
    isFree: true,
    price: 0,
    subData: [{ name: 'Feature X', description: 'Free feature', value: 5 }],
  },
  {
    id: 3,
    name: 'Product C',
    description: 'Empty product',
    isFree: false,
    price: 49.99,
    subData: [],
  },
];

const columns: ColumnsType<ExampleData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Is Free',
    dataIndex: 'isFree',
    key: 'isFree',
    render: (isFree) => (isFree ? 'Yes' : 'No'),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (price) => `$${price.toFixed(2)}`,
  },
];

const SubDataTable: React.FC<{ subData: ExampleSubData[] }> = ({ subData }) => {
  const subColumns = [
    { title: 'Sub Name', dataIndex: 'name', key: 'name' },
    { title: 'Sub Description', dataIndex: 'description', key: 'description' },
    { title: 'Value', dataIndex: 'value', key: 'value' },
  ];

  return (
    <Table
      columns={subColumns}
      dataSource={subData}
      pagination={false}
      size="small"
      style={{ margin: 16 }}
      rowKey="name"
    />
  );
};

export const ExpandableTable: React.FC = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);

  const dataExpanded = data.map((item) => ({ expanded: '', ...item }));
  const columnExpanded: ColumnsType<ExampleData & { expanded: '' }> = [
    {
      title: '',
      dataIndex: 'expanded',
      key: 'expanded',
      render: (_, record) => {
        if (!record.subData.length) {
          return '';
        }
        return expandedRowKeys.includes(record.id) ? 'v' : '>';
      },
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...columns,
  ];

  return (
    <div style={{ padding: 24 }}>
      <Table
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        columns={columnExpanded}
        dataSource={dataExpanded}
        rowKey="id"
        expandable={{
          expandedRowRender: (record) => (
            <SubDataTable subData={record.subData} />
          ),
          rowExpandable: (record) => record.subData.length > 0,
          expandRowByClick: true,
          expandIconColumnIndex: -1,
          onExpand: (expanded, record) => {
            if (expanded) {
              setExpandedRowKeys([...expandedRowKeys, record.id]);
            } else {
              setExpandedRowKeys(
                expandedRowKeys.filter((key) => key !== record.id)
              );
            }
          },
        }}
      />
    </div>
  );
};
