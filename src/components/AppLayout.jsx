import React from 'react'
import Navbar from './navbar/Navbar'
import Themes from './themes/themes'
import { Outlet } from 'react-router'

function AppLayout() {
    return (
        <>
        <Navbar />
        <Outlet />
        <Themes />
        </>
    )
}

export default AppLayout
