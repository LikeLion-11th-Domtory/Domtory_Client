import GlobalStyle from '../../GlobalStyle';
import * as Styles from './menuStyle';

const DailyMenuBox = () => {
    let today = new Date();
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let dayOfWeek = week[today.getDay()];
    let hour = today.getHours();
    let daydiv;
    if(hour < 9 || hour >= 21){
        daydiv = '아침';
    } else if (hour >= 9 || hour <= 13){
        daydiv = '점심';
    } else{
        daydiv = '저녁';
    }
    const formatedDate = `${today.getMonth()+1}.${today.getDate()}(${dayOfWeek})`
    return(
        <>
        <GlobalStyle/>
        <Styles.Container>
            <Styles.Day>{formatedDate}</Styles.Day>
            <Styles.DayDiv>{daydiv}</Styles.DayDiv>
            <Styles.Menu>
                <div style={{fontSize: '17px'}}>잡곡밥</div>
                <div style={{fontSize: '17px'}}>우렁된장찌개</div>
                <div style={{fontSize: '17px'}}>제육볶음</div>
                <div style={{fontSize: '17px'}}>어묵콩나물볶음</div>
                <div style={{fontSize: '17px'}}>오이부추무침</div>
                <div style={{fontSize: '17px'}}>배추김치</div>
            </Styles.Menu>
        </Styles.Container>
        </>
    )
}

export default DailyMenuBox;