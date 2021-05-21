import React from "react";
import order from './map.png'
import delivery from './boy.png'

const Order = () => {
  return <div>
    <header className="block">
    <h4>Fab Sports</h4>
    </header>
    <div>

      <div className="block2">
      Order placed sucessfully

      4:34 PM | Order ID:10121999</div>
      </div>
      <div>
        <center>
      <img className="map" src={order} alt="user"></img>
      </center>
      
       <div className="block1">
             <center> Estimated Time in 20 mins</center>            
      </div>
      <div></div>
        <div className="image">
        <img className="deliveryboy"  src={delivery} alt="user"></img>
        <span className="man">
           <b> Maddy </b>is on the way
         to delivery your order
         </span>
        </div>
      
         </div>

      <div
        >
      <center><button onClick={''} className="call">
        call
      </button>
      </center>
      </div>
  </div>; 
};

export default Order;
