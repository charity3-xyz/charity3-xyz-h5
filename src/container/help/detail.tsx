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
import { navigationServices } from '@aomi/mobx-history';
import { route } from '../../constants/route';

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
    title: '联合国儿童慈善基金会',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: require('../../../public/jigou2.png'),
    title: '盖茨基金会',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: require('../../../public/jigou3.png'),
    title: '国际服务机构',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: require('../../../public/jigou4.png'),
    title: '国际地球之友',
    desc: 'No. of items passed',
    deposit: '2000',
    level: 5,
  },
  {
    img: require('../../../public/jigou5.png'),
    title: '国际援助组织',
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
                大病儿童生命的礼物
              </Typography>
              <Typography component="div" variant="h6">
                打怪升级不容易，有一丝希望就决不放弃！
              </Typography>
              <Typography variant="body2" color="white" component="div" style={{ marginTop: '24px', color: '#ADB1B8' }}>
                刚刚还在体育课上跳完一百三十个绳的润宝，因腿上淤青迟迟不退，入院检查，这个原本应该享受着天真烂漫童年生活的小女孩，在七岁那年遇到了自己人生中的第一个小怪兽——急性淋巴细胞白血病。小润是爸爸妈妈眼里的小宝贝，常常“润宝、润宝”地喊着，看到鲜红的血液输入自己的血管，润宝被白血病这个小怪兽吓得嚎啕大哭。
                经历了抗议、害怕、抵触、配合，润宝与疾病正面交锋，小小年纪的她在病房承受着不属于7岁的痛楚，直面我们大人都胆颤的病魔。
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
              <Typography
                variant="caption"
                display="block"
                style={{ paddingBottom: '0px', textAlign: 'end' }}
                gutterBottom
              >
                <span style={{ color: '#ADB1B8 ' }}>Item Number：</span>8888888888
              </Typography>
              <Typography variant="caption" display="block" gutterBottom style={{ color: '#44E371' }}>
                我们鼓励公众对每笔善款的应用进行监督
              </Typography>
            </Box>
          </Box>
        </Card>

        <Stack display="flex" direction="row" justifyContent="space-between" mt={5}>
          <Typography sx={{ fontWeight: 800, fontSize: '36px' }}>认证节点</Typography>
          <Button
            startIcon={<ApprovalIcon />}
            onClick={() => navigationServices.push(route.CENSOR_REGISTER)}
            sx={{
              fontWeight: 600,
              fontSize: '20px',
              color: '#000',
            }}
          >
            {'申请成为节点'}
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
            <Card
              sx={{ width: 224, height: 298, margin: '10px', flexShrink: 0, position: 'relative' }}
              key={`${index}`}
            >
              <CardMedia component="img" alt="green iguana" height="140" image={item.img} style={{ padding: '16px' }} />
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
