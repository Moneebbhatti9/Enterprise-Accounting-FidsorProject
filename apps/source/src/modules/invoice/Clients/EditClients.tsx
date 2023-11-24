import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AddClient } from '@crema/modules/invoice';
import { putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';
import { isEmptyObject } from '@crema/helpers';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { ClientType } from '@crema/models/invoice';

const EditClients = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const infoViewActionsContext = useInfoViewActionsContext();

  const [{ apiData: selectedClient }] = useGetDataApi<ClientType>(
    '/api/clients/detail',
    {} as ClientType,
    { id },
    true
  );
  const onSave = (client: ClientType) => {
    putDataApi('/api/invoice/clients/update', infoViewActionsContext, {
      client,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          'Client has been updated successfully!'
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    navigate('/invoice/clients');
  };

  return !isEmptyObject(selectedClient) ? (
    <AddClient selectedClient={selectedClient} onSave={onSave} />
  ) : null;
};

export default EditClients;
