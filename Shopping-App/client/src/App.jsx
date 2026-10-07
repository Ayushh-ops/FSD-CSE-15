import UserLayout from './pages/UserLayout'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemStore from './components/ItemStore'
import Login from "./components/Login"
import Logout from "./components/Logout"
import UserContext from './components/UserContext'
import StopWatch from './components/StopWatch'
const App = () => {
  const user={
    name:"Ayush",
    role:"Admin"
  };
  return (
    <div>
      <UserContext.Provider value={{user}}>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/user" element={<UserLayout/>}>
        <Route index element={<ItemStore/>}/>
        <Route path="stopwatch" element={<StopWatch/>}/>
        <Route path="mycart" element={<h1>My cart</h1>}/>
        <Route path="myorders" element={<h1>My Orders</h1>}/>
        <Route path="myprofile" element={<h1>My Profile</h1>}/>
        <Route path="settings" element={<h1>Settings</h1>}/>
        <Route path="logout" element={<Logout/>}/>
        <Route path="*" element={<h1>404 Error Page</h1>}/>
       </Route>
       </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App
