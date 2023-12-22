import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
    background-color: #E3ECF1;
  `

export const Sidebar = styled.div`
  z-index: 5;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #e7e4e1;
  height: 100%;
  width: 75%;
  right: -80%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`

export const SidebarHead = styled.div`
  width: 100%;
  font-size: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`


export const Button = styled(FontAwesomeIcon)`
    font-size: 30px;
  `

export const openBtn = styled.div`
    width: 100%;
    height: 100%;
  `

export const Content = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
  `

export const ContentIcon = styled(FontAwesomeIcon)`
  padding-right: 20px;
  `

export const ContentLink = styled.div`
  font-size: 20px;
  font-weight: 700;
`