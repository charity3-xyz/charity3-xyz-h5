import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Block } from '@mui/icons-material';
import { route } from '../../constants/route';
import { navigationServices } from '@aomi/mobx-history';
import pin1 from '../../../public/pin1.webp';
// import pin1 from '../../../public/pin2.jpeg';

export type ProjectGridItemProps = {
  imgUrl: any;
  title: string;
  sub_title: string;
  progress: number;
  total: number;
  content: string;
};

export function ProjectGridItem(props: ProjectGridItemProps) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = (index: number) => {
    setExpanded(!expanded);
  };
  const [value, setValue] = React.useState(0);
  console.log(props);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card
      style={{
        position: 'relative',
        width: '360px',
        height: '386px',
        background: `url(${props.imgUrl})`,
        backgroundSize: 'cover',
      }}
      sx={{ maxWidth: 345, color: 'white' }}
      onMouseEnter={e => {
        handleExpandClick(0);
      }}
      onMouseLeave={e => {
        handleExpandClick(0);
      }}
      onClick={() => {
        navigationServices.push(route.HELP_DETAIL);
      }}
    >
      {/*<CardHeader title="重度烧伤" subheader="September 14, 2022，患者：老王，浙江安吉" />*/}
      {/* <CardMedia component="img" height="194" image="/pin1.webp" alt="Paella dish" /> */}
      <CardContent
        sx={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 20%, #000000 100%)',
          borderRadius: '12px',
          height: '100%',
          padding: '0',
        }}
      >
        <Box style={{ position: 'absolute', bottom: '20px', width: '100%', padding: '20px' }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
            {props.sub_title}
          </Typography>
          <LinearProgress variant="determinate" value={50} sx={{ borderRadius: 100, height: 16, marginTop: '44px' }} />
          <Box style={{ position: 'relative' }}>
            <Typography variant="caption">{props.progress}% raised</Typography>
            <Typography style={{ position: 'absolute', right: 0 }} variant="overline">
              Total funding:<span style={{ color: '#44E371' }}>{props.total} USDT</span>
            </Typography>
          </Box>
        </Box>
      </CardContent>
      {/* <CardActions disableSpacing>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={index === expandedIndex && expanded}
                      // onClick={handleExpandClick}
                      aria-expanded={index === expandedIndex && expanded}
                      aria-label="show more">
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions> */}
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        style={{ position: 'absolute', bottom: '0px', background: 'rgba(0, 0, 0, 0.8)', borderRadius: '12px' }}
      >
        <CardContent style={{}}>
          <Typography variant="h5" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            {props.sub_title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {props.content}
          </Typography>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, color: '#44E371', fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>
              <div>{props.progress}%</div>
              <div>Raised</div>
            </div>
            <div style={{ flex: 1 }}>
              <Button
                onClick={() => {
                  navigationServices.push(route.CENSOR_DETAIL);
                }}
                variant="contained"
                style={{ width: '174px', height: '54px', background: '#44E371', borderRadius: '8px', color: 'white' }}
              >
                Help Him
              </Button>
            </div>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
