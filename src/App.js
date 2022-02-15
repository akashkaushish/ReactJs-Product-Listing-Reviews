import React from 'react'; //{ Component }
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Home from './pages/Home'; 
import ProductDetail from './pages/ProductDetail'; 
import NotFound from './pages/NotFound'; 
import Header from './components/Header';
import Footer from './components/Footer'; 


function App() {
  
  return (
      <Router>
        <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}></Route> 
          <Route exact path='/product/:productId' component={ProductDetail}></Route> 
          <Route component={NotFound}></Route> 

          
        </Switch>
        <Footer />
        </div> 
      </Router> 
  );
}

export default App;