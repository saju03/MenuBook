import User from "../../database/models/userModel.js";

const getAllUser = async()=>{
    try {
        const allUser = await User.find()
        return allUser
    } catch (error) {
        console.log(error);
    }
   
}

export default getAllUser