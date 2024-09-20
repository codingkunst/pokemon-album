import React from 'react'
import './App.css'
import Header from './components/Header'
import PokeCardList from './components/PokeCardList'
import Router from './shared/Router'

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  )
}

export default App
