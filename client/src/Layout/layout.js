import React from 'react'
import styled from 'styled-components';
import "../font/font.css"
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return(
    <> 
        <ALL>
            <Lcontainer>
                <Link to="/">
                    <Img alt='logoimg' src= './img/Life Calander_logo.png'/>
                    <P>Life</P>
                    <P>Calendar</P>
                </Link>
            </Lcontainer>
            <Rcontainer>
                <CenterBox>
                    <div> {children} </div>
                </CenterBox>
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

    & a {
        text-decoration: none;
        color: #545454;
    }
`
const Img = styled.div`
    width: 80px;
    height: 80px;
    display: block;
    margin: 0 auto;
    margin-top: 150px;
    margin-bottom: 20px;
    border: 1px solid aqua;
`

const P = styled.div`
    text-align: center;
`

const Rcontainer = styled.div`
    width: 1620px;
    height: 1080px;
    border: 1px solid aqua;
`

const CenterBox = styled.div`
    width: 600px;
    height: 1080px;
    border: 1px solid aqua;
    margin: 0 auto;
    padding-top: 70px;
`
