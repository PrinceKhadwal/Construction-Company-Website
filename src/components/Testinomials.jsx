import React, { useRef, useState } from 'react'
import { TESTINOMIALS } from '../utils/data'
import TestinomialsCard from './Cards/TestinomialsCard'
import Slider from 'react-slick'
import { RiArrowRightSLine } from 'react-icons/ri'
import { RiArrowLeftSLine } from 'react-icons/ri'
import Pagination from './Pagination/Pagination'


const Testinomials = () => {

    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0)

    const settings = {
        dots: false, 
        infinte: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },                
            },
        ],
        beforeChange: (index) => {
            setCurrentSlide(index)
        },
    }

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

  return (
    <>
        <section id='testinomials' className='max-w-[1200px] py-16 mx-auto'>
            <h5 className='text-2xl font-semibold text-darkBlue text-center mb-16'>Testinomials</h5>

            <div className='relative mb-7 px-5 md:px-10 '>
                <Slider ref={sliderRef} {...settings} >

                {TESTINOMIALS.map((item,index) => (
                    <TestinomialsCard key={index}
                    name={item.name}
                    review={item.review}
                    description={item.description}
                    imgUrl={item.imgUrl}
                    />
                    ))}
                </Slider>

                <button className='arrow-btn left-1 md:left-5 lg:left-2' onClick={slideLeft}>
                    <RiArrowLeftSLine size={24} />
                </button>
                <button className='arrow-btn right-1 md:right-5 lg:right-2' onClick={slideRight}>
                    <RiArrowRightSLine size={24} />
                </button>
            </div>

            <Pagination active={currentSlide} />
        </section>
    </>
  )
}

export default Testinomials