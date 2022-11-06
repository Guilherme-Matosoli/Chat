import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 5.5rem;

    background-color: #232323;
    border-radius: 1rem;
    padding: .2rem 1rem .2rem 1rem;

    .author{
        min-width: 100%;
        min-height: 1rem;

        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        color: white;
    }

    .messagearea{
        width: 100%;
        min-height: 5rem;

        p{
            min-width: 100%;
            min-height: 1rem;

            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            color: white;
        }
    }
`;