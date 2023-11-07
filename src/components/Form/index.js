import './Form.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Botao from '../Botao/Botao';
import { useState } from 'react';

const Form = (props) => {

   

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
      //  console.log('O Formulario foi submetido', nome, cargo, imagem, time)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do gato colaborador :</h2>
                <TextField 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado = {valor => setNome(valor)}
                />
                <h2></h2>
                <TextField 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado = {valor => setCargo(valor)}
                />
                <h2></h2>
                <TextField 
                obrigatorio={true} 
                label="Imagem" 
                placeholder="Informe o caminho da sua imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <h2></h2>
                <DropdownList 
                obrigatorio={true} 
                itens={props.times} 
                label="Time" 
                valor={time}
                aoAlterado= {valor => setTime(valor)}
                />
                <h2></h2>
                <h2></h2>
                <Botao>Criar card do gatinho</Botao>
                
            </form>
        </section>
    )
}

export default Form;
