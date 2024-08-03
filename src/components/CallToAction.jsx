import React from "react";
import HouseImg from "../assets/house-img.jpg";

const CallToAction = () => {
  return (
    <>
      <div className="bg-secondary">
        <div className="max-w-[1200px] h-auto mx-auto flex flex-col items-start md:h-[400px] md:flex-row min-[1090px]:h-[320px]">
            <img src={HouseImg} className="w-full md:w-1/2 md:h-full object-cover" alt="house"/>

            <div className="p-10">
                <h5 className="text-lg font-medium text-darkBlue mb-2 lg:mb-4">Find Out What It Costs</h5>

                <p className="text-sm text-darkBlue leading-6 text-justify mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem iure accusamus rem nisi reprehenderit repellendus, vitae dolore enim quis laudantium consectetur, nobis aperiam tempore doloribus unde maiores dolor. Molestias.
                </p>

                <button className="primary-btn">Get Estimation</button>
            </div>
        </div> 
      </div>
    </>
  );
};

export default CallToAction;
