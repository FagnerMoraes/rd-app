//import logo from './logo.svg';
import './App.css';
//import Condicional from './components/evento/Condicional';
import OutraLista from './components/listMaps/OutraLista';
//import Pessoa from './components/Pessoa'
//import Frase from './components/frase/Frase'
//import List from './components/list/List'
//import Evento from './components/form/Evento';
//import Form from './components/form/Form';


function App() {
  const meusItens = ["React","Vue", "Angular"]

  return (
    <div className="App">
      <h1>Renderizacao Listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  )
}


export default App;
