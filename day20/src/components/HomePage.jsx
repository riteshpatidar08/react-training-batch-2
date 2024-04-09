
import { useNavigate } from 'react-router-dom'
function HomePage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>homepage</h1>
      <button onClick={()=>navigate('/products')}>Go To Products</button>
    </div>
  )
}

export default HomePage
