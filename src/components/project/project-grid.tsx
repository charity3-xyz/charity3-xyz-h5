import React from 'react';
import { Grid } from '@mui/material';
import { ProjectGridItem } from './project-grid-item';

export type ProjectGridProps = {};

/**
 * 项目grid
 * @constructor
 */
export function ProjectGrid(props: ProjectGridProps) {
  return (
    <Grid container columns={12} rowSpacing={4}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Grid sm={12} md={4} key={index} item>
          <ProjectGridItem />
        </Grid>
      ))}
    </Grid>
  );
}
