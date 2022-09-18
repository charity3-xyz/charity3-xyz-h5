import React from 'react';
import { Grid } from '@mui/material';
import { ProjectGridItem } from './project-grid-item';
import { ProjectGridItemProps } from './project-grid-item';

export type ProjectGridProps = { pgp: ProjectGridItemProps[] };

/**
 * 项目grid
 * @constructor
 */
export function ProjectGrid(props: ProjectGridProps) {
  return (
    <Grid container columns={12} rowSpacing={4}>
      {Array.from(props.pgp).map((_, index) => {
        console.log(_, '>>>>>>>');
        return (
          <Grid sm={12} md={4} key={index} item>
            <ProjectGridItem {..._} />
          </Grid>
        );
      })}
    </Grid>
  );
}
