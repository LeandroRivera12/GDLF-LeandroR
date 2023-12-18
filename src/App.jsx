import { useState } from 'react'
import './App.css'
import getRandomFromArr from './utils/function'
import phrases from "./utils/phrases.json"
import Phrase from "./components/Phrase"
import Button from "./components/Button"
import arrPhotos from './utils/photos.json'


function App() {
  const initialPhrase = getRandomFromArr(phrases)
  const initialPhoto = getRandomFromArr(arrPhotos)

 
  const [quoteRandom, setQuoteRandom] = useState(initialPhrase);
  const [photoRandom, setPhotoRandom] = useState(initialPhoto);
 
  const objStyle = {
    backgroundImage: `url(/fondo${photoRandom}.jpg)`
  }
  
  return (
  
    <div className='app' style={objStyle}>
      
      <h1 className='app__title'>GALLETAS DE LA <br /> FORTUNA</h1>
      <div className='app__card'>
      <Phrase quoteRandom={quoteRandom}/>
     
      </div>
      <Button
      setPhotoRandom={setPhotoRandom}
      setQuoteRandom={setQuoteRandom}
      />
      
      
    </div>
    
    
  )
}

export default App
