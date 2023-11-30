import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: calc(var(—vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    padding: 0.5rem 0;
    padding-bottom: 1.5rem;

    p {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 1rem 0;
        padding-left: 1rem;
        
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export const Input = styled.div`
    width: 90%;
    height: 1.7rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    border: 1px solid #000;
    display: flex;
    padding: 0.3rem;
    margin: 0.8rem;

    input {
        width: 85%;
        border: none;
        padding-left: 0.2rem;
        font-size: 0.7rem;
    }

    input:focus {
        outline: none;
    }

    img {
        padding-left: 0.5rem;
    }
`

export const Text = styled.div`
    display: flex;
    background-color: #FFE3BA;
    padding: 0.2rem;

    .num {
        margin-left: 0.3rem;
        flex: 0.1;
    }

    span {
            font-size: 0.6rem;
            margin-right: 0.5rem;
            flex: 1;
        }

    .date {
        margin-right: 0.5rem;
        flex: 0.3;
    }
`
