import mike from '../../assets/mike.png';
import * as Styles from './noticeboxStyle'

const NoticeBox = ({ notice }) => (
    <Styles.Notice key={notice.id}>
        <span>{notice.title}</span>
        <span className='num'>{notice.date}</span>
    </Styles.Notice>
);

export default NoticeBox;