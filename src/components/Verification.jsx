import axios from 'axios';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Verification() {

    const [pin, setPin] = useState();
    const [confirmPin, setConfirmpin] = useState();

    const navigate = useNavigate();

    const email=(localStorage.getItem("email"))

    const userPin = (event)=>
    {
        
            event.preventDefault();
            
                var newPIn = {
                    "emailid": email,
                    "pin": pin
                }
    
    
                axios.post(`http://localhost:9898/verification`, newPIn)
                    .then(response =>{ 
                        console.log(response)})
                    .catch(err => console.log(err))
    
    
                
                navigate("/login")
                alert("Sign Up successful. Redirecting to login...")
    
            
            }
        
    
    


  return (
    <div>
       <div style={{background:"#2d143e",height:"100vh",width:"100vw"}} >
      <div className='container p-5 col-md-12 ' style={{background:"#2d143e"}}>
                  <Row className="mt-5" >
                  <Col lg={8} md={6} sm={12} className="container p-3 m-auto shadow-lg p-3 mb-5 bg-body rounded" style={{background:"#2d143e"}}>
        <h1>UPI PIN</h1>
        <h5>Please Enter your UPI pin</h5>
        <form className='m-4 text-left'>
  
  <div class="mb-3 ">
      <label for="disabledTextInput" class="form-label">Email id</label>
      <input type="text" id="disabledTextInput" class="form-control"   value={email}
       />

    </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Pin</label>
    <input type="password" class="form-control" id="exampleInputPassword1" 
     onChange={(e) => setPin(e.target.value)}
    />
  </div>
 
  <div className='d-grid gap-2 col-6 mx-auto'>
  <button className="btn btn-primary mb-2 mt-2" type="submit" style={{background:"#5e10b1"}} onClick={userPin}>Submit</button>
  </div>
  </form>
  </Col>
  </Row>
  </div>
  </div>

    </div>
  )
}

export default Verification