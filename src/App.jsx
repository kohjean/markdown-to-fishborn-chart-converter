import { Home } from 'pages/Home';
import { ConvertResultPage } from 'pages/convertResult';
import { Routes, Route } from 'react-router-dom';
import Icon from 'assets/icon.png';
import './App.css';
import { css } from '@emotion/react';

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <header
        className="App-header"
        css={css`
          margin-top: 1.6rem;
        `}
      >
        <p
          css={css`
            display: flex;
          `}
        >
          <a
            href="/"
            css={css`
              display: inline-block;
            `}
          >
            <img
              src={Icon}
              alt="Icon linking to Home"
              css={css`
                width: 10rem;
                margin-left: 2rem;
              `}
            />
          </a>
        </p>
        <h1>markdown to fishbone-chart converter</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:markdown" element={<Home />} />
        <Route path="/converted/:markdown" element={<ConvertResultPage />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
      <footer
        css={css`
          margin-bottom: 2rem;
        `}
      >
        <small>&copy; md2fbc {year}</small>
      </footer>
    </div>
  );
}

export default App;
