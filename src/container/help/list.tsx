import React, { Component } from 'react';
import { App } from '../../components/App';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
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
import Button from '@mui/material/Button';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const imgs = [
  'https://img0.baidu.com/it/u=1746140732,2729620424&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=497',
  'https://img0.baidu.com/it/u=1746140732,2729620424&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=497',
  'https://img0.baidu.com/it/u=1746140732,2729620424&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=497',
];

/**
 * 求助者项目列表
 */
export class SeekHelpList extends Component<any, any> {
  render() {
    return (
      <App>
        <Box sx={{ width: '100%', margin: '3.4rem auto 0px', maxWidth: 1200 }}>
          <Grid container>
            <Grid item xs={6}>
              <Typography className="mui-title" variant="h3" sx={{ marginBottom: '2rem' }}>
                募捐申请表
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <Button sx={{ padding: '16px 32px', fontSize: '1.125rem' }} variant="contained">
                发起新的募捐
              </Button>
            </Grid>
          </Grid>

          <List sx={{ width: '100%', maxWidth: 1200 }}>
            {imgs.map((item: string, itemIdx: number) => {
              return (
                <ListItem
                  key={item + itemIdx}
                  alignItems="flex-start"
                  sx={{ backgroundColor: '#fff', borderRadius: '0.75rem', marginBottom: '0.875rem' }}
                >
                  <ListItemAvatar sx={{ marginRight: '1.8125rem' }}>
                    <img
                      style={{
                        width: '13.25rem',
                        height: '7.4375rem',
                        borderRadius: '10px',
                      }}
                      src="https://img0.baidu.com/it/u=1746140732,2729620424&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=497"
                    />
                    <ImageList sx={{ width: '13.25rem', height: '2.25rem' }} cols={3} rowHeight={'2.25rem'}>
                      {imgs.map((child: any, idx: number) => {
                        return (
                          <ImageListItem key={idx}>
                            <img
                              style={{ borderRadius: '4px' }}
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
                        </Typography>{' '}
                        <Typography
                          sx={{ display: 'block', marginTop: '.75rem' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          This is the introduction This is the introduction This is the introduction This is the
                          introduction This is the This is the introductionThis is the introduction This is the
                          introduction This is the introduction This is the introduction This is the This is the
                          introductionThis is the
                        </Typography>
                        <BorderLinearProgress
                          sx={{ marginTop: '1.625rem', width: '25.8125rem' }}
                          variant="determinate"
                          value={50}
                        />
                        <Grid
                          container
                          sx={{ margin: '.375rem', fontWeight: 400, color: '#81858C', fontSize: '.875rem' }}
                        >
                          <Grid item xs={4}>
                            55% raised
                          </Grid>
                          <Grid item xs={4}>
                            <Typography component="span">Total funding：</Typography>
                            <Typography sx={{ color: '#44E371' }} component="span">
                              20,00 USDT
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            募捐进度
                            <Typography
                              sx={{ marginLeft: '0.5625rem', fontSize: '1.5rem', color: '#44E371' }}
                              component="span"
                            >
                              募集中
                            </Typography>
                          </Grid>
                        </Grid>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </App>
    );
  }
}
