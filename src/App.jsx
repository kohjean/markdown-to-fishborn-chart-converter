import { Home } from './pages/Home';
import { ConvertResultPage } from 'pages/convertResult';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>markdown to fishbone-chart converter</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:markdown" element={<Home />} />
          <Route path="/converted/:markdown" element={<ConvertResultPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
