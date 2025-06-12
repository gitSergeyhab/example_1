import { useMutation } from '@tanstack/react-query';
import type { ExampleDataAdd } from './type';
import { wait } from '@/utils/wait';
import { message } from 'antd';

const requestPost = async (data: ExampleDataAdd) => {
  await wait(1000);
  return { ...data, id: 1 };
};

export const usePostData = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: requestPost,
    onSuccess: (d) => {
      message.success(`Данные успешно добавлены: ${JSON.stringify(d)}`);
    },
    onError: () => {
      message.error('Произошла ошибка при добавлении данных');
    },
  });

  return { postData: mutate, isPendingPostData: isPending };
};
