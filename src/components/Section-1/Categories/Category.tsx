import React from 'react'
import { Accesories } from '../../../assets/Category-pics'
import { Link, NavLink } from 'react-router-dom'

interface CategoryProps {
    pic: string
    text: string
    to: string
}

const Category: React.FC<CategoryProps> = ({
    pic,
    text,
    to,
}) => {
    return (
        <div className="Category">
            <NavLink to={to}  className='Category-link'>
                <img src={pic} alt="" /> <p>{text}</p>
            </NavLink>
        </div>
    )
}

export default Category
