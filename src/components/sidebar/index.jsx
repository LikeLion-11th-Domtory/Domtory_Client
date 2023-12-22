import React, { useEffect, useRef, useState } from "react";
import * as styles from "./sidebarStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faTree, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
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



      

  return (
      <>
      <styles.Sidebar id="sidebar" ref={outside} className={isOpen ? 'open': ''}>
        <styles.SidebarHead>
        <styles.Button icon={faBars} onClick={toggleSide} onKeyDown={toggleSide}/>
        </styles.SidebarHead>
        <styles.Content>
          <styles.ContentIcon icon={faTree}/>
          <styles.ContentLink>이용 방법</styles.ContentLink>
        </styles.Content>
        <styles.Content style={{paddingBottom: '50px', borderBottom: '1px solid lightgrey'}}>
          <styles.ContentIcon icon={faBook}/>
          <styles.ContentLink>이용 약관 및 정책</styles.ContentLink>
        </styles.Content>
      </styles.Sidebar>
      </>
  );
};

export default Sidebar;