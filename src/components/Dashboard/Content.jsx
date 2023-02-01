import React from 'react'

function Content() {
  return (
    <div>
        
        <div class="col py-3 " >
                        <h1>Welcome to BankCredible </h1>


                        < div class="container py-6">
                            <header class="pb-2 mb-1 border-bottom">
                                <a class="d-flex align-items-center text-dark text-decoration-none">
                                    <img src="https://www.iconsdb.com/icons/preview/purple/bank-4-xxl.png"></img>
                                    <svg xmlns="https://www.iconsdb.com/icons/preview/purple/bank-4-xxl.png" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                                    <span class="fs-4">Welcome to Bancredible</span>
                                </a>
                            </header>

                  
                            <div class="p-5 mb-2 bg-light rounded-3">
                                <div class="container-fluid py-4">

                                    <h1 class="display-5 fw-bold " style={{ textAlign: "justify" }} >Happy Banking !</h1>
                                    <p class="col-md-8 fs-4 justify" style={{ textAlign: "justify" }}>Pay anyone, everywhere. Make contactless & secure payments in-stores or online using using BankCredible or Directly from your Credit Card. Plus, send & receive money from anyone.</p>
                                    <br></br>

                                    {/*acount balance  */}
                                    <div class="container flex-wrap justify-content-right">
                                        <div class="card p-3">
                                            <div class="d-flex flex-row justify-content-between text-align-center">
                                                <img src="https://imgur.com/vvK2ARv.png" />
                                                <i class="fas fa-ellipsis-v"></i>
                                            </div>
                                            <p class="text-dark">Savings Account</p>
                                            <div class="card-bottom pt-3 px-3 mb-2">
                                                <div class="d-flex flex-row justify-content-between text-align-center">
                                                    <div class="d-flex flex-column"><span>Balance amount</span><p>&euro; <span class="text-dark">{Accountadded.balance}</span></p></div>
                                                    <button class="btn btn-primary btn-md"><i class="fas fa-arrow-right text-dark"></i>Get Balance</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="col-md-6 fs-4 justify text-dark">
                                        <p style={{ textAlign: "justify", color: "#5e10b1" }}>Link Account to continue <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Link account</button>
                                            {/* <button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">View Linked account</button> */}
                                        </p>
                                        <Addaccount />
                                    </div>


                                </div>
                            </div>


                            {/* cards */}
                            <div class="row align-items-md-stretch">
                                <div class="col-md-6">
                                    <div class="h-100 p-5 text-white bg-dark rounded-3">
                                        <h2>Pay anyone directly from your bank account.</h2>
                                        <p>SPay anyone, everywhere. Make contactless & secure payments in-stores or online using BankCredible or Directly from your Bank Account. Plus, send & receive money from anyone.</p>
                                        <button class="btn btn-outline-light" type="button">Fund Trasfer</button>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="h-100 p-5 bg-light border rounded-3">

                                        <h2>Know your spendings at one click</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat necessitatibus, soluta aspernatur ipsa ad eos perspiciatis veniam facere maiores nemo reprehenderit eum quas fugit quae in, sapiente neque? Soluta.</p>
                                        <button class="btn btn-outline-secondary" type="button">Transactions</button>
                                    </div>
                                </div>
                            </div>
                        </div>






                        {/*  this is cards */}
                        <h1><Rows title={"Services"}></Rows></h1>
                        <div class="row row-cols-2 row-cols-md-2 g-4 m-3" >
                            <div class="col">
                                <div class="shadow-lg p-3 mb-5 bg-body rounded">
                                    <a href='#'><img class="img-responsive" src="data:image/png;base64,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" class="card-img-top" /> </a>
                                    <div class="card-body">


                                        <a href='#'><button type="button" class="btn m-3 btn-md" style={{ background: "#5e10b1", color: "white" }}>Check balance</button></a>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="shadow-lg p-3 mb-5 bg-body rounded">
                                    <a href='#'><img src="data:image/png;base64,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" class="card-img-top" alt="..." /></a>
                                    <div class="card-body">


                                        <a href='#'><button type="button" class="btn m-3 btn-md" style={{ background: "#5e10b1", color: "white" }}>Fund Transfers</button></a>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                                    <a href='#'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNTCeW0JjFCkSiWnMS1lWQcitVbf_sscAqw&usqp=CAU" class="card-img-top" alt="..." /></a>
                                    <div class="card-body">

                                        <a href='#'><button type="button" class="btn m-3 btn-md" style={{ background: "#5e10b1", color: "white" }}>Card services</button></a>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                                    <a href='#'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJWFsGGzmsnIF6ZxmuC_Z9F9pd_qHtK4PfA&usqp=CAU" class="card-img-top" alt="..." /></a>
                                    <div class="card-body">
                                        <a href='#'><h5 class="card-title"><button type="button" class="btn m-3 btn-md" style={{ background: "#5e10b1", color: "white" }}>Transactions</button></h5></a>

                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid" >
                            <div class="container-fluid h-100 card shadow-lg p-3 mb-5 bg-body rounded" style={{ background: "purple" }}>
                                <Row style={{ backgroundColor: '#F1CD83​' }} >

                                    <Col className='p-2' >
                                        <Card style={{ width: '20rem' }} >
                                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJWFsGGzmsnIF6ZxmuC_Z9F9pd_qHtK4PfA&usqp=CAU" />
                                            <Card.Body>
                                                <Card.Title>Debit/Credit Cards</Card.Title>
                                                {/* <Card.Text>
              This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text> */}
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className='p-2' >
                                        <Card style={{ width: '20rem' }} >
                                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJWFsGGzmsnIF6ZxmuC_Z9F9pd_qHtK4PfA&usqp=CAU" />
                                            <Card.Body>
                                                <Card.Title>Debit/Credit Cards</Card.Title>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className='p-2' >
                                        <Card style={{ width: '20rem' }} >
                                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJWFsGGzmsnIF6ZxmuC_Z9F9pd_qHtK4PfA&usqp=CAU" />
                                            <Card.Body>
                                                <Card.Title>Debit/Credit Cards</Card.Title>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col className='p-2' >
                                        <Card style={{ width: '20rem' }} >
                                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJWFsGGzmsnIF6ZxmuC_Z9F9pd_qHtK4PfA&usqp=CAU" />
                                            <Card.Body>
                                                <Card.Title>Debit/Credit Cards</Card.Title>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </div>


    </div>
    </div>
  )
}

export default Content