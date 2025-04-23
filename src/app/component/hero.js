import React from 'react'

export default function Hero() {
  return (
    <div><section class="text-gray-600 body-font bg-white">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-5xl text-3xl mb-4 font-extrabold text-green-600">Turning Notes into Hope
          {/* <br class="hidden lg:inline-block"/><span className='sm:text-3xl text-xl'> I’m Saesha Khosla and I’m turning my love for playing the Piano to raise funds for individuals who are differently abled and empower them to be financially independent with economically sustainable entrepreneurial ideas.</span> */}
        </h1>
        <p class="mb-8 leading-relaxed">'Keys to Inclusion' is more than just a musical concert— it’s a heartfelt mission which turns melodies into meaningful impact. Where every key, every note, every etude helps raise funds to support individuals who are differently abled to become financially independant by helping them develop profitable businesses with minimized negative impact on the environment. Join me in creating a green world where every key is heard, every ability is celebrated and financial independence is fostered.</p>
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
