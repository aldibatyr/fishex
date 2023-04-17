import './App.scss';
import MainContent from './components/main';
import SideBar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <SideBar />
        <MainContent />
      </Router>
    </div>
  );
}

export default App;
