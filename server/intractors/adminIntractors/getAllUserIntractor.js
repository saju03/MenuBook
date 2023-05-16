import getAllUser from "../../persistance/adminPersistance/getAllUserPersistance.js"


const getAllusers =async ()=>{

const data = await getAllUser()

data.map((e)=>{
return (e.password = null)
})
return data
}
export default getAllusers