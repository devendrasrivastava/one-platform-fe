import logo from './logo.svg';
import './App.css';
import Rows from './Rows';
import Homepage from './components/Homepage';

import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Addcard from './components/Dashboard/Addcard';
import Dashboard2 from './components/Dashboard/Dashboard2';

import Transaction from './components/Dashboard/Transaction';
import Linkedaccounts from './components/Dashboard/Linkedaccounts';
import Payment from './components/Dashboard/Payment';
import TransferHistory from './components/Dashboard/TransferHistory';
import CreditCard from './components/Dashboard/CreditCard';
import Verification from './components/Verification';
import CardsDisplay from './components/Dashboard/CardsDisplay';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Aboutus from './components/Aboutus/Aboutus';
import Services from './components/Services/Services';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Contactus from './components/Contactus/Contactus';
import Business from './components/News/Business';





function App() {
  return (
    <div className="App">
     

<Header/>
      
   
      <Routes >
        <Route path='/' element={ <Homepage /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path='*' element={<ErrorPage />} /> */}
          <Route path='/addcard' element={<Addcard />} />
          <Route path = '/dashboard2' element={<Dashboard2 />}  />
          <Route path ='/profile' element={<Profile />} />
          <Route path ='/linked' element={<Linkedaccounts />} />
            <Route path ='/transaction' element={<Transaction />} />

            <Route path ='/payments' element={<Payment />} />
            <Route path ='/TransferHistory' element={<TransferHistory />} />
            <Route path ='/Creditcard' element={<CreditCard />} />
            <Route path ='/Verification' element={<Verification />} />
            <Route path ='/CardsDisplay' element={<CardsDisplay />} />

            <Route path ='/aboutus' element={<Aboutus />} />
            <Route path ='/services' element={<Services />} />
            <Route path ='/contactus' element={<Contactus />} />
            <Route path ='/business' element={<Business />} />
            

        
      
      </Routes>
    
  <Footer/>
      
     
      
    </div>
  );
}

export default App;
