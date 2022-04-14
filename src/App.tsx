import { Header, NavBar } from './components'
import Routing from './Routing'

import './styles/App.scss'

function App() {
    return (
        <div>
            <Header />
            <NavBar
                links={[
                    { name: 'О компании', path: '#' },
                    { name: 'Акции', path: '#' },
                    { name: 'Рассрочка 0|0|18', path: '#' },
                    { name: 'Сервис и гарантия', path: '#' },
                    { name: 'Опт/дропшиппинг', path: '#' },
                    { name: 'Контакты', path: '#' },
                ]}
            />

            <div className="page-wrapper">
                <Routing />
            </div>
        </div>
    )
}

export default App
