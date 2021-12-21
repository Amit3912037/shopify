import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import './Cart.css';
import { Link } from "react-router-dom";

const Cart = () => {
    const cartCtx = useContext(CartContext);


    return (
        <div className="cart">
            <div className="cart__left">
                <img className="cart__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                {cartCtx.totalItems > 0 ? <div className="cart__title">
                    <h2 className="cart__heading">Your Shopping Cart</h2>
                    <span className="cart__link" onClick={cartCtx.clearCart}>Remove all items</span>
                </div> :
                    <div>
                        <h2 className="cart__heading">Your cart is empty</h2>
                        <Link to="/">
                        <span className="cart__link" >Explore products</span>
                        </Link>
                    </div>
                }
                {
                    cartCtx.cartItems && cartCtx.cartItems.map(cartItem => (
                        <CartItem
                            key={cartItem.id}
                            id={cartItem.id}
                            image={cartItem.image}
                            price={cartItem.price}
                            rating={cartItem.rating}
                            title={cartItem.title}
                        />
                    ))
                }
            </div>
           
        </div>
    )
}

export default Cart;