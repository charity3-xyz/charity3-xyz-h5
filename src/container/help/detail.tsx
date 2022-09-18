import React, { Component, useEffect, useState } from 'react';
import { App } from '../../components/App';
import { Upload } from '../../components/Upload';
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
import { navigationServices } from '@aomi/mobx-history';
import { route } from '../../constants/route';
import { donateProjectService } from '../../services/donate-project';

const itemData = [
  {
    img: require('../../assets/juanz/juanz1.jpg'),
    title: 'Breakfast',
  },
  {
    img: require('../../assets/juanz/juanz2.jpg'),
    title: 'Burger',
  },
  {
    img: require('../../assets/juanz/juanz3.jpg'),
    title: 'Camera',
  },
  {
    img: require('../../assets/juanz/juanz4.jpg'),
    title: 'Coffee',
  },
  {
    img: require('../../assets/juanz/juanz2.jpg'),
    title: 'Hats',
  },
  {
    img: require('../../assets/juanz/juanz3.jpg'),
    title: 'Honey',
  },
  {
    img: require('../../assets/juanz/juanz7.jpg'),
    title: 'Basketball',
  },
  {
    img: require('../../assets/juanz/juanz1.jpg'),
    title: 'Fern',
  },
  {
    img: require('../../assets/juanz/juanz2.jpg'),
    title: 'Mushrooms',
  },
  {
    img: require('../../assets/juanz/juanz3.jpg'),
    title: 'Tomato basil',
  },
  {
    img: require('../../assets/juanz/juanz1.jpg'),
    title: 'Sea star',
  },
  {
    img: require('../../assets/juanz/juanz1.jpg'),
    title: 'Bike',
  },
];

const censorList = [
  {
    img: require('../../../public/jigou6.png'),
    title: 'hsjifhdsjhdjkzhckhzxkhkhz...',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: require('../../../public/jigou2.png'),
    title: 'hsjifhdsjhdjkzhckhzxkhkhz...',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: require('../../../public/jigou3.png'),
    title: 'hsjifhdsjhdjkzhckhzxkhkh',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: require('../../../public/jigou4.png'),
    title: 'hsjifhdsjhdjkzhckhzxkhkh',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: require('../../../public/jigou5.png'),
    title: 'hsjifhdsjhdjkzhckhzxkhkh',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: require('../../../public/jigou1.png'),
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
    setBigImgUrl(require('../../../public/pin1.webp'));
    // projectService.query({});
  }, []);

  const smallImageClick = (_e, img: string) => {
    console.log(img);
    setBigImgUrl(img);
  };
  return (
    <App RootComponent={Container} sx={{ mt: 5 }}>
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
                  style={{ border: '0px solid #ADB1B8', borderRadius: '4px', width: '64px' }}
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
            <Typography component="div" variant="h4">
              Severe burns
            </Typography>
            <Typography component="div" variant="h6">
              Patient: Han Meijuan
            </Typography>
            <Typography variant="body2" color="white" component="div" style={{ marginTop: '24px', color: '#ADB1B8' }}>
              This is the introduction This is the introduction This is the introduction This is the introduction This
              is the This is the introductionThis is the introduction This is the introduction This is the introduction
              This is the introduction This is the This is the introductionThis is the introduction This is the
              introduction This is the introduction This is the introduction This is the This is the introduction
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
            <Box>
              <Button
                variant="contained"
                style={{ width: '193px', height: '54px', margin: '32px', fontWeight: '700', fontSize: '18px' }}
                onClick={() => donateProjectService.donate('xxx')}
              >
                <VolunteerActivismIcon style={{ marginRight: '5px' }} />
                Donate
              </Button>
            </Box>
          </Stack>
          <Box position="absolute" right={32} top={32} width="40%">
            <Typography
              variant="caption"
              display="block"
              style={{ paddingBottom: '0px', textAlign: 'end' }}
              gutterBottom
            >
              <span style={{ color: '#ADB1B8 ' }}>Item Number：</span>8888888888
            </Typography>
            <Typography variant="caption" display="block" gutterBottom style={{ color: '#44E371' }}>
              We encourage the public supervise the usage of every each donation.
            </Typography>
          </Box>
        </Box>
      </Card>
      <Upload />

      <Stack display="flex" direction="row" justifyContent="space-between" mt={5}>
        <Typography sx={{ fontWeight: 800, fontSize: '36px' }}>Approved By</Typography>
        <Button
          startIcon={<ApprovalIcon />}
          onClick={() => navigationServices.push(route.CENSOR_REGISTER)}
          sx={{
            fontWeight: 600,
            fontSize: '20px',
            color: '#000',
          }}
        >
          {'Apply to be auditor'}
        </Button>
      </Stack>
      <Stack
        style={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          overflow: 'scroll',
          width: '1200px',
        }}
      >
        {censorList.map((item, index) => (
          <Card sx={{ width: 224, height: 298, margin: '10px', flexShrink: 0, position: 'relative' }} key={`${index}`}>
            <CardMedia component="img" alt="green iguana" height="140" image={item.img} style={{ padding: '16px' }} />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
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
    </App>
  );
}
