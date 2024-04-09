import React from 'react'
import SecondChild from './SecondChild'

function FirstChild({data}) {
  return (
    <div>
      <SecondChild data={data}/>
    </div>
  )
}

export default FirstChild
