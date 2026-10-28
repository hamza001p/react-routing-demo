import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
    const navigate = useNavigate()
  return (
    <div >
        <button  
         onClick={() => {
            navigate('/')
        }}
         className='font-medium bg-blue-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        
            return to home page 
        </button>
        <button  
         onClick={() => {
            navigate(-1)
        }}
         className='font-medium bg-blue-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        
            Back
        </button>
        <button  
         onClick={() => {
            navigate(+1)
        }}
         className='font-medium bg-blue-800  px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        
            Next
        </button>

    </div>
  )
}

export default Nav2