import {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Saudacao from './components/stateLift/Saudacao';
import SeuNome from './components/stateLift/SeuNome';
//import Condicional from './components/evento/Condicional';
//import OutraLista from './components/listMaps/OutraLista';
//import Pessoa from './components/Pessoa'
//import Frase from './components/frase/Frase'
//import List from './components/list/List'
//import Evento from './components/form/Evento';
//import Form from './components/form/Form';



function App() {
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
    <SeuNome setNome= {setNome} />
    <Saudacao nome= {nome} />
    </div>
  )
}


export default App;
