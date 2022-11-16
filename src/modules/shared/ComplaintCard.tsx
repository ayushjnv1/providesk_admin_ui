import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { IComplaintDetails } from 'modules/dashboard/types';
import ROUTE from 'routes/constants';
import { List, ListItem } from '@mui/material';
interface Props {
  details: IComplaintDetails;
}

const ComplaintCard: React.FC<Props> = (props) => {
  const { details } = props;
  const {
    id,
    title,
    raised_by,
    created_at: raised_time,
    updated_time: last_update_time,
    status,
    assigned_to,
    department,
  } = details;

  const navigate = useNavigate();

  // navigate to the details page of specific complaint
  const onCardClick = () => {
    navigate(`${ROUTE.DASHBOARD}/${id}`);
  };

  const complaintConfig = [
    {
      label: 'Department',
      value: department,
    },
    {
      label: 'Raised by',
      value: raised_by,
    },
    {
      label: 'Raised Time',
      value: raised_time,
    },
    {
      label: 'Assigned To',
      value: assigned_to,
    },
    {
      label: 'Department',
      value: department,
    },
    { label: 'Last Updated Time', value: last_update_time },
  ];

  return (
    <Card variant="outlined" onClick={onCardClick}>
      <CardContent className='px-3 pb-2'>
        <Stack
          direction='row'
          spacing={1}
          className='justify-content-between mb-3'
        >
          <Chip label={id} />
          <Chip label={status} color='primary' className='text-truncate' />
        </Stack>
        <Typography variant='h6' className='text-truncate mb-2'>
          {title}
        </Typography>
        <List className='p-0 card-list'>
          {complaintConfig.map((config) => (
            <ListItem className='card-list-item gap-3 p-2'>
              <Typography variant='body2' className='me-auto'>{config.label}</Typography>
              <Typography variant='body1' className='fw-bold'>{config.value}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default React.memo(ComplaintCard);
