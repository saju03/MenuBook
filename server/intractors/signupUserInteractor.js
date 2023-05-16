import userSignupPersistance from "../persistance/userSignupPersistance.js"
import hashPassword from "./helpers/hashPassword.js"
import createToken from "./helpers/createToken.js"
import handelErrors from "../middlewares/errorHandlers.js"


const signupUserInteractor = async (userName,email,password)=>{
   const hashedPassword = await hashPassword(password)

   const userSignup = await userSignupPersistance(userName,email,hashedPassword)
   if(userSignup.status){
   const token = createToken(userSignup.id)
   return {status:true , Token:token}
   }else{
   return handelErrors(userSignup)
   
   }

}

export default signupUserInteractor