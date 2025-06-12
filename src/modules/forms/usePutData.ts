import { useMutation } from '@tanstack/react-query';
import type { ExampleDataEdit } from './type';
import { wait } from '@/utils/wait';
import { message } from 'antd';

const requestPut = async (data: ExampleDataEdit) => {
  await wait(1000);
  return { ...data, id: 1 };
};

export const usePutData = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: requestPut,
    onSuccess: (d) => {
      message.success(`Данные успешно изменены: ${JSON.stringify(d)}`);
      console.log({ d });
    },
    onError: () => {
      message.error('Произошла ошибка при изменении данных');
    },
  });

  return { putData: mutate, isPendingPutData: isPending };
};
