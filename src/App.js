import { Converter } from './Converter';
import { ConvertResult } from './ConvertResult';
import { Routes, Route } from 'react-router-dom';
import { variable } from './const/global';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>markdown to fishbone-chart converter</h1>
        <Routes>
          <Route path={variable.__rootdir} element={<Converter />} />
          <Route
            path={`${variable.__rootdir}/converted/:markdown`}
            element={<ConvertResult />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
