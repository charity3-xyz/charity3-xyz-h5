import React from 'react';
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { Button } from './button';

export function GridItem({ title, navs, children }: any) {
  return (
    <Grid item md={3} sm={12}>
      <Typography variant="h5">{title}</Typography>
      {children}
      <Stack display="flex" direction="column" spacing={1} mt={1}>
        {(navs ?? []).map((item: any, index: number) => (
          <Link underline="none" href={item.href} key={`${index}`} color="#737373" fontSize={14}>
            {item.text}
          </Link>
        ))}
      </Stack>
    </Grid>
  );
}

const companyNavs = [
  {
    href: '#',
    text: 'About Us',
  },
  {
    href: '#',
    text: 'Carrier',
  },
  {
    href: '#',
    text: 'We are hiring',
  },
  {
    href: '#',
    text: 'Blog',
  },
];

const featureNavs = [
  {
    href: '#',
    text: 'Business Marketing',
  },
  {
    href: '#',
    text: 'User Analytic',
  },
  {
    href: '#',
    text: 'Live Chat',
  },
  {
    href: '#',
    text: 'Unlimited Support',
  },
];

const resourceNavs = [
  {
    href: '#',
    text: 'IOS & Android',
  },
  {
    href: '#',
    text: 'Watch a Demo',
  },
  {
    href: '#',
    text: 'Customers',
  },
  {
    href: '#',
    text: 'API',
  },
];

export function Footer() {
  return (
    <div>
      <Container maxWidth={false} sx={{ bgcolor: '#FFF', py: 8 }}>
        <Container>
          <Grid container>
            <GridItem title="Get In Touch">
              <Typography variant="body2" color="#737373" mt={1}>
                {'the quick fox jumps over the lazy dog'}
              </Typography>
              <Stack direction="row" />
            </GridItem>
            <GridItem title="Company info" navs={companyNavs} />
            <GridItem title="Features" navs={featureNavs} />
            <GridItem title="Resources" navs={resourceNavs} />
          </Grid>
        </Container>
      </Container>
      <Container sx={{ textAlign: 'center', py: 2 }}>
        <Typography>{'Made With Love By Figmaland All Right Reserved '}</Typography>
      </Container>
    </div>
  );
}
