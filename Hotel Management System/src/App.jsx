import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Dashboard from './Screens/Dashboard'
import User from './Components/Dropdown/User'
import Customers from './Screens/StaffScreens/customersScreen/Customers'
import Rooms from './Screens/roomsScreen/Rooms'
import RoomBooking from './Screens/roomsScreen/RoomBooking'
import SubmitPayment from './Screens/paymentsScreen/SubmitPayment'
import AllUserPaymentHistory from './Screens/paymentsScreen/AllUserPaymentHistory'
import AllCustomersBookingHistory from './Screens/StaffScreens/customersScreen/AllCustomersBookingHistory'
import YourPaymentHistory from './Screens/UserPaymentHistory/YourPaymentHistory'
import EditProfile from './Screens/EditProfile/EditProfile'
import AllServices from './Screens/servicesScreen/AllServices'
import RequestService from './Screens/servicesScreen/RequestService'
import AllCustomersServicesRequest from './Screens/StaffScreens/AllCustomersServicesRequest/AllCustomersServicesRequest'
import Analysis from './Screens/analysisScreen/Analysis'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard/' element={<Dashboard/>}>
      <Route path='user' element={<User/>}/>

{/* User Screens */}
       <Route path="editProfile" element={<EditProfile/>}/>
      <Route path='roomsScreen/rooms' element={<Rooms/>}/>
      <Route path='roomsScreen/roomBooking' element={<RoomBooking/>}/>
      <Route path='pScreen/roomBooking' element={<RoomBooking/>}/>
      <Route path='paymentsScreen/YourPaymentsHistory' element={<YourPaymentHistory/>}/>
      <Route path='servicesScreen/AllServices' element={<AllServices/>}/>
      <Route path='servicesScreen/RequestService' element={<RequestService/>}/>


      
      <Route path='paymentsScreen/submitPayment' element={<SubmitPayment/>}/>
    {/* Staff And Admin Screens */}
      <Route path="analysisScreen/hotelAnalysis" element={<Analysis/>}/>
      <Route path='customersScreen/customers' element={<Customers/>}/>
      <Route path='customersScreen/allCustomersBookingHistory' element={<AllCustomersBookingHistory/>}/>
      <Route path='paymentsScreen/allUsersPaymentsHistory' element={<AllUserPaymentHistory/>}/>
      <Route path='servicesScreen/allUsersServicesRequest' element={<AllCustomersServicesRequest/>}/>
      



      


      </Route>

    </Routes>
  )
}

export default App
