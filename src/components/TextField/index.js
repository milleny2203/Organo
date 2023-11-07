import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {
    const placeholderModified = `${props.placeholder}...`

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='text-field'> 
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder= {placeholderModified} />
        </div>
    )
}

export default TextField