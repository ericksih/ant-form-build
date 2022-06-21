import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SimplePage from './pages/SimplePage';
import Navigation from './components/Navigation';
import ViewModePage from './pages/ViewModePage';
import DinamicFieldsPage from './pages/DinamicFields';
import CoordinatedPage from './pages/CoordinatedPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<SimplePage />} />
        <Route path='view' element={<ViewModePage />} />
        <Route path='/dinamic' element={<DinamicFieldsPage />} />
        <Route path='/coordinated' element={<CoordinatedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
