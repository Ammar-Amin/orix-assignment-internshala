import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout({ data }) {
    return (
        <div>
            <Header data={data} />
            <Outlet />
            <Footer data={data} />
        </div>
    )
}
