import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Carousel } from 'react-bootstrap'

import './Homepage.module.css'
import { textAlign } from '@mui/system';
import BasicCard from './BasicCard';
import MediaCard from './MediaCard';



function Homepage() {

  return (

    <div >

<div className="container my-4">
  <BasicCard/>
</div>


      <div class="container col-lg-8 px-1 py-3 ">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-3">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://source.unsplash.com/700x900/?cash,phone" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold lh- mb-3">
              <span style={{ color: "#009FAC" }}> NatWest One</span> </h1>
        
            <p class="lead">Getting a clearer idea of your monthly budget could help you make better decisions about how you manage your money and plan for your future. Take a look at our top tips to help you budget better. Reviewing your direct debits or switching energy supplier are two ways you could potentially save money and give your monthly budget a boost or leave you a little extra to save for a rainy day.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <a href='/signup'><button type="button" class="btn btn-lg px-4 me-md-2" style={{ background: "#009FAC", color: 'white' }}>Get Started</button></a>
          
            </div>
          </div>
        </div>
      </div>      

      <div className="container">
        <MediaCard/>
      </div>
      


      <div class="container px-4 py-5 " id="featured-3">
        <h2 class="pb-2 border-bottom" style={{ background: "#009FAC", color: 'white' }}><strong>Highlights</strong></h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              
            </div>
            <h2 style={{ color: "#009FAC" }}>exclusive rewards for paying your bills</h2>
           
            <p>Before you start budgeting, it's important to know how much you've got coming in each month and understand any deductions from your wage packet before it lands in your current account. </p>
            <a href="#" class="icon-link">
              Call to action
             
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              
            </div>
            <h2 style={{ color: "#009FAC" }}>Statement analysis lets you know where your money</h2>
            <p>Getting a clearer idea of your monthly budget could help you make better decisions about how you manage your money and plan for your future. Take a look at our top tips to help you budget better. </p>
            <a href="#" class="icon-link">
              Call to action
  
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">             
            </div>
            <h2 style={{ color: "#009FAC" }}>More cash
              in your pockets at onCiick</h2>
              <p>Reviewing your direct debits or switching energy supplier are two ways you could potentially save money and give your monthly budget a boost or leave you a little extra to save for a rainy day.</p>
            <a href="#" class="icon-link">
              Call to action
              
            </a>
          </div>
        </div>
      </div>

    </div>

  )
}
export default Homepage