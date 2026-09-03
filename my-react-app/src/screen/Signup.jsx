import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  let navigate = useNavigate()
    const [credential,setCredential]=useState({name:"",email:"",password:"",geolocation:""})
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        location: credential.geolocation
      })
    });

    const json = await response.json();
    
     console.log("Backend response:", json);

    if (!json.success) {
      alert("Enter valid credential");
    } else {
      alert("User created successfully");
      navigate("/login")
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};


    const onchange = (e)=>{
          setCredential({...credential,[e.target.name]:e.target.value})
         
    }

  return (
    <>
    <div className='container'>
     <form onSubmit={handleSubmit}>
        <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credential.name} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  name="email" value={credential.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  name='password' value={credential.password} onChange={onchange} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control"  name='geolocation' value={credential.geolocation} onChange={onchange} />
  </div>
  
  <button type="submit" className=" m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>already a user</Link>
</form>
</div>
    </>
  )
}

export default Signup
