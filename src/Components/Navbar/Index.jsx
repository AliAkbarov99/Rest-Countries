import React from 'react'
import './Index.css'


const Index = () => {
let body = document.getElementsByTagName("body")[0]

  function changeMode(){
    body.classList.toggle('dark-mode')
  }
  return (
    <>
      <div id='navbar'>
        <h1>Where in the world?</h1>
        <p onClick={changeMode}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path></svg>
          Dark Mode</p>
      </div>


    </>

  )
}

export default Index