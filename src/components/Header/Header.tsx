import React from 'react'
import { Logo, SearchIcon } from '../../assets'
import HeaderLinks from './HeaderLinks'
import PhoneNumbers from './PhoneNumbers';
import WorkSchedule from './WorkSchedule';

const Header = () => {
    return (
        <div className="header">
          <div className="headerWrapper">
            <div className="logo">
                <a href="/">
                    <img src={Logo} alt="logo" />
                </a>
            </div>
            <PhoneNumbers />
            <WorkSchedule />

            <div className="search">
                <img className="SearchIcon" src={SearchIcon} alt="search" />
                <a href="#">Поиск</a>
            </div>
            <div className="links">
                <HeaderLinks />
            </div>
            <div className="profile">
                <button className="profileButton">Войти</button>
            </div>
            </div>
        </div>
    )
}

export default Header
