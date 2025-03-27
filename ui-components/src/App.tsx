import React from 'react';
import './App.css';
import { Demo } from './components/demo/Demo';

function App() {
  return (
    <div className="App relative p-8 bg-slate-100">
      <div className='top-10 bg-red-300'>
        this div is having top 10 wiht respect to app div
      </div>
      <Demo />
    </div>
  );
}

export default App;
