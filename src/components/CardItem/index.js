import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, imgUrl, description, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} className="card-img" />
      </div>
    </li>
  )
}

export default CardItem
