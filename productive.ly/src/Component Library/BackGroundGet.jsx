import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BackGround from './BackGround'

function BackGroundGet() {
  const [image, setImage] = useState('')

  useEffect(() => {
    const getApi = async () => {
      const url = `https://pixabay.com/api/?${env.process.REACT_APP_PIXABAY_KEY}&q=nature&image_type=photo&orientation=horizontal`
      const response = await axios.get(url)
      console.log(response.data.hits[0].largeImageURL);
      const largeImage = response.data.hits[0].largeImageURL
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