import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import Home from './components/Home';
import Comments from './components/Comments';
import UserDetail from './components/UserDetail';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <h1 className="page-title">
            Definitely <span className="accent">Not</span> Hacker News
          </h1>
          <Route exact path="/" component={Home} />
          <Route path="/post" component={Comments} />
          <Route path="/user-detail" component={UserDetail} />
        </main>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
