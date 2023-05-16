import Admin from "../../database/models/adminModel.js";

const findAdmin = async (credentials)=>{
    try {
        const admin = await Admin.findById(credentials)
        if(user){
            return {status:true}
        }
    } catch (error) {
      return {status:false}
    }
}
export default findAdmin