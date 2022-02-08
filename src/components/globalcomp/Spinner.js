import React, { Component } from 'react'
import Eclipse from './Eclipse.gif'


export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
       <img className='my-3' src={Eclipse} alt="Eclipse" /> 
        
      </div>
    )
  }
}

export default Spinner