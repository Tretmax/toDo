

import './App.css';
import Header from './components/header';
import ToDoList from './components/ToDoList';
import React from 'react';

import InputModal from './components/inputModal';




function App() {


  return (

    <div className='App'>
      <InputModal />
      <Header />
      <main>
        <ToDoList />
      </main >
    </div >

  )

}


export default App;
