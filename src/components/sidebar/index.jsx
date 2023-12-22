import React, { useEffect, useRef, useState } from "react";
import * as styles from "./sidebarStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faScrewdriverWrench, faCloudMoon, faBullhorn,faBook} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const outside = useRef();
  const navigate = useNavigate();
  const [isTermsOpen,setIsTermsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  })

  const toggleSide = () => {
    setIsOpen(false);
  }
  const handleOutside = (e) => {
    if (!outside.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  const onClickNightOut = () => {
    window.open('http://1.246.219.13:8080/cbhs/indexstdds.html?var1=M000004116','_blank');
  }

  const onClickBooks = () => {
    window.open('http://www.cbhs2.kr/0000038','_blank');
  }

  const onClickRequestRepair = () => {
    window.open('http://1.246.219.13:8080/cbhs/indexstdds.html?var1=M000004115','_blank');
  }


  return (
      <>
      <styles.Sidebar id="sidebar" ref={outside} className={isOpen ? 'open': ''}>
        <styles.SidebarHead>
        <styles.Button icon={faBars} onClick={toggleSide} onKeyDown={toggleSide}/>
        </styles.SidebarHead>
        <styles.Content onClick = {() => navigate('/notice')}>
          <styles.ContentIcon icon={faBullhorn}/>
          <styles.ContentLink>공지사항</styles.ContentLink>
        </styles.Content>
        <styles.Content onClick={onClickNightOut}>
          <styles.ContentIcon icon={faCloudMoon}/>
          <styles.ContentLink>외박신청</styles.ContentLink>
        </styles.Content>
        <styles.Content onClick={onClickRequestRepair}>
          <styles.ContentIcon icon={faScrewdriverWrench}/>
          <styles.ContentLink>시설보수요청</styles.ContentLink>
        </styles.Content>
        <styles.Content 
        onClick={onClickBooks}
        style={{paddingBottom: '50px', borderBottom: '1px solid lightgrey'}}>
          <styles.ContentIcon icon={faBook}/>
          <styles.ContentLink>도서관 책 검색</styles.ContentLink>
        </styles.Content>

      </styles.Sidebar>
      </>
  );
};

export default Sidebar;