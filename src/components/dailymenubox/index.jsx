import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../GlobalStyle';
import * as Styles from './menuStyle';
import UserApi from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const DailyMenuBox = () => {
    const [menuList, setMenuList] = useState([]);
    const [formatedDate, setFormatedDate] = useState('');
    const [dayDiv, setDayDiv] = useState('');
    const navigate = useNavigate();

    const onClickMenu = () => {
        navigate('/menu');
    }

    useEffect(() => {
        const today = new Date();
        const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const dayOfWeek = week[today.getDay()];
        const hour = today.getHours();
        let dayDivForApi;
        if (hour <= 7 && hour >= 0) {
            setDayDiv('아침');
            dayDivForApi = 'breakfast';
        } else if (hour >= 8 && hour <= 12) {
            setDayDiv('점심');
            dayDivForApi = 'lunch';
        } else if (hour >= 13 && hour <= 19) {
            setDayDiv('저녁');
            dayDivForApi = 'dinner';
        } else if (hour >= 20 && hour <= 23) {
            setDayDiv('아침');
            dayDivForApi = 'breakfast';
            today.setDate(today.getDate() + 1);
        }

        const formatedDate = `${today.getMonth() + 1}.${today.getDate()}(${dayOfWeek})`;
        setFormatedDate(formatedDate);

        const formatedDateForApi = `${today.getFullYear().toString().slice(-2)}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;

        const getmenuData = async () => {
            try {
                const menuData = await UserApi.getTodayMenu(formatedDateForApi, dayDivForApi);
                if (hour >= 0 && hour >= 8) {
                    setMenuList(menuData[0].breakfast_list);
                } else if (hour >= 9 && hour <= 13) {
                    setMenuList(menuData[0].lunch_list);
                } else if (hour >=14 && hour <= 20){
                    setMenuList(menuData[0].dinner_list);
                } else if (hour >= 21 && hour <=24){
                    setMenuList(menuData[0].breakfast_list);
                }
            } catch (error) {
                console.error(error);
            }
        };

        // getmenuData 함수 호출
        getmenuData();
    }, []);

    return (
        <>
            <GlobalStyle />
            <Styles.Container onClick={() => onClickMenu()}>
                <Styles.Day>{formatedDate}</Styles.Day>
                <Styles.DayDiv>{dayDiv}</Styles.DayDiv>
                <Styles.Menu>
                    {menuList.map((menu, index) => (
                        <div key={index}>{menu}</div>
                    ))}
                </Styles.Menu>
            </Styles.Container>
        </>
    );
};

export default DailyMenuBox;
