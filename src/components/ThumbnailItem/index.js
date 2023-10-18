import './index.css'

const ThumbnailItem = props => {
  const {changeImage, isActive, details} = props
  const {thumbnailUrl, thumbnailAltText, id} = details
  const onClickImage = () => {
    changeImage(id)
  }
  const thumbnailClassName = isActive ? 'thumbnailAltTexts' : 'thumbnailAltText'
  return (
    <li>
      <button type="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
