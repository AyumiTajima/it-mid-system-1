import React from 'react';

import './App.css';
import Headbar from './Component/Molculs/Headbar';
import Sidebar from './Component/Molculs/Sidebar';
import ListPage from './Component/Template/ListPage';

function App() {
  return (
    <div className='h-screen'>
      <div>
        <Headbar/>
      </div>
      <div className='flex h-full '>
        <Sidebar/>
        <ListPage/>
      </div>
    </div>
  );
}

export default App;
