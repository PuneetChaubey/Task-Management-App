import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import SignUp from './SignUp'
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default MainRoutes