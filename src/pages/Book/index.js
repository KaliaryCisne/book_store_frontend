import React from 'react';


import { Card } from './styles';
import bookImage from './../../assets/img/codigoDaVinci.jpg';

export default function Book() {
    return (
        <Card>
            <img className="bookImg" src={bookImage} alt="IMAGEM DO LIVRO" />

            <div className="card-title">
                <h1>O código Da Vinci</h1>    
            </div>

            <hr/>

            <div className="card-body">
                <h5 className="card-body-text">Autor: Dan Brown</h5>
                <h5 className="card-body-text">Gênero: Suspense/Ficção</h5>
                <h5 className="card-body-text">Valor: $ 54,90</h5>
            </div>

        </Card>
    );
}