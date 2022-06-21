import React, { useCallback } from 'react';
import { Form, Button } from 'antd';
import FormBuilder from 'antd-form-builder';

export interface ICoordinatedControls {
  onFinish: (values: any) => void;
  form?: any;
  meta: {
    key: string;
    label: string;
    widget?: string;
    options?: any;
    onChange?: (value: any) => void;
  };
}

const CoordinatedControls: React.FC<ICoordinatedControls> = (props) => {
  const [form] = Form.useForm();
  const handleFinish = useCallback((values: any) => {
    console.log('Submit: ', values);
  }, []);

  const meta = [
    {
      key: 'name',
      label: 'Name',
      widget: 'text',
      options: ['Male', 'Female'],
      onChange: (evt: any) => {
        if (evt.target.value === 'Male') {
          form.setFieldsValue({ note: 'Hi, man!' });
        } else {
          form.setFieldsValue({ note: 'Hi, lady!' });
        }
      },
    },
    { key: 'note', label: 'Note' },
  ];

  return (
    <Form
      onFinish={handleFinish}
      style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FormBuilder form={props.form} meta={props.meta} />

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CoordinatedControls;
