import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Home() {
    return(
        <Container>
            <div className="home">
                <h1>Página inicial</h1>
            </div>

            <h3>Menu:</h3>
            <Link to="/books/create" className="h-create__book">
                Adicionar Livro
            </Link>
        </Container>
    );
}