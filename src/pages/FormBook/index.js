import React from  'react';
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function FormBook() {
    return (
        <Container> 
            <div className="form-top">
                <h1 className="form-title">Cadastrar um novo livro</h1>
                <Link to="/">
                    <FaArrowLeft color="#2A273A" size={26} />
                </Link>
            </div>
            <label htmlFor="title">Título</label>
            <input 
                type="text"
                placeholder="Titulo"
                id="title"
            />
            <label htmlFor="gender">Genêro</label>
            <input 
                type="text"
                placeholder="Genêro"
                id="gender"
            />
            <label htmlFor="description">Descrição</label>
            <input 
                type="text"
                placeholder="Descrição"
                id="description"
            />
            <label htmlFor="book">Livro</label>
            <input 
                type="file"
                id="book"
            />
            <label htmlFor="author">Autor</label>
            <input 
                type="text"
                placeholder="Autor"
                id="author"
            />
            <label htmlFor="year">Ano</label>
            <input 
                type="text"
                placeholder="Ano"
                id="year"
            />

            <button type="button">Salvar</button>  
            
        </Container>
    );
}