import React from 'react'

function ProofNum({numbers,photo,text,classes}) {
  return (
    <div className="pt-14 leading-8">
        <p className='text-center text-5xl'>{numbers}k</p>
        <div className='flex flex-col items-center justify-center pt-5'>
            <img src={photo} className="w-11"></img>
            <p className="text-gray-500">{text}</p>
        </div>
    </div>
  )
}

export default ProofNum