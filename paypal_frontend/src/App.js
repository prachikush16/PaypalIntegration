import { useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Toaster } from "react-hot-toast";
import ProductList from "./components/ProductList";

function App() {
   const [showData, setShowData]=useState(false)
   const handleData=()=>{
    setShowData(!showData)
   }
  return (
    <div>
      <div className="p-5 m-5 border border-dark rounded">
      <h3 className="text-success">Welcome to our website !! select your products and done your payment with paypal in secure way.</h3>
      <h4 className="text-warning">HAPPY SHOPPING :)</h4>
      </div>
      <div className="bg-light m-5 p-5 ">
        <p className="text-lg text-danger">Introduction to our website-</p>
        This application demonstrates a basic integration of PayPal within a
        React environment. It showcases how to include the PayPal JavaScript
        SDK, create a PayPal button, and handle payment transactions seamlessly.
        The implementation ensures that users can initiate payments, and the
        application can respond to payment success or failure accordingly. This
        example serves as a foundational template for integrating PayPal into
        more complex React projects
      </div>
      <button className="btn btn-rounded btn-dark m-5 justify-content-center" onClick={handleData}>Show ProductList</button>
      {showData && 
      <PayPalScriptProvider
        options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
      >
        <Toaster position="top-center" />
        <ProductList />
      </PayPalScriptProvider>
}
    </div>
  );
}

export default App;
