import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    position: relative;
    width: 500px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(0,0,0,.2);
    transition: .25s all;
    background-color: #fff;

    .home {
        margin-bottom: 30px;

        h1 {
            text-transform: capitalize;
        }
    }

    h3 {
        margin-bottom: .3rem;
    }

    .h-create__book {
        color: #2A273A;
        transition: .25s all;

        &:hover {
            color: ${darken(0.1, '#2A273A')};    
        }
    }

`;