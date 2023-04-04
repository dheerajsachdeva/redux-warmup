import Navbar from "./components/Navbar.js";
import CartContainer from "./components/CartContainer.js";
import { useDispatch, useSelector} from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice.js";
import { useEffect } from "react";
import React from "react";
import Modal from "./components/Modal.js";

function App() {

  const {cartItems, isLoading} = useSelector((store) => store.cart)
  const {isOpen} = useSelector((store) => store.modal)
  
  const dispatch = useDispatch();

  useEffect (() =>{
      dispatch(calculateTotals())
  }, [cartItems])

  useEffect (() =>{
    dispatch(getCartItems())
}, [])

if (isLoading){
  return <div className="loading">
    <h1>Loading...</h1>
  </div>
}

  return(<main>
    { isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </main>
  )
}

export default App;
