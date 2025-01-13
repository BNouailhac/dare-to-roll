import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";
import invitation from "../../Resources/image/invitation.png";
import map from "../../Resources/image/map.png";
import schedule from "../../Resources/image/schedule.png";
import catalogue from "../../Resources/image/catalogue.png";
import { motion } from "framer-motion";
import Tooltip from '@mui/material/Tooltip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import france from "../../Resources/image/france.png";
import britain from "../../Resources/image/britain.png";
import italy from "../../Resources/image/italy.png";

const NavBar = props => { 
    const {
        handleHome,
        handleGame,
        handleMap,
        handleCalendar,
        handleContact,
    } = props;

    const [langue, setLangue] = useState('fr');
    

    useEffect(() => {
      var userLang = navigator.language || navigator.userLanguage; 
      setLangue(userLang.substring(0, 2))
    }, [])

    const handleChange = (event) => {
      setLangue(event.target.value);
    };
  
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
          {/*<Tooltip title="Carte du monde" className={styles.tabsmenu} id="0"
            onClick={handleMap}
          >
            <img  src={map} className={styles.logomenu} alt="fireSpot"/>
            <h4 className={styles.textmenu}>Carte du monde</h4>
          </Tooltip>
          */}
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
          <FormControl sx={{ justifyContent: 'center' }} variant="standard">
            <Select
              className={styles.margimg}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={langue}
              onChange={handleChange}
              label="Langue"
            >
              <MenuItem value={'fr'}>
                <Tooltip title="Français" id="0">
                  <img className={styles.langimg} src={france} alt="FranceFlag"/>
                </Tooltip>
              </MenuItem>
              <MenuItem value={'en'}>
                <Tooltip title="English" id="1">
                  <img className={styles.langimg} src={britain} alt="BritainFlag"/>
                </Tooltip>
              </MenuItem>
              <MenuItem value={'it'}>
                <Tooltip title="Italiano" id="2">
                  <img className={styles.langimg} src={italy} alt="ItalyFlag"/>
                </Tooltip>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </motion.div>
    </>
  );
}

export default NavBar;