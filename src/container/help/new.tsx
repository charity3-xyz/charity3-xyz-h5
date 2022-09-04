import React, { Component } from 'react';
import { App } from '../../components/App';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';
import {
  Box,
  Container,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import style from './index.module.scss';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
/**
 * 求助者发起募捐
 */
@observer
@autoBind
export class ProjectNew extends Component<any, any> {
  componentDidMount() {
    // const { user } = sessionService;
    // if (!user) {
    //   this.props.router.push(path.userSignUp);
    // }
  }

  render() {
    return (
      <App RootComponent={Container} className={style.applyForm}>
        <Stack spacing={2} pt={6}>
          <Typography variant="h4" gutterBottom>
            募捐申请表
          </Typography>
        </Stack>

        <Typography variant="subtitle1" gutterBottom>
          您正在填写募捐申请表，请确保信息的真实性，这样有助于审核快速通过
        </Typography>
        {/* 基本信息 */}
        <Paper elevation={3}>
          <Box component="form" sx={{ flexGrow: 1 }} className={style.formWrapper} noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormLabel className={style.label}>受捐人姓名</FormLabel>
                <div className={style.required}>
                  <TextField size="small" required id="outlined-required" placeholder="请输入真实姓名" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <FormLabel className={style.label}>受捐人病症</FormLabel>
                <div className={style.required}>
                  <TextField size="small" required select id="outlined-required" placeholder="请选择病症类目">
                    {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </Grid>
              <Grid item xs={12}>
                <FormLabel className={style.label}>病情描述（可选）</FormLabel>
                <TextField
                  size="small"
                  id="outlined-multiline-static"
                  multiline
                  maxRows={4}
                  placeholder="请输入您的病情"
                />
              </Grid>
              <Grid item xs={6}>
                <FormLabel className={style.label}>治疗机构名称</FormLabel>
                <div className={style.required}>
                  <TextField size="small" required select id="outlined-required" placeholder="请选择病症类目">
                    {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </Grid>
              <Grid item xs={6}>
                <FormLabel className={style.label}>募捐金额</FormLabel>
                <div className={style.required}>
                  <TextField
                    size="small"
                    required
                    id="outlined-required"
                    placeholder="请输入金额"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">万元</InputAdornment>,
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Paper>

        {/* 联系方式 */}
        <Paper elevation={3}>
          <Box component="form" sx={{ flexGrow: 1 }} className={style.formWrapper} noValidate autoComplete="off">
            <Stack spacing={3}>
              <div className={style.formTitle}>
                联系方式 <span style={{ color: 'red' }}>*</span> (三选一)
              </div>
            </Stack>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormLabel className={style.label}>固话</FormLabel>
                <TextField size="small" id="outlined-required" />
              </Grid>
              <Grid item xs={6}>
                <FormLabel className={style.label}>手机号</FormLabel>
                <TextField size="small" id="outlined-required" placeholder="请输入真实姓名" />
              </Grid>
              <Grid item xs={6}>
                <FormLabel className={style.label}>邮箱</FormLabel>
                <TextField size="small" id="outlined-required" placeholder="请输入真实姓名" />
              </Grid>
            </Grid>
          </Box>
        </Paper>

        {/* 个人身份认证 */}
        <Paper elevation={3}>
          <Box component="form" sx={{ flexGrow: 1 }} className={style.formWrapper} noValidate autoComplete="off">
            <Stack spacing={3}>
              <div className={style.formTitle}>个人身份认证</div>
            </Stack>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormLabel className={style.label}>证件号</FormLabel>
                <div className={style.required}>
                  <TextField size="small" id="outlined-required" />
                </div>
              </Grid>
              <Grid item xs={6}>
                &nbsp;
              </Grid>
              <Grid item xs={12}>
                <FormLabel className={style.label}>上传证件</FormLabel>
                <TextField size="small" id="outlined-required" placeholder="请输入真实姓名" />
              </Grid>
              <Grid item xs={12}>
                <FormLabel className={style.label}>上传病例</FormLabel>
                <TextField size="small" id="outlined-required" placeholder="请输入真实姓名" />
              </Grid>
            </Grid>
          </Box>
        </Paper>

        {/*
        <Stack spacing={3} mt={3}>
          {fields.map(({ ...field }, index) => {
            return <TextField key={index} {...field} />;
          })}
        </Stack> */}
      </App>
    );
  }
}
