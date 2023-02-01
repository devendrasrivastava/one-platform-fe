import axios from 'axios';
import React, { useState } from 'react'
import { Button, Nav } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import { Navigate, useNavigate } from 'react-router-dom';
import SideNav from './Sidenav';

function Transaction() {


    const [recentTransactions, setRecentTransactions] = useState([]);
  const headers = [

    { label: "Transaction ID", key: "transactionid" },
    { label: "Account No", key: "accNo" },
    { label: "Date of Transaction", key: "dateOfTransaction" },
    { label: "Description", key: "transactionType" },
    { label: "Credit", key: "depositAmount" },
    { label: "Debit", key: "withdrawalAmount" },
    { label: "Closing Balance", key: "balance" }
  ]

  const downloadAsCsv = {
    'data': recentTransactions ,
    'headers': headers,
    'filename': 'Recent Transactions.csv'
  }

    
  const navigate = useNavigate();

  // logged user
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


    const api = axios.create({
        baseURL:`http://localhost:9898/banktransactions`
      })
      
    
      let getAllRecords = ()=>{
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

        axios.get(`http://localhost:9898/banktransactions/emailid?emailid=${loggedUser.emailid}`).then(res =>{
           console.log(res.status);
           console.log(res.statusText);
           setRecentTransactions(res.data);
           console.log(res.data);
       

        })
      }


    return (
        <div >

            {/* //this is navbar */}
            <nav class="navbar fixed-top navbar-expand-md navbar-dark  mb-3" style={{ background: "#009FAC", color: "white" }}>
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
                    <div style={{ background: "#009FAC" }} class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " >
                        <div class="d-flex  flex-column align-items-center align-items-sm-start px-3 pt-5 text-white min-vh-100  sticky-top">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"  >
                                
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                                <li class="nav-item">
                                    <Nav.Link onClick={RouteToDashboard} class="nav-link align-middle px-0" style={{ color: "black" }}>
                                        <span class="ms-1 d-none d-sm-inline">Home</span>
                                    </Nav.Link>
                                </li>
                                <li>
                                  
                                </li>

                                <Nav.Link onClick={routetotrasanct} class="nav-link px-0 align-middle" style={{ color: "black" }}>
                                     <span class="ms-1 d-none d-sm-inline">Transactions


                                    </span></Nav.Link>
                                    <Nav.Link onClick={RouteToTransfer} class="nav-link px-0 align-middle" style={{ color: "black" }}>
                                    <span class="ms-1 d-none d-sm-inline">Transfers


                                    </span></Nav.Link> 

                                    <Nav.Link onClick={RouteToTransferHistory} class="nav-link px-0 align-middle" style={{ color: "black" }} >
                                    <span class="ms-1 d-none d-sm-inline">History
                                    </span></Nav.Link> 

                              
                                
                                <li>
                                    <Nav.Link href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle " style={{ color: "black" }}>
                                         <span class="ms-1 d-none d-sm-inline">Card</span> </Nav.Link>
                                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu" style={{ color: "black" }}>
                                        <li class="w-100">
                                            <Nav.Link href="#" onClick={RouteTocard} class="nav-link px-0"> <span class="d-none d-sm-inline" style={{ color: "black" }}>Add Card</span></Nav.Link>
                                            
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Nav.Link onClick={RouteToPayments} class="nav-link px-0 align-middle" style={{ color: "black" }}>
                                        <span class="ms-1 d-none d-sm-inline">Payments</span> </Nav.Link>
                                </li>


                            </ul>
                            <hr></hr>


                        </div>
                    </div>

                    {/*this is  content */}

                    <div class="col py-3  "  >
                        
                                  
                       
            
            {/* table 1 */}

            <div className='container mt-5'>
            <div class="wrapper rounded">
                <nav class="navbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start">
                    <a class="navbar-brand" href="#">Transactions <p class="text-body pl-2">Welcome to your transactions</p> </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                     </nav>
                               <div class="d-flex justify-content-between align-items-center mt-3">
                    <ul class="nav nav-tabs w-75">
                        <li class="nav-item">
                            <a class="nav-link active" href="#history">Last Transactions</a> </li>
                     
                    </ul>
                    <Button style={{background:"#009FAC",color:"white"}}>
        <CSVLink style={{ textDecoration: 'none', color: 'white' }} {...downloadAsCsv} >Export as CSV</CSVLink>
        </Button>

                    <button class="btn hover" onClick={getAllRecords} style={{background:"#009FAC",color:"white"}}>Show Transaction</button>
                </div>
                     
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead style={{background:"black" , color:'white'}}>
            <tr>
              <th scope="col">TransactionID</th>
              <th scope="col">Account Number</th>
              <th scope="col">Data of Transaction</th>
              <th scope="col">Deposit Amount</th>
              <th scope="col">Transaction type</th>
              <th scope="col">Withdrawal amount</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>

          {
             recentTransactions.map((recentTransactions)=>( 
            <tr  key={recentTransactions.transactionid} >

              <td>{recentTransactions.transactionid}</td>
              <td>{recentTransactions.accNo}</td>
              <td>{recentTransactions.dateOfTransaction}</td>
              <td>{recentTransactions.depositAmount}</td>
              <td>{recentTransactions.transactionType}</td>
              <td> {recentTransactions.withdrawalAmount} </td>
              <td> {recentTransactions.balance} </td>
            </tr>
             ))
             }
          </tbody>
        </table>
      </div>


                     
        <div class="pt-3"> <nav aria-label="Page navigation example"> <ul class="pagination"> <li class="page-item disabled"> <a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&lt;</span> </a> </li> <li class="page-item"> <a class="page-link" href="#" aria-label="Next"> <span aria-hidden="true">&gt;</span> </a> </li> </ul> </nav> </div> </div>
            </div> 
            </div>
             </div>
             </div>
             </div>
    
    )
}

export default Transaction