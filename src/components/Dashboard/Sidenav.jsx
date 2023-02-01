import React from 'react';
import { Navigate } from 'react-router-dom';





function SideNav() {

  let routetotrasanct = () =>
  {
      Navigate("/transaction")
  }
  
  return (
    <>
     
     <div class="container-fluid">
                <div class="row flex-nowrap  ">
                    <div style={{ background: "#2d143e" }} class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " >
                        <div class="d-flex  flex-column align-items-center align-items-sm-start px-3 pt-5 text-white min-vh-100">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"  >
                                {/* <span class="fs-5 d-none d-sm-inline">Menu</span> */}
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0" style={{ color: "white" }}>
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle" style={{ color: "white" }}>
                                        <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                                    {/* <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    <li class="w-100">
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                                    </li>
                                </ul> */}
                                </li>
                                <li>
                                    <a onClick={routetotrasanct} class="nav-link px-0 align-middle" style={{ color: "white" }}>
                                        <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Transactions
                                      
                                        
                                        </span></a>
                                </li>
                                <li>
                                    <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle " style={{ color: "white" }}>
                                        <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Transfers</span></a>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="#" class="nav-link px-0" style={{ color: "white" }}> <span class="d-none d-sm-inline" >to Same bank</span> 1</a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline" style={{ color: "white" }}>to different bank</span> 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle " style={{ color: "white" }}>
                                        <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Card services</span> </a>
                                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu" style={{ color: "white" }}>
                                        <li class="w-100">
                                            <a href="/addcard" class="nav-link px-0"> <span class="d-none d-sm-inline" style={{ color: "white" }}>1.Add Card</span></a>
                                            {/* </li>
                                    <li> */}
                                            <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline" style={{ color: "white" }}>  2.Card Statement</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-0 align-middle" style={{ color: "white" }}>
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Payments</span> </a>
                                </li>


                            </ul>
                            <hr></hr>


                        </div>
                    </div>
                    </div>
                    </div>
    
     
    
    
          
  


    </>
  );
}

export default SideNav;