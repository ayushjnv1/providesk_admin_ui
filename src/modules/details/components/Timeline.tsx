import {
  Timeline,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
  TimelineItem,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { Box, Chip, Paper, Typography } from '@mui/material';
import { DateFormate, getLastDaysFrom } from 'apis/utils/date.utils';
import { ticketStatusColours } from '../constants';

export const TimelineComponent = ({ activities }: any) => {
  return (
    <>
      <Timeline>
        {activities?.map((item,index) => {
          return (
            <Box key={item.created_at}>
              <TimelineItem>
                <TimelineOppositeContent>
                  <TimelineLeft date={item.created_at} index={index}/>{' '}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent>
                  <TimeLineDescription activity={item} />
                </TimelineContent>
              </TimelineItem>
            </Box>
          );
        })}
      </Timeline>
    </>
  );
};

const TimelineLeft = ({ date,index }: { date: string,index:number }) => {
  return (
    <div
      style={{
        margin: '0.3rem 0',
        minWidth: '11.5vw',
        maxWidth: '100%',
        textAlign: 'right',
        fontWeight:490,

      }}
    >
      {DateFormate(date)}
    </div>
  );
};

const TimeLineDescription = ({ activity }: { activity: any }) => {
  return (
    <Paper elevation={8} style={{ width: '40vw', maxWidth: '100%' }}>
      <div className='p-2 m-2'>
        
        <Chip
          label={activity?.current_ticket_status}
          style={{backgroundColor:ticketStatusColours[activity?.current_ticket_status]}}
          sx={{m:2}}
        />
        <Typography sx={{p:2}}>{activity?.description}</Typography>
      </div>
    </Paper>
  );
};
