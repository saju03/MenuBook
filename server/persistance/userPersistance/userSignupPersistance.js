import User from "../../database/models/userModel.js";

const  userSignupPersistance = async (userName,email,password)=>{
    try {
        const createUser = await User.create({userName,email,password})
        createUser.status = true
        return createUser

    } catch (error) {
        error.status = false
        return error
    }
}

export default userSignupPersistance 