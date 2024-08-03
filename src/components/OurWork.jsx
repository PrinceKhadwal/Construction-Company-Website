import React from 'react'
import GalleryImg1 from "../assets/gallery-img1.jpg"
import GalleryImg2 from "../assets/gallery-img2.jpg"
import GalleryImg3 from "../assets/gallery-img3.jpg"
import GalleryImg4 from "../assets/gallery-img4.jpg"
import GalleryImg5 from "../assets/gallery-img5.jpg"
import GalleryImg6 from "../assets/gallery-img6.jpg"

const OurWork = () => {
  return (
    <>
        <section id='our-work' className='max-w-[1200px] pt-8 mx-auto'>
            <h5 className='text-2xl font-semibold text-darkBlue text-center mb-16'>Our Work</h5>

            <div className='grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2'>
                <div className='md:col-span-2'>
                    <img alt='galleryImg' src={GalleryImg1} className='gallery-img'/>
                </div>
                <div className=''>
                    <img alt='galleryImg' src={GalleryImg2} className='gallery-img'/>
                </div>
                <div className=''>
                    <img alt='galleryImg' src={GalleryImg3} className='gallery-img'/>
                </div>
                <div className=''>
                    <img alt='galleryImg' src={GalleryImg4} className='gallery-img'/>
                </div>
                <div className=''>
                    <img alt='galleryImg' src={GalleryImg5} className='gallery-img'/>
                </div>
                <div className='md:col-span-2'>
                    <img alt='galleryImg' src={GalleryImg6} className='gallery-img'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurWork