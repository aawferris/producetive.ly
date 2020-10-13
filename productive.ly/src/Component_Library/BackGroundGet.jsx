import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BackGround from './BackGround'

function BackGroundGet() {
  const [image, setImage] = useState('')

  useEffect(() => {
    const getApi = async () => {
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=nature&image_type=photo&orientation=horizontal`
      const response = await axios.get(url)
      console.log(response.data.hits);
      const imageArr = response.data.hits
      const largeImage = imageArr[Math.floor(Math.random() * imageArr.length)].largeImageURL
      console.log(largeImage);
      setImage(largeImage)
    }
    getApi()
  }, [])

  return(
    <div>
      <BackGround
        image={image}
      />
    </div>
    )
}

export default BackGroundGet