import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetScreenSize } from '../../setScreenHeight';

import styled from "styled-components";
import * as Styles from './menuStyle';
import GlobalStyle from '../../GlobalStyle';
import { Header } from '../notice/notice';

export default function Menu() {
    useSetScreenSize();
    const menuData = [
        { when: '조식', items: ['모닝빵', '피자해쉬브라운', '삶은계란', '크래미샐러드', '수제피클'], bgColor: '#EFD5B6' },
        { when: '중식', items: ['모닝빵', '피자해쉬브라운', '삶은계란', '크래미샐러드', '수제피클'], bgColor: '#DEAB6E' },
        { when: '석식', items: ['모닝빵', '피자해쉬브라운', '삶은계란', '크래미샐러드', '수제피클'], bgColor: '#EFAF48' },
    ];

    return (
        <>
            <GlobalStyle />
            <Styles.Container>
                <Header />
                <Styles.Wrapper>

                    {/* 메뉴 */}
                    {menuData.map((menu, index) => (
                        <Styles.MenuBox key={index} bgColor={menu.bgColor}>
                            <p className='when'>{menu.when}</p>
                            <div></div>
                            {menu.items.map((item, itemIndex) => (
                                <p key={itemIndex}>{item}</p>
                            ))}
                        </Styles.MenuBox>
                    ))}
                </Styles.Wrapper >
            </Styles.Container >
        </>
    );
};