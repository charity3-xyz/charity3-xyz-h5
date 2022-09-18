import React from 'react';
import { Container, List, ListProps, Typography } from '@mui/material';
import { ProjectListItem } from './project-list-item';
import empty from '../../assets/empty.png';
import { Page } from '@aomi/common-service/Page';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

export type ProjectListProps = {
  page: Page<any>;
  onPageChange?: (page: number) => void;
} & ListProps;

/**
 * 项目列表
 * 组件
 */
export function ProjectList({ page, onPageChange, ...props }: ProjectListProps) {
  function handlePageChange(_: any, pageNumber: number) {
    onPageChange?.(pageNumber - 1);
  }
  return (
    <List {...props}>
      {page.content.map((item, index) => (
        <ProjectListItem item={item} key={`${index}`} />
      ))}
      {page.totalElements === 0 && (
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: 300,
            background: '#FFF',
          }}
        >
          <img src={empty} alt="Charity3" width={240} height={167} />
          <Typography variant="h4">{'No Project'}</Typography>
        </Container>
      )}
      {page.totalPages > 0 && (
        <Box sx={{ textAlign: 'center' }}>
          <Pagination
            sx={{ margin: '0px auto 100px', display: 'inline-block' }}
            count={page.totalPages}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </Box>
      )}
    </List>
  );
}
