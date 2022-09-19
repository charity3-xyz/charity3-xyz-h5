import React, { FC } from 'react';
import { App } from '../../components/App';
import { Input, FormControl, FormHelperText, InputLabel } from '@mui/material';
import './index.module1.scss';
const Audit: FC = () => {
  return (
    <App>
      <div className="audit">
        <h1>Appeal</h1>
        <div className="container">
          <div className="title">
            <div>左边图片</div>
            <div>
              <h2>Severe burns</h2>
              <h3>Patient: Han Meijuan</h3>
              <p>Estimated treatment time of one year</p>
              <p>
                This is the introduction This is the introduction This is the introduction This is the introduction This
                is the This is the introductionThis is the introduction This is the introduction This is the
                introduction This is the introduction This is the This is the introductionThis is the
              </p>
            </div>
          </div>
          <div>
            <h2>申诉原因</h2>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
          </div>
        </div>
      </div>
    </App>
  );
};

export { Audit };
