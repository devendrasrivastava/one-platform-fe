import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs';
import swal from 'sweetalert'
import Swal from 'sweetalert2';


const Login = () => {
   
    

// code 2
    const navigate = useNavigate();

    const RouteToSignUp = () => {
        navigate("/signup")
    }
    const RouteToHome = () => {
        navigate("/")
    }

    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``);
    const [userDetails, setUserDetails] = useState([]);

    const [emailError, setEmailError] = useState(``)
    const [passwordError, setPasswordError] = useState(``)

    

    var db_username = ``;
    var db_email = ``;
    var username_exists = false;
    var db_encryptedpwd = ``;
    var loginValidationStatus = false

    useEffect(() => {
        axios.get(`http://localhost:9898/users`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err))
    })

    for (let i = 0; i < userDetails.length; i++) {
        if (username.toLowerCase() === (userDetails[i].id).toLowerCase()) {

            db_username = userDetails[i].id;
            db_email = userDetails[i].emailid;
            db_encryptedpwd = userDetails[i].password;
            username_exists = true
        }
    }

    
    // const Login = (e) => {
    async function Logincheck(e) {
        e.preventDefault();

        console.log(db_username);
        console.log(db_email);
        loginValidationStatus = await bcrypt.compare(password, db_encryptedpwd)

        if (username ==='' || password === '') {
    
              Swal.fire({
                template: '#my-template',
                icon: "warning",
                text: "Please fill all the details"
              })
        }

        else if (!(username_exists)) {
            setEmailError(`username doesn't exist. Please Sign Up`)
        }
        else if (!loginValidationStatus) {
            setPasswordError(`Invalid Credentials`)
        }

        else if (loginValidationStatus) {
            // alert("login success. Navigating to dashboard...")
            let loginUser = {
                "username": username,
                "password": password
            }
            
            axios.post(`http://localhost:9898/login`, loginUser)
                .then((response) => {

                    console.log(response.data.jwtToken);
                    console.log(loginUser);
                    localStorage.setItem('jwtToken', response.data.jwtToken)
                    localStorage.setItem('username', username)
                    navigate(`/dashboard`)
                })
                .catch(error => { console.log(error) })

            axios.get(`http://localhost:9898/users/${db_username}`).then((response) => {

                console.log(response.data);
                localStorage.setItem('loggedUser', JSON.stringify(response.data))

            })
                .catch(error => console.log(error))
            // navigate("/dashboard")

           
            // localStorage.setItem('addedaccount','')
            localStorage.setItem('addedaccount',JSON.stringify({"accname": '',"accno": 0,"balance": 0,"bankname": '',"emailid": '',"userid": ''}))
              

        }

        else {
            // alert(`Password doesnt match our records`)

        }


    }

    



    
    return (
        
        <div style={{background:"#2d143e",height:"100vh",width:"100vw"}} >
      <div className='container p-5 col-md-12  ' style={{background:"#2d143e"}}>
                  <Row className="mt-5" >
                  <Col lg={8} md={6} sm={12} className="container p-3 m-auto shadow-lg p-3 mb-5 bg-body rounded" style={{background:"#2d143e"}}>
                    <Form>
                    <h1 className='text-center '>Login</h1>
                        <h4 className='mb-3 text-center ' >Welcome back! to world of Money made Easy</h4>
                        <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3" >
                            <Form.Control type="text" placeholder="User Name" onChange={(e)=> setUsername(e.target.value) }
                            
                            isInvalid={!!emailError}/>
                            <Form.Control.Feedback type='invalid' style={{textAlign:"left"}}>
                            {emailError}

                            </Form.Control.Feedback>
                            
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3' >
                            <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value) } 
                            
                            isInvalid={!!passwordError}
                           
                            />
                             <Form.Control.Feedback type='invalid' style={{textAlign:"left"}}>
                            {passwordError}

                            </Form.Control.Feedback>
                          
                        </FloatingLabel>
                        <div className='d-grid gap-2 col-6 mx-auto'>
                           
                            <Button className="btn btn-primary mb-2 mt-2" type="submit" style={{background:"#5e10b1"}} onClick={Logincheck} >Login</Button>
                        </div>
                        <div className='d-grid gap-2 col-6 mx-auto' >
                            <h6>New User? Sign Up </h6>
                            <Button variant="success" className='btn btn-primary mb-2 mt-2' style={{background:"Green"}} onClick={RouteToSignUp}  >Sign Up</Button>
                        </div>
                    </Form>
                </Col>
            </Row>

        </div>
        </div>
     
    )
}

export default Login