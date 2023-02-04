import { useState, useEffect } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import Teste from './Test'

function App() {

  useEffect(()=>{
    const carregaTudo = async()=>{
      let lista = await Tmdb.getHomeList();
      console.log(lista);
    }
    carregaTudo();
  },[]);

  return (
    <div className="App">
      <h1>Sadflix</h1>
      <Teste/>
    </div>
  )
}

export default App
