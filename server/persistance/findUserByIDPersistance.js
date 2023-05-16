import User from "../database/models/userModel.js";

const findUser = async (credentials)=>{
    try {
        const user = await User.findById(credentials)
        if(user){
            return {status:true}
        }
    } catch (error) {
      return {status:false}
    }
}
export default findUser