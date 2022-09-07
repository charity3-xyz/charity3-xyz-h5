import React, { ReactNode } from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import project1 from '../../assets/home/platform1.png';
import project2 from '../../assets/home/platform2.png';
import project3 from '../../assets/home/platform3.png';
import { Button } from '../../components/button';
import { navigationServices } from '@aomi/mobx-history';
import { route } from '../../constants/route';

function Item({ icon, title, content }: { icon: any; title: ReactNode; content: ReactNode }) {
  return (
    <Grid item md={4} xs={12}>
      <Stack
        bgcolor="#FFF"
        borderRadius={3}
        padding={3}
        display="flex"
        direction="column"
        alignItems="center"
        spacing={2}
      >
        <img src={icon} alt={`${title}`} width={66} height={66} />
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="rgba(113, 117, 122, 1)">
          {content}
        </Typography>
      </Stack>
    </Grid>
  );
}

export function PlatformSection() {
  return (
    <Container sx={{ mt: 12 }}>
      <Box textAlign="center">
        <Typography variant="h4" fontWeight="700">
          {'Trustworthy public'}
          <Typography />
          {'welfare platform'}
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{ background: 'rgba(68, 227, 113, 0.2)' }}
          onClick={() => navigationServices.push(route.CENSOR_REGISTER)}
        >
          {'我要成为节点 >'}
        </Button>
      </Box>
      <Grid container columnSpacing={3} mt={8}>
        <Item
          icon={project1}
          title="Open & transparent"
          content="内容内容内容，中文最好不超过行内容内容内容，中文最好不超过两行"
        />
        <Item
          icon={project2}
          title="Most professional"
          content="内容内容内容，中文最好不超过行内容内容内容，中文最好不超过两行"
        />
        <Item
          icon={project3}
          title="Most professional"
          content="内容内容内容，中文最好不超过行内容内容内容，中文最好不超过两行"
        />
      </Grid>
    </Container>
  );
}
