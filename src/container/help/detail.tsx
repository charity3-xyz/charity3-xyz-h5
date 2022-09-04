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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
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
          >
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
              {itemData.map(item => (
                <ImageListItem key={item.img}>
                  <img src={`${item.img}?w=164&h=164&fit=crop&auto=format`} alt={item.title} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </CardMedia>
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
