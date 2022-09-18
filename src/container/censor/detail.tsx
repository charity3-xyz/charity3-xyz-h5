import { Box, FormLabel, Grid, GridProps, Button, TextField } from '@mui/material';
import React, { Component } from 'react';
import { App } from '../../components/App';
import FileUploadFiles from '../../components/UploadFiles';

import style from '../../styles/censor/detail.module.less';
/**
 * 社工结构节点项目详情页面
 */

function FormGroup({ children, ...props }: GridProps) {
  return (
    <Grid container bgcolor="#FFF" paddingX={3} pb={4} pt={1} mb={3} mt={3} rowSpacing={3} {...props}>
      {children}
    </Grid>
  );
}

export class Detail extends Component<any, any> {
  render() {
    return (
      <App>
        <div className={style.wrapper}>
          <Box>通用组件</Box>
          <div className={style.uploadWrapper}>
            <div className={style.commonBox}>
              <div className={style.left}>
                费用证明<span>最多上传10张</span>
              </div>
              <div className={style.right}>
                <FileUploadFiles />
              </div>
            </div>

            <div className={style.commonBox}>
              <div className={style.left}>
                经济状况证明<span>最多上传10张</span>
              </div>
              <div className={style.right}>
                <FileUploadFiles />

                {/* <TextField type="file" aria-multiselectable /> */}
              </div>
            </div>
          </div>
          <div className={style.remark}>
            <TextField id="outlined-multiline-static" label="审核意见" multiline rows={4} />
          </div>
        </div>
      </App>
    );
  }
}
