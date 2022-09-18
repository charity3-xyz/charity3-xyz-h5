import React, { Component } from 'react';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';
import { authed } from '../../core/authed';
import { App } from '../../components/App';
import { ProjectList } from '../../components/project/project-list';
import { projectService } from '../../services/project';
import { sessionService } from '../../services/session';

/**
 * 用户的项目列表
 */
@authed
@observer
@autoBind
export class UserProjectList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleQuery();
  }

  handleQuery() {
    const { isWorkNode } = sessionService;
    projectService.query({}, isWorkNode ? 'workNode' : 'user');
  }

  render() {
    const { userPage, loading } = projectService;
    return (
      <App loading={loading}>
        <ProjectList page={userPage} onPageChange={projectService.next} />
      </App>
    );
  }
}
