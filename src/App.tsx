import React from 'react'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'

import './styles/App.scss'

function App() {
    return (
        <div>
            <Header />
            <NavBar
                pages={[
                    'О компании',
                    'Акции',
                    'Рассрочка 0|0|18',
                    'Сервис и гарантия',
                    'Опт/дропшиппинг',
                    'Контакты',
                ]}
            />
        </div>
    )
}

export default App
