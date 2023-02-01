import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CardsDisplay() {

    const navigate = useNavigate();

    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

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




    const [cards, setCards] = useState([])

    useEffect(() => {
        const loggeduser = JSON.parse(localStorage.getItem('loggedUser'));
        axios.get(`http://localhost:9898/cards/emailid?emailid=${loggeduser.emailid}`)
            .then(response => setCards(response.data))
            .catch(error => console.log(error))


    })


    return (
        <div style={{ background: "#DFC5F1" }}>

            {/* //this is navbar */}
            <nav class="navbar fixed-top navbar-expand-md navbar-dark  mb-3" style={{ background: "#5E10B1", color: "white" }}>
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
                                            <Nav.Link onClick={RouteTocard} class="nav-link px-0"> <span class="d-none d-sm-inline" style={{ color: "white" }}>Add Card</span></Nav.Link>

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
                        <h1>hello</h1>

                        {/* table */}

                        <div className="container my-4">
                            <div className="card transaction-history shadow">
                                <div className="card-header">

                                    My Cards
                                </div>
                                <div className="card-body">
                                    <table className="table text-center table-striped">
                                        <thead>
                                            <tr>
                                                <th>Card Number</th>
                                                <th>Card Name</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cards.map(card => (
                                                    <tr key={card.creditCardNumber}>
                                                        <td>{card.creditCardNumber}</td>
                                                        <td>{card.creditCardHolderName}</td>

                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsDisplay