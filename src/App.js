import Banner from './/components/Banner/';
import Form from './components/Form';
import { useState } from 'react';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {


  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },

    {
      nome:'Marketing',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },

    {
      nome:'Comercial',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },

    {
      nome:'Suporte Técnico',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },

    {
      nome:'Recursos Humanos',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },

    {
      nome:'Customer Success',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },

    {
      nome:'Produtos',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    },


  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])

  }

  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} times={times.map(time => time.nome)}/>
      {times.map(time => <Time key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
      />)}
      <Rodape/>
    </div>
    
  );
}

export default App;
