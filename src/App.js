import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import GamePage from './Containers/GamePage/GamePage';
import NotFound from './Containers/NotFound/NotFound';
import Home from './Containers/Home/Home';
import { AnimatePresence } from "framer-motion";
import games from './utils/games';
import templateGame from './utils/templateGame';

function App() {
  const [allGames, setAllGames] = useState(games);
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartDisplayed, setCartDisplayed] = useState(false);
  const [selectedGame, setSelectedGame] = useState(false);
  const [hoverState, setHoverState] = useState([
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    }
  ]);

const navigate = useNavigate();
const location = useLocation();

if (location.pathname !== "/dare-to-roll/" && selectedGame === false) {
  let surname = location.pathname.substring(29);
  let currentGame = games.find(game => game.surname === surname);
  if (currentGame !== undefined) {
    setSelectedGame(currentGame);
  } else {
    setSelectedGame(templateGame);
  }
}

const handleHome = () => {
  setCartDisplayed(false);
  setHoverState([...hoverState, hoverState[21].hovered = false]);
  navigate('/dare-to-roll/');
}

const handleSelectGame = (e) => {
  if (e.target.tagName === "BUTTON") {
    return
  } else if (e.target.classList[0] !== "AddToCart_addToCart__zbJPe") {
      if (e.target.parentNode?.id) {
        navigate(`/dare-to-roll/games/${games[e.target.parentNode.id].surname}`);
        setSelectedGame(games[e.target.parentNode.id]);
      } else {
        navigate(`/dare-to-roll/games/${games[e.target.offsetParent.id].surname}`);
        setSelectedGame(games[e.target.offsetParent.id]);
      }
  }
}

const openGamePage = (e) => {
  setCartDisplayed(false);
  let selectedGameSurname = e.target.id;
  navigate(`/dare-to-roll/games/${selectedGameSurname}`);
}

const handleHover = (e) => {
  if (hoverState[e.target.id]?.selected) {
    return;
  }

  let newHoverState = hoverState.map((element, i) => {
    if (e.target.id === i) {
      element.hovered = !element.hovered;
      return element
    } else {
      return element;
    }
  });
    
  setHoverState(newHoverState);
}

const handleHoverGame = (e) => {
  let handledHoveredGame = allGames.map((game, i) => {
    if (e.target.id === i) {
      game.isHovered = !game.isHovered
      return game
    } else {
      return game;
    }
  });

  setAllGames(handledHoveredGame);
}

const handleAddToCart = (e) => {
  let handledAddedGame = allGames.map((game, i) => {
    if (selectedGame.id === i) {
      game.inCart = true
      let newCart = cart;
      newCart.push(game);
      setCart(newCart);
      setCartAmount(cartAmount + 1);
      return game
    } else {
      return game;
    }
  });

  setAllGames(handledAddedGame);
}

const clearCart = () => {
  setCart([]);
  setCartAmount(0);
  const defaultGames = allGames.map((game, i) => {
    game.inCart = false;
    game.isHovered = false;
    return game;
  });
  setAllGames(defaultGames);
  let newHoverState = hoverState[21] || {hovered: false, selected: false};
  newHoverState.hovered = false;
  setHoverState([
    ...hoverState, hoverState[21] = newHoverState
  ]);
}

const handleRemoveFromCart = (e) => {
  let removedIndex = cart.findIndex(game => game.id === e.target.id);
  let newAllGames = allGames.map((game, i) => {
    if (game.id === e.target.id) {
      game.inCart = false;
      game.isHovered = false;
      return game;
    } else {
      return game;
    }
  });
  setAllGames(newAllGames);
  let firstHalf = cart.slice(0, removedIndex);
  let secondHalf = cart.slice(removedIndex + 1);
  let addedUp = firstHalf.concat(secondHalf);
  setCart(addedUp);
  setCartAmount(cartAmount - 1)
  setHoverState([...hoverState, hoverState[21].hovered = false]);
}

const handleOpenCart = () => {
  setCartDisplayed(true);
}

const handleCloseCart = () => {
  setCartDisplayed(false);
}

useEffect(() => {
  if (cartDisplayed) {
    document.body.style.overflow = "hidden !important";   
  } else {
    document.body.style.overflow = "scroll !important";
  }
}, [cartDisplayed])

  return (
      <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/dare-to-roll/" element={<Home 
                                        handleHover={handleHover} 
                                        hoverState={hoverState} 
                                        cart={cart}
                                        cartAmount={cartAmount}
                                        cartDisplayed={cartDisplayed}
                                        handleOpenCart={handleOpenCart}
                                        handleCloseCart={handleCloseCart}
                                        clearCart={clearCart}
                                        handleAddToCart={handleAddToCart}
                                        handleHoverGame={handleHoverGame}
                                        handleSelectGame={handleSelectGame}
                                        handleRemoveFromCart={handleRemoveFromCart}
                                        setHoverState={setHoverState}
                                        openGamePage={openGamePage}
                                      />} />
            <Route path="/dare-to-roll/games/:gameId" element={<GamePage
                                               cart={cart}
                                               cartAmount={cartAmount}
                                               handleHover={handleHover}
                                               hoverState={hoverState}
                                               handleAddToCart={handleAddToCart}
                                               handleSelectGame={handleSelectGame} 
                                               selectedGame={selectedGame}
                                               setSelectedGame={setSelectedGame}
                                               handleHome={handleHome}
                                               setHoverState={setHoverState}
                                               allGames={allGames}
                                               cartDisplayed={cartDisplayed}
                                               handleOpenCart={handleOpenCart}
                                               handleCloseCart={handleCloseCart}
                                               clearCart={clearCart}
                                               handleRemoveFromCart={handleRemoveFromCart}
                                               openGamePage={openGamePage}
                                            />} />
            <Route path="*" element={<NotFound 
                            cartDisplayed={cartDisplayed}
                            handleCloseCart={handleCloseCart}
                            handleOpenCart={handleOpenCart}
                            cartAmount={cartAmount}
                            clearCart={clearCart}
                            hoverState={hoverState}
                            handleHome={handleHome}
                            handleHover={handleHover}
                            cart={cart}
                            handleRemoveFromCart={handleRemoveFromCart}
                            openGamePage={openGamePage}
          />} />
          </Routes>
      </AnimatePresence>
  );
}

export default App;
