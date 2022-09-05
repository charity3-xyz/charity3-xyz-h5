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
import { useHistory } from 'react-router-dom';

export type ProjectGridItemProps = {};

export function ProjectGridItem(props: ProjectGridItemProps) {
  const [expanded, setExpanded] = React.useState(false);
  let history = useHistory();

  const handleExpandClick = (index: number) => {
    console.log('-----::', index, !expanded);
    setExpanded(!expanded);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card
      style={{
        position: 'relative',
        width: '360px',
        height: '386px',
        background: 'url(/pin1.webp)',
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
        history.push(route.HELP_DETAIL);
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
            重度烧伤
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
            September 14, 2022，患者：老王，浙江安吉
          </Typography>
          <LinearProgress variant="determinate" value={50} sx={{ borderRadius: 100, height: 16, marginTop: '44px' }} />
          <Box style={{ position: 'relative' }}>
            <Typography variant="caption">55% raised</Typography>
            <Typography style={{ position: 'absolute', right: 0 }} variant="overline">
              Total funding:<span style={{ color: '#44E371' }}>20,000 USDT</span>
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
            h5. Heading
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
            beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            Eum quasi quidem quibusdam.
          </Typography>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, color: '#44E371', fontWeight: '500', fontSize: '20px', lineHeight: '24px' }}>
              <div>55%</div>
              <div>Raised</div>
            </div>
            <div style={{ flex: 1 }}>
              <Button
                onClick={() => {
                  history.push(route.CENSOR_DETAIL);
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
