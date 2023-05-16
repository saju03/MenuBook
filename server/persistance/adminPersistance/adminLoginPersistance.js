import Admin from "../../database/models/adminModel.js";
import handelErrors from "../../middlewares/errorHandlers.js";

const findAdmin = async (email)=>{
    try {
        const admin = await Admin.findOne({email:email})
        if(admin){
            admin.status=true
           return admin
        }else{ 
     const error =  handelErrors({message:'no user found'})
     error.status = false
       return  error
        }

   } catch (error) {
       console.log(error);
       error.status=false
       return error
   }
  
}

export default findAdmin