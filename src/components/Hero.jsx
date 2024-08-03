import React from "react";
import HeroIMG01 from '../assets/hero-img-1.jpg'
import HeroIMG02 from '../assets/hero-img-2.jpg'
import HeroIMG03 from '../assets/hero-img-3.jpg'
const Hero = () => {
  return (
    <>
    <section id="hero" className="max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row">
        <div className="flex-1  text-center md:text-left ">
            <h2 className="text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">Building Dreams,Crafting Homes</h2>

            <p className="text-sm leading-6 text-darkBlue mb-6 md:w-4/5 ">
                Turning dreams into homes. Explore our exceptional craftsmanship and envision your perfect space.
            </p>

            <button className="primary-btn">Explore our Projects</button>
        </div>

        <div className="flex  gap-2 justify-center md:gap-3 lg:gap-5">
            <img className="hero-img" alt="img-one" src={HeroIMG01}/>
            <img className="mt-[5%] hero-img" alt="img-two" src={HeroIMG02}/>
            <img className="hero-img" alt="img-three" src={HeroIMG03}/>
        </div>

    </section>
    </>
  );
};

export default Hero;
