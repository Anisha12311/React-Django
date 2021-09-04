import React,{useContext,useReducer} from 'react'
import Items from './Items'
import { products } from './Products'
import { CartContext } from './Cart'

const ContextCart = () => {

  

    const {item, clearCart,totalItem,totalAmount } = useContext(CartContext)

    if (item.length ===0){
        return(
            <>
            <header>
              <div className = "continue-shopping">
                
              <h1>
                  Shopping Cart</h1> 

              </div>
              <div className = "cart-icon">
                  <img src = "./images/cart.png" alt = ""/>
                  <p>{totalItem}</p>

              </div>
          </header>
          <section className = "main-cart-section">
             
                  <p className = "total-items">
                      You have <span className = "totoal-items-count"> {totalItem} </span>{" "} items in this cart
                    </p>

                  
                   <div className = "contain">
                        <div className = "cart-items-container">
                           
                         {
                             item.map((curItem) => {
                                 return    <Items key = {curItem.id} {...curItem}/>  
                             })
                         }
                                

                      </div>
                  
                  
                      <div className = "card-total">
                          <h3>
                              Cart Totol : <span>{totalAmount}₹</span>
                          </h3>
                          <button> Checkout</button>
                          <button className = "clear-cart" onClick = {clearCart}> Clear Cart</button>
                      </div>

</div>
          </section>
      </>
        )
    }

    return (
        <>
              <header>
              <div className = "continue-shopping">
                
                <h1>
                    Shopping Cart</h1> 
  
                </div>
                <div className = "cart-icon">
                    <img src = "./images/cart.png" alt = ""/>
                    <p>{totalItem}</p>

                </div>
               
            </header>
            <section className = "main-cart-section">
               
                    <p className = "total-items">
                        You have <span className = "totoal-items-count"> {totalItem} </span>{" "} items in this cart
                      </p>

                    
                     
                          <div className = "cart-items-container">
                             
                           {
                               item.map((curItem) => {
                                   return    <Items key = {curItem.id} {...curItem}/>  
                               })
                           }
                                  

                        </div>
                    
                      
                        <div className = "card-total">
                            <h3>
                                Cart Totol : <span>{totalAmount}₹</span>
                            </h3>
                            <button> Checkout</button>
                            <button className = "clear-cart" onClick = {clearCart}> Clear Cart</button>
                        </div>
 

            </section>
        </>
    )
}

export default ContextCart
