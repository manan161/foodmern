import React from 'react'

const Card = ({foodname,options,image}) => {

   let opt = options;
   let priceopt = Object.keys(opt)
   
   const handlecart = ()=> {
     
   }
     return (
    <div>
       <div  className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
       <img  className="card-img-top" src={image} alt="C`ard image cap" style={{height:"140px",objectFit:"fill"}}/>   
            <div  className="card-body">
   <h5  className="card-title">{foodname}</h5>
    <p  className="card-text">this is important text</p>
    <div className='container w-100 '> 
        <select className='m-2 h-100 bg-success rounded'>
            {Array.from(Array(6),(e,i) =>{
                return (
                    <option key={i+1} value={i+1} >{i+1} </option>
                )
            })}
        </select>
        <select className='m-2 h-100 bg-success rounded'>
            {priceopt.map((data)=>{
                return <option key={data} value={data}>{data}</option>
            })}
        </select>
        <div className='d-inline h-100 fs-5' >
                  Total price : 
        </div>

    </div>
    <hr></hr>
    <button className='btn btn-success justify-center ms-2' onClick={handlecart}>add to cart</button>
    

         </div>
       </div>
    </div>
  )
}   

export default Card
