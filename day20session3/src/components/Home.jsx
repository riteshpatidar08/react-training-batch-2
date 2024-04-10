import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    
const navigate = useNavigate()

    const handleClick = () => {
      navigate('/products')
    }
  return (
    <div>
   <button onClick={handleClick} className='py-4 px-4 bg-red-500 m-10 rounded-lg text-white font-semibold'>Go to Products</button>
    </div>
  )
}

export default Home
