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
        font-size: 1.1rem;
        font-weight: 600;
        margin: 1rem 0;
        padding-left: 0.3rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0.3rem;

    div {
        background-color: #FFE3BA;
        padding: 0.4rem;
        margin-bottom: 0.8rem;
        border-radius: 0.7rem;
        font-size: 0.8rem;
        font-weight: 600;
    }

    img {
        width: 100%;
        height: auto;
        margin-bottom: 0.8rem;
    }

    p {
        font-size: 0.7rem;
        font-weight: 500;
        margin: 0;
    }
`