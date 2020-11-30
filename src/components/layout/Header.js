import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderWrapper>
            <h1>react-slick-sliders</h1>
            <Divider />
            <h2>A personal collection of customized React Slick Sliders.</h2>
        </HeaderWrapper>
    )
}

export default Header

const HeaderWrapper = styled.div`
    h2 {
        font-size:1.1rem;
        font-weight:400;
        color: #444;
    }
`

const Divider = styled.hr`
    max-width: 160px;
    margin: 0 auto;
    background-color: #ddd;
    height: 1px;
    border: 0px;
    margin-bottom: 20px;
`