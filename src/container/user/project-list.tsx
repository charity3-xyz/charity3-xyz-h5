import React, { Component } from 'react';
import { userProjectService } from '../../services/user-project';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';
import { authed } from '../../core/authed';
import { App } from '../../components/App';
import { ProjectList } from '../../components/project/project-list';

/**
 * 用户的项目列表
 */
@authed
@observer
@autoBind
export class ProjectListScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    // 初始化查询当前用户拥有的项目信息
    userProjectService.query();
  }

  render() {
    const { page } = userProjectService;
    return (
      <App>
        <ProjectList projects={page.content} />
      </App>
    );
  }
}
