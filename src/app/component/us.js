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
            The Key to Inclusion – A Music-Fueled Mission Celebrating Differences and Empowering Every Mind
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
      I'm Saesha, a 9th-grade student with a deep love for playing the piano. But beyond the melodies, I believe music can be a bridge to something greater—inclusion, empathy, and opportunity.

That’s why I started the Key to Inclusion Fund.

Every note I play is part of a bigger mission: to raise awareness and funds for students who are mentally challenged or slow learners. These students often go unnoticed, underserved, and misunderstood. Through this fund, I aim to provide them with better learning resources, access to specialized tools, and a voice that reminds the world—they matter.

Whether it’s contributing to a special education classroom, funding personalized learning materials, or simply sparking a conversation—your support helps turn every piano key into a key to change.

Together, let’s make the world a more inclusive place—one note at a time.


            </p>

      {/* </div> */}
    </div>
  );
}
