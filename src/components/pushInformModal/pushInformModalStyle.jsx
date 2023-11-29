import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    padding: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    background-color: #f2eadb;
    box-sizing: border-box;
    align-items: center;
    position: fixed;
    z-index: 1000;
    border-radius: 16px;
    top: 5%;
    left: 5%;
`

export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
`

export const InformImg = styled.img`
    width: 100%;
    height: 20%:
    `

export const Detail = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
`

export const CloseButton = styled.button`
    width: 100%;
    padding: 15px;
    border: none;
    background-color: #efaf48;
`