import React from 'react'
import WatchCard from '../component/WatchCard'
import {getWatches} from '../lib/getWatches'

const page = async () => {
  const watches=await getWatches();

  return (
    <div id='watches'className='mt-25'>
      {/*Content*/}
      <div className='m-4 lg:m-6'>
        <h1 className='text-center text-[#ad803c] font-bold text-2xl md:text-3xl'>Our Watches</h1>
        <p className='text-center text-gray-500 mt-2'>Explore our exclusive collection of premium watches, blending timeless design with modern craftsmanship.</p>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7'>  
          {watches.map((watch)=>(
            <WatchCard key={watch.id} watch={watch}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
