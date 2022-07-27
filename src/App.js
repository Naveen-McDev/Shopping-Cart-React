import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { data } from "./Data/product";

function App() {
  // setting new array for cart items
  const [cartItems, setCartItems] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);

  // add to cart handle function
  const addToCart = (product) => {

    //checking for availability in the cart
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      //restricting from adding again
      alert("product already exist");
    } else {
      //adding item to the cart list
      setCartItems([...cartItems, {...product, added: true}]);
      setFinalPrice(finalPrice + product.offerPrice);
    }
  };

  // remove from cart handle function
  const removeFromCart = (product) => {

    //checking for availability in the item in the cart
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      // removing the selected item from the cart
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      setFinalPrice(finalPrice - product.offerPrice)
    } else if(cartItems.length === 0) {
      //if the cart is empty throw alert
      alert("Add some products to cart")
      setFinalPrice(0);
    } else {
      //if the selected item is not available in the cart
      alert("there is no such product in the cart");
    }
  };

  return (
    <>
      <Navbar cartItems={cartItems} total={finalPrice} />
      <Header />
      <Section
        data={data}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
      <Footer />
    </>
  );
}

export default App;
