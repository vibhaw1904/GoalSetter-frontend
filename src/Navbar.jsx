import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Navbar=()=>{
   const [user,setUser]=useState("");
   const token=localStorage.getItem('token')
//    useEffect(()=>{
//     setInterval(() => {
//         const useString=localStorage.getItem('user');
//         console.log(useString);
//         const user =JSON.parse(useString);
//         setUser(user);
//     }, 5000);
//    },[])
   const logout=()=>{
    localStorage.removeItem('token',{path:"/"});
    window.location.href = "/";
   }

   if(!token){

    return (
        <div className="navbar">
            <div className="app-name">
                <h1>GoalSetter</h1>
            </div>
            <div className="login-signup">
               <Link to='/login'><h5>Login</h5></Link> 
                <Link to='/signup'><h5>Signup</h5></Link> 
            </div>
        </div>
            )
   }
   if (token) {
    return (
      <div className="navbar">
         <Link to="/" className="nav-item nav-link" ><h2 onClick={logout}>Logout</h2></Link>
                
         </div>
     )
 }
}
export default Navbar 