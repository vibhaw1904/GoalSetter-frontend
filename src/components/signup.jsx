import { useState } from "react";
import axios from "axios";
import './signup.css'
const Signup=()=>{
    const[userName,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

   
    const handleRegister=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/users/', { name: userName, email, password })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      
    }
    return(
        <div>
              <div className="signup">
            
            Signup page
            <form action="" onSubmit={handleRegister}>
                 <label htmlFor="name">Name:</label>
                 <input
                     type="text"
                     id="name"
                     name="name"
                     required
                     autoComplete="current-name" 
                     onChange={(e)=>setUserName(e.target.value)}
                 />
                 <label htmlFor="email">Email:</label>
                 <input
                     type="email"
                     id="email"
                     name="email"
                     required
                     autoComplete="current-email" 
                     onChange={(e)=>setEmail(e.target.value)}
                 />
                 <label htmlFor="password">Password:</label>
                 <input
                     type="password"
                     id="password"
                     name="password"
                     required
                     autoComplete="current-password" 
                     onChange={(e)=>setPassword(e.target.value)}
                 />
                 <div className="signup-btn">
                 <button type="submit">register</button>
                 </div>
                 </form>
         </div>
        </div>
      
    )
}
export default Signup;