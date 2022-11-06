import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 10px;
        overflow-y: hidden;

        @media(min-width: 3000px){
            html{
                font-size: 15px;
            }
        }
    }

    body{
        height: 100vh;
        width: 100vw;
    }

`;