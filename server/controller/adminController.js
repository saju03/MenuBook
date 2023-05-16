import adminLoginIntractor from "../intractors/adminIntractors/adminLoginIntractor.js"
import getAllusers from "../intractors/adminIntractors/getAllUserIntractor.js"
import createToken from "../intractors/helpers/createToken.js"

const adminLogin =async (req,res,next)=>{
    const {email,password} = req.body

      const adminLogin = await adminLoginIntractor(email,password)
      if(adminLogin.status){
        const Token = createToken(adminLogin.id)
  
        res.cookie('admin_jwt',Token,{
          withCrdentials:true,
          httpOnly:false,
          maxAge:864000000      
        })
  
          res.status(200).json({status:true,message:'admin authenticated'})
      }else{
          res.status(401).json({status:false,error:adminLogin.error})
      }
      
   
}

const getAlluser = async (req,res,next)=>{

    const data = await getAllusers()
   
    res.status(200).json({data:data})
}


export {adminLogin , getAlluser}