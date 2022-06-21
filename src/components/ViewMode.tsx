import React from 'react';
import FormBuilder from 'antd-form-builder';

export interface IViewMode {
  form?: any;
  meta: {
    columns: number;
    fields: {
      key: string;
      label: string;
      colSpan?: number;
      viewWidget?: (value: string) => React.ReactElement;
    }[];
  };

  initialValues: {
    [key: string]: any;
  };
}

const ViewMode: React.FC<IViewMode> = (props) => {
  return (
    <FormBuilder
      meta={props.meta}
      initialValues={props.initialValues}
      form={props.form}
      viewMode
    />
  );
};

export default ViewMode;
