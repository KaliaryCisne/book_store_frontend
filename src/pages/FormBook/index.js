import React from  'react';
import { Container } from './styles';

export default function FormBook({ title, buttonName}) {
    return (
        <Container> 
            <h1 className="form-title">{title}</h1>

            <label htmlFor="">Título</label>
            <input 
                type="text"
                placeholder="Título"
                id=""
            />

            <label htmlFor="">Gênero</label>
            <input 
                type="text"
                placeholder="Gênero"
            />

            <label htmlFor="">Descrição</label>
            <input 
                type="text"
                placeholder="Descrição"
            />

            <label htmlFor="">Imagem</label>
            <input 
                type="text"
                placeholder="Imagem"
            />

            <label htmlFor="">Autor</label>
            <input 
                type="text"
                placeholder="Autor"
            />

            <label htmlFor="">Ano de lançamento</label>
            <input 
                type="text"
                placeholder="Ano de lançamento"
            />

            <button type="button">{buttonName}</button>  
            
        </Container>
    );
}