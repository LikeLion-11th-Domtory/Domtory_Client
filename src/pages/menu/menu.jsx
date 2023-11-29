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

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
    };

    const [data, setData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(null);

    useEffect(() => {
        axios.get('https://api.domtory.site/menu/')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching menu data', error);
            });
    }, []);

    const handleDateClick = (date) => {
        setSelectedDate(date);

        const selectedDay = data.find((day) => {
            const dateDetail = day.date_detail;
            const dateMatch = dateDetail.match(/(\d{2}\.\d{2}) \((\D{1,3})\)/);

            if (dateMatch) {
                const extractedDate = `${dateMatch[1]} (${dateMatch[2]})`;
                return extractedDate === date;
            }
            return false;
        });

        setSelectedMenu(selectedDay);
    };

    return (
        <>
            <GlobalStyle />
            <Styles.Container>
                <Header />
                <Styles.Wrapper>
                    {/* 날짜 선택 */}
                    <Styles.Date>
                        <Slider {...settings}>
                            {data.map((day, index) => (
                                <span key={index} onClick={() => handleDateClick(day.date_detail)}>
                                    {day.date_detail}
                                </span>
                            ))}
                        </Slider>
                    </Styles.Date>

                    {selectedDate && <p className="selected">{selectedDate}</p>}

                    {/* 메뉴 */}
                    {['breakfast', 'lunch', 'dinner'].map((mealType) => (
                        selectedMenu?.[`${mealType}_list`] && (
                            <Styles.MenuBox key={mealType} bgColor={mealType === 'breakfast' ? '#EFD5B6' : mealType === 'lunch' ? '#DEAB6E' : '#EFAF48'}>
                                <p className="when">{mealType === 'breakfast' ? '조식' : mealType === 'lunch' ? '중식' : '석식'}</p>
                                <div></div>
                                {selectedMenu[`${mealType}_list`].map((item, itemIndex) => (
                                    <p key={itemIndex}>{item}</p>
                                ))}
                            </Styles.MenuBox>
                        )
                    ))}
                </Styles.Wrapper>
            </Styles.Container>
        </>
    );
}