import React, { Component } from 'react';
import { autoBind } from 'jsdk/autoBind';
import { observer } from 'mobx-react';
import { MenuItem, TextField, TextFieldProps } from '@mui/material';
import { hospitalService } from '../services/hospital';

@observer
@autoBind
export class HospitalSelect extends Component<TextFieldProps, any> {
  constructor(props: any) {
    super(props);
    hospitalService.query();
  }

  /**
   * 处理医院搜索
   */
  handleSearch() {
    hospitalService.query();
  }

  render() {
    const { list } = hospitalService;
    return (
      <TextField {...this.props} select>
        {list.map((item, index) => (
          <MenuItem key={`${index}`} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
        <div />
      </TextField>
    );
  }
}
