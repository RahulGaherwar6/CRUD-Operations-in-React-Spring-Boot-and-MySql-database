import React from 'react'
import DempApi from './component/DempApi'
import { ToastContainer } from 'react-toastify'
import AddUserInfo from './component/AddUserInfo'
import AllRoutes from './routes/AllRoutes'

function App() {
  return (
    <div>
      {/*
        <DempApi />
        <ToastContainer />  
        <AddUserInfo />   */}
        <AllRoutes />
    </div>
  )
}

export default App
