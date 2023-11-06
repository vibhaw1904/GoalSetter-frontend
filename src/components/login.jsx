import { useState } from "react";
import './Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('');
    const[isLoggedIn,setIsLoggedIn]=useState(true);
    const[error,setError]=useState(null);
    const navigate = useNavigate(); 
    // const data={
    //   email,password
    // }
    const handleSubmit=(e)=>{
    e.preventDefault()
    localStorage.setItem('token', '<your_token_here>');
    axios.post('http://localhost:5000/api/users/login/', { email, password })
      .then((res) => {
        const token = res.data.token; 

      
      localStorage.setItem('token', token);

        console.log(res.data);
        setIsLoggedIn(true);
        navigate('/dashboard',{state:{data:res.data}}) 
      }).catch((err)=>{
        console.log(err);
        setError('password incorrect !try again')
        setIsLoggedIn(false)
      })
}


    return(
      <div className="main-card">
          <div className="login-page">
            Login page
            <form action="" onSubmit={handleSubmit} >
              <div className="login-form">

              <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    autoComplete="current-email" 
                    name="email"
                    required
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
                <div className="login-btn">
                <button type="submit">Login</button>

                </div>
              </div>
           
                </form>
                <div className="err">
                  {!isLoggedIn &&error && <p>{error}</p>}
                </div>
        </div>

      </div>
      
    )
}
export default Login;