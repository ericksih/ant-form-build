import React, { useCallback } from 'react';
import { Form, Button } from 'antd';
import FormBuilder from 'antd-form-builder';

export interface ISingel {
  onFinish: (values: any) => void;
  layout: any;
  form?: any;
  meta: {
    key: string;
    placeholder: string;
    widget?: string;
  };
  password: {
    key: string;
    placeholder: string;
    widget?: string;
  };

  htmlType: 'submit' | 'button' | 'reset';
  type?:
    | 'link'
    | 'text'
    | 'ghost'
    | 'primary'
    | 'default'
    | 'dashed'
    | undefined;
}

const SingleField: React.FC<ISingel> = (props) => {
  const handleFinish = useCallback((values: any) => {
    console.log('Submit: ', values);
  }, []);

  return (
    <Form layout={props.layout} onFinish={handleFinish}>
      <FormBuilder meta={props.meta} form={props.form} />
      <FormBuilder meta={props.password} form={props.form} />
      <Form.Item>
        <Button htmlType={props.htmlType} type={props.type}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SingleField;
