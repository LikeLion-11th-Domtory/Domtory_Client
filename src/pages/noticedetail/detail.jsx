import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetScreenSize } from '../../setScreenHeight';

import * as Styles from './detailStyle';
import GlobalStyle from '../../GlobalStyle';
import { Header } from '../notice/notice';

export default function Menu() {
    useSetScreenSize();

    return (
        <>
            <GlobalStyle />
            <Styles.Container>
                <Header />
                <Styles.Wrapper>
                    <p>공지사항</p>
                </Styles.Wrapper >
            </Styles.Container >
        </>
    );
};