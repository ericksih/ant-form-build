import React from 'react';
import { DinamicFields } from '../components';

const DinamicFieldsPage = () => {
  return (
    <DinamicFields
      onSubmit={(event: React.FormEvent<Element>) => {
        console.log('Submit: ', event);
      }}
      meta={{
        fields: [
          {
            key: 'favoriteFruit',
            label: 'Favorite Fruit',
            widget: 'radio-group',
            options: ['Apple', 'Orange', 'Banana'],
            initialValue: 'Apple',
          },
        ],
      }}
      wrapperCol={16}
      offset={8}
      type='primary'
      onFinish={(values: any) => {
        console.log('Values: ', values);
      }}
      htmlType='submit'
    />
  );
};

export default DinamicFieldsPage;
