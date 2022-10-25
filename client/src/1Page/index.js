import React from 'react'
import LoginInput from './logininput'
import LogoIner from './logoimg'
import LoinButton from './loginButton/index'
import Join from './join'
import styled from 'styled-components'



const Onepage = () => {
    return(
        <>
            <Allwrap>
                <Centerwrap>
                    <LogoIner/>
                    <LoginInput/>
                    <LoinButton/>
                    <Join/>
                </Centerwrap>
            </Allwrap>
        </>
    )
}
export default Onepage;

const Allwrap = styled.div`
    width: 1920px;
    height: 1080px;
    margin: 0 auto;
    border: 1px solid aqua;
`

const Centerwrap = styled.div`
    width: 410px;
    height: 1080px;
    margin: 0 auto;
    border: 1px solid aqua;
`