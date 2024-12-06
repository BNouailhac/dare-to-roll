import React from 'react';
import styles from './NavBar.module.css';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";
import { motion } from "framer-motion";

const NavBar = props => { 
    const {
        handleHover,
        hoverState,
        handleHome,
        cart,
        cartAmount,
        handleOpenCart,
        handleCloseCart
    } = props;
    
    const variants = {
        hidden: { opacity: 1, y: 15 },
        visible: { opacity: 1, y: 0 },
    }

  return (
    <>
      <motion.div 
        className={styles.navbar}
        animate="visible"
        variants={variants}
        transition={{ y: { type: "spring" }, duration: 0.01 }}
      >
        <div className={styles.navbar_left}>
            <div className={styles.logodiv} id="0"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              onClick={handleHome}
            >
              <Logo className={styles.svg} style={{ fill: "#fff" }}/>
              <h3>Dare to Roll</h3>
            </div>
  
        </div>

       
        <div className={styles.navbar_right}>
           {/* Section pour faire un panier si dans le futur on veut faire ca :
            <div 
              className={styles.cartdiv} 
              id="3"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              onClick={handleOpenCart}
            >
                <Cart 
                  onClick={handleOpenCart} 
                  className={styles.svg2} 
                  style={{ fill: cartAmount ? "#90ee90" : "transparent", stroke: cartAmount ? "" : "#fff", strokeWidth: "34px" }}
                />
                <h3 onClick={handleOpenCart}>Cart: {cartAmount}</h3>
            </div>
            */}
        </div> 
      </motion.div>
    </>
  );
}

export default NavBar;