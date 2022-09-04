import React, { Component } from 'react';
import { App } from '../../components/App';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';
// import { DropzoneArea } from 'material-ui-dropzone';
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
  Button,
} from '@mui/material';
import { sessionService } from '../../services/session';
import { projectService } from '../../services/project';
import { path } from '../../constants/route';

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
  constructor(props: any) {
    super(props);
    this.state = {
      form: {
        userName: '',
        amount: '',
        hospitalId: '',
        diseaseCategoryId: '',
        title: '',
        userIdNo: '',
        userPhoneNo: '',
        userTelNo: '',
        userEmail: '',
        // 病情
        illness: '',
        files: [],
      },
    };
  }

  componentDidMount() {
    // const { user } = sessionService;
    // if (!user) {
    //   this.props.router.push(path.userSignUp);
    // }
    projectService.queryHospitals();
  }

  handleChange(key: string, value: string) {
    console.log(111, key, value, {
      form: {
        ...this.state.form,
        [key]: value,
      },
    });
    this.setState({
      form: {
        ...this.state.form,
        [key]: value,
      },
    });
  }
  render() {
    const {
      userName,
      amount,
      hospitalId,
      diseaseCategoryId,
      title,
      userIdNo,
      userPhoneNo,
      userTelNo,
      userEmail,
      files,
    } = this.state.form;
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
        <Box component="form" sx={{ flexGrow: 1 }} className={style.formWrapper} noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormLabel className={style.label}>受捐人姓名</FormLabel>
              <div className={style.required}>
                <TextField
                  size="small"
                  required
                  id="outlined-required"
                  placeholder="请输入真实姓名"
                  value={userName}
                  onChange={e => this.handleChange('userName', e.target.value)}
                />
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
                  value={amount}
                  onChange={e => this.handleChange('amount', e.target.value)}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">万元</InputAdornment>,
                  }}
                />
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
                value={title}
                onChange={e => this.handleChange('title', e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel className={style.label}>治疗机构名称</FormLabel>
              <div className={style.required}>
                <TextField
                  size="small"
                  required
                  select
                  id="outlined-required"
                  placeholder="请选择病症类目"
                  value={hospitalId}
                  onChange={e => this.handleChange('hospitalId', e.target.value)}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Grid>
            <Grid item xs={6}>
              <FormLabel className={style.label}>受捐人病症</FormLabel>
              <div className={style.required}>
                <TextField
                  size="small"
                  required
                  select
                  id="outlined-required"
                  placeholder="请选择病症类目"
                  value={diseaseCategoryId}
                  onChange={e => this.handleChange('diseaseCategoryId', e.target.value)}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Grid>
          </Grid>
        </Box>

        {/* 联系方式 */}
        <Box component="form" sx={{ flexGrow: 1 }} className={style.formWrapper} noValidate autoComplete="off">
          <Stack spacing={3}>
            <div className={style.formTitle}>
              联系方式 <span style={{ color: 'red' }}>*</span> (三选一)
            </div>
          </Stack>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormLabel className={style.label}>固话</FormLabel>
              <TextField
                size="small"
                id="outlined-required"
                value={userPhoneNo}
                onChange={e => this.handleChange('userPhoneNo', e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel className={style.label}>手机号</FormLabel>
              <TextField
                size="small"
                id="outlined-required"
                placeholder="请输入真实姓名"
                value={userTelNo}
                onChange={e => this.handleChange('userTelNo', e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel className={style.label}>邮箱</FormLabel>
              <TextField
                size="small"
                id="outlined-required"
                placeholder="请输入真实姓名"
                value={userEmail}
                onChange={e => this.handleChange('userEmail', e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>

        {/* 个人身份认证 */}
        <Box component="form" sx={{ flexGrow: 1 }} className={style.formWrapper} noValidate autoComplete="off">
          <Stack spacing={3}>
            <div className={style.formTitle}>个人身份认证</div>
          </Stack>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormLabel className={style.label}>证件号</FormLabel>
              <div className={style.required}>
                <TextField
                  size="small"
                  id="outlined-required"
                  value={userIdNo}
                  onChange={e => this.handleChange('userIdNo', e.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              <FormLabel className={style.label}>上传证件</FormLabel>
              <TextField
                size="small"
                id="outlined-required"
                placeholder="请输入真实姓名"
                value={userIdNo}
                onChange={e => this.handleChange('userIdNo', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel className={style.label}>上传病例</FormLabel>
              <TextField
                size="small"
                id="outlined-required"
                placeholder="请输入真实姓名"
                value={files}
                onChange={e => this.handleChange('files', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel className={style.label}>上传文件</FormLabel>
              {/* <DropzoneArea
                  onChange={val => {
                    this.setState({ files: val });
                  }}
                /> */}
            </Grid>
          </Grid>
        </Box>
        {/* 提交按钮 */}
        <Box component="form" sx={{ flexGrow: 1 }} className={style.submitWrapper}>
          <Button key="apply" variant="contained" onClick={() => projectService.addProject(this.state.form)}>
            提交登记
          </Button>
        </Box>
      </App>
    );
  }
}
