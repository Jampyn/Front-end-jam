import React, { Fragment } from 'react'

function ShowData({runNumber, name}) {


  return (
    <Fragment>
     <div className='text-center'>{runNumber.runNumber}</div>
    <div className='text-center'>{name}</div>

    </Fragment>
   
  )
}

export default ShowData;