import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import AImg from './demo-assets/1.png';
import { Image } from '@mui/icons-material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import StatusRunning from './comps/status-running';
import StatusPublicity from './comps/status-publicity';
import StatusEnd from './comps/status-end';
import StatusExamine from './comps/status-examine';
import StatusReject from './comps/status-reject';

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

const imgs = [
  'https://img1.baidu.com/it/u=1467104210,934574726&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=340',
  'https://img2.baidu.com/it/u=2264415310,4211971198&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=333',
  'https://img0.baidu.com/it/u=3988276798,1292402657&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=315',
  'https://img1.baidu.com/it/u=4258405241,2344256764&fm=253&fmt=auto&app=120&f=JPEG?w=950&h=634',
  'https://img0.baidu.com/it/u=2595104819,1045674031&fm=253&fmt=auto&app=138&f=JPEG?w=1350&h=500',
];

const Item = ({ item, index }: { item: any; index: number }) => {
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
          src={imgs[0]}
        />
        <ImageList sx={{ width: '13.25rem', height: '2.25rem', marginTop: '.75rem' }} cols={3} rowHeight="auto">
          {imgs.map((child: any, idx: number) => {
            return (
              <ImageListItem key={idx}>
                <img
                  style={{ borderRadius: '4px', height: '2.25rem' }}
                  src={`${child}`}
                  srcSet={`${child}`}
                  alt="图片"
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
                Severe burns
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <Typography component="span" sx={{ fontSize: '.75px', color: '#ADB1B8' }}>
                Item Number：
              </Typography>
              <Typography component="span" sx={{ fontSize: '.75px', color: '#121214' }}>
                8888888888
              </Typography>
            </Grid>
          </Grid>
        }
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'block', marginTop: '0.375' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Patient: Han Meijuan
            </Typography>
            <Typography sx={{ display: 'block', marginTop: '.75rem' }} component="span" variant="body2" color="#81858C">
              This is the introduction This is the introduction This is the introduction This is the introduction This
              is the This is the introductionThis is the introduction This is the introduction This is the introduction
              This is the introduction This is the This is the introductionThis is the
            </Typography>
            {index === 0 && (
              <BorderLinearProgress sx={{ marginTop: '1.625rem', width: '50%' }} variant="determinate" value={50} />
            )}

            {index === 0 && <StatusRunning />}
            {index === 1 && <StatusPublicity />}
            {index === 2 && <StatusExamine />}
            {index === 3 && <StatusEnd />}
            {index === 4 && <StatusReject />}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default Item;
