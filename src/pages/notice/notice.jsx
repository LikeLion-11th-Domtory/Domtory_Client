import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useSetScreenSize } from '../../setScreenHeight';
import * as Styles from './noticeStyle';
import * as HeaderStyles from '../../components/header/headerStyle';
import GlobalStyle from '../../GlobalStyle';
import logo from '../../assets/logo.png';
import back from '../../assets/back.png';
import mike from '../../assets/mike.png';
import search from '../../assets/search.png';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';

const Back = styled.img`
    padding: 0.4rem 0.3rem 0 0.3rem;
`

export const Header = () => {
    return (
        <>
            <GlobalStyle />
            <HeaderStyles.Container>
                <HeaderStyles.LogoWrapper>
                    <Link to='/'><Back src={back} /></Link>
                    <HeaderStyles.LogoImg src={logo} />
                    <HeaderStyles.Logo>Domtory</HeaderStyles.Logo>
                </HeaderStyles.LogoWrapper>
                <HeaderStyles.IconWrapper>
                    <HeaderStyles.Icon icon={faBell} />
                    <HeaderStyles.Icon icon={faBars} />
                </HeaderStyles.IconWrapper>
            </HeaderStyles.Container>
        </>
    );
};


export default function Notice() {
    useSetScreenSize();
    const notices = [
        { id: 1, title: '빈대 발견시 대처방법' },
        { id: 2, title: '제5대 충북학사 동서울관 자율회 회장단 선출 공고' },
        { id: 3, title: '2023년 충북학사 오픈데이' },
        { id: 4, title: '재난대비 모의훈련 실시' },
        { id: 5, title: '택배보관실 운영시간 연장' },
    ];

    return (
        <>
            <GlobalStyle />
            <Styles.Container>
                <Header />
                <Styles.Wrapper>
                    <p>공지사항</p>
                    {/* 검색 */}
                    <Styles.Input>
                        <img src={search} />
                        <input type="text" />
                    </Styles.Input>

                    {/* 목록 */}
                    {notices.map((notice) => (
                        <Styles.Notice key={notice.id}>
                            <img src={mike} />
                            <span>{notice.title}</span>
                        </Styles.Notice>
                    ))}
                </Styles.Wrapper >
            </Styles.Container >
        </>
    );
}