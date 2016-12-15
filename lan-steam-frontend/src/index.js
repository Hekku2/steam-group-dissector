import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import SteamGroup from './data/steam/SteamGroup';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
var group = new SteamGroup();
group.fetch();

