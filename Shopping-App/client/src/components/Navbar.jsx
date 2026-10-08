import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/user">Home</Link>
      <Link to="/user/mycart">My Cart</Link>
      <Link to="/user/stopwatch">Stopwatch</Link>
      <Link to="/user/myorders">My Orders</Link>
      <Link to="/user/myprofile">My Profile</Link>
      <Link to="/user/settings">Settings</Link>
      <Link to="/user/logout">Logout</Link>
    </div>
  )
}

export default Navbar
