import styled from "styled-components";
import MarQuee from 'react-fast-marquee';

export const Container = styled.div`
    width: 100vw;
    height: calc(var(—vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
`

export const NoticeWrapper = styled.div`
    display: flex;
    padding: 20px 20px 0px 10px;
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
    flex-grow: 1;
    width: 20px;
    padding: 0px 10px 0px 10px;
    margin-left: 10px;
`

export const MarqueeDetail = styled(MarQuee)`
`

export const PushWrapper = styled.div`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
export const PushInform = styled.div`
    width: 100%;
    font-size: 16px;
    text-align: center;
    color: grey;
`


export const RecentNotice = styled.div`
    margin-right: 100px;
    `

export const MenuWrapper = styled.div`
    padding: 20px 20px 5px 20px;
    `

export const PushButtonWrapper = styled.div`
    width: 100%;
    padding: 10px 20px 5px 20px;
    display: flex;
    justify-content: center;
`

export const PushButton = styled.button`
    width: 100%;
    background-color: #13ca5c;
    font-size: 17px;
    border-radius: 16px;
    padding: 15px;
    border: none;
`

export const ViewButtonWrapper = styled.div`
    width: 100%;
    padding: 10px 20px 5px 20px;
    display: flex;
    justify-content: center;
`

export const ViewButton = styled.div`
    width: 100%;
    font-size: 17px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
`

export const ClassifyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const Classify = styled.div`
    font-size: 15px;
`
export const Detail = styled.div`
    font-size: 18px;
`
