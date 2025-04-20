const Card = () => {
  return (
    <div className='hover:translate-x-2 w-96 mx-auto mt-5 bg-black text-white p-5 rounded-2xl transition-all duration-300 cursor-pointer'>
        <h1 className='font-bold text-2xl font-sans'>Dummy Text</h1>
      <p className='font-serif italic line-clamp-3'>Lorem ipsum, dolor sit amet consectetur <span className='font-bold underline'>adipisicing</span> elit. Ullam sapiente vel laudantium minus rerum fugit accusamus ad rem, officiis libero molestiae delectus eos. Aut quia, doloribus distinctio eum repellendus molestiae.</p>
    </div>
  )
}
// line clamp 2 ka matlab hai ke 2 lines ke baad ... 

export default Card
