import React from "react";
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products.</p>;
  } else {
    message = (
      <div>
        <h3>Boroloxxx </h3>
        <p>
          <small>Thanks for wasting your money.</small>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h3>order summery:{cart.length}</h3>
      {
        cart.length > 2
          ? <span>Aro Kino</span>
          : <span>Fokira</span>
      }
      {message}
      <div>
        {cart.map((tshirt, i) => (
          <p key={i}>
            {tshirt.name}
            <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
          </p>
        ))}
        {
          cart.length === 2 && <p>Double banaza;;;</p>
        }
        {
          cart.length === 3 || <h3>Not three!!</h3>
        }
      </div>
    </div>
  );
};

export default Cart;
