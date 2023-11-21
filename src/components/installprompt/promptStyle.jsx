import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10rem;
    border-radius: 16px;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #deab6e;
`

export const PromptWrapper = styled.div`
    font-size: 17px;
    justify-content: center;
    display: flex;
    padding: 20px;
    font-weight: 700;
    gap: 10px;
    align-items: center;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
`

export const Buttons = styled.button`
    width: 40%;
    padding: 10px;
    border: none;
`