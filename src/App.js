import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Sidebar from './components/sidebar'
import Video from './components/video'

function App() {
  return (
    <div >
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>

  );
}

export default App;
