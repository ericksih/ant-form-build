import { Row, Col } from 'antd';
import moment from 'moment';
import React from 'react';
import { Simple, ViewMode } from './components';
import DinamicFields from './components/DinamicFields';

const App = () => {
  return (
    <Row
      style={{
        padding: '20px',
      }}
    >
      <Col span={24}>
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
      </Col>

      <Col span={24}>
        <ViewMode
          meta={{
            columns: 2,
            fields: [
              { key: 'name.first', label: 'First Name' },
              { key: 'name.last', label: 'Last Name' },
              { key: 'gender', label: 'Gender' },
              {
                key: 'dateOfBirth',
                label: 'Date of Birth',
                viewWidget(value) {
                  return <span>{moment(value).format('MMM Do YYYY')}</span>;
                },
              },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { key: 'address', label: 'Address', colSpan: 2 },
              { key: 'city', label: 'City' },
              { key: 'zipCode', label: 'Zip Code' },
            ],
          }}
          initialValues={{
            name: { first: 'Nate', last: 'Wang' },
            email: 'myemail@gmail.com',
            gender: 'Male',
            dateOfBirth: moment('2100-01-01'),
            phone: '15988888888',
            city: 'Shanghai',
            address: 'No.1000 Some Road, Zhangjiang Park, Pudong New District',
          }}
        />
      </Col>

      <Col span={24}>
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
        />
      </Col>
    </Row>
  );
};

export default App;
