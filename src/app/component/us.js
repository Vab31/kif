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
            <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4">
              "A Fun-Raising Program Celebrating Diversity and Empowering Every
              Voice"
            </h1>
            <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto">
              Keys to Inclusion is a vibrant fun-raising initiative that brings
              communities together through joy and shared purpose. It aims to
              promote awareness, celebrate diversity, and empower every voice to
              be heard.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center w-full pt-10 mt-10 ">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ">
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
      Keys to Inclusion Fund is a heartfelt fundraising initiative dedicated to supporting students living with dyscalculia—a learning difference that affects the ability to understand numbers and mathematical concepts. Often misunderstood or overlooked, students with dyscalculia face unique academic and emotional challenges that can impact their confidence and overall growth.

This program seeks to bridge the gap by providing access to personalized learning resources, specialized teaching tools, and inclusive educational environments. Beyond academics, the fund aims to foster a sense of belonging, celebrate neurodiversity, and ensure that every student—regardless of their learning style—feels seen, supported, and empowered to reach their full potential.

Together, we believe we can turn limitations into learning opportunities and create a future where every child has the key to inclusion.{" "}
      </p>

      {/* </div> */}
    </div>
  );
}
