import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';




const SignUp = () => {
    // Getting all the userinputs as a variable    

    const [userid, setUserId] = useState(``);
    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [mobNo, setMobNo] = useState(``);
    const [password, setPassword] = useState(``);
    const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm();

    var [Users, setUsers] = useState([]);
    // const [statusCode, setStatusCode] = useState(0);
    // const [error, setError] = useState(``)
    const navigate = useNavigate();

    const RouteToLoginPage = () => {
        navigate('/login')
    }

    const RouteToHomePage = () => {
        navigate('/')
    }


    var userid_exist;
    var email_exist;


    //Regex Variable to compare
    var regExEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
    var regexUsername = /[A-Za-z0-9]{3,30}/
    var regexName = /[A-Za-z]{3,30}/
    var regex10digits = /^[0-9]\d{09}$/ // to validate phone no 
    var regExPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/

    useEffect(() => {

        axios.get(`http://localhost:9898/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))

    })


    for (let i = 0; i < Users.length; i++) {
        if (userid === Users[i].id) {

            userid_exist = true
            // alert("username already exist")
        }

    }

    for (let i = 0; i < Users.length; i++) {
        if (email === Users[i].emailid) {

            email_exist = true
            // alert("username already exist")
        }

    }

    const Register = (formData,event) => {
        // async function SignUp(e){
        event.preventDefault();
        console.log(formData);
        console.log(userid);
        
        // if(userid_exist)
        if(false)
        {
            alert("user already exists");
        }
        else{
            var newUser = {
                "id": formData.userid,
                "name": formData.Name,
                "emailid": formData.useremail,
                "mobno":formData.MobileNumber,
                "password": formData.password
            }


            axios.post(`http://localhost:9898/users`, newUser)
                .then(response => console.log(response))
                .catch(err => console.log(err))


               localStorage.setItem("email",formData.useremail) 
            navigate("/Verification")
            alert("Sign Up successful. Redirecting to UPI PIN...")

        
        }
    }



    return (
        
    <>
        <div>
            
        </div>


        <div className='container-fluid p-5 col-md-12' style={{background:"#2d143e"}}>
            <Row className="mt-5">
                <Col lg={8} md={6} sm={12} className="container p-3 m-auto shadow-lg p-3 mb-5 bg-body rounded" style={{background:"white"}}>
                    <Form onSubmit={handleSubmit(Register)}>
                        <h3 className='text-center text-dark' >User Sign Up</h3>
                        <h6 className='mb-3 text-center ' >Welcome to world of Bank Made Easy</h6>
                
                                <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-4 " autoComplete="off" >
                                <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} 
                                
                                {...register('useremail', { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ })}

                                isInvalid={!!errors.useremail}
                                onKeyUp={() => {
                                    trigger("useremail");
                                }}

                                />
                                 <Form.Control.Feedback type='invalid' style={{textAlign:"left"}}>
                                {errors.useremail?.type === 'required' && 'Email is Required'}
                                {errors.useremail?.type === 'pattern' && 'Please enter a valid email'}

                            </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="userid" className="mb-4" autoComplete="off" >
                                <Form.Control type="text" placeholder="userid" onChange={(e) => setUserId(e.target.value)} 
                                {...register('userid', { required: true, pattern: /[A-Za-z0-9]{3,30}/})}

                                isInvalid={!!errors.userid}
                                onKeyUp={() => {
                                    trigger("userid");
                                }}

                                />
                                 <Form.Control.Feedback type='invalid' style={{textAlign:"left"}}>
                                {errors.userid?.type === 'required' && 'userid is Required'}
                                {errors.userid?.type === 'pattern' && 'Please enter a userid'}

                            </Form.Control.Feedback>
                             
                                
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Name" className="mb-4" autoComplete="off" >
                                <Form.Control type="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} 
                                  {...register('Name', { required: true, pattern: /[A-Za-z]{3,30}/ })}

                                  isInvalid={!!errors.Name}
                                  onKeyUp={() => {
                                      trigger("Name");
                                  }}
  
                                  />
                                   <Form.Control.Feedback type='invalid' style={{textAlign:"left"}}>
                                  {errors.Name?.type === 'required' && 'Name is Required'}
                                  {errors.Name?.type === 'pattern' && 'Please enter a valid Name'}
  
                              </Form.Control.Feedback>
                            
                                
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Mobile Number" className="mb-4" autoComplete="off" >
                                <Form.Control type="number" placeholder="Mobile Number" onChange={(e) => setMobNo(e.target.value)} 
                                 {...register('MobileNumber', { required: true, pattern: /^[0-9]\d{09}$/ })}

                                 isInvalid={!!errors.MobileNumber}
                                 onKeyUp={() => {
                                     trigger("MobileNumber");
                                 }}
 
                                 />
                                  <Form.Control.Feedback type='invalid' style={{textAlign:"left"}}>
                                 {errors.MobileNumber?.type === 'required' && 'MobileNumber is Required'}
                                 {errors.MobileNumber?.type === 'pattern' && 'Please enter a valid MobileNumber'}
 
                             </Form.Control.Feedback>
                          
                                
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4" autoComplete="off" >
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  
                                {...register('password', { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/ })}

                            isInvalid={!!errors.password}
                            onKeyUp={() => {
                                trigger("password");
                            }}

                            />
                            <Form.Control.Feedback type='invalid' style={{textAlign:"left"}}>
                            {errors.password?.type === 'required' && 'password is Required'}
                            {errors.password?.type === 'pattern' && ' enter a valid password'}

                            </Form.Control.Feedback>
                            </FloatingLabel>
                        <div className='text-center '>
                            {/* <div className="d-grid ps-5 gap-2"> */}
                            {/* <Button type='submit' variant="primary" className='mb-2 mt-2 btn-lg' style={{background:"purple"}}>Sign Up</Button> */}
                            <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-primary mb-2 mt-2" type="submit" style={{background:"#5e10b1"}}>Sign Up</button></div>
                        </div>
                        <div className='text-center'>
                            <h6>Already have an account?</h6>
                            {/* <Button variant="success" className='mb-2 mt-2 btn-block' onClick={RouteToLoginPage} >Login</Button> */}
                            <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-primary mb-2 mt-2" style={{background:"Green"}} onClick={RouteToLoginPage}>Login</button></div>
                        </div>
    
                    </Form>
                </Col>
            </Row>

        </div>
        </>

    )
}

export default SignUp