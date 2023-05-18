import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header';
import { Main } from './components/main';

function App() {

  return (
    <>
    <div className='container'>
      <Header/>
      <Main/>
    </div>
    </>
  )
}

export default App
