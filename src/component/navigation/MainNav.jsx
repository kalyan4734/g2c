import React from 'react'
import { Link,navigation,BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AppliedServices from '../pages/AppliedServices'
import ForgetPassword from '../pages/ForgetPassword'
import MarriageRegistration from '../pages/MarriageRegistration'
import Notification from '../pages/Notification'
import Otpverification from '../pages/Otpverification'
import Profile from '../pages/Profile'
import Service from '../pages/Service'
import SetSecurityPin from '../pages/SetSecurityPin'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import VerifyOtp from '../pages/VerifyOtp'
const MainNav = () => {
  return (
   <>
   <Router>
    <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='Register' element={<SignUp/>}/>
        <Route path='ForgotPassword' element={<ForgetPassword/>}/>
        <Route path='AppliedServices' element={<AppliedServices/>}/>
        <Route path='SetSecurityPin' element={<SetSecurityPin/>}/>
        <Route path='Notification' element={<Notification/>}/>
        <Route path='Profile' element={<Profile/>}/>
        <Route path='Service' element={<Service/>}/>
        <Route path='VerifyOtp' element={<VerifyOtp/>}/>
        <Route path='OtpVerification' element={<Otpverification/>}/>
        <Route path='MarriageRegistration' element={<MarriageRegistration/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default MainNav