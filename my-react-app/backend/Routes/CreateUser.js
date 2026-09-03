const express = require("express")
const router = express.Router()
const user = require("../models/User")
const { body, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtsecret = "my name is manan panchal an i am live in ahemedabad"

router.post("/createuser",[
    body('email').isEmail(),
    body('password','incorrectpassword').isLength({min: 5}),
    body('name').isLength({min: 5})
],async(req,resp)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return resp.status(400).json({errors: errors.array()});
    }

      const salt = await bcrypt.genSalt(10)
      const hashvalue = await bcrypt.hash(req.body.password,salt)

         try{
                await user.create({
                    name:req.body.name,
                    email:req.body.email,
                    location:req.body.location,
                    password:hashvalue
                })

                resp.json({success:true}) 

         }
         catch(error){

            console.log("not data stored",error)
            resp.json({success:false})
         }
})
router.post("/loginuser",[
    body('email').isEmail(),
    body('password','incorrectpassword').isLength({min: 5}),
   
],async(req,resp)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return resp.status(400).json({errors: errors.array()});
    }

    let email = req.body.email 


         try{
                 let userdata = await user.findOne({email})
                 if(!userdata){
                    return resp.status(400).json({errors:"trying loging with right credential"})
                 }
                  const passcompare = await bcrypt.compare(req.body.password,userdata.password)
                 if(!passcompare){
                    return resp.status(400).json({errors:"trying loging with correct credential"})
                 }

                 const data = {
                      user:{
                        id:userdata.id
                      }
                 }
               const authtoken  =  jwt.sign(data,jwtsecret)
                resp.json({success:true, authtoken:authtoken})

         }
         catch(error){ 

            console.log("not data stored",error)
            resp.json({success:false})
         }
})


module.exports= router;