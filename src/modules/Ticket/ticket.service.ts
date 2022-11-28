import { post, get } from 'apis/apiHelper';
import { ICreateTicketPayload } from './type';

export const postCreateTicket = (payload: ICreateTicketPayload) =>
  post({ path: '/tickets', requestParams: payload });

export const getUsersList = (dept_id, org_id?) => {
  if (dept_id === 'unassigned') {
    // to fetch employees who doesn't  belong to any department
    return get({ path: `organization/${org_id}/users` });
  }
  return get({ path: `/departments/${dept_id}/users` });
};
