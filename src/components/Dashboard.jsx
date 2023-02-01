import axios from 'axios'
import React from 'react'
import { Card, Col, Nav, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { Route, Routes, useHistory, useNavigate } from 'react-router-dom'
import Rows from '../Rows'
import Addaccount from './Dashboard/Addaccount'
import Linkedaccounts from './Dashboard/Linkedaccounts'
import Transaction from './Dashboard/Transaction'
import nwlogo from './Images/NWG.png'
import Profile from './Profile/Profile'
import money from './Images/money.jpg'



export const Dashboard = () => {


    const navigate = useNavigate();

    // logged user
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    console.log(loggedUser);
    // let token = localStorage.getItem('jwtToken');
    let userId = localStorage.getItem('email');
    let test = localStorage.getItem('test')
    console.log(test);
    console.log(userId);


    //   account balance
    let addedaccount = JSON.parse(localStorage.getItem('addedaccount'))


    function logout() {
        

        localStorage.clear();
        navigate('/')
    }

    let routetotrasanct = () => {
        navigate("/transaction")
    }

    let RouteToTransfer = () => {
        navigate("/payments")
    }


    let RouteToDashboard = () => {
        navigate("/dashboard")
    }

    let RouteToProfile = () => {
        navigate("/profile")
    }

    let RouteTocard = () => {
        navigate("/Creditcard")
    }

    let RouteToTransferHistory = () => {
        navigate("/TransferHistory")
    }
  
   let RouteToPayments = () => {
    navigate("/CardsDisplay")
}



    return (
        <div  style={{background:"#DFC5F1"}}>



            {/* //this is navbar */}
            <nav class=" navbar fixed-top navbar-expand-md navbar-dark  mb-3 " style={{ background: "#5E10B1", color: "white" }}>
                <div class="flex-row d-flex" >
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand ml-2" href="#" title="Free Bootstrap 4 Admin Template">BankCredible</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                      
                    </ul>
                    <ul class="navbar-nav ms-auto">
                       


                        <li class="nav-item">
                            <Nav.Link class="nav-link" data-target="#myModal" data-toggle="modal" style={{ Color: "white" }}>Logged in as :{loggedUser.id}</Nav.Link>
                        </li>
                        <li class="nav-item">
                            <Nav.Link class="nav-link" href="/" data-target="#myModal" data-toggle="modal" onClick={logout} >log out</Nav.Link>
                        </li>

                        <li class="nav-item">

                          <Nav.Link class="nav-link" onClick={RouteToProfile}>Profile</Nav.Link>
                          
                          

                        </li>
                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light text-white">
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light text-white">
                                <i class="fas fa-envelope-open-text"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light text-white">
                                <i class="fas fa-align-justify"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>


            {/* // this is  side Nav bar */}
            <div class="container-fluid">
                <div class="row flex-nowrap  ">
                    <div style={{ background: "#5E10B1" }} class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " >
                        <div class="d-flex  flex-column align-items-center align-items-sm-start px-3 pt-5 text-white min-vh-100  sticky-top">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"  >
                              
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                                <li class="nav-item">
                                    <Nav.Link onClick={RouteToDashboard} class="nav-link align-middle px-0" style={{ color: "white" }}>
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                                    </Nav.Link>
                                </li>
                                <li>
                                   
                                </li>

                                <Nav.Link onClick={routetotrasanct} class="nav-link px-0 align-middle" style={{ color: "white" }}>
                                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Bank Transactions


                                    </span></Nav.Link>
                                    <Nav.Link onClick={RouteToTransfer} class="nav-link px-0 align-middle" style={{ color: "white" }}>
                                    <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Transfers


                                    </span></Nav.Link> 

                                    <Nav.Link onClick={RouteToTransferHistory} class="nav-link px-0 align-middle" style={{ color: "white" }} >
                                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Transfer History
                                    </span></Nav.Link> 

                              
                                
                                <li>
                                    <Nav.Link href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle " style={{ color: "white" }}>
                                        <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Card services</span> </Nav.Link>
                                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu" style={{ color: "white" }}>
                                        <li class="w-100">
                                            <Nav.Link href="#" onClick={RouteTocard} class="nav-link px-0"> <span class="d-none d-sm-inline" style={{ color: "white" }}>Add Card</span></Nav.Link>
                
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Nav.Link onClick={RouteToPayments} class="nav-link px-0 align-middle" style={{ color: "white" }}>
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Payments</span> </Nav.Link>
                                </li>


                            </ul>
                            <hr></hr>


                        </div>
                    </div>

                    {/*this is  content */}

                    <div class="col py-3  "  >
                        <h1>Welcome to BankCredible </h1>


                        < div class="container py-6 ">
                            <header class="pb-2 mb-1 border-bottom" >
                                <a class="d-flex align-items-center text-dark text-decoration-none ">
                                   
                                    <svg xmlns="https://www.iconsdb.com/icons/preview/purple/bank-4-xxl.png" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                                    <span class="fs-4">Welcome to BankCredible</span>
                                </a>
                            </header>

                             


                            <div class="p-3 mb-2 bg-light rounded-3" >
                                <div class="container-fluid py-4" >
                                <div class="container py-2 " ><img src={nwlogo} width="120" height="120" className='rounded float-end m-5 ' /></div>
                                    <div><h1 class="display-6 fw-bold " style={{ textAlign: "justify" }} >Hello {loggedUser.id},<br></br> Happy Banking !</h1>
                                    <p class="col-md-8 fs-5 justify" style={{ textAlign: "justify" }}>Pay anyone, everywhere. Make contactless & secure payments in-stores or online using using BankCredible or Directly from your Credit Card. Plus, send & receive money from anyone.</p>
                                    </div>

                                    <br></br>
                                    <div class="col-md-6 fs-4 justify text-dark">
                                        <p style={{ textAlign: "justify", color: "#5A287D" }}>Link Accounts <button type="button" class="btn btn-light text-light" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style={{ background: "#5A287D" }} >Link account</button>
                                    
                                        </p>
                                        <Addaccount />

                                    </div>
                                   

                                    {/*acount balance  */}
                                    <div class="container flex-wrap justify-content-right">
                                        <div class="card ">
                                            <div class="d-flex flex-row justify-content-between text-align-center">
                                                <i class="fas fa-ellipsis-v"></i>
                                            </div>
                                            <h1 class="text-dark" >Linked Accounts</h1>
                                            <Linkedaccounts />
                                            <div class="card-bottom pt-1 px-2 mb-2">
                                                <div class="d-flex flex-row justify-content-between text-align-center">
                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* transfer */}

                            {/* cards */}
                            <div class="row align-items-md-stretch">
                                <div class="col-md-6" >
                                    <div class="h-100 p-5 text-white bg-dark rounded-3"  >
                                        <h2>Pay anyone directly from your bank account.</h2>
                                        <p>SPay anyone, everywhere. Make contactless & secure payments in-stores or online using BankCredible or Directly from your Bank Account. Plus, send & receive money from anyone.</p>
                                        <a onClick={RouteToTransfer}><button class="btn btn-outline-light" type="button" onclick={RouteToTransfer} style={{ background: "#5A287D" }} >Fund Trasfer</button></a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="h-100 p-5 bg-light border rounded-3">

                                        <h2>Know your spendings at one click</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat necessitatibus, soluta aspernatur ipsa ad eos perspiciatis veniam facere maiores nemo reprehenderit eum quas fugit quae in, sapiente neque? Soluta.</p>
                                        <a onClick={routetotrasanct}><button class="btn btn-outline-secondary" type="button">Transactions</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard