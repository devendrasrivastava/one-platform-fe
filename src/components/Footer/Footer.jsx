import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start" style={{backgroundColor: "#009FAC"}}>
    <div class="container d-flex justify-content-center py-5">
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#0C0308"}}>
        <i class="fab fa-facebook-f"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#0C0308"}}>
        <i class="fab fa-youtube"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#0C0308"}}>
        <i class="fab fa-instagram"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#0C0308"}}>
        <i class="fab fa-twitter"></i>
      </button>
    </div>
    {/* <!-- Copyright --> */}
    <div class="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2023 Copyright:
      <a class="text-white" href="/">Created by Deepankar & Devendra</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
{/* </div> */}


    </div>
  )
}
