import React, { createContext, useContext, useEffect, useState } from "react";

// 1. Create a context
const AppContext = createContext();

// 2. Create a provider component
export const AppProvider = ({ children }) => {
  // Define your states here

  const [toggleMenu, setToggleMenu] = useState("");
  const [menuVisible, setMenuVisible] = useState("");
  return (
    <AppContext.Provider
      value={{
        toggleMenu,
        setToggleMenu,
        menuVisible,
        setMenuVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 3. Consume the context
export const useAppContext = () => useContext(AppContext);
