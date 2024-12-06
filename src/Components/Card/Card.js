import styles from './Card.module.css';
import React from 'react';
import { motion } from "framer-motion";
//import AddToCart from '../AddToCart/AddToCart';
//import AddedToCart from '../AddedToCart/AddedToCart';

const Card = props => {
    const { 
        game,
        handleAddToCart,
        handleHover,
        hoverState,
        handleHoverGame,
        handleSelectGame
      } = props;

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
          <motion.div
            className={hoverState[1].selected === false ? styles.card : styles.cardHome}
            onClick={handleSelectGame}
            id={game.id}
            style={{ margin: 0, padding: 0 }}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <img src={game.cover} className={styles.img} alt="Game Cover Image" />
    
            
            
            <div className={styles.price}>
                {/*{game.inCart ? <AddedToCart /> : <AddToCart 
                                      game={game} 
                                      handleHoverGame={handleHoverGame} 
                                      handleAddToCart={handleAddToCart} 
                                    />
                }*/}
                <h2 className={styles.name}>{game.name}</h2>
                <div style={{ display: 'ruby'}}>{game.price} €</div>
            </div>
            <h3 className={styles.desc}>{game.shortdesc}</h3>
          </motion.div>
    );
  }
  
  export default Card;