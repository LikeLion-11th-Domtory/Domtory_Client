import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: calc(var(—vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
`

export const NoticeWrapper = styled.div`
    display: flex;
    padding: 20px 20px 20px 10px;
    gap: 15px;
    justify-content: center;
`

export const NoticeDetailWrapper = styled.div`
    display: flex;
    border-radius: 16px;
    background-color: #d9d9d9;
    width: 100%;
    align-items: center;
    padding: 5px 10px 5px 10px;
`

export const Notice = styled.div`
    font-size: 17px;
    border-right: 1px solid black;
    padding-right: 10px;
`
export const NoticeDetail = styled.div`

`