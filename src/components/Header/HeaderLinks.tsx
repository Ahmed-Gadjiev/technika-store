import React from 'react'
import { LikeIcon, EyeIcon, CartIcon, CompareIcon} from '../../assets'


const HeaderLinks = () => {
  return (
    <div>
        <a href="#"><img src={EyeIcon} alt="eye" /></a>
        <a href="#"><img src={LikeIcon} alt="eye" /></a>
        <a href="#"><img src={CompareIcon} alt="eye" /></a>
        <a href="#"><img src={CartIcon} alt="eye" /></a>
    </div>
  )
}

export default HeaderLinks