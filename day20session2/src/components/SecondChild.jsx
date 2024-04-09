import React from 'react'
import ThirdChild from './ThirdChild'

function SecondChild({data}) {
  return (
    <div>
     <ThirdChild data={data} /> 
    </div>
  )
}

export default SecondChild
