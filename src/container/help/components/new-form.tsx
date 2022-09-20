import { HospitalSelect } from '../../../components/hospital-select';
import { DiseaseCategorySelect } from '../../../components/disease-category-select';
import { Button, FormLabel, Grid, GridProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import { Upload } from '../../../components/Upload';
import FileUploadFiles from '../../../components/UploadFiles';
import { userProjectService } from '../../../services/user-project';
import React, { forwardRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toastService } from '../../../services/toast';

function FormGroup({ children, ...props }: GridProps) {
  return (
    <Grid container bgcolor="#FFF" paddingX={3} pb={4} pt={1} mb={3} mt={3} rowSpacing={3} {...props}>
      {children}
    </Grid>
  );
}

const FormField = forwardRef(function FormField(
  { errors, children, md, ...props }: TextFieldProps & GridProps & { errors: Record<string, any> },
  ref,
) {
  return (
    <Grid item sm={12} md={md || 6}>
      <Stack direction="row" alignItems="center" flex={1}>
        <Typography minWidth={100} textAlign="right" mr={2}>
          {props.label}
        </Typography>
        {children || (
          <TextField
            size="small"
            fullWidth
            inputRef={ref}
            {...props}
            error={!!errors[props.name ?? '']}
            helperText={errors[props.name ?? '']?.message}
          />
        )}
      </Stack>
    </Grid>
  );
});

export const NewForm = forwardRef(function NewForm(
  { loading, onFinish }: { loading?: boolean; onFinish?: (data: any) => void },
  ref: any,
) {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState<Record<string, any>>({});

  const [hospitalId, setHospitalId] = useState('');

  function handleFinish(d: any) {
    if (!d.userPhoneNo && !d.userTelNo && !d.userEmail) {
      toastService.error('联系信息必须填写一个');
      return;
    }

    setErrors({});
    onFinish?.({
      ...d,
      // 图片资料
      imgUrls: [],
      amount: Number.parseFloat(d.amount),
      // todo 产品原型中没有，临时写死
      userIdType: 'ID_CARD',
      userIdNo: '8888888888888888',
      userAddress: {
        country: '地球',
        province: '地球省',
        city: '地球市',
        county: '大中华区',
      },
    });
  }

  function handleError(e: any) {
    setErrors(e);
  }

  return (
    <form onSubmit={handleSubmit(handleFinish, handleError)} ref={ref}>
      {/* 基本信息 */}
      <FormGroup sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
        <FormField label="患者姓名" placeholder="name" errors={errors} {...register('userName', { required: true })} />
        <FormField
          label="Title"
          placeholder="please input title"
          errors={errors}
          {...register('title', { required: true })}
        />
        <FormField
          md={12}
          multiline
          maxRows={4}
          label="Description（Optional）"
          errors={errors}
          {...register('description', {})}
        />
        <FormField label="Hospital Name" errors={errors}>
          <HospitalSelect
            size="small"
            fullWidth
            label="Hospital Name"
            placeholder="please select your hospital name"
            error={!!errors.hospitalId}
            helperText={errors.hospitalId?.message}
            {...register('hospitalId', { required: true })}
            value={hospitalId}
            onChange={e => setHospitalId(e.target.value)}
          />
        </FormField>
        <FormField errors={errors} label="Disease">
          <DiseaseCategorySelect
            size="small"
            fullWidth
            label="Disease"
            placeholder="please select your disease"
            hospitalId={hospitalId}
            error={!!errors.diseaseCategoryId}
            helperText={errors.diseaseCategoryId?.message}
            {...register('diseaseCategoryId', { required: true })}
          />
        </FormField>
        <FormField
          label="Fund Amount"
          placeholder="please input your fund amount"
          type="number"
          inputMode="decimal"
          errors={errors}
          {...register('amount', { required: true })}
        />
      </FormGroup>
      {/* 联系方式 */}
      <FormGroup>
        <Grid item xs={12}>
          <Typography color="#ADB1B8" fontWeight="700">
            Contact Details <span style={{ color: 'red' }}>*</span> (At least choose one)
          </Typography>
        </Grid>
        <FormField label="Telephone Num" errors={errors} {...register('userPhoneNo')} />
        <FormField label="Mobile Num" errors={errors} {...register('userTelNo')} />
        <FormField
          label="E-mail"
          placeholder="please input your E-mail"
          type="email"
          errors={errors}
          {...register('userEmail')}
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
          errors={errors}
          {...register('userIdNo')}
        />
        <Grid item xs={12}>
          <FormLabel>Upload ID Photo</FormLabel>
          <Upload />
        </Grid>
        {/*<Grid item xs={12}>*/}
        {/*  <FormLabel>Upload Medical Records Photos</FormLabel>*/}
        {/*  <FileUploadFiles />*/}
        {/*</Grid>*/}
      </FormGroup>
      {/* 提交按钮 */}
      <FormGroup sx={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }} justifyContent="center">
        <Grid item sm={2}>
          <Button variant="contained" disabled={loading} fullWidth type="submit">
            Submit
          </Button>
        </Grid>
      </FormGroup>
    </form>
  );
});
