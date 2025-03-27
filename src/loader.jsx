import React from 'react'
import { BallTriangle } from 'react-loader-spinner'
const Loader = () => {
  return (
    <main className='loader'>
        <BallTriangle
            height={110}
            width={110}
            radius={5}
            color="#ffff"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </main>
  )  
}

export default Loader;