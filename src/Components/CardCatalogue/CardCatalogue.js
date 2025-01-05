import styles from './CardCatalogue.module.css';
import React from 'react';
import { motion } from "framer-motion";
//import AddToCart from '../AddToCart/AddToCart';
//import AddedToCart from '../AddedToCart/AddedToCart';

const CardCatalogue = props => {
    const { 
        game,
        handleAddToCart,
        handleSelectGame
      } = props;

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
          <motion.div
            className={styles.card}
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
  
  export default CardCatalogue;