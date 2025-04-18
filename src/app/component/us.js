import React from "react";

export default function Us() {
  return (
    <div className="mb-10">
      <div
        className="relative h-80 w-full  bg-cover bg-center"
        style={{ backgroundImage: "url('/images/usimg.png')" }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Text content */}
        <div className="relative flex items-center justify-center h-full text-center px-5">
          <div>
            <h1 className="text-green-600 text-4xl sm:text-6xl font-bold mb-4">
            The Keys to Inclusion – Playing Piano to Champion Inclusion and Uplift Lives of the Differently-Abled
            </h1>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center w-full pt-10 mt-10 ">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-green-700 ">
          Keys to Inclusion
        </h1>
      </div>
      <div></div>

      {/* <img className='my-20' src='/images/aboutus2.png' />

<div className="flex flex-col text-center w-full">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ">Our Mission</h1>
    </div>
    <div> */}
      <p className="font-medium my-4 text-xl mx-4 sm:mx-10 md:mx-20 lg:mx-28 xl:mx-36 leading-relaxed text-center text-gray-900">
     

      Saesha, a passionate 9th-grade student, believes that music holds the power to create real change. Through her heartfelt initiative, the Keys to Inclusion Fund, she uses her piano talent to raise awareness and support for individuals of all age groups who are mentally challenged, have learning disabilities, or live with other forms of cognitive differences. Her mission goes beyond notes and melodies — it’s about building a world where inclusion isn’t just a concept, but a shared reality. Every performance she gives is a step toward empowering people who learn and grow differently, ensuring they have access to the resources, care, and opportunities they deserve. The funds raised go directly into programs that promote inclusive education, emotional well-being, and lifelong learning support. With every key she touches, Saesha is opening hearts — and unlocking brighter futures for all.
            </p>

      {/* </div> */}
    </div>
  );
}
