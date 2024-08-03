import React from 'react'

const ServiceInfoCard = ({imgUrl, title, description}) => {
  return (
    <>
        <div className='bg-secondary flex flex-col md:even:flex-row-reverse md:odd:flex-row'>
            <div className='flex-1'>
                <img alt={title} src={imgUrl} className='w-full h-80 md:h-full'/>
            </div>

            <div className='flex-1'>
                <div className='p-10'>
                    <h6 className='text-md md:text-xl text-darkBlue font-medium mb-3'>{title}</h6>
                    <p className='text-sm md:text-sm leading-6 text-darkBlue whitespace-pre-line'>{description}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceInfoCard