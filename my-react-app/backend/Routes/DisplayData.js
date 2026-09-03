const express = require("express")
const router = express.Router()


router.post("/FoodData",(req,resp)=>{
    try{
          resp.send([global.food_item ,global.categoryfood])
    }
    catch(error){
        console.error(error.message)
        resp.send("Server error")
    }
})



module.exports=router;