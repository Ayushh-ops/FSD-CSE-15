import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'

const Logout = () => {
    const { user }=useContext(UserContext)
  return (
    <div>
      <h1>{user.name} {user.role} Logout Successfully</h1>
      <Link to="/">Login here</Link>
    </div>
  )
}

export default Logout
