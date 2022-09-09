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
        <Typography variant="h4" fontWeight="700" mb={1}>
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
          {'To Be Auditor >>'}
        </Button>
      </Box>
      <Grid container spacing={3} mt={8}>
        <Item
          icon={project1}
          title="Transparent"
          content="Monitor every each donation via blockchain, which is immutable"
        />
        <Item icon={project2} title="Efficient" content="Donate from wallet to wallet directly, no matter the region" />
        <Item icon={project3} title="Professional" content="Authority agency in charity, medical, etc. as consultant" />
      </Grid>
    </Container>
  );
}
