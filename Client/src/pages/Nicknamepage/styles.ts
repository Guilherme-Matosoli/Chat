import styled from 'styled-components';

export const Container = styled.div`

    padding: 1.5rem;
    width: 100vw;
    height: 100vh;

    background-color: #353535;

    header{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 1rem;

        height: 5rem;
        width: 100%;

        .userCount{
            color: white;
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;

            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .onSignal{
            width: 1rem;
            height: 1rem;
            
            background-color: #00FF59;
            border-radius: 50%;
        }
    }

    .formarea{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: calc(100% - 5rem);
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3.5rem;

        width: 50rem;
        height: 40rem;

        background-color: #232323;
        border-radius: 1rem;

        label{
            display: inline;

            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            color: #fff;
        }

        input{
            outline: none;
            padding: 1.5rem;
            border: none;
            border-radius: .5rem;

            width: 100%;

            background-color: #353535;
            color: #fff;
            font-size: 1.5rem;
            font-family: 'Poppins', sans-serif;
        }

        button{
            background-color: #353535;
            border: none;
            padding: 1.5rem;
            border-radius: .5rem;

            color: #fff;
            font-family: 'Poppins', sans-serif;

            transition: background-color 0.5s;
            cursor: pointer;
            &:hover{
                background-color: #000;
            }
        }
    }
`;