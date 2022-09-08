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
  GridProps,
  TextFieldProps,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { sessionService } from '../../services/session';
import { projectService } from '../../services/project';
import { route } from '../../constants/route';

import style from '../../styles/help/new.module.scss';

import { userProjectService } from '../../services/user-project';
import { navigationServices } from '@aomi/mobx-history';
import { HospitalSelect } from '../../components/hospital-select';
import { DiseaseCategorySelect } from '../../components/disease-category-select';

function FormGroup({ children, ...props }: GridProps) {
  return (
    <Grid container bgcolor="#FFF" paddingX={3} pb={4} pt={1} mb={3} mt={3} rowSpacing={3} {...props}>
      {children}
    </Grid>
  );
}

function FormField({ children, md, ...props }: TextFieldProps & GridProps) {
  return (
    <Grid item sm={12} md={md || 6}>
      <Stack direction="row" alignItems="center" flex={1}>
        <Typography minWidth={100} textAlign="right" mr={2}>
          {props.label}
        </Typography>
        {children || <TextField size="small" fullWidth {...props} />}
      </Stack>
    </Grid>
  );
}

/**
 * 求助者发起募捐
 */
@observer
@autoBind
export class ProjectNew extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      submitSuccessful: false,
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
        files1: [],
        files2: [],
      },
    };
  }

  componentDidMount() {
    const { authorization } = sessionService;
    if (!authorization) {
      navigationServices.push(route.SIGN_IN);
    }
  }

  handleChange(key: string, value: string) {
    this.setState({
      form: {
        ...this.state.form,
        [key]: value,
      },
    });
  }

  render() {
    const {
      submitSuccessful,
      form: {
        userName,
        amount,
        hospitalId,
        diseaseCategoryId,
        title,
        userIdNo,
        userPhoneNo,
        userTelNo,
        userEmail,
        files1,
        files2,
      },
    } = this.state;

    const { loading } = userProjectService;

    return (
      <App RootComponent={Container} className={style.applyForm} loading={loading}>
        <Stack spacing={2} pt={6}>
          <Typography variant="h4" gutterBottom>
            募捐申请表
          </Typography>
        </Stack>
        {/* 提交成功显示成功文案  */}
        {submitSuccessful ? (
          <div className={style.successWrapper}>
            <Stack spacing={2}>
              <div className={style.icon}>
                <CheckCircleIcon />
              </div>
              <h2>提交成功</h2>
              <p style={{ paddingBottom: '36px' }}>
                您的申请将进入审核流程，通过审核后将开始接收外部捐赠。审核期间请保持您的联系方式畅通
              </p>
              <div className={style.btn}>
                <Button key="jump" variant="contained" onClick={() => console.log(123)}>
                  管理我的项目
                </Button>
              </div>
            </Stack>
          </div>
        ) : (
          <>
            <Typography variant="subtitle1" gutterBottom>
              您正在填写募捐申请表，请确保信息的真实性，这样有助于审核快速通过
            </Typography>
            {/* 基本信息 */}
            <FormGroup sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
              <FormField
                label="姓名"
                placeholder="请输入真实姓名"
                required
                value={userName}
                onChange={(e: any) => this.handleChange('userName', e.target.value)}
              />
              <FormField
                required
                label="募捐金额"
                placeholder="请输入金额"
                value={amount}
                onChange={(e: any) => this.handleChange('amount', e.target.value)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">万元</InputAdornment>,
                }}
              />
              <FormField
                md={12}
                multiline
                maxRows={4}
                label="病情描述"
                placeholder="请输入您的病情"
                value={title}
                onChange={(e: any) => this.handleChange('title', e.target.value)}
              />
              <FormField label="治疗机构">
                <HospitalSelect
                  size="small"
                  fullWidth
                  required
                  label="治疗机构"
                  placeholder="请选择治疗机构"
                  value={hospitalId}
                  onChange={(e: any) => this.handleChange('hospitalId', e.target.value)}
                />
              </FormField>
              <FormField label="病症">
                <DiseaseCategorySelect
                  size="small"
                  required
                  fullWidth
                  label="病症"
                  placeholder="请选择病症类目"
                  hospitalId={hospitalId}
                  value={diseaseCategoryId}
                  onChange={e => this.handleChange('diseaseCategoryId', e.target.value)}
                />
              </FormField>
            </FormGroup>
            {/* 联系方式 */}
            <FormGroup>
              <Grid item xs={12}>
                <Typography color="#ADB1B8" fontWeight="700">
                  联系方式 <span style={{ color: 'red' }}>*</span> (三选一)
                </Typography>
              </Grid>
              <FormField
                label="固话"
                value={userPhoneNo}
                onChange={(e: any) => this.handleChange('userPhoneNo', e.target.value)}
              />
              <FormField
                label="手机号"
                placeholder="请输入手机号"
                value={userTelNo}
                onChange={(e: any) => this.handleChange('userTelNo', e.target.value)}
              />
              <FormField
                label="邮箱"
                placeholder="请输入邮箱"
                value={userEmail}
                onChange={(e: any) => this.handleChange('userEmail', e.target.value)}
              />
            </FormGroup>

            {/* 个人身份认证 */}
            <FormGroup>
              <Grid item xs={12}>
                <Typography color="#ADB1B8" fontWeight="700">
                  {'个人身份认证'}
                </Typography>
              </Grid>
              <FormField
                label="证件号"
                placeholder="请输入证件号"
                value={userIdNo}
                onChange={(e: any) => this.handleChange('userIdNo', e.target.value)}
              />
              <Grid item xs={12}>
                <FormLabel>上传证件</FormLabel>
                <TextField
                  size="small"
                  id="outlined-required"
                  placeholder="请输入真实姓名"
                  value={files2}
                  onChange={e => this.handleChange('files2', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel>上传病例</FormLabel>
                <TextField
                  size="small"
                  id="outlined-required"
                  placeholder="请输入真实姓名"
                  value={files1}
                  onChange={e => this.handleChange('files1', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel>上传文件</FormLabel>
                {/* <DropzoneArea
                  onChange={val => {
                    this.setState({ files: val });
                  }}
                /> */}
              </Grid>
            </FormGroup>
            {/* 提交按钮 */}
            <FormGroup sx={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }} justifyContent="center">
              <Grid item sm={2}>
                <Button
                  variant="contained"
                  disabled={loading}
                  onClick={() => userProjectService.createMedical(this.state.form)}
                  fullWidth
                >
                  提交登记
                </Button>
              </Grid>
            </FormGroup>
          </>
        )}
      </App>
    );
  }
}
