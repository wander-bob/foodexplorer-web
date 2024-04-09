import { useState, useEffect, useContext, createContext } from "react";

const CartContext = createContext();
const localStorageCartItems = JSON.parse(localStorage.getItem("@foodexplorer:cart-items")||'[]');

export function CartProvider({children}){
  const [cartItems, setCartItems] = useState(localStorageCartItems);
  const [total, setTotal] = useState(0);
  
  function getTotalCartItems(id){
    const cartItemsFiltered = cartItems.filter((item)=> item.id == id);
    return cartItemsFiltered[0]?.quantity ?? 0;
  }
  function addCartItem({id, image, price, name, quantity}){
    const isItemInArray = cartItems.findIndex((item)=> item.id == id);
    if(isItemInArray === -1){
      return setCartItems(prevState => [...prevState, {id, image, price, name, quantity}])
    }else{
      const newItems = cartItems.map((item)=>{
        if(item.id === id){
          return {id, image, price, name, quantity: item.quantity + quantity }
        } 
        return item;
      })
      return setCartItems(newItems);
    }
  }
  function removeCartItem(id){
    const cartItemsFiltered = cartItems.filter((item)=> item.id !== id);
    setCartItems(cartItemsFiltered);
  }
  function clearCart(){
    localStorage.removeItem("@foodexplorer:cart-items")
    setCartItems([])
    setTotal(0)
  }
  useEffect(()=>{
    localStorage.setItem("@foodexplorer:cart-items", JSON.stringify(cartItems));
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.quantity, 0); 
    setTotal(newTotal);
  },[cartItems])
  return (
    <CartContext.Provider value={{total, cartItems, getTotalCartItems, addCartItem, removeCartItem, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  const context = useContext(CartContext);
  return context;
}