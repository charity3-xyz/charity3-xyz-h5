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
} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

/**
 * 求助者项目首页
 */
export function ProjectHome() {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedIndex, setExpandedIndex] = React.useState(0);

  const handleExpandClick = (index: number) => {
    console.log('-----::', index, !expanded);
    setExpanded(!expanded);
    setExpandedIndex(index);
  };

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

  return (
    <App>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid xs={4} sm={4} md={4} key={index}>
                <Card
                  style={{ position: 'relative' }}
                  sx={{ maxWidth: 345 }}
                  onMouseEnter={e => {
                    handleExpandClick(index);
                  }}
                  onMouseLeave={e => {
                    handleExpandClick(index);
                  }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardMedia component="img" height="194" image="../../../public/pin1.webp" alt="Paella dish" />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                      Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <BorderLinearProgress variant="determinate" value={50} />
                  </CardContent>
                  <CardActions disableSpacing>
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
                  </CardActions>
                  <Collapse
                    in={index === expandedIndex && expanded}
                    timeout="auto"
                    unmountOnExit
                    style={{ position: 'absolute', top: '0px', backgroundColor: 'white' }}>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
                        chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
                        minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan.
                        Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often
                        until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                        chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without
                        stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                        reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring,
                        until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels
                        that don&apos;t open.)
                      </Typography>
                      <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </App>
  );
}
