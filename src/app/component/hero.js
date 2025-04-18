import React from 'react'

export default function Hero() {
  return (
    <div><section class="text-gray-600 body-font bg-white">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-5xl text-3xl mb-4 font-extrabold text-green-600">Turning Notes into Hope
          <br class="hidden lg:inline-block"/><span className='sm:text-3xl text-xl'> I’m Saesha, and I’m using my music to raise funds for students with special needs.</span>
        </h1>
        <p class="mb-8 leading-relaxed">Keys to Inclusion" is more than just a musical performance — it’s a heartfelt mission led by a young pianist turning melodies into impact. Every note she plays helps raise funds to support children with learning challenges in reading and math. Join her in creating a world where every voice is heard, and no child is left behind.</p>
        <div class="flex justify-center">
          <a href='/us'>
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know More</button>
        </a>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="/images/hero1.png"/>
      </div>
    </div>
  </section></div>
  )
}
