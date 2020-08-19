import styled from 'styled-components';

export const Card = styled.div`
    background: white;
    width: 300px;
    max-width: 300px;
    margin: 3rem 3rem 5rem 3rem;
    border-radius: 4px;  
    overflow: hidden;
    transition: .25s;

    .bookImg {
        margin-top: 0.5rem;
        width: 100%;      
    }

    .card-title {
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
    }

    .card-body {
        padding-left: 3rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .card-body-text {
        font-size: 14px;
        margin-bottom: 0.5rem;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }


`;