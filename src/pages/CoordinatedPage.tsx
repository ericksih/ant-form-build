import React from 'react';
import { CoordinatedControls } from '../components';

const CoordinatedPage = () => {
  return (
    <CoordinatedControls
      onFinish={(values: any) => {
        return console.log('Values: ', values);
      }}
      meta={{
        key: 'gender',
        label: 'Gender',
        widget: 'radio-group',
        options: ['Male', 'Female'],
      }}
    />
  );
};

export default CoordinatedPage;
