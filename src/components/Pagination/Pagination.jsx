import React from 'react'
import { TESTINOMIALS } from '../../utils/data'

const Pagination = ({active}) => {
  return (
    <>
        <div className='flex items-center justify-center gap-3 '>
            {TESTINOMIALS.map((item,index) =>(
                <div key={item.id} className={`w-8 h-1 ${
                    active === index ? "bg-darkBlue" : "bg-blue-100"
                } rounded-md transition-all duration-500`} />
            ))}
        </div>
    </>
  )
}

export default Pagination