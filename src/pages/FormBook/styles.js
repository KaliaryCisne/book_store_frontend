import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`
    position: relative;
    width: 500px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(0,0,0,.2);
    transition: .25s all;
    background-color: #fff;
    
    .form-top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            margin-bottom: 1.8rem;
            color: #2A273A;
        }
    }

    label {
        color: #2A273A;
        margin-bottom: .5rem;
    }

    input {
        width: 100%;
        background: #fff;
        border: 1px solid #c1c1c1;
        padding: 1rem;
        margin-bottom: 1.5rem;
        border-radius: 4px;

         &:focus {
            border-color: ${darken(0.1, '#03005c')};
            /* border-color: #3498db; */
        }
    }

    button {
        margin-top: .7rem; 
        width: 170px;
        background: #03005c;
        color: #fff;
        border-radius: 4px;
        padding: .9rem 2rem;
        transition: .25s all;
        text-transform: uppercase;
        border: none;
        outline: none;
        font-weight: bold;

        &:hover {
            background-color: ${darken(0.1, '#03005c')};
        }
    }

`;