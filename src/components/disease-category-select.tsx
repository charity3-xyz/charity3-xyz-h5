import React, { forwardRef } from 'react';
import { MenuItem, TextField, TextFieldProps } from '@mui/material';
import { observer } from 'mobx-react';
import { hospitalService } from '../services/hospital';

export type DiseaseCategorySelectProps = {
  hospitalId?: string;
} & TextFieldProps;

/**
 * 基本类目选择框
 * @param hospital
 * @param props
 * @constructor
 */
export const DiseaseCategorySelect = observer(
  forwardRef(function DiseaseCategorySelect({ hospitalId, ...props }: DiseaseCategorySelectProps, ref) {
    const { list } = hospitalService;
    const hospital = list.find(item => item.id === hospitalId);
    return (
      <TextField {...props} inputRef={ref} select>
        {hospital?.supportDiseaseCategories?.map((item, index) => (
          <MenuItem key={`${index}`} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
        <div />
      </TextField>
    );
  }),
);
