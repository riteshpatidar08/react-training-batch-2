import React from 'react'
import FourthChild from './FourthChild'

function ThirdChild({data}) {
  return (
    <div>
      <FourthChild data={data} />
    </div>
  )
}

export default ThirdChild
