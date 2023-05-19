import React, { Component } from 'react'
import loading from './Spiner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
    <div role="status">
    <img className='h-20 mr-auto ml-auto' src={loading} alt='img'/>

        <span className="sr-only">Loading...</span>
    </div>
</div>


    )
  }
}

export default Spinner