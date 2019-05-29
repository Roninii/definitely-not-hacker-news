import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1 className="page-title">
          Definitely <span className="page-title--accent">Not</span> Hacker News
        </h1>
        <Home />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
