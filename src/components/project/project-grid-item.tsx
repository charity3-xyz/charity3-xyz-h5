import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Collapse, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

export type ProjectGridItemProps = {};

export function ProjectGridItem(props: ProjectGridItemProps) {
  const [expanded, setExpanded] = React.useState(false);

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
        backgroundSize: 'cover',
      }}
      sx={{ maxWidth: 345, color: 'white' }}
      onMouseEnter={e => {
        handleExpandClick(0);
      }}
      onMouseLeave={e => {
        handleExpandClick(0);
      }}>
      {/*<CardHeader title="重度烧伤" subheader="September 14, 2022，患者：老王，浙江安吉" />*/}
      <CardMedia component="img" height="194" image="/pin1.webp" alt="Paella dish" />
      <CardContent
        sx={{
          // background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, #000000 52.88%)',
          background: '#000',
          // borderRadius: '12px',
        }}>
        <Typography gutterBottom variant="h5" component="div">
          重度烧伤
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
          September 14, 2022，患者：老王，浙江安吉
        </Typography>
        <LinearProgress variant="determinate" value={50} sx={{ borderRadius: 100, height: 16 }} />
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
        style={{ position: 'absolute', top: '0px', backgroundColor: 'white' }}>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken,
            shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp
            to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic,
            tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes.
            Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring,
            until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and
            rice is just tender, 5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
