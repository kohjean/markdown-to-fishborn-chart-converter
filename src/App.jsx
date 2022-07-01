import { Home } from 'pages/Home';
import { ConvertResultPage } from 'pages/convertResult';
import { Routes, Route } from 'react-router-dom';
import Icon from 'assets/icon.png';
import './App.css';
import { css } from '@emotion/react';
import { mq } from 'components/breakpoints';

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
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
                width: 8rem;
                margin-left: 1.6rem;
                ${mq[0]} {
                  width: 10rem;
                }
              `}
            />
          </a>
        </p>
        <h1
          css={css`
            font-size: 1rem;
            ${mq[0]} {
              font-size: 2rem;
            }
          `}
        >
          markdown to fishbone-chart converter
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/converted/" element={<ConvertResultPage />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
      <footer
        css={css`
          margin-bottom: 1rem;
        `}
      >
        <small>&copy; md2fbc {year}</small>
      </footer>
    </div>
  );
}

export default App;
