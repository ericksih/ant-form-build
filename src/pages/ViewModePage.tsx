import moment from 'moment';
import { ViewMode } from '../components';

const ViewModePage = () => {
  return (
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
  );
};

export default ViewModePage;
