import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import LeftSideBar from './components/LeftSideBar'
// import RightContiner from './components/RightContiner'
// import Categires from './components/helper/categires'
// import ItemComp from './components/itemComp'
import Login from './components/helper/Login'
import Signup from './components/helper/Signup'
import adminComp from './components/helper/adminComp'
import SeeProd from './components/SeeProd'
import CartCom from './components/cartCom'
import Orders from './components/Orders'
import TrackOrder from './components/TrackOrder'
import PayGateway from './components/PayGateway'
import PlacedOrder from './components/PlacedOrder'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <div>
     {/* <Navbar /> */}
    </div>

    <switch>

      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signUp" component={Signup}/>
      <Route exact path="/seeprod/:id" component={SeeProd}/>
      <Route exact path="/admin" component={adminComp}/>
      <Route exact path="/cartCom" component={CartCom}/>
      <Route exact path="/orders" component={Orders}/>
      <Route exact path="/trackOrder" component={TrackOrder}/>
      <Route exact path="/paygateway" component={PayGateway}/>
      <Route exact path="/PlacedOrder" component={PlacedOrder}/>
    </switch>


    </Router>
  )
}

export default App

