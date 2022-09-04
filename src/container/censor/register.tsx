import React, { Component } from 'react';
import { App } from '../../components/App';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';
import { Container, Stack, TextField, TextFieldProps } from '@mui/material';
import { sessionService } from '../../services/session';
import { path } from '../../constants/route';

const fields: Array<TextFieldProps> = [
  {
    label: '受捐人姓名',
    helperText: '',
    required: true,
  },
  {
    label: '受捐人ID',
    required: true,
  },
  {
    label: '病症',
  },
  {
    label: '病情描述',
    multiline: true,
  },
  {
    label: '预计治疗时间',
    type: 'number',
  },
  {
    label: '联系电话',
  },
  {
    label: 'Email',
  },
  {
    label: '居住证明',
    type: 'file',
  },
];

/**
 * 社工结构节点入驻
 */
@observer
@autoBind
export class Register extends Component<any, any> {
  componentDidMount() {
    const { user } = sessionService;
    if (!user) {
      this.props.router.push(path.userSignUp);
    }
  }

  render() {
    return (
      <App RootComponent={Container}>
        <Stack spacing={3} mt={3}>
          社工机构节点入驻
        </Stack>
      </App>
    );
  }
}
