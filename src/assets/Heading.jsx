
function Heading({title, titletext}) {
  return (
    <section className="text-gray-50 leading-10">
        <h1 className="text-center text-6xl py-5 md:text-left">{title}</h1>
        <p className="w-96 mx-auto text-center text-3xl md:text-left max-w-full text-xl lg:m-0 lg:text-3xl">{titletext}</p>
    </section>
  )
}

export default Heading