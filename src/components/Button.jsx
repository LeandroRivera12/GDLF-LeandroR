import getRandomFromArr from "../utils/function"
import phrases from "../utils/phrases.json"
import arrPhotos from "../utils/photos.json";


const Button = ({ setQuoteRandom, setPhotoRandom}) => {
   const handleChangePhrase = () => {
      setQuoteRandom(getRandomFromArr(phrases))
      setPhotoRandom(getRandomFromArr(arrPhotos))
   } 
 
  return (
    <button className="app__btn" onClick={handleChangePhrase}>Ver otro</button>
  )
}

export default Button