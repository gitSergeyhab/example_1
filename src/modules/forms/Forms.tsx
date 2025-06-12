import { useQueryData } from './useQueryData';
import { usePostData } from './usePostData';
import { useQueryPoints } from './useQueryPoints';
import { FormExample } from './FormExample';
import { Button } from 'antd';
import type { ExampleDataAdd, ExampleDataEdit } from './type';
import { usePutData } from './usePutData';
import type { ExampleDataSchemaEdit } from './exampleDataSchema';

export const Forms = () => {
  const { data, isLoading } = useQueryData();
  const { data: points } = useQueryPoints();

  const { isPendingPostData, postData } = usePostData();
  const { isPendingPutData, putData } = usePutData();

  if (isLoading) return <p>Loading...</p>;

  const defaultValues: Partial<ExampleDataSchemaEdit> | undefined =
    data?.[0] || undefined;

  const onPostSubmit = (item: Partial<ExampleDataAdd>) => {
    const result = postData({
      description: item.description || '',
      isActive: item.isActive || false,
      isFree: item.isFree || false,
      name: item.name || '',
      pointId: item.pointId || 0,
      price: item.price || 0,
      subData: item.subData || [],
    });
    console.log({ result }, 'post');
  };
  const onPutSubmit = (item: Partial<ExampleDataEdit>) => {
    if (!data?.[0]) return;
    const result = putData({
      id: data?.[0].id,
      description: item.description || '',
      isActive: item.isActive || false,
      isFree: item.isFree || false,
      name: item.name || '',
      pointId: item.pointId || 0,
      price: item.price || 0,
      subData: item.subData || [],
    });
    console.log({ result }, 'post');
  };

  return (
    <div style={{}}>
      <h1>Forms</h1>
      <div
        style={{
          display: 'flex',
          gap: 20,
        }}
      >
        <section style={{ backgroundColor: 'lightgray', padding: 20 }}>
          <h2>Form Add</h2>
          <FormExample onSubmit={onPostSubmit} points={points || []}>
            <Button
              htmlType="submit"
              disabled={isPendingPostData}
              loading={isPendingPostData}
            >
              Add
            </Button>
          </FormExample>
        </section>
        <section style={{ backgroundColor: 'lightgray', padding: 20 }}>
          <h2>Form Edit</h2>
          <FormExample
            onSubmit={onPutSubmit}
            points={points || []}
            defaultValues={defaultValues}
          >
            <Button htmlType="submit" disabled={isPendingPutData}>
              edit
            </Button>
          </FormExample>
        </section>
      </div>
    </div>
  );
};
