import React from 'react'
import { catalogIcon } from '../../assets'

interface NavBarProps {
    pages: string[]
}

const NavBar: React.FC<NavBarProps> = ({ pages }) => {
    return (
        <div className="NavBar">
            <div className="navWrapper">
                <div className="catalog">
                    <img src={catalogIcon} alt="ctlgIcon" />{' '}
                    <p>Каталог товаров</p>
                </div>
                <div className="linksPages">
                    {pages &&
                        pages.map((name) => (
                            <div key={Math.random()}>{name}</div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default NavBar
