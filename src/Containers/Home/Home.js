import React from 'react';
import styles from './Home.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import games from '../../utils/games';
import events from '../../utils/events';
import Card from '../../Components/Card/Card';
import EventsCard from '../../Components/EventsCard/EventsCard';
import monaco from "../../Resources/image/monaco.png";
import europe from "../../Resources/image/european-union.png";
import Tooltip from '@mui/material/Tooltip';

const Home = props => {
  const {
    handleHome,
    handleGame,
    handleMap,
    handleCalendar,
    handleContact,
    handleSelectGame,
    openGamePage
  } = props;

  return (
    <div className={styles.main}>
        <div className={styles.home}>
                <video autoPlay muted loop className={styles.video}>
                  <source src={require("../../Resources/image/HomePageVideo.webm")} type="video/webm" />
                </video>
                <NavBar
                  handleHome={handleHome}
                  handleGame={handleGame}
                  handleMap={handleMap}
                  handleCalendar={handleCalendar}
                  handleContact={handleContact}
                />
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.splash}>
                          <h1>Dare to Roll</h1>
                          <p className={styles.intro}>Tous nos jeux sont fait Maison ! Parcourez notre <span onClick={handleGame} className={styles.careers}>catalogue</span> ou <span onClick={handleContact} className={styles.careers}>contactez-nous</span> avec vos retours ou vos proposition de jeux.</p>
                          <div className={styles.flags}>
                            <div className={styles.flag} >
                              <p className={styles.textFlag}>Originaires de Monaco</p>
                              <Tooltip title="Originaires de Monaco" id="0">
                                <img  src={monaco} style={{ width: "35px" }} alt="MonacoFlag"/>
                              </Tooltip>
                            </div>
                            <div className={styles.flag}>
                              <p className={styles.textFlag}>Disponible dans toute l'Europe</p>
                              <Tooltip title="Disponible dans toute l'Europe" id="0">
                                <img  src={europe} style={{ width: "35px" }} alt="EuroFlag"/>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                        <div style={{marginTop: "10px", marginBottom: "10px", padding: "10px", backdropFilter: "blur(8px)", borderRadius: "20px", background: "rgba(19, 18, 18, 0.5)"}}>
                          <h2 style={{ textAlign: "center" }}>Retrouvez nous prochainement !</h2>
                        </div>
                        <EventsCard
                            event={events[0]}
                            key={events[0].title}
                          />
                        <div>

                        </div>
                    </div>
    
                    <div className={styles.right}>
                      <div className={styles.homeRight}>
                        <h2>Notre dernier jeux !</h2>
                        <Card 
                          game={games[games.length - 1]} 
                          key={games[games.length - 1].name}
                          handleSelectGame={handleSelectGame}
                        />
                      </div>
                    </div>
                </div>
        </div>
    </div>
  );
}

export default Home;