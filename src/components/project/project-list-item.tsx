import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Status, StatusText } from '../../constants/project';
import { Stack } from '@mui/material';
import { toJS } from 'mobx';
import { ReviewResult } from '@aomi/common-service/ReviewService/ReviewResult';
import { Countdown } from './countdown';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#44E371' : '#308fe8',
  },
}));

export const StatusColor = {
  [Status.WAIT]: '#F7A600',
  [Status.REVIEWING]: '#F7A600',
  [Status.FUNDRAISING]: '#44E371',
  [Status.PUBLICITY]: '#000',
  [Status.ARBITRATION]: '#000',
  [Status.TURN_DOWN]: '#EF454A',
  [Status.CANCEL]: '#ADB1B8',
  [Status.FINISH]: '#ADB1B8',
};

export const ProjectListItem = ({ project }: { project: any }) => {
  const process = (project.actualAmount ?? 0 / project.totalAmount ?? 1) * 100;

  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        backgroundColor: '#fff',
        borderRadius: '0.75rem',
        marginBottom: '0.875rem',
        padding: '2rem',
      }}
    >
      <ListItemAvatar sx={{ marginRight: '1.8125rem' }}>
        <img
          style={{
            width: '13.25rem',
            height: '7.4375rem',
            borderRadius: '10px',
          }}
          src={project.imgUrls?.[0]}
        />
        <ImageList sx={{ width: '13.25rem', height: '2.25rem', marginTop: '.75rem' }} cols={3} rowHeight="auto">
          {project.imgUrls?.map((child: any, idx: number) => {
            return (
              <ImageListItem key={idx}>
                <img
                  style={{ borderRadius: '4px', height: '2.25rem' }}
                  src={`${child}`}
                  srcSet={`${child}`}
                  alt={project.title}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </ListItemAvatar>
      <ListItemText
        sx={{ margin: 0 }}
        primary={
          <Grid container>
            <Grid item xs={6}>
              <Typography
                component="span"
                sx={{
                  fontWeight: 700,
                  fontSize: '1.75rem',
                  lineHeight: '2.25rem',
                  letter: '.2px',
                  color: '#121214',
                }}
              >
                {project.title}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <Typography component="span" sx={{ fontSize: '.75px', color: '#ADB1B8' }}>
                Item Number：
              </Typography>
              <Typography component="span" sx={{ fontSize: '.75px', color: '#121214' }}>
                {project.id}
              </Typography>
            </Grid>
          </Grid>
        }
        secondary={
          <Stack>
            <Typography
              sx={{ display: 'block', marginTop: '0.375' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {`Patient: ${project.userName}`}
            </Typography>
            <Typography sx={{ display: 'block', marginTop: '.75rem' }} component="span" variant="body2" color="#81858C">
              {project.description ?? '-'}
            </Typography>

            <Grid mt={2} container>
              <Grid item md={6}>
                {/*捐赠中*/}
                {project.status === Status.FUNDRAISING && (
                  <>
                    <BorderLinearProgress sx={{ width: '100%' }} variant="determinate" value={process} />
                    <Stack flexDirection="row" justifyContent="space-between" color="rgba(129, 133, 140, 1)">
                      <Typography fontSize={14}>{`${process.toFixed(2)}%`}</Typography>
                      <Typography fontSize={14}>
                        {'Total funding: '}
                        <Typography component="span" color="primary.main">{`${project.totalAmount} USDT`}</Typography>
                      </Typography>
                    </Stack>
                  </>
                )}
                {/*驳回理由*/}
                {project.reviewResult === ReviewResult.REJECTED && (
                  <Typography fontSize={12}>{`驳回理由: ${project.resultDescribe}`}</Typography>
                )}
                {/* 公示期 */}
                {project.status === Status.PUBLICITY && <Countdown project={project} />}
              </Grid>
              <Grid item md={6} textAlign="right">
                <Typography component="span">{'Status: '}</Typography>
                <Typography
                  component="span"
                  sx={{
                    display: 'inline',
                    color: (StatusColor as any)[project.status],
                  }}
                  fontSize="1.5rem"
                >
                  {(StatusText as any)[project.status]}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        }
      />
    </ListItem>
  );
};
