import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

function Payment() {

 
    const [beneficiary, setBeneficiary] = useState(``);
    const [beneficiaryaccno, setBeneficiaryAccNo] = useState(0);
    const [accountnum, setAccountnum] = useState(0);
    const [emailid, setEmailId] = useState(``);
    const [reference, setReference] = useState(``);
    const [amount, setAmount] = useState(0);

    // verification
    const[inputpin,setInputpin]=useState(0);
    const[verifyPin,setVerifyPin]=useState(0);
    

 // logged user
 let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

    
    const [accounts, setAccounts] = useState([]);

    const navigate = useNavigate();

    var db_emailid = ``;
    var db_accountid = 0;
    var emailid_exists = false;
    var accountid_exists = false;
    var pin_exists = false;

    var accountbalance;
    var updatedbalance;
    var updatedAccount;

    useEffect(() => {

        axios.get(`http://localhost:9898/BankDetails`)
            .then(res =>{ setAccounts(res.data)
            }
            )
           
            .catch(err => console.log(err))
            
            axios.get(`http://localhost:9898/verification/${loggedUser.emailid}`)
            .then(res =>{ setVerifyPin(res.data.pin)
                
            }
            )
    })

    
    const Pay = (event) => {
        event.preventDefault()
        console.log(accounts)
        console.log(parseInt(amount))
        console.log(parseInt(accounts.balance))


        for (let i = 0; i < accounts.length; i++) 
        
        {  
            if (parseInt(accounts[i].accno) === parseInt(accountnum) 
            && emailid.toLowerCase() === (accounts[i].emailid.toLowerCase())) 
            {    
                console.log(5)
                db_accountid = accounts[i].accno;
                accountid_exists = true
               
    
                db_emailid = accounts[i].emailid;
                emailid_exists = true

                accountbalance=accounts[i].balance;
                updatedbalance = accountbalance - amount;


                 updatedAccount = {
                    "accno": accounts[i].accno,
                    "accname": accounts[i].accname,
                    "bankname": accounts[i].bankname,
                    "emailid": accounts[i].emailid,
                    "balance": updatedbalance,
                    "userid": accounts[i].userid
                }
            }

    
        }
        console.log(accountbalance)


        if ( beneficiary == "" || beneficiaryaccno == "" || accountnum == "" || emailid == "" || reference == "" || amount == "" ||inputpin=="") {
            alert(`Please fill all the details`)
        }
        else if (!accountid_exists && !emailid_exists) {
            alert(`Invalid details entered. Please check your acc number & mailid`)
        }
        else if ((parseInt(amount) >= parseInt(accountbalance))){
            console.log(parseInt(amount))

            alert("You dont have sufficient balance to make this")
        }

        else if ((parseInt(verifyPin) !== parseInt(inputpin)))
        { 
            alert('Invalid UPI Pin')
        }
            
        
        else {
            var newPayment = {
                // "paymentid": 0,
                "beneficiary": beneficiary,
                "beneficiaryaccno": parseInt(beneficiaryaccno),
                "accno": parseInt(accountnum),
                "emailid": emailid,
                "paydesc": reference,
                "amount": parseInt(amount)
            }

            axios.post(`http://localhost:9898/payments`, newPayment)
                .then(response => localStorage.setItem('Paymentdone', JSON.stringify(response.data)))
                .catch(err => console.log(err))
            console.log(newPayment);


    
            axios.post(`http://localhost:9898/BankDetails`, updatedAccount)
                .then(response => localStorage.setItem('addedaccount', JSON.stringify(response.data)))
                .then(response=> console.log(response.data))
                .catch(err => console.log(err))
            console.log(updatedAccount);
            console.log(event.target.data)


            event.target.reset();
            alert("Payment made successfully")
   
        }
    }


    function logout() {
        

        localStorage.clear();
        navigate('/')      
    }

    let routetotrasanct = () => {
        navigate("/transaction")
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

      let RouteToTransfer = () => {
        navigate("/payments")
    }

    let RouteToTransferHistory = () => {
        navigate("/TransferHistory")
    }

    let RouteToPayments = () => {
        navigate("/CardsDisplay")
    }



    return (
        <div>
             <div  style={{background:"#F4F0E8"}}>


  
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

                            <div className=' g-6 mt-3'>
                                <h1>Bank to Bank Transfer</h1>
                            <form className="card col-md-8 m-auto p-5 shadow-lg p-3 mb-5 bg-white rounded add-account-form text-start" onSubmit={Pay}>

                            

                                <div className="form-group mb-3">
                                    <label htmlFor=""> Account Holder / Beneficiary Name</label>
                                    <input type="text" name="account_name" className="form-control" placeholder="Enter Beneficiary Name " onChange={(e) => {
                                        setBeneficiary(e.target.value)
                                    }} />
                                </div>


                                <div className="form-group mb-3">
                                    <label htmlFor="">Beneficiary Account</label>
                                    <input type="number" name="account_number" className="form-control" placeholder="Enter Beneficiary Account No " onChange={(e) => {
                                        setBeneficiaryAccNo(e.target.value)
                                    }} />
                                </div>

                                <div className="form-group mb-3 ">
                                    <label htmlFor="">Account Number</label>
                                    <input type="number" name="account_id" className="form-control" placeholder="Enter Account Number" onChange={(e) => {
                                        setAccountnum(e.target.value)
                                    }} />

                                </div>

                                <div className="form-group mb-3 ">
                                    <label htmlFor="">Email id</label>
                                    <input type="emailid" name="emailid" className="form-control" placeholder="Enter Email Linked With Account" onChange={(e) => {
                                        setEmailId(e.target.value)
                                    }} />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="">Payment Description</label>
                                    <input type="text" name="reference" className="form-control" placeholder="Enter Reference" onChange={(e) => {
                                        setReference(e.target.value)
                                    }} />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="">Enter Payment Amount</label>
                                    <input type="number" name="payment_amount" className="form-control" placeholder="Enter Payment Amount" onChange={(e) => {
                                        setAmount(e.target.value)
                                    }} />
                                    
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Enter UPI PIN</label>
                                    <input type="password" name="payment_amount" className="form-control" placeholder="Enter PIN" onChange={(e) => {
                                        setInputpin(e.target.value)
                                    }} />
                                    </div>

                                <div class="d-grid gap-2 col-6 mx-auto">
                                     <button  class="btn btn-primary" style={{background:"#5A287D",color:"white"}} type="submit">Transfer</button></div>
                            </form>
                            </div>
                        </div>

                        </div>
                        </div>
                        </div>
                        </div>
       
    )
}

export default Payment
