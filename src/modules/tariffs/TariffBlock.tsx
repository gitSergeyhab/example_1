import { useQueryTariffs } from '../../hooks/useQueryTariffs';
import { getTariffColumns } from './getTariffColumns';
import { useModal } from '../../components/modals/SimpleModal';
import type { FC } from 'react';
import { AppTable } from '../../components/table/AppTable';
import type { Tariff } from '../../types/tariff';
import { DeleteModalContentTariff } from './modals/DeleteModalContentTariff';
import { CreateModalContentTariff } from './modals/CreateModalContentTariff';
import { EditModalContentTariff } from './modals/EditModalContentTariff';

export const TariffBlock: FC = () => {
  const { data, isLoading, isError } = useQueryTariffs();
  const { openModal, contextHolder, closeModal } = useModal('confirm');
  const { openModal: openErrorModal, contextHolder: errorContextHolder } =
    useModal('error');

  const onError = (error: Error) => {
    openErrorModal({
      content: (
        <div>
          <h3>Ошибка</h3>
          <p>{error.message}</p>
        </div>
      ),
    });
  };

  if (isError) return <p>Error</p>;

  const columns = getTariffColumns();

  const handleDelete = (tariff: Tariff) => {
    openModal({
      content: (
        <DeleteModalContentTariff
          closeModal={closeModal}
          tariff={tariff}
          onError={onError}
        />
      ),
      footer: null,
    });
  };

  const handleAdd = () => {
    openModal({
      content: (
        <CreateModalContentTariff closeModal={closeModal} onError={onError} />
      ),
      footer: null,
    });
  };

  const handleEdit = (tariff: Tariff) => {
    openModal({
      content: (
        <EditModalContentTariff
          tariff={tariff}
          closeModal={closeModal}
          onError={onError}
        />
      ),
      footer: null,
    });
  };

  return (
    <>
      <AppTable
        isLoading={isLoading}
        dataSource={data || []}
        columns={columns}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      {contextHolder}
      {errorContextHolder}
    </>
  );
};

export default TariffBlock;
