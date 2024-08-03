import React from 'react'
import { SERVICES } from '../utils/data'
import ServiceInfoCard from './Cards/ServiceInfoCard'

const OurServices = () => {
  return (
    <>
        <section id='services' className='max-w-[1200px] py-16 mx-auto'>
            <h5 className='text-2xl font-semibold text-darkBlue text-center mb-10'>Our Services</h5>

            <div className='bg-white lg:shadow-xl lg:shadow-slate-200/50'>
                {SERVICES.map((item,index) => (
                    <ServiceInfoCard key={index} imgUrl={item.imgUrl} title={item.title} description={item.description} />
                ))}
            </div>
        </section>
    </>
  )
}

export default OurServices