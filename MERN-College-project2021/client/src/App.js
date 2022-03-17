import react, { createContext , useReducer } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import About from './components/About';
import { Route , Switch } from 'react-router-dom';
import Contact from './components/Contact';
import Errorpage from './components/Errorpage';
import SUC from './components/SUC';
import SUC2 from './components/SUC2';
import SUC3 from './components/SUC3';
import SUC4 from './components/SUC4';
import SUC5 from './components/SUC5';
import SUC6 from './components/SUC6';
import SUC7 from './components/SUC7';
import SUC8 from './components/SUC8';
import './App.css';
import Events from './components/Events';

import Admin from './components/Admin';
import Payment from './components/Payment';
import Bpayment from './components/Bpayment';
import Logout from './components/Logout';
import { initialState, reducer } from './reducer/UseReducer';
import Paystripe from './components/Paystripe';
import StripeContainer from './components/StripeContainer';
import Mystery from './components/Mystery';
import Rise from './components/Rise';
import Run from './components/Run';
import Wartex from './components/Wartex';
import Ano from './components/Ano';
import Alphabay from './components/Alphabay';
import Cipherspace from './components/Cipherspace';
import Honeypot from './components/Honeypot';
import Payment2 from './components/Payment2'
import Payment3 from './components/Payment3'
import Payment4 from './components/Payment4'
import Payment5 from './components/Payment5'
import Payment6 from './components/Payment6'
import Payment7 from './components/Payment7'
import Payment8 from './components/Payment8'



export const UserContext = createContext();

const Routing = () =>{
  return( <>
  <Switch>
  <Route  exact path="/">
  <Home/>
  </Route>

  <Route path="/Login">
  <Login/>
  </Route>

  <Route path="/signup">
  <Signup/>
  </Route>

  <Route path="/about">
  <About/>
  </Route>

  <Route path="/contact">
  <Contact/>
  </Route>
  <Route path="/Events">
    <Events/>
    </Route>
   
    <Route path="/Bpayment">
    <Bpayment name/>
    </Route>
    <Route path="/Payment">
    <Payment/>
    </Route>
    <Route path="/Admin">
    <Admin/>
    </Route>
    <Route path="/logout">
    <Logout/>
    </Route>
    <Route path="/StripeContainer">
    <StripeContainer/>
    </Route>
    <Route path="/Paystripe">
    <Paystripe/>
    </Route>
    <Route path="/Mystery">
    <Mystery/>
    </Route>
    <Route path="/rise">
    <Rise/>
    </Route>
    <Route path="/run">
    <Run/>
    </Route>
    <Route path="/Ano">
    <Ano/>
    </Route>
    <Route path="/Cipherspace">
    <Cipherspace/>
    </Route>
    <Route path="/Honeypot">
    <Honeypot/>
    </Route>
    <Route path="/Wartex">
    <Wartex/>
    </Route>
    <Route path="/Alphabay">
    <Alphabay/>
    </Route>
    <Route path="/suc">
    <SUC/>
    </Route>
    <Route path="/suc2">
    <SUC2/>
    </Route>
    <Route path="/suc3">
    <SUC3/>
    </Route>
    <Route path="/suc4">
    <SUC4/>
    </Route>
    <Route path="/suc5">
    <SUC5/>
    </Route>
    <Route path="/suc6">
    <SUC6/>
    </Route>
    <Route path="/suc7">
    <SUC7/>
    </Route>
    <Route path="/suc8">
    <SUC8/>
    </Route>
    <Route path="/payment2">
    <Payment2/>
    </Route>
    <Route path="/payment3">
    <Payment3/>
    </Route>
    <Route path="/payment4">
    <Payment4/>
    </Route>
    <Route path="/payment5">
    <Payment5/>
    </Route>
    <Route path="/payment6">
    <Payment6/>
    </Route>
    <Route path="/payment7">
    <Payment7/>
    </Route>
    <Route path="/payment8">
    <Payment8/>
    </Route>
  <Route >
    <Errorpage/>
    </Route>
    
    </Switch>
    </>
  )

};


const App =() =>{

  

  const [state , dispatch] = useReducer(reducer,initialState );

  return(<>

  

  <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
   <Routing/>
      </UserContext.Provider>

  </>
  )
};

export default App;