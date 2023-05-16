import { Schema, model } from 'mongoose'
const AdminSchema = new Schema({
    adminName: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required']

    },
    password: {
        type: String,
        required: [true, 'password is required']
    },

})


const Admin = model("Admin",AdminSchema,'admin')
export default Admin