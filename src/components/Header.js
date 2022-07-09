import React from 'react';
import { ReactNavbar } from "overlay-navbar";

function Header() {
    return (<>
        <ReactNavbar
            navColor1="black"
            navColor2="hsl(219,48%,8%)"
            burgerColor='hsl(250,100%,60%)'
            burgerHeight="150px"
            burgerColorHover='hsl(250,100%,30%)'
            logo={require('../images/logo.png')}
            logoWidth="250px"
            logoHoverColor="hsl(250,100%,75%)"
            nav2justifyContent='space-around'
            nav3justifyContent='space-around'
            link1Text='Home'
            link2Text='Experience'
            link3Text='Projects'
            link4Text='Contact'
            link1Url="/"
            link2Url="/experience"
            link3Url="/projects"
            link4Url="/contact"
            link1ColorHover="white"
            link1Color="hsl(250,100%,70%)"
            link1Size='1.5rem'
            link1Padding='2vmax'
            profileIconColor="hsl(250,100%,60%)"
            profileIconColorHover="white"
        />
    </>
    )
}

export default Header