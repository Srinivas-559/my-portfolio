import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20    ' id='testimonials'>
          <h1 className='heading mb-6'>Highlights from my  {" "}
              <span className='text-purple'>Learnings</span>
          </h1>
          <div className='flex flex-col  items-center   max-lg:mt-10 '>
              
              <InfiniteMovingCards
                  items={testimonials}
                  direction='right'
                  speed='slow'

              />
              <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                  {companies.map(({id , img , name , nameImg}) => (
                      <div key={id} className='flex md:max-w-60 max-w-32  gap-2  items-center font-sans tracking-widest'>
                          <img src={img} alt={name} className={`${id==5 ? "invert ": ""} md:w-10 w-5`}></img>
                          <span className='font-bold'>{name}</span>
                      </div>
                  ))}
              </div>
          </div>
          </div>
  )
}

export default Clients