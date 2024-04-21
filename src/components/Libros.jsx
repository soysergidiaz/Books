import React from 'react';
import './Libros.css';

function Libros(props) {
  return (
    <article className='libro'> 
        <img src={props.imgPortada} alt="" />
        <div className='libroDatos'>
            <h2>{props.titulo}</h2>
            <p>Start: {props.start}</p>  
        </div>   
    </article>
  )
}

export default Libros
