import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import Contexts from './context/index'

function App() {
  return (
    <Contexts>
      <Router>
        <Routes />
      </Router>
    </Contexts>
  );
}

export default App;
