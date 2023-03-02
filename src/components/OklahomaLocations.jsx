import React from 'react'

const OklahomaLocations = () => {
  return (
    <>    
        <div className='bg-green py-2 flex justify-center'>
            <h2 className='text-white text-xl md:text-2xl'>Locations available now in Oklahoma!</h2>
        </div>
        <div className='h-[50%] grid content-start md:grid-cols-2 text-xl md:text-2xl gap-5 w-[90%] md:w-[85%] m-auto'>
            <p className="text-black flex flex-col"><span className='font-semibold underline decoration-green underline-offset-4'>ADMIRAL - TULSA:</span> 7445 E Admiral Pl, Tulsa, OK 74115</p>
            <p className="text-black flex flex-col"><span className='font-semibold underline decoration-green underline-offset-4'>HARVARD - TULSA:</span> 2107 S Harvard Ave, Tulsa, OK 74114</p>
            <p className="text-black flex flex-col"><span className='font-semibold underline decoration-green underline-offset-4'>PEORIA - TULSAL:</span> 4919 S Peoria Ave, Tulsa, OK 74105</p>
            <p className="text-black flex flex-col"><span className='font-semibold underline decoration-green underline-offset-4'>SHERIDAN - TULSA:</span> 6151 East 51st Street South, Tulsa, OK 74135</p>
        </div>
    </>
  )
}

export default OklahomaLocations
