import React from 'react'
import Category from './Category'
import {
    Accesories,
    ElectricCycle,
    ElectricMobiles,
    ElectricSamocat,
    ElectricScooter,
    Hoverboard,
    Segway,
    Skate,
    SmartToys,
    SmartWatch,
    Unicycle,
} from '../../../assets/Category-pics'

const categories = [
    { pic: Hoverboard, text: 'Гироскутеры', to: '#' },
    { pic: ElectricSamocat, text: 'Электросамокаты', to: '#' },
    { pic: Unicycle, text: 'Моноколеса', to: '#' },
    { pic: Segway, text: 'Сигвеи и мини-сигвеи', to: '#' },
    { pic: ElectricScooter, text: 'Электроскутеры', to: '#' },
    { pic: ElectricCycle, text: 'Электровелосипеды', to: '#' },
    { pic: Skate, text: 'Электроcкейты', to: '#' },
    { pic: ElectricMobiles, text: 'Электромобили', to: '#' },
    { pic: Accesories, text: 'Аксессуары', to: '#' },
    { pic: SmartToys, text: 'Умные игрушки', to: '#' },
    { pic: SmartWatch, text: 'Smart watch', to: '#' },
]

const Categories = () => {
    return (
        <div className="Categories">
            {categories.map((category) => (
                <Category
                    pic={category.pic}
                    text={category.text}
                    to={category.to}
                    key={Math.random()}
                />
            ))}
        </div>
    )
}

export default Categories
