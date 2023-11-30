import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../GlobalStyle';
import * as Styles from './menuStyle';
import UserApi from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const DailyMenuBox = () => {
    const [menuList, setMenuList] = useState([]);
    const [daydiv, setDayDiv] = useState('');
    const [formatedDate, setFormatedDate] = useState('');
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
        
        const formatedDate = `${today.getMonth() + 1}.${today.getDate()}(${dayOfWeek})`;
        if (hour < 9 || hour >= 0) {
            setDayDiv('아침');
            dayDivForApi = 'breakfast';
            setFormatedDate(formatedDate);
        } else if (hour >= 9 || hour <= 13) {
            setDayDiv('점심');
            dayDivForApi = 'lunch';
            setFormatedDate(formatedDate);
        } else if (hour >= 13 || hour <= 21){
            setDayDiv('저녁');
            dayDivForApi = 'dinner';
            setFormatedDate(formatedDate);
        } else if (hour >= 22 || hour <= 24){
            setDayDiv('아침');
            const nextDay = `${today.getMonth() + 1}.${today.getDate()+1}(${dayOfWeek})`
            setFormatedDate(nextDay);
        }


        const formatedDateForApi = `${today.getFullYear().toString().slice(-2)}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;

        const getmenuData = async () => {
            try {
                const menuData = await UserApi.getTodayMenu(formatedDateForApi, dayDivForApi);
                if (hour < 9 || hour >= 21) {
                    setMenuList(menuData[0].breakfast_list);
                } else if (hour >= 9 || hour <= 13) {
                    setMenuList(menuData[0].lunch_list);
                } else {
                    setMenuList(menuData[0].dinner_list);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getmenuData();
    }, []);

    return (
        <>
            <GlobalStyle />
            <Styles.Container onClick={() => onClickMenu()}>
                <Styles.Day>{formatedDate}</Styles.Day>
                <Styles.DayDiv>{daydiv}</Styles.DayDiv>
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
