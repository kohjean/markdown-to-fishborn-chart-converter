import { Provider } from './Provider';
import { Home } from './pages/Home';
import { ConvertResultPage } from 'pages/convertResult';
import { Routes, Route } from 'react-router-dom';
import { variable } from 'const/global';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <h1>markdown to fishbone-chart converter</h1>
          <Routes>
            <Route path={variable.__rootdir} element={<Home />} />
            <Route
              path={`${variable.__rootdir}/converted/:markdown`}
              element={<ConvertResultPage />}
            />
          </Routes>
        </header>
      </div>
    </Provider>
  );
}

export default App;
