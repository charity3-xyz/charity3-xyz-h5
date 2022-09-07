import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import project1 from '../../assets/home/project1.png';
import project2 from '../../assets/home/project2.png';
import project3 from '../../assets/home/project3.png';
import project4 from '../../assets/home/project4.png';
import project5 from '../../assets/home/project5.png';
import project6 from '../../assets/home/project6.png';
import { Button } from '../../components/button';

function GridItem({ dark, title, icon }: any) {
  let bgcolor = 'primary.main',
    color = 'black';
  if (dark) {
    bgcolor = 'black';
    color = 'white';
  }

  return (
    <Grid item md={4}>
      <Stack
        bgcolor={bgcolor}
        borderRadius={3}
        padding={2}
        color={color}
        display="flex"
        direction="row"
        justifyContent="space-between"
        height={145}
      >
        <Typography fontWeight="700" fontSize={32}>
          {title}
        </Typography>
        <img src={icon} alt={title} width={54} height={54} style={{ alignSelf: 'flex-end' }} />
      </Stack>
    </Grid>
  );
}

export function ProjectSection() {
  return (
    <Container sx={{ mt: 12, mb: 12 }}>
      <Box textAlign="center">
        <Typography variant="h4" fontWeight="700">
          {'Fundraising project'}
          <Typography />
          {'classification'}
        </Typography>
        <Button size="small" variant="contained" sx={{ background: 'rgba(68, 227, 113, 0.2)' }}>
          {'More >'}
        </Button>
      </Box>
      <Grid container columnSpacing={3} rowSpacing={3} mt={7.5}>
        <GridItem icon={project1} title="Burn department" />
        <GridItem icon={project2} title="Disability Section" dark />
        <GridItem icon={project3} title="Leukemia Department" />
        <GridItem icon={project4} title="Cancer Section" dark />
        <GridItem icon={project5} title="Congenital Cardiology" />
        <GridItem icon={project6} title="breast cancer" dark />
      </Grid>
    </Container>
  );
}
