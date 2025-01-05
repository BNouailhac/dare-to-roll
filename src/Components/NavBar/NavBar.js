import React from 'react';
import styles from './NavBar.module.css';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";
import invitation from "../../Resources/image/invitation.png";
import map from "../../Resources/image/map.png";
import schedule from "../../Resources/image/schedule.png";
import catalogue from "../../Resources/image/catalogue.png";
import { motion } from "framer-motion";
import Tooltip from '@mui/material/Tooltip';

const NavBar = props => { 
    const {
        handleHome,
        handleGame,
        handleMap,
        handleCalendar,
        handleContact,
        cart,
        cartAmount,
        handleOpenCart,
        handleCloseCart
    } = props;

    const [value, setValue] = React.useState(0);
  
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
              onClick={handleHome}
            >
              <Logo className={styles.svg} style={{ fill: "#fff" }}/>
              <h3>Dare to Roll</h3>
            </div>
  
        </div>

       
        <div className={styles.navbar_right}>
          <Tooltip title="Nos jeux" className={styles.tabsmenu} id="0"
            onClick={handleGame}
          >
            <img  src={catalogue} className={styles.logomenu} alt="fireSpot"/>
            <h4 className={styles.textmenu}>Notre catologue</h4>
          </Tooltip>
          <Tooltip title="Carte du monde" className={styles.tabsmenu} id="0"
            onClick={handleMap}
          >
            <img  src={map} className={styles.logomenu} alt="fireSpot"/>
            <h4 className={styles.textmenu}>Carte du monde</h4>
          </Tooltip>
          <Tooltip title="Nos futur events" className={styles.tabsmenu} id="0"
            onClick={handleCalendar}
          >
            <img  src={schedule} className={styles.logomenu} alt="fireSpot"/>
            <h4 className={styles.textmenu}>Nos futur events</h4>
          </Tooltip>
          <Tooltip title="Nous contactez" className={styles.tabsmenu} id="0"
            onClick={handleContact}
          >
            <img  src={invitation} className={styles.logomenu} alt="fireSpot"/>
            <h4 className={styles.textmenu}>Nous contactez</h4>
          </Tooltip>
           {/* Section pour faire un panier si dans le futur on veut faire ca :
            <div 
              className={styles.cartdiv} 
              id="3"
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