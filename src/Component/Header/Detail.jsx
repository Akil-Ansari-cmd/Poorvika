import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({product}) => {
    const {id} = useParams();
  return (
    <div>
      {
        product.map((items) =>
        <div key={items}>

        </div>
         )
      }
    </div>
  )
}

export default Detail
