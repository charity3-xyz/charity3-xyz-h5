import React, { Component, useEffect, useState } from 'react';
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
// import style from '../../styles/help/detail.module.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { flexbox } from '@mui/system';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ApprovalIcon from '@mui/icons-material/Approval';
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

const censorList = [
  {
    img: '/pin1.webp',
    title: 'title',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: '/pin1.webp',
    title: 'title',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: '/pin1.webp',
    title: 'title',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: '/pin1.webp',
    title: 'title',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: '/pin1.webp',
    title: 'title',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: '/pin1.webp',
    title: 'title',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
];

/**'
 * 求助者项目详情页面
 */
export function Detail() {
  const theme = useTheme();
  const [bigImgUrl, setBigImgUrl] = useState('');

  useEffect(() => {
    setBigImgUrl('/pin1.webp');
    // projectService.query({});
  }, []);

  const smallImageClick = (_e, img: string) => {
    console.log(img);
    setBigImgUrl(img);
  };
  return (
    <App>
      <Container style={{ marginTop: '40px', maxWidth: 1200, padding: 0 }} className="charity-help-detail">
        <Card sx={{ display: 'flex', background: '#010101', borderRadius: '12px', color: 'white' }}>
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              sx={{ width: 439 }}
              style={{ margin: '32px', borderRadius: '12px' }}
              image={bigImgUrl}
              alt="Live from space album cover"
            />
            <Box sx={{ position: 'absolute', bottom: 42, right: 42 }}>
              <ImageList sx={{ width: 210, height: 38 }} cols={3} rowHeight={38}>
                {itemData.map(item => (
                  <ImageListItem
                    key={item.img}
                    onClick={e => {
                      smallImageClick(e, item.img);
                    }}
                  >
                    {
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                    }
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <CardContent sx={{ flex: '1 0 auto', marginTop: '32px', paddingTop: '0px' }}>
              <Typography component="div" variant="h5">
                慈善捐赠项目主标题
              </Typography>
              <Typography component="div" variant="h6">
                慈善捐赠项目副标题
              </Typography>
              <Typography variant="body2" color="white" component="div" style={{ marginTop: '24px', color: '#ADB1B8' }}>
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
                  <LinearProgress
                    variant="determinate"
                    value={50}
                    sx={{ borderRadius: 100, height: 20, marginTop: '10px' }}
                  />
                  <Box style={{ position: 'relative' }}>
                    <Typography variant="caption">55% raised</Typography>
                    <Typography style={{ position: 'absolute', right: 0 }} variant="overline">
                      Total funding:<span style={{ color: '#44E371' }}>20,000 USDT</span>
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box style={{}}>
                <Button
                  variant="contained"
                  style={{ width: '193px', height: '54px', margin: '32px', fontWeight: '700', fontSize: '18px' }}
                >
                  <VolunteerActivismIcon style={{ marginRight: '5px' }} />
                  Help Him
                </Button>
              </Box>
            </Stack>
            <Box position="absolute" right={32} top={32}>
              <Typography variant="caption" display="block" style={{ paddingBottom: '0px' }} gutterBottom>
                <span style={{ color: '#ADB1B8 ' }}>Item Number：</span>8888888888
              </Typography>
              <Typography variant="caption" display="block" gutterBottom style={{ color: '#44E371' }}>
                我们鼓励公众对每笔善款的应用进行监督
              </Typography>
            </Box>
          </Box>
        </Card>

        <Box sx={{ display: 'flex', position: 'relative', height: '54px', marginTop: '40px', marginBottom: '0px' }}>
          <Box sx={{ position: 'absolute', fontWeight: 800, fontSize: '36px' }}>认证节点</Box>
          <Box sx={{ position: 'absolute', right: '0px', fontWeight: 600, fontSize: '20px', lineHeight: '54px' }}>
            {/* <span> */}
            <ApprovalIcon style={{ marginRight: '5px' }} />
            {/* </span> */}
            <span>申请成为节点</span>
          </Box>
        </Box>
        <Stack
          style={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {censorList.map(item => (
            <Card sx={{ maxWidth: 224, height: 298, margin: '10px', position: 'relative' }}>
              <CardMedia component="img" alt="green iguana" height="140" image={item.img} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
              <div
                style={{
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '26px',
                  color: '#44E371',
                  position: 'absolute',
                  left: 16,
                  bottom: 16,
                }}
              >
                200
              </div>
            </Card>
          ))}
        </Stack>
      </Container>
    </App>
  );
}
