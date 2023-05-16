import findAdmin from "../../persistance/adminPersistance/adminLoginPersistance.js";
import comparePassword from "../helpers/passwordCompare.js";

const adminLoginIntractor = async(email,password)=>{
 const admin = await findAdmin(email)
 if(admin.status){
   const checkPassword = await comparePassword(password,admin.password)
   if(checkPassword){
    return {status:true,id:admin.id}
   }else{
    return {status:false,error:"password is incorrect"}
   }
 }else{
    return {status:false,error:"no admin found" ,}
 }
}

export default adminLoginIntractor