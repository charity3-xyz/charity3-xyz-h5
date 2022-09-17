import { Box, Button, Grid, Typography, List } from '@mui/material';
import React, { Component } from 'react';
import { App } from '../../components/App';

import { navigationServices } from '@aomi/mobx-history';
import { Container } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import CensorItem from './censorItem';
import { route } from '../../constants/route';
/**
 * 社工结构节点项目列表
 */

export class CensorList extends Component<any, any> {
  render() {
    return (
      <App RootComponent={Container} sx={{ margin: '3.4rem auto 0px' }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography className="mui-title" variant="h4" sx={{ marginBottom: '2rem' }}>
              Apply for new fund-raising
            </Typography>
          </Grid>
        </Grid>
        <List sx={{ width: '100%', maxWidth: 1200 }}>
          {[1, 2, 3, 4, 5].map((item: any, itemIdx: number) => {
            return <CensorItem index={itemIdx} item={item} key={item + '_' + itemIdx} />;
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
      </App>
    );
  }
}
