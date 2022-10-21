import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

import { getUsersList, postCreateTicket } from './ticket.service';
import { createTicketPayloadType, CreateTicketErrorType } from './type';

import API_CONSTANTS from 'hooks/constants';

//todo - while ticket listing api integration (dashboard)
//1. inavalidate ticket query on successful ticket creation

export const useCreateTicket = () => {
  // const queryClient = useQueryClient();
  const { mutate, data, isLoading, error } = useMutation(
    (payload: createTicketPayloadType) => postCreateTicket({ payload }),
    {
      onSuccess: (res) => {
        // queryClient.invalidateQueries([API_CONSTANTS.TICKET]);
        toast.success(res?.data?.message);
      },
      onError: (err: AxiosError) => {
        let error = err?.response?.data as CreateTicketErrorType;
        toast.error(error?.errors || 'Failed to create ticket.');
      },
    }
  );
  return { mutate, data: data?.data?.data?.users, isLoading };
};

export const useUsers = (dept_id) => {
  const { data, isLoading } = useQuery(
    [API_CONSTANTS.USER_LIST, dept_id],
    () => getUsersList(dept_id),
    {
      onError: () => {
        toast.error('Failed to fetch department employees list.');
      },
    }
  );
  return { data: data?.data?.data?.users, isLoading };
};
