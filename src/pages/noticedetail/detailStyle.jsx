import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: calc(var(—vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    padding: 1rem 1rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #FFE3BA;
    border-radius: 1rem;
    padding: 0.8rem 1rem;

    .title {
        margin: 0;
        margin-bottom: 0.1rem;
        border-radius: 0.7rem;
        font-size: 0.9rem;
        font-weight: 600;
    }
    
    .date {
        font-size: 0.7rem;
        margin: 0;
        margin-bottom: 0.3rem;
    }

    div {
        height: 0.1rem;
        background-color: #FFE3BA;
        margin-bottom: 0.5rem;
    }

    .content {
        font-size: 0.7rem;
        font-weight: 500;
        margin: 0;
    }

`