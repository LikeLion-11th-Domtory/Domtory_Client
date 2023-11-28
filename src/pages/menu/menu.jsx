import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSetScreenSize } from '../../setScreenHeight';
import axios from 'axios';

import * as Styles from './menuStyle';
import GlobalStyle from '../../GlobalStyle';
import { Header } from '../notice/notice';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Menu() {
    useSetScreenSize();

    const dateList = [
        '11.19 (일)',
        '11.20 (월)',
        '11.21 (화)',
        '11.22 (수)',
        '11.23 (목)',
        '11.24 (금)',
        '11.25 (토)',
    ];
    const [selectedDate, setSelectedDate] = useState('11.19 (일)');
    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
    };

    const menuData = [
        { when: '조식', items: ['모닝빵', '피자해쉬브라운', '삶은계란', '크래미샐러드', '수제피클'], bgColor: '#EFD5B6' },
        { when: '중식', items: ['모닝빵', '피자해쉬브라운', '삶은계란', '크래미샐러드', '수제피클'], bgColor: '#DEAB6E' },
        { when: '석식', items: ['모닝빵', '피자해쉬브라운', '삶은계란', '크래미샐러드', '수제피클'], bgColor: '#EFAF48' },
    ];

    const [data, setData] = useState();

    useEffect(() => {
        axios.get("https://api.domtory.site/menu/231128/total/")
            .then((response) => {
                console.log(response.data)
                // setData(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    // 서버가 응답한 상태 코드가 2xx 범위를 벗어난 경우
                    console.error('Server responded with a non-2xx status', error.response.data);
                } else if (error.request) {
                    // 요청은 보냈지만 응답을 받지 못한 경우
                    console.error('No response received from the server', error.request);
                } else {
                    // 요청을 보내기 전에 발생한 오류
                    console.error('Error before sending the request', error.message);
                }
            })
    });

    return (
        <>
            <GlobalStyle />
            <Styles.Container>
                <Header />
                <Styles.Wrapper>
                    {/* 날짜 선택 */}
                    <Styles.Date>
                        <Slider {...settings} style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                            {dateList.map((data, index) => (
                                <span key={index} onClick={() => handleDateClick(data)}>{data}</span>
                            ))}
                        </Slider>
                    </Styles.Date>

                    
                        
                        {selectedDate && <p className='selected'>{selectedDate}</p>}
                    

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