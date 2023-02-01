import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Carousel } from 'react-bootstrap'

import './Homepage.module.css'
import { textAlign } from '@mui/system';



function Homepage() {

  return (

    <div >
      <div class="container col-lg-8 px-1 py-3 ">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-3">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://source.unsplash.com/600x900/?cash,phone" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold lh- mb-3">The story of
              <span style={{ color: "#5e10b1" }}> NatWest One Platform</span> begins
              with trust</h1>
        
            <p class="lead">Getting a clearer idea of your monthly budget could help you make better decisions about how you manage your money and plan for your future. Take a look at our top tips to help you budget better. Reviewing your direct debits or switching energy supplier are two ways you could potentially save money and give your monthly budget a boost or leave you a little extra to save for a rainy day.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <a href='/'><button type="button" class="btn btn-lg px-4 me-md-2" style={{ background: "#5e10b1", color: 'white' }}>Get Started</button></a>
          
            </div>
          </div>
        </div>
      </div>      
      


      <div class="container px-4 py-5 " id="featured-3">
        <h2 class="pb-2 border-bottom"><strong>We Offer</strong></h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              
            </div>
            <h2>exclusive rewards for paying your bills</h2>
           
            <p>Before you start budgeting, it's important to know how much you've got coming in each month and understand any deductions from your wage packet before it lands in your current account. </p>
            <a href="#" class="icon-link">
              Call to action
             
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              
            </div>
            <h2>Statement analysis lets you know where your money</h2>
            <p>Getting a clearer idea of your monthly budget could help you make better decisions about how you manage your money and plan for your future. Take a look at our top tips to help you budget better. </p>
            <a href="#" class="icon-link">
              Call to action
  
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">             
            </div>
            <h2>More cash
              in your pockets at onCiick</h2>
              <p>Reviewing your direct debits or switching energy supplier are two ways you could potentially save money and give your monthly budget a boost or leave you a little extra to save for a rainy day.</p>
            <a href="#" class="icon-link">
              Call to action
              
            </a>
          </div>
        </div>
      </div>


      <section id="main" class="bg-dark text-light p-3" >
        <div class="container bg-dark">
          <div class="row">
            <div class="col-md">
              <img src="https://source.unsplash.com/600x900/?money,technology" height="400rem" />
              <img src="https://source.unsplash.com/600x900/?bank,cash" height="400rem" />
            </div>
            <div class="col-md">
              <p class="dark">After the pandemic we’re thinking about our money more than ever. On the NatWest Money Blog, we’ve got articles to help you make the most of your money. Get the latest insights on saving money, planning for the future, and even reducing your carbon footprint.</p>
              <h2>Build Long-term Wealth<br /><span class="text" style={{ color: "#5e10b1" }}>" & Achieve your Goals" </span></h2>
            </div>
          </div>
        </div>

      </section>

    </div>

  )
}
export default Homepage