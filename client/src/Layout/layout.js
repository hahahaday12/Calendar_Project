import React from 'react'
import styled from 'styled-components';
import "../font/font.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faListCheck, faBook } from "@fortawesome/free-solid-svg-icons"

const Layout = ({ children }) => {
    return(
    <> 
        <ALL>
            <Lcontainer>
                <Link to="/">
                    <img alt='logoimg' src= './img/Life Calander_logo.png'/>
                    <p>Life</p>
                    <p>Calendar</p>
                </Link>

                <UserName>
                    <p>DDOJA 님</p>
                    <p>로그아웃</p>
                </UserName>

                <NavWrap>
                    <div className='iconBox'>
                        <FontAwesomeIcon className='icon icon1' icon={faCalendar}/>
                        <p>claendar</p>
                    </div>
                    <div className='iconBox'>
                        <FontAwesomeIcon className='icon' icon={faListCheck}/>
                        <p>checklist</p>
                    </div>
                    <div className='iconBox'>
                        <FontAwesomeIcon className='icon icon3' icon={faBook}/>
                        <p>diarybook</p>
                    </div>
                </NavWrap>
            </Lcontainer>

            <Rcontainer>
                <div className="content"> {children} </div>
            </Rcontainer>
        </ALL>
    </>
    )
}
export default Layout;

// 전체적으로 들어가야할  공통 레이아웃 
const ALL = styled.div`
    width: 1920px;
    height: 1080px;
    display: flex;
    border: 1px solid aqua;
    margin: 0 auto;
`
const Lcontainer = styled.div`
    width: 300px;
    height: 1080px;
    border: 1px solid aqua;
    font-family: 'SB 어그로 L';
    color: #545454;

    & a {
        text-decoration: none;
        color: #545454;
    }

    & img {
        width: 80px;
        height: 80px;
        display: block;
        margin: 0 auto;
        margin-top: 150px;
        margin-bottom: 40px;
    }

    & p {
        text-align: center;
        line-height: 2px;
    }
`
const UserName = styled.div`
    text-align: center;
    margin: 60px 0;

    & p:last-child {
        font-size: 13px;
        color: #C4C4C4;
        line-height: 0px;
    }
`

const NavWrap = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & .iconBox {
        width: 100%;
        height: 50px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        border: 2px solid #545454;
        font-size: 14px;
        gap: 15px;

        & .icon {
            margin-left: 30px;
        }
        
        & .icon, .icon p {
            width: 30px;
            height: 30px;
            color: #545454;
        }

        & .icon1, .icon1 + p {
        }

        & .icon3, .icon3 + p {
        }
    }
`

const Rcontainer = styled.div`
    width: 100%;
    height: auto;
    padding-top: 100px;
    display: flex;
    justify-content: center;
    background-color: #F4F4F4;

    & .content {
        width: fit-content;
        height: auto;
        margin: 0 auto;
    }
`

/*
    해당 페이지일 떄 nav 아이콘 색깔 변경
    
    - 기본 색상으로 레이아웃으로 해놓고
    - 해당 페이지 컴포넌트에서 props 받아서 스타일 꾸미기로 색 변경하기

*/