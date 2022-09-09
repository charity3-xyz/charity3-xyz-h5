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
            Apply for new fund-raising
          </Typography>
        </Stack>
        {/* 提交成功显示成功文案  */}
        {submitSuccessful ? (
          <div className={style.successWrapper}>
            <Stack spacing={2}>
              <div className={style.icon}>
                <CheckCircleIcon />
              </div>
              <h2>Submitted Successfully</h2>
              <p style={{ paddingBottom: '36px' }}>
                Your fund-raising will be audited and as soon as approved, it will open to the public donation. During
                the process please keep available via the number&email which you submitted.
              </p>
              <div className={style.btn}>
                <Button key="jump" variant="contained" onClick={() => console.log(123)}>
                  Check My Project
                </Button>
              </div>
            </Stack>
          </div>
        ) : (
          <>
            <Typography variant="subtitle1" gutterBottom>
              Please make sure the information you submitted are true. We will have
            </Typography>
            {/* 基本信息 */}
            <FormGroup sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
              <FormField
                label="Name"
                placeholder="please input your name"
                required
                value={userName}
                onChange={(e: any) => this.handleChange('userName', e.target.value)}
              />
              <FormField
                required
                label="Fund Amount"
                placeholder="please input your fund amount"
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
                label="Description（Optional）"
                value={title}
                onChange={(e: any) => this.handleChange('title', e.target.value)}
              />
              <FormField label="Hospital Name">
                <HospitalSelect
                  size="small"
                  fullWidth
                  required
                  label="Hospital Name"
                  placeholder="please select your hospital name"
                  value={hospitalId}
                  onChange={(e: any) => this.handleChange('hospitalId', e.target.value)}
                />
              </FormField>
              <FormField label="Disease">
                <DiseaseCategorySelect
                  size="small"
                  required
                  fullWidth
                  label="Disease"
                  placeholder="please select your disease"
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
                  Contact Details <span style={{ color: 'red' }}>*</span> (三选一)
                </Typography>
              </Grid>
              <FormField
                label="Telephone Num"
                value={userPhoneNo}
                onChange={(e: any) => this.handleChange('userPhoneNo', e.target.value)}
              />
              <FormField
                label="Mobile Num"
                value={userTelNo}
                onChange={(e: any) => this.handleChange('userTelNo', e.target.value)}
              />
              <FormField
                label="E-mail"
                placeholder="please input your E-mail"
                value={userEmail}
                onChange={(e: any) => this.handleChange('userEmail', e.target.value)}
              />
            </FormGroup>

            {/* 个人身份认证 */}
            <FormGroup>
              <Grid item xs={12}>
                <Typography color="#ADB1B8" fontWeight="700">
                  {'Identity Verification'}
                </Typography>
              </Grid>
              <FormField
                label="ID Number"
                placeholder="please input your ID Number"
                value={userIdNo}
                onChange={(e: any) => this.handleChange('userIdNo', e.target.value)}
              />
              <Grid item xs={12}>
                <FormLabel>Upload ID Photo</FormLabel>
                <TextField
                  size="small"
                  id="outlined-required"
                  value={files2}
                  onChange={e => this.handleChange('files2', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel>Upload Medical Records Photos</FormLabel>
                <TextField
                  size="small"
                  id="outlined-required"
                  value={files1}
                  onChange={e => this.handleChange('files1', e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormLabel>上传文件</FormLabel> */}
              {/* <DropzoneArea
                  onChange={val => {
                    this.setState({ files: val });
                  }}
                /> */}
              {/* </Grid> */}
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
                  Submit
                </Button>
              </Grid>
            </FormGroup>
          </>
        )}
      </App>
    );
  }
}
