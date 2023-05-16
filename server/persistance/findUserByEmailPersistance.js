import User from "../database/models/userModel.js";
import handelErrors from "../middlewares/errorHandlers.js";
 
const findUser = async (email) =>{
    try {
         const user = await User.findOne({email:email})
         if(user){
            user.status=true
            return user
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

export default findUser