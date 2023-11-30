import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSetScreenSize } from '../../setScreenHeight';
import axios from 'axios';

import styled from 'styled-components';
import * as Styles from './detailStyle';
import GlobalStyle from '../../GlobalStyle';
import * as HeaderStyles from '../../components/header/headerStyle';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.png';
import back from '../../assets/back.png';

const Back = styled.img`
    padding: 0.4rem 0.3rem 0 0.3rem;
`;

export const Header = () => {
    return (
        <>
            <GlobalStyle />
            <HeaderStyles.Container>
                <HeaderStyles.LogoWrapper>
                    <Link to="/notice">
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

export default function Detail() {
    useSetScreenSize();

    const { noticeId } = useParams();
    const [data, setData] = useState(null);
    const [img, setImg] = useState(null);

    useEffect(() => {
        axios.get(`https://api.domtory.site/notice/${noticeId}`)
            .then((response) => {
                setData(response.data);
                setImg(response.data.images);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <GlobalStyle />
            <Styles.Container>
                <Header />
                <Styles.Wrapper>
                    {data && (
                        <Styles.Content>
                            <p className='title'>{data.title}</p>
                            <p className='date'>{data.date}</p>
                            <div></div>
                            <img src={data.images} alt="" />
                            <p className='content'>{data.content && data.content.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}</p>
                        </Styles.Content>
                    )}
                </Styles.Wrapper>
            </Styles.Container>
        </>
    );
}
