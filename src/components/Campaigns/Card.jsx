import './card.scss'
function Card({data,className}) {
  return (
    <div className='card'>
    <div className={`img ${className && className}`}><img src={data?.imgURL} alt="image" /></div>
      <p className='title'>{data?.title}</p>
      <p className='desc'>{data?.description}</p>
      <p className='btn'>Learn More </p>
    </div>
  )
}

export default Card