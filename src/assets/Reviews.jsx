function Reviews({numbers,photo,text}) {
    return (
      <div  className='pt-14 leading-8'>
          <p className="text-center text-5xl">{numbers}</p>
          <div className="flex flex-col items-center justify-center pt-5">
              <img src={photo} className='w-10'></img>
              <p className="text-gray-500">{text}</p>
          </div>
      </div>
    )
  }
  
  export default Reviews