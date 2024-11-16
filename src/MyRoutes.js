// rfc, rfce, rafc, rafce
// import React from 'react'

// export default function MyRoutes() {
//   return (
//     <div>MyRoutes</div>
//   )
// }


// import React from 'react'

// function MyRoutes() {
//   return (
//     <div>MyRoutes</div>
//   )
// }

// export default MyRoutes

// import React from 'react'

// export const MyRoutes = () => {
//   return (
//     <div>MyRoutes</div>
//   )
// }
// more than one component can be exported

// import React from 'react'

// const MyRoutes = () => {
//   return (
//     <div>MyRoutes</div>
//   )
// }

// export default MyRoutes
// there can be only one default export

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>

                    {/* <Route path='/' element = {<Home/>} /> */}
                    <Route index element = {<Home/>} />
                    <Route path='contact' element = {<Contact/>}/>
                    <Route path='login' element = {<Login/>}/>
                    <Route path='register' element = {<Register/>} />


                </Route>
                {/* <Route path='/' element={<Second/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes