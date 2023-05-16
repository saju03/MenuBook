import findUser from "../../persistance/userPersistance/findUserByEmailPersistance.js";
import comparePassword from "../helpers/passwordCompare.js";

const userLoginIntractor = async(email,password)=>{
 const user = await findUser(email)
 if(user.status){
   const checkPassword = await comparePassword(password,user.password)
   if(checkPassword){
    return {status:true,id:user.id}
   }else{
    return {status:false,error:"password is incorrect"}
   }
 }else{
    return {status:false,error:"no user found" ,}
 }
}

export default userLoginIntractor