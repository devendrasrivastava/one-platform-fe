import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';



function Addaccount() {

    const [accountNum, setAccountNum] = useState();
    const [accountname, setAccountName] = useState(``);
    const [bankname, setBankName] = useState(``);
    const [emailid, setEmailId] = useState(``);
    const [balance, setBalance] = useState();
    const [userID, setUserID] = useState(``);
    
    const form = useRef();

    var [accounts, setAccounts] = useState([]);

    const navigate = useNavigate();
    const RouteToDashboard = () => {
        navigate('/dashboard')
    }

    const LinkAccount = (event) => {
        event.preventDefault();


        if (accountNum ==='' || accountname === '' || bankname ==='' || emailid ==='' || balance=== '' || userID==='' )
        {
            

              Swal.fire({
                template: '#my-template',
                icon: "warning",
                text: "Please fill all the details"
              })
        }

        else 
        {


        var newAccount = {
            "accno": accountNum,
            "accname": accountname,
            "bankname": bankname,
            "emailid": emailid,
            "balance": balance,
            "userid": userID
        }
  

        axios.post(`http://localhost:9898/BankDetails`, newAccount)
            .then(response => localStorage.setItem('addedaccount', JSON.stringify(response.data)))
            .then(response=> console.log(response.data))
            .catch(err => console.log(err))
        console.log(newAccount);
        console.log(event.target.data)



        emailjs.sendForm('gmail', 'template_5xpzob6', form.current, 'VKjR7D8HTQQ631mzx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  



        alert("Account Linked Successfully")
        event.target.reset();
        navigate("/dashboard")


    }
    }

    return (
        <div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Account Link</h5>
                           
                        </div>
                        {/* account Link form */}
                        <div class="modal-body">
                          
                                <form ref={form}  class="col-md-12 g-2 needs-validation"  onSubmit={LinkAccount}>
                                    <div class="mb-3 p-2" style={{ textAlign: "left" }}>
                                        <label for="validationCustom01" class="form-label">Account Number</label>
                                        <input name="accnumber" type="number" class="form-control" id="validationCustom01" required
                                            onChange={(e) => {
                                                setAccountNum(e.target.value)
                                            }}
                                        />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div class="mb-3 p-2" style={{ textAlign: "left" }}>
                                        <label for="validationCustom02" class="form-label" >Account Name</label>
                                        <input name='accname' type="text" class="form-control" id="validationCustom02" required
                                            onChange={(e) => {
                                                setAccountName(e.target.value)
                                            }}
                                        />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>

                                    <div class="mb-3 p-2" style={{ textAlign: "left" }}>
                                        <label for="validationCustom04" class="form-label">Bank Name</label>
                                        <select name='bankname' class="form-select" id="validationCustom04" required
                                            onChange={(e) => {
                                                setBankName(e.target.value)
                                            }}
                                        >
                                            <option selected disabled value="">Choose...</option>
                                            <option value="Axis">Axis Bank</option>
                                            <option value="SBI">State Bank Of India</option>
                                            <option value="ICICI">ICICI</option>
                                            <option value="KVB">KVB</option>
                                            <option value="HDFC">HDFC</option>
                                            <option value="Kotak">Kotak</option>
                                            <option value="RBL">RBL</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid Bank.
                                        </div>
                                    </div>
                                    <div class="mb-3 p-2" style={{ textAlign: "left" }}>
                                        <label for="validationCustomUsername" class="form-label">Email Id</label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                                            <input name='email' type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required
                                                onChange={(e) => {
                                                    setEmailId(e.target.value)
                                                }}
                                            />
                                            <div class="invalid-feedback">
                                                Please provide a valid emailId
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3 p-2" style={{ textAlign: "left" }}>
                                        <label for="validationCustom03" class="form-label">User id</label>
                                        <input name='userid' type="text" class="form-control" id="validationCustom03" required
                                            onChange={(e) => {
                                                setUserID(e.target.value)
                                            }}
                                        />
                                        <div class="invalid-feedback">
                                            Please provide a valid userid.
                                        </div>
                                    </div>

                                    <div class="mb-3 p-2" style={{ textAlign: "left" }}>
                                        <label for="validationCustom03" class="form-label">Balance</label>
                                        <input name='balance' type="Number" class="form-control" id="validationCustom01" required
                                            onChange={(e) => {
                                                setBalance(e.target.value)
                                            }}

                                        />
                                        <div class="invalid-feedback">
                                            Please provide account balance
                                        </div>
                                    </div>

                                   
                                    <div class="col-12 p-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                            <label class="form-check-label" for="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                            <div class="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        
                                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Link Account</button>
                                    </div>
                                </form>
                               
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Addaccount