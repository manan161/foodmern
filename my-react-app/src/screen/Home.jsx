import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import Carousal from '../component/carousal'
import axios from 'axios'

const Home = () => {
   const [search,setSearch]=useState("")
   const [foodcat,setFoodcat] = useState([])
   const [fooditem,setFooditem] = useState([])

   const loaddata = async()=>{

    let response = await axios.post("http://localhost:5000/api/FoodData")
    console.log(response)

       const json = await response.data

       console.log(json[0],json[1])

       setFoodcat(json[1])
       setFooditem(json[0])
   }

   useEffect(()=>{
         loaddata()
   },[])


  return (
    <div>

      <div>
        <Navbar/>
      </div>

      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important "}}>
  <div className="carousel-inner" id='carousel' style={{maxHeight:"500px"}}>
    <div className='carousel-caption' style={{zIndex:"10"}}>
         <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search"  value={search} onChange={(e)=>{setSearch(e.target.value)}} aria-label="Search"/>
      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
    </div>
    </div>
    <div className="carousel-item active">
      <img src="/images/photo1.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="/images/photo2.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/> 
    </div>
    <div className="carousel-item">
      <img src="/images/photo3.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
      </div>

      <div className='container'>

        {
          foodcat.length > 0
          ?
          foodcat.map((data)=>{
            return (
              <div key={data._id}>

                <div className='fs-3 m-3'>
                  {data.CategoryName}
                </div>

                <div className='row mb-3'>

                {
                  fooditem.length > 0
                  ?
                  fooditem
                  .filter((item)=>(item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLowerCase())))  
                  .map((filteritems)=>{
                    return(
                      <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
                        <Card
                          options={filteritems.options[0]}
                          
                        />
                      </div>
                    )
                  })
                  :
                  <div>   
                    no such data found
                  </div>
                }

                </div>

              </div>
            )
          })
          :
          <div>
            Loading...
          </div>
        }

      </div>

      <div>
        <Footer/>
      </div>
      <h2>i have a key in this visual studeios when the function is callled</h2>

    </div>

  )
}

export default Home