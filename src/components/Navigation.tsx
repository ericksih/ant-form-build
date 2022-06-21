import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav
        style={{
          padding: '10px',
          background: '#111',
          fontSize: '20px',
          textAlign: 'center',
        }}
      >
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            padding: '20px',
          }}
        >
          Simple
        </Link>

        <Link
          to='/dinamic'
          style={{
            textDecoration: 'none',
            padding: '20px',
          }}
        >
          Dinamic Field
        </Link>

        <Link
          to='/coordinated'
          style={{
            textDecoration: 'none',
            padding: '20px',
          }}
        >
          Coordinated Controls
        </Link>

        <Link
          to='/view'
          style={{
            textDecoration: 'none',
            padding: '20px',
          }}
        >
          VIew Mode
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
