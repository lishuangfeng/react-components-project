import React, { ReactElement } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Upload, TablePage, TopPage } from '../index';
import "../../config/i18n";

export default function App(): ReactElement {
    return (
        <BrowserRouter>
      <div>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/tablepage" component={TablePage} />
      </div>
  </BrowserRouter>
    )
}