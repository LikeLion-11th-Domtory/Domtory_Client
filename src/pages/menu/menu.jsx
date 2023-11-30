import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSetScreenSize } from '../../setScreenHeight';
import axios from 'axios';

import * as Styles from './menuStyle';
import GlobalStyle from '../../GlobalStyle';
import { Header } from '../notice/notice';
import Slider from 'react-slick';
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

    // 오늘 날짜를 기본값으로
    function getDayName(day) {
        const days = ['일', '월', '화', '수', '목', '금', '토'];
        return days[day];
    }

    const today = new Date();
    const formattedDate = `${today.getFullYear().toString().slice(-2)}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}`;
    const todayFormatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getDate().toString().padStart(2, '0')} (${getDayName(today.getDay())})`;

    console.log(todayFormatted);
    const [selectedDate, setSelectedDate] = useState(todayFormatted);
    const [data, setData] = useState([]);
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.domtory.site/menu/${formattedDate}/total/`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                const todayMenu = response.data.find((day) => day.date_detail.slice(3) === selectedDate);
                setMenuData(todayMenu);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [formattedDate]);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const selectedMenu = data.find((day) => day.date_detail.slice(3) === date);
        setMenuData(selectedMenu);
    };

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
                        {data.length > 0 && (
                            <Slider {...settings} style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                                {data.map((day, index) => (
                                    <span key={index} onClick={() => handleDateClick(day.date_detail.slice(3))}>
                                        {day.date_detail.slice(3)}
                                    </span>
                                ))}
                            </Slider>
                        )}
                    </Styles.Date>

                    {selectedDate && <p className="selected">{selectedDate} 식단</p>}

                    {/* 메뉴 */}
                    {menuData && (
                        <>
                            {menuData.breakfast_list && (
                                <Styles.MenuBox key="breakfast" bgColor="#EFD5B6">
                                    <p className="when">조식</p>
                                    <div></div>
                                    {menuData.breakfast_list.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
                                </Styles.MenuBox>
                            )}

                            {menuData.lunch_list && (
                                <Styles.MenuBox key="lunch" bgColor="#DEAB6E">
                                    <p className="when">중식</p>
                                    <div></div>
                                    {menuData.lunch_list.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
                                </Styles.MenuBox>
                            )}

                            {menuData.dinner_list && (
                                <Styles.MenuBox key="dinner" bgColor="#EFAF48">
                                    <p className="when">석식</p>
                                    <div></div>
                                    {menuData.dinner_list.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
                                </Styles.MenuBox>
                            )}
                        </>
                    )}
                </Styles.Wrapper>
            </Styles.Container>
        </>
    );
}
