import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSetScreenSize } from "../../setScreenHeight";
import axios from "axios";

import styled from "styled-components";
import * as Styles from "./noticeStyle";
import * as HeaderStyles from "../../components/header/headerStyle";
import GlobalStyle from "../../GlobalStyle";
import { faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import NoticeBox from "../../components/noticebox";
import Pagination from "@mui/material/Pagination";

import logo from "../../assets/logo.png";
import back from "../../assets/back.png";
import search from "../../assets/search.png";

import LoadingScreen from "../../components/loading";

const Back = styled.img`
  padding: 0.4rem 0.3rem 0 0.3rem;
`;

export const Header = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderStyles.Container>
        <HeaderStyles.LogoWrapper>
          <Link to="/">
            <Back src={back} />
          </Link>
          <HeaderStyles.LogoImg src={logo} />
          <HeaderStyles.Logo>Domtory</HeaderStyles.Logo>
        </HeaderStyles.LogoWrapper>
        <HeaderStyles.IconWrapper>
          <HeaderStyles.Icon icon={faBell} />
          <HeaderStyles.Icon icon={faBars} />
        </HeaderStyles.IconWrapper>
      </HeaderStyles.Container>
    </>
  );
};

export default function Notice() {
  useSetScreenSize();

  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get("https://api.domtory.site/notice/")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // 검색어가 변경될 때마다 데이터 필터링
    const filtered = data.filter((notice) =>
      notice.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredData(filtered);
    setPage(1);
  }, [searchKeyword, data]);

  // 날짜 기준으로 내림차순 정렬
  useEffect(() => {
    const sorted = [...filteredData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setSortedData(sorted);
  }, [filteredData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const totalPageCount = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = sortedData.slice(startIndex, endIndex);

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Styles.Container>
        <Header />
        <Styles.Wrapper>
          <p>공지사항</p>
          {/* 검색 */}
          <Styles.Input>
            <img src={search} alt="search icon" />
            <input
              type="text"
              value={searchKeyword}
              onChange={handleSearchChange}
            />
          </Styles.Input>

          {/* 목록 */}
          <Styles.Text>
            <span className="num">No.</span>
            <span>제목</span>
            <span className="date">작성일</span>
          </Styles.Text>

          {displayedData.map((notice, index) => (
            <Link key={notice.id} to={`/notice/${notice.id}`}>
              <NoticeBox notice={notice} index={startIndex + index + 1} />
            </Link>
          ))}

          {/* 페이지네이션 */}
          <div>
            <Pagination
              count={totalPageCount}
              page={page}
              onChange={handleChangePage}
              style={{ marginTop: "1rem" }}
            />
          </div>
        </Styles.Wrapper>
        {isLoading && <LoadingScreen />}
      </Styles.Container>
    </>
  );
}
