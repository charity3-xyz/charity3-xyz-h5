import React, { Component } from 'react';
import { App } from '../../components/App';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import AImg from './demo-assets/1.png';
import { Image } from '@mui/icons-material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import HelpItem from './helpItem';

const imgs = [1, 2, 3, 4, 5];

/**
 * 求助者项目列表
 */
export const SeekHelpList = () => {
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
          {imgs.map((item: any, itemIdx: number) => {
            return <HelpItem index={itemIdx} item={item} key={item + '_' + itemIdx} />;
          })}
        </List>
        <Box sx={{ textAlign: 'center' }}>
          <Pagination
            sx={{ margin: '0px auto 100px', display: 'inline-block' }}
            count={10}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </Box>
    </App>
  );
};
