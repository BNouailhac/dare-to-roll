import styles from './NotFound.module.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import { motion } from "framer-motion";

const NotFound = props => {
  const {
    handleHome,
    handleGame,
    handleMap,
    handleCalendar,
    handleContact,
    landingPage,
    openGamePage
  } = props;
  const location = useLocation();

  const animations = {
    initial: { opacity: 0, y: -225 },
    animate: { opacity: 1, y: 0, transition: { y: { type: "spring", duration: 1.5, bounce: 0.5 }} },
    exit: { opacity: 0, y: -175, transition: { y: { type: "tween", duration: 0.675, bounce: 0.5 }, opacity: { type: "tween", duration: 0.675 }} },
}

const progress = {
  initial: { width: 0 },
  animate: { width: 700, transition: { width: { type: "tween", duration: 7 }} },
}

useEffect(() => {
  setTimeout(handleHome, 6800);
}, [handleHome])

    return (
      <div className={styles.notFound}>
          <NavBar
            handleHome={handleHome}
            handleGame={handleGame}
            handleMap={handleMap}
            handleCalendar={handleCalendar}
            handleContact={handleContact}
            landingPage={landingPage}
           />

            <motion.div className={styles.container} variants={animations} initial="initial" animate="animate" exit="exit">
                <div className={styles.notFoundContent}>
                    <img className={styles.notFoundImg} src={require("../../Resources/image/404.png")} alt="Not Found Warning" />
                    <div className={styles.notFoundText}>
                        <h2><span>{location.pathname.substring(22)}</span> is not available!</h2>
                        <p>The page you tried to access is not available. You will be redirected shortly. If you think this is an error, <span className={styles.contact}>contact us!</span></p>
                    </div>
                </div>
                <motion.div className={styles.progressBar} variants={progress} initial="initial" animate="animate"></motion.div>
            </motion.div>
    
      </div>
    );
  }
  
  export default NotFound;