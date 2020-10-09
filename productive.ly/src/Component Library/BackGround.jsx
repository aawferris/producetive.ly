import React from 'react'
import axios from 'axios'
import { Component } from 'react'

class BackGround extends Component {
  constructor() {
    super();
    this.state = {
      image: [],
    }
  }

  async getImage() {
    const response = await axios.get('https://api.unsplash.com/photos/random/REACT_APP_UNSPLASH_SECRET_KEY/')
    console.log(response.data);
  }

  async componentDidMount() {
    await this.getImage
  }

  render() {
    return (
      <p>This shows up</p>
    )
  }
}

export default BackGround