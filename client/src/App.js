import React from 'react'
import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import LeftSideBar from './components/LeftSideBar'
// import RightContiner from './components/RightContiner'
// import Categires from './components/helper/categires'
// import ItemComp from './components/itemComp'
import Login from './components/helper/Login'
import Signup from './components/helper/Signup'
import AdminComp from './components/helper/AdminComp'
import Notifications from './components/helper/Notifications'
import NotFound from './components/helper/NotFound'
import Loader from './components/helper/Loader'
import SeeProd from './components/SeeProd'
import CartCom from './components/CartCom'
import Orders from './components/Orders'
import SingleOrder from './components/SingleOrder'
import TrackOrder from './components/TrackOrder'
import PayGateway from './components/PayGateway'
import PlacedOrder from './components/PlacedOrder'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>

      <Route path="/" component={Navbar} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Login"  component={Login}/>
      <Route exact path="/SignUp" component={Signup}/>
      <Route exact path="/Seeprod/:id" component={SeeProd}/>
      <Route exact path="/Admin" component={AdminComp}/>
      <Route exact path="/CartCom" component={CartCom}/>
      <Route exact path="/Orders" component={Orders}/>
      <Route exact path="/SingleOrder" component={SingleOrder}/>
      <Route exact path="/TrackOrder/:id" component={TrackOrder}/>
      <Route exact path="/Paygateway/:id" component={PayGateway}/>
      <Route exact path="/PlacedOrder/:id" component={PlacedOrder}/>
      <Route exact path="/Notifications" component={Notifications}/>
      <Route exact path="/Loader" component={Loader}/>
      <Route path="*" component={NotFound}/>
    </Switch>


    </Router>
  )
}

export default App

