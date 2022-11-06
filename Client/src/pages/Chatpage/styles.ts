import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: #353535;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 2.5rem;

        background-color: #232323;

        width: 100%;
        height: 7rem;
    }

    .title{
        font-family: 'Poppins', sans-serif;
        font-size: 2.5rem;
        color: white;

        @media(max-width: 600px){
            font-size: 2rem;
        }
    }

    .username{
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        color: white;

        @media(max-width: 600px){
            font-size: 2rem;
        }
    }

    .content{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: calc(100% - 10rem);
        padding: 2rem;
        margin-top: 1rem;
    }

    .chatarea{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        height: 50rem;
        width: 80rem;

        background-color: #232323;
        border-radius: 1rem;
        padding: 1rem;
    }

    .messages{
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        width: 100%;
        height: 30rem;

        background-color: #1b1b1b;
        border-radius: 1rem;

        padding: 1rem;

        overflow-y: auto;
    }

    .textarea{
        resize: none;

        width: 100%;
        height: 12rem;

        outline: none;
        border: none;
        padding: 1rem;

        font-family: 'Poppins', sans-serif;
        color: white;
        font-size: 1.5rem;

        background-color: inherit;
    }

    .buttonarea{
        display: flex;
        justify-content: flex-end;

        width: 100%;
        height: auto;

        button{
            background-color: #353535;
            border: none;
            padding: 1rem;
            border-radius: .5rem;

            color: #fff;
            font-family: 'Poppins', sans-serif;
            width: 15rem;

            transition: background-color 0.5s;
            cursor: pointer;
            &:hover{
                background-color: #000;
            }
        }
    }

    footer{
        width: 100%;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        font-family: 'Poppins', sans-serif;
    }
`;