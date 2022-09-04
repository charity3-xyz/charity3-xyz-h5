import React, { Component } from 'react';
import { App } from '../../components/App';
import {
  Unstable_Grid2 as Grid,
  Box,
  Paper,
  IconButton,
  IconButtonProps,
  Avatar,
  CardHeader,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Collapse,
  Container,
  Pagination,
  Stack,
  LinearProgress,
  Button,
} from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';
import { Padding } from '@mui/icons-material';
import style from '../../styles/help/detail.module.css';
/**'
 * 求助者项目详情页面
 */
export function Detail() {
  const theme = useTheme();
  return (
    <App>
      <Container style={{ marginTop: '40px' }} className="charity-help-detail">
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 439 }}
            style={{ padding: '32px' }}
            image="/pin1.webp"
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                慈善捐赠项目主标题
              </Typography>
              <Typography component="div" variant="h6">
                慈善捐赠项目副标题
              </Typography>
              <Typography variant="body2" color="text.secondary" component="div">
                This is the introduction This is the introduction This is the introduction This is the introduction This
                is the This is the introductionThis is the introduction This is the introduction This is the
                introduction This is the introduction This is the This is the introductionThis is the introduction This
                is the introduction This is the introduction This is the introduction This is the This is the
                introduction
              </Typography>
            </CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} style={{}}>
              <Box sx={{ display: 'flex', alignItems: 'center', pb: 1, flex: 3 }} style={{ margin: '20px' }}>
                <Stack style={{ display: 'flex', flex: 1 }}>
                  <LinearProgress variant="determinate" value={50} sx={{ borderRadius: 100, height: 20 }} />
                  <Box style={{ position: 'relative' }}>
                    <Typography variant="caption">55% raised</Typography>
                    <Typography style={{ position: 'absolute', right: 0 }} variant="overline">
                      Total funding:<span style={{ color: '#44E371' }}>20,000 USDT</span>
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box style={{}}>
                <Button variant="contained" disableElevation>
                  Disable elevation
                </Button>
              </Box>
            </Stack>
            <Box position="absolute" right={0}>
              <Typography variant="caption" display="block" gutterBottom>
                <span style={{ color: '#ADB1B8 ' }}>Item Number：</span>8888888888
              </Typography>
              <Typography variant="overline" display="block" gutterBottom style={{ color: '#44E371' }}>
                caption text
              </Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </App>
  );
}
