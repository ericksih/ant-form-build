import React from 'react';
import { Form, Button } from 'antd';
import FormBuilder from 'antd-form-builder';

export interface IDinamic {
  onSubmit: (event: React.FormEvent<Element>) => void;
  form?: any;
  onFinish: (values: any) => void;
  meta: {
    fields: {
      key: string;
      label: string;
      widget?: string;
      options?: any;
      initialValue?: any;
    }[];
  };
  wrapperCol: number;
  offset: number;
  type:
    | 'link'
    | 'text'
    | 'primary'
    | 'ghost'
    | 'default'
    | 'dashed'
    | undefined;

  htmlType: 'submit' | 'button' | 'reset';
}

const DinamicFields: React.FC<IDinamic> = (props) => {
  return (
    <Form onFinish={props.onFinish}>
      <FormBuilder form={props.form} meta={props.meta} />

      <Form.Item
        wrapperCol={{
          span: props.wrapperCol,
          offset: props.offset,
        }}
      >
        <Button type={props.type} htmlType={props.htmlType}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DinamicFields;
