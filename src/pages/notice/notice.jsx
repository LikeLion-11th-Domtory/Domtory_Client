import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSetScreenSize } from '../../setScreenHeight';
import axios from 'axios';
import styled from 'styled-components';
import * as Styles from './noticeStyle';
import * as HeaderStyles from '../../components/header/headerStyle';
import GlobalStyle from '../../GlobalStyle';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import NoticeBox from '../../components/noticebox';
import Pagination from '@mui/material/Pagination';

import logo from '../../assets/logo.png';
import back from '../../assets/back.png';
import search from '../../assets/search.png';

const Back = styled.img`
    padding: 0.4rem 0.3rem 0 0.3rem;
`;

export const Header = () => {
    return (
        <>
            <GlobalStyle />
            <HeaderStyles.Container>
                <HeaderStyles.LogoWrapper>
                    <Link to="/">
                        <Back src={back} />
                    </Link>
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

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('https://api.domtory.site/notice/')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const itemsPerPage = 10; // 한 페이지에 표시할 항목 수
    const [page, setPage] = useState(1);
    const totalPageCount = Math.ceil(data.length / itemsPerPage);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = data.slice(startIndex, endIndex);

    return (
        <>
            <GlobalStyle />
            <Styles.Container>
                <Header />
                <Styles.Wrapper>
                    <p>공지사항</p>
                    {/* 검색 */}
                    <Styles.Input>
                        <img src={search} alt="search icon" />
                        <input type="text" />
                    </Styles.Input>

                    {/* 목록 */}
                    {displayedData.map((notice) => (
                        <Link key={notice.id} to={`/detail/${notice.id}`}>
                            <NoticeBox notice={notice} />
                        </Link>
                    ))}

                    {/* 페이지네이션 */}
                    <Pagination
                        count={totalPageCount}
                        page={page}
                        onChange={handleChangePage}
                    />
                </Styles.Wrapper>
            </Styles.Container>
        </>
    );
}
