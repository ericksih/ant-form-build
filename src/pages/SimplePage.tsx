import React from 'react';
import { Simple } from '../components';

const SimplePage = () => {
  return (
    <Simple
      onSubmit={(event: React.FormEvent<Element>) => {
        console.log('Submit: ', event);
      }}
      meta={{
        fields: [
          { key: 'username', label: 'User Name' },
          { key: 'password', label: 'Password', widget: 'password' },
        ],
      }}
      wrapperCol={16}
      offset={8}
      type='primary'
    />
  );
};

export default SimplePage;
