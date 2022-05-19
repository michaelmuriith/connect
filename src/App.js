import './App.css';
import Characterslist from './pages/Characterslist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route strict exact path="/" caseSensitive={false} element={<Characterslist/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
