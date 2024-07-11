import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FormContato from './components/FormContato'
import TituloContato from './components/TituloContato'

function App() {

  return (
    <div>
      <Header/>
      <TituloContato/> 
      <FormContato/>
      
      <br />
      <Footer/>
    </div>
  )
}

export default App
