'use client';


import React, { use } from 'react'
import { useEffect,useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useRouter } from 'next/navigation';

export default function Reels() {
    useEffect(() => {
        AOS.init({
            duration: 2500,
        });
      })

        const [email, setEmail] = useState('');
        const [showForm, setShowForm] = useState(false);
        const router = useRouter();
      
        const handleWatch = () => {
          const saved = localStorage.getItem('user_email');
          if (saved) router.push('/fullvideo');
          else setShowForm(true);
        };
      
        const handleSubmit = async (e) => {
          console.log("hellow this  who")

      //     console.log("inside prject look into it")
          e.preventDefault();
          const res = await fetch(`http://localhost:5000/save-email`, {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: { 'Content-Type': 'application/json' },
          });
      console.log(res)
          if (res.ok) {
            localStorage.setItem('user_email', email);
            router.push('/fullvideo');
          } else {
            alert('Something went wrong!');
          }
        };

  return (
    <div>
{!showForm && (
  <div className='bg-white'>

{/* Section 1 */}
<section className="text-gray-600 bg-gray-200 body-font" data-aos="fade-right">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-green-700">
        Before they sold out
        <br className="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. 
        Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Watch More
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
      <div className="relative w-full h-[240px] md:h-[360px] lg:h-[600px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded"
          src="https://www.youtube.com/embed/9ymhsjd2VeE"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>

{/* Section 2 */}
<section className="text-gray-600 body-font" data-aos="fade-left">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
      <div className="relative w-full h-[240px] md:h-[360px] lg:h-[600px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded"
          src="https://www.youtube.com/embed/9ymhsjd2VeE"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-green-600">
        Before they sold out
        <br className="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. 
        Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Watch More
        </button>
      </div>
    </div>
  </div>
</section>

{/* Section 3 */}
{/* <section className="text-gray-600 bg-gray-200 body-font" data-aos="fade-right">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-700">
        Before they sold out
        <br className="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. 
        Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Watch More
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
      <div className="relative w-full h-[240px] md:h-[360px] lg:h-[600px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded"
          src="https://www.youtube.com/embed/9ymhsjd2VeE"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section> */}

</div>


)}


{showForm && (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Enter your email to continue</h2>
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        placeholder="you@example.com"
        required
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition"
      >
        Continue
      </button>
    </div>
    <p className="text-sm text-gray-500 mt-3">We’ll never share your email with anyone else.</p>
    </div>
)}



    </div>
  )
}
