import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './components/create';
import Crud from './pages/crud';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Crud />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
