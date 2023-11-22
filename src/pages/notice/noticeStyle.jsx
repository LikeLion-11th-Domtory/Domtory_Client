import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: calc(var(—vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    padding: 0.5rem 1rem;

    p {
        font-size: 1.5rem;
        margin: 1rem 0;
        padding-left: 0.3rem;
    }
`

export const Input = styled.div`
    width: 100%;
    height: 2.3rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    border: 1px solid #000;
    display: flex;
    padding: 0.3rem;

    input {
        width: 85%;
        border: none;
        padding-left: 0.2rem;
    }

    input:focus {
        outline: none;
    }

    img {
        padding-left: 0.5rem;
    }
`

