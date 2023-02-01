import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Linkedaccounts() {

    const [bankdetails, setbankdetails] = useState([])

    useEffect(() => {
        const loggeduser = JSON.parse(localStorage.getItem('loggedUser'));
        // console.log(loggeduser);
        axios.get(`http://localhost:9898/BankDetails/emailid?emailid=${loggeduser.emailid}`)
            .then(response => setbankdetails(response.data))
            .catch(error => console.log(error))
    })

    

  return (
    <div>

<p>
  <a class="btn " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{background:"#009FAC",color:"white"}}>
    View Linked Accounts
  </a>
  </p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
  <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead style={{background:"black" , color:'white'}}>
            <tr>
        
              <th scope="col">Account Number</th>
              <th scope="col">Account name</th>
              <th scope="col">Balance</th>
              <th scope="col">bankname</th>
              <th scope="col">emailid</th>
              <th scope="col">userid</th>
            </tr>
          </thead>
          <tbody>

          {
             bankdetails.map((bankdetails)=>( 
            <tr  key={bankdetails.accno} >

              <td>{bankdetails.accno}</td>
              <td>{bankdetails.accname}</td>
              <td>{bankdetails.balance}</td>
              <td>{bankdetails.bankname}</td>
              <td>{bankdetails.emailid}</td>
              <td> {bankdetails.userid} </td>
            </tr>
             ))
             }
          </tbody>
        </table>
      </div>
  </div>
</div>
       
 

    </div>
  )
}

export default Linkedaccounts