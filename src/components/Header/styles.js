import styled from 'styled-components';
import { darken } from 'polished';

export const HeaderTop = styled.header`
    position: fixed;
    width: 100%;
    height: 65px;
    background: #fff;
    box-shadow: 0 0 30px rgba(0,0,0,.1);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 2;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 0 auto;

        .logo {
            font-size: 28px;
            color: #2A273A;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                margin-left: .5rem;
            }
        }

        ul > li a {
            color: #fff;
            background: #2A273A;
            padding: 1rem;
            transition: .25s all;

            &:hover{
                background: ${darken(0.1, '#2A273A')};
            }
        }
    }
`;