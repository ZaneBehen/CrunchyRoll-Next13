export default function Info(props) {
    return (
        <div className={`sm:visible ${props.visibility}  z-50 flex flex-col justify-center items-center w-72 h-[9.5rem] sm:h-[30rem]`}>
      <svg viewBox="0 0 40 40" role="img" className="fill-white z-50 w-10 h-10" alt="img"><path d={props.image}></path></svg>
    <p className="text-white text-md z-50 mt-5">{props.info1}</p>
    <p className='text-white text-md mt-1'>{props.info2}</p>
    </div>
    )
  }