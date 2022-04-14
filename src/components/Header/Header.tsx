import React from 'react'
import { Logo, SearchIcon } from '../../assets'
import HeaderLinks from './HeaderLinks'
import PhoneNumbers from './PhoneNumbers';
import WorkSchedule from './WorkSchedule';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = () => {
    return (
        <div className="header">
          <div className="headerWrapper">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
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
