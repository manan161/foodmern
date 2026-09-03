import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

      const [credential,setCredential]=useState({email:"",password:""})

      let navigate = useNavigate()
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          
          email: credential.email,
          password: credential.password,
          
        })
      });
  
      const json = await response.json();
  
      console.log("Backend response:", json);
  
      if (!json.success) {
        alert("Enter valid credential");
      } else {
        localStorage.setItem("authtoken",json.authtoken)
        navigate("/")
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
        const onchange = (e)=>{
            setCredential({...credential,[e.target.name]:e.target.value})
           
      }
  
  return (
    <div>
         <div className='container'>
     <form onSubmit={handleSubmit}>
       
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  name="email" value={credential.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  name='password' value={credential.password} onChange={onchange} id="exampleInputPassword1"/>
  </div>
 
  
  <button type="submit" className=" m-3 btn btn-success">Submit</button>
  <Link to="/createuser" className='m-3 btn btn-danger'> i am a new user</Link>
</form>
</div>
    </div>
  )
}

export default Login