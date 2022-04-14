import React from 'react'
import { Link } from 'react-router-dom'
import { catalogIcon } from '../../assets'

interface Link {
    name: string
    path: string
}

interface NavLinksProps {
    links: Link[]
}

const NavBar: React.FC<NavLinksProps> = ({ links }) => {
    return (
        <div className="NavBar">
            <div className="navWrapper">
                <Link to="/catalog" className="catalogLink">
                    <img src={catalogIcon} alt="ctlgIcon" />{' '}
                    <p>Каталог товаров</p>
                </Link>
                <div className="linksPages">
                    {links.map((link) => (
                        <Link
                            to={link.path}
                            className="link"
                            key={Math.random()}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavBar
