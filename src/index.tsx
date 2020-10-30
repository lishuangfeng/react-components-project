import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import { Upload, TablePage, TopPage } from './pages';
import "./config/i18n";

ReactDOM.render(
      <Router>
      <div>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/tablepage" component={TablePage} />
      </div>
  </Router>,
  document.getElementById('root')
);

