import styles from './AddToCart.module.css';
import React from 'react';
import { ReactComponent as Add } from "../../Resources/image/add.svg";

const AddToCart = props => {
    const {
        game,
        handleAddToCart
    } = props;

    return (
          <div className={styles.addToCart} id={game.id} onClick={handleAddToCart}>
            <h4 style={{ color: "#999" }}>Add to cart</h4>
            <Add className={styles.add} style={{ fill: "#999" }} />
          </div>
    );
  }
  
  export default AddToCart;