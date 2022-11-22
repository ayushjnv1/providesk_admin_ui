import { IFetchComplaintListRequest } from 'modules/dashboard/types';
import { useQuery } from 'react-query';
import { getRequestList } from './dashboard.services';

export const useGetRequestsList = (queryParams: IFetchComplaintListRequest) => {
  let path = '/tickets';
  // if (queryParams?.department?.length > 0)
  //   path = path + `department=${queryParams.department}`;
  // if (queryParams?.status?.length > 0)
  //   path = path + `category=${queryParams.}`;
   let params = {
    type : queryParams?.type!==""?queryParams?.type:undefined,
    category:queryParams?.category!==""?queryParams?.category:undefined ,
    status : queryParams?.status!==""?queryParams.status:undefined,
    department : queryParams?.department!==""?queryParams.department:undefined,
    assigned_to_me:queryParams?.assig_to_me=== true?true:undefined,
    created_by_me:queryParams?.created_by_me===true?true:undefined,
  }
  const { data, isLoading, isFetching } = useQuery(['complaint-list',params], () =>
    getRequestList(path,params)
  );
  return {
    data: data?.data,
    isLoading: isLoading || isFetching,
  };
};
