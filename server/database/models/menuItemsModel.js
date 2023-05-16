import { Schema, model } from 'mongoose'
const menuSchema = new Schema({
    itemName: {
        type: String,
        required: [true, 'Name is required'],
    },
    category: {
        type: String,
        required: [true, 'category is required']

    },
    price: {
        type: String,
        required: [true, 'price is required']
    },
    itemAttribute:{
        type:String,
    },
   

})


const User = model("User",userSchema,'user')
export default User