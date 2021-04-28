import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"

const HeaderBar = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: space-between;
    border-bottom: 1px solid gray;
    text-align: center;
    align-itmes: center;
    padding: 30px 30px 15px 30px;
    margin-bottom: 100px;  
`;

const Title = styled.div`
    text-decoration: none;
    padding-bottom: 30px;
    font-size: 30px;
    font-family: 'Spoqa Han Sans';
    color: #ff3f34;
`;


const HeaderMenu = styled.div`
    display: flex;
    flex-direction: row;
    outline: none;
    
`;

const Search = styled.div`
    margin-right: 30px;
`;

const Sidebar = styled.div`


`;

const Header = () => {
    return (
        <HeaderBar>
        <Title><Link to="/">Tistory</Link></Title>
        <HeaderMenu>
            <Search><Link to="/search">검색</Link></Search>
            <Sidebar><Link to="/sidebar">메뉴바</Link></Sidebar>
        </HeaderMenu>
    </HeaderBar>
    )
};

export default Header;