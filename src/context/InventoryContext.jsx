import React, { createContext, useState } from "react";

export const IconContext = createContext({});

const InventoryContext = ({ children }) => {
  const [selectedIcon, setSelectedIcon] = useState({});
  const [selectedIcons, setSelectedIcons] = useState({});
//   const [selectedOption, setSelectedOption] = useState("");

  return (
    <IconContext.Provider
      value={{
        selectedIcon,
        setSelectedIcon,
        selectedIcons,
        setSelectedIcons,
      }}
    >
      {children}
    </IconContext.Provider>
  );
};

export default InventoryContext;
