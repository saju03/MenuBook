/* eslint-disable react/prop-types */

function Cards({props}) {
   
  return (
    <div >
    <li className="py-3 sm:py-4">
    <div className="flex items-center space-x-4">
     
        <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
             {props.email}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {props._id}
            </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        {props.userName}
        </div>
    </div>
</li>
</div>
  )
}

export default Cards