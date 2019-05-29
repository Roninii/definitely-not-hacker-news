import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
