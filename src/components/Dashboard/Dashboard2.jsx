import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSignOut, faCreditCard, faWallet, faBan } from '@fortawesome/free-solid-svg-icons';


function Dashboard2() {
  return (
    <>
      <div className='page-header" mb-3 bg-primary'>
        <div className="container d-flex align-items-center">
          <div className='company-name'>
            Sangamam
          </div>
          <nav className="navbar">
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Payment History</a></li>
            <li><a href="/">Transaction History</a></li>
          </nav>
          <div className="display-name ms-auto text-white">
            <FontAwesomeIcon icon={faCircle} color="green" /> Welcome: <span>Bharathy</span>
          </div>
          <a href="/logout" className="btn btn-sm text-white ms-2">
            <FontAwesomeIcon icon={faSignOut} />Sign Out
          </a>
        </div>
      </div>

      {/* Start of Transact offcanvas */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">Transact</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        {/* Start of transact body */}
        <div className="offcanvas-body">
          <small className="card-text mb-3 text-white">
            Choose an option below to perform a transaction
          </small>
          <select name="transact-type" className="form-control my-3" id="transact-type">
            <option value="">-- Select Transaction Type --</option>
            <option value="payment">Payment</option>
            <option value="transfer">Transfer</option>
            <option value="deposit">Deposit</option>
          </select>
          {/* <!-- Card: Payment Card --> */}
          <div className="card payment-card">
            <div className="card-body">

              <div className="form-group mb-2">
                <label htmlFor=""> Account Holder / Beneficiary</label>
                <input type="text" name="beneficiary" className="form-control" placeholder="Enter Account holder / Beneficiary name" />
              </div>

              <div className="form-group mb-2">
                <label htmlFor=""> Beneficiary Account Number</label>
                <input type="text" name="account_number" className="form-control" placeholder="Enter Beneficiary Account No" />
              </div>

              <div className="form-group ">
                <label htmlFor="">Select Account</label>
                <select name="account_id" className="form-control" id="transact-type">
                  <option value="">-- Select Account --</option>
                </select>
              </div>

              <div className="form-group mb-2">
                <label htmlFor="">Reference</label>
                <input type="text" name="reference" className="form-control" placeholder="Enter Reference" />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="">Enter Payment Amount</label>
                <input type="text" name="payment_amount" className="form-control" placeholder="Enter Payment Amount" />
              </div>

              <div className="form-group mb-2">
                <button id="" className="btn-md transact-btn">Pay</button>
              </div>
            </div>
          </div>

          {/* Transfer Card */}
          <div className="card transfer-card">
            <div className="card-body">

              <div className="form-group ">
                <label htmlFor="">Select Account</label>
                <select h="transfer_from" className="form-control" id="">
                  <option value="">-- Select Account --</option>
                </select>
              </div>

              <div className="form-group ">
                <label htmlFor="">Select Account</label>
                <select name="transfer_to" className="form-control" id="">
                  <option value="">-- Select Account --</option>
                </select>
              </div>


              <div className="form-group mb-2">
                <label htmlFor="">Enter Transfer Amount</label>
                <input type="text" name="transfer_amount" className="form-control" placeholder="Enter Transfer Amount" />
              </div>

              <div className="form-group my-2">
                <button id="" className="btn-md transact-btn">Transfer</button>
              </div>
            </div>
          </div>

          {/* Deposit card */}
          <div className="card deposit-card">
            <div className="card-body">
              <form action="" className="deposit-form">
                <div className="form-group mb-2">
                  <label htmlFor="">Enter Deposit Amount</label>
                  <input type="text" name="deposit_amount" className="form-control" placeholder="Enter Deposit Amount" />
                </div>

                <div className="form-group ">
                  <label htmlFor="">Select Account</label>
                  <select name="account_id" className="form-control" id="transact-type">
                    <option value="">-- Select Account --</option>
                  </select>
                </div>


                <div className="form-group mb-2">
                  <button id="" className="btn-md transact-btn">Transfer</button>
                </div>
              </form>
            </div>
          </div>




        </div>
        {/* End of transact body */}
      </div>
      {/* End of Transact offcanvas */}



      {/* Start of RightSide Off canvas : Link new account */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          Account Form Container
        </div>
      </div>

      {/* End of RightSide Off canvas : Link new account */}

      <div className="container d-flex">
        <button id="add-account-btn" className="btn btn-lg shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <FontAwesomeIcon icon={faCreditCard} />
          Link New Account
        </button>

        <button id="transact-btn" className="btn btn-lg ms-auto shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <FontAwesomeIcon icon={faWallet} />
          Transact
        </button>
      </div>

      {/* TotalAccounts Balance Display */}
      <div className="container d-flex py-3">
        <h2 className="me-auto">Total Accounts Balance:</h2>
        <h2 className="ms-auto">0.00</h2>
      </div>

      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NoAccounts */}
      <div className="container">
        <div className="card no-accounts-card">
          <div className="card-body">
            <h1 className="card-title">
              <FontAwesomeIcon icon={faBan} color="red" /> No Linked Accounts
            </h1>
            <hr />
            <div className="card-text">
              You currently do not have any linked accounts. <br />
              Please click below to link / add an account.
            </div>
            <br />
            <button id="" className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <FontAwesomeIcon icon={faCreditCard} />Link Account
            </button>
          </div>
        </div>
      </div>

    </>


  )
}

export default Dashboard2
