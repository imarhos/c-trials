import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/overview" element={ <Overview/> } exact/>
        <Route path="/reports" element={ <Reports/> } exact/>
      </Routes>
    </Router>
  );
}

export default App;
