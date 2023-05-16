import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "./Cards"
function UserCards() {
const [datas,setDatas] = useState([])
    const fetchData = async()=>{
        try {
            const {data} = await axios.get("http://localhost:3000/admin/get_all_users")
            setDatas(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
       fetchData()
    },[])
  return (
    <div className="w-full max-w-md p-4 m-1 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

            {datas.map((e)=>  {
                console.log(e);
                
                return <Cards props={e} key={e._id}/>
              
            })}
           
           

     
        </ul>
   </div>
</div>

  )
}

export default UserCards