import React, { useCallback } from 'react';
import { Form, Button } from 'antd';
import FormBuilder from 'antd-form-builder';

export interface ISimple {
  onSubmit: (event: React.FormEvent<Element>) => void;
  form?: any;
  meta: {
    fields: {
      key: string;
      label: string;
      widget?: string;
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
}

const Simple: React.FC<ISimple> = (props) => {
  const handleFinish = useCallback((values: any) => {
    console.log('Submit: ', values);
  }, []);

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

      <Form.Item
        wrapperCol={{
          span: props.wrapperCol,
          offset: props.offset,
        }}
      >
        <Button type={props.type} htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Simple;
