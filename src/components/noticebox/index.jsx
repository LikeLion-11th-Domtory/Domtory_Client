import mike from '../../assets/mike.png';
import * as Styles from './noticeboxStyle'

const NoticeBox = ({ notice, index }) => (
    <>
        <Styles.Notice key={notice.id}>
            <span className='num'>{index}</span>
            <span>{notice.title}</span>
            <span className='date'>{notice.date}</span>
        </Styles.Notice>
        <Styles.Line></Styles.Line>
    </>
);

export default NoticeBox;