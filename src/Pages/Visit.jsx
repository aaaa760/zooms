import React from 'react'

const Visit = () => {
    return (
       <>
         <div className="w-full h-screen bg-[url('https://wallpapercave.com/wp/wp7259723.jpg')] bg-cover flex items-center mt-[-78px]">
          <div className=" w-full md:mx-center text sm:mx-20 2xs:mx-10 select-none">
          <h1 className="xs:text-6xl text-7xl  text-bold  text-white font-serif ">Plan Your Visit</h1>
          </div>
        </div>
              <div className='mt-5 mx-10 '>
                <h1 className='text-3xl text-orange-900 font-bold'>Zoo Timings</h1>
                <br />
                <p className='text-white text-lg'>
                <h2 className='text-2xl text-black'>Every Tuesday Holiday</h2>
                <h2 className='text-2xl text-black'>Other days - 8:30 AM to 5:30 PM</h2>
                <button className='bg-green-500 text-white px-4 py-2 rounded-lg mt-5'>Buy Tickets</button>
                <h1 className='mt-5 text-3xl text-orange-900 font-bold'>BEST TIME TO VISIT THE ZOO</h1>
                <p className='text-2xl text-black'>Any time of the day is suitable for visiting the Zoo. Coving to its lush green cover, the orientation of animal houses and visitor amenities. Those who wish to focus on only big cats are advised to schedule the visit early morning or evening as cats tend to rest during the day. There are 149 species housed at the zoo.</p>
                <h1 className='mt-5 text-3xl text-orange-900 font-bold'>HOW TO REACH THE ZOO</h1>
                <button className='bg-green-500 text-white px-4 py-2 rounded-lg mt-5'>Get Directions</button>
                <h1 className='mt-5 text-3xl text-orange-900 font-bold'>ZOO ENTRANCE</h1>
                <p className='text-2xl text-black'>The Zoo is open from 8:30 AM to 5:30 PM. The Zoo is closed on Tuesdays. The Zoo is open on all other days of the week. The Zoo is open on all days of the year except on 25th December and 1st January. The Zoo is open on all other days of the year.</p>
                <h1 className='mt-5 text-3xl text-orange-900 font-bold'>ZOO Map</h1>
<img src='https://e7.pngegg.com/pngimages/982/233/png-clipart-colchester-zoo-london-zoo-belfast-zoo-map-guanzhu-activities-raffle-tickets-plan-united-kingdom.png' className='w-1/2 h-1/2 mb-10' />                

                 </p>
              </div>
       
       </>
    )
}

export default Visit;