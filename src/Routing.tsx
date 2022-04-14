import React from 'react'
import { Routes, Route } from 'react-router'
import { MainPage, CatalogPage } from './pages'
import App from './App'

const Routing: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalog" element={<CatalogPage />} />

        </Routes>
    )
}

export default Routing
