import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        text-decoration: none;
    }
    
    body, html {
        background: linear-gradient(120deg, #3498db, #897efe);
        height: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    body {
        padding-top: 150px;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

`;