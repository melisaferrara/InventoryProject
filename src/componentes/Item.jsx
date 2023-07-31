import React, { useContext, useState } from "react";
import { IconContext } from "../context/InventoryContext";

const Item = ({icons,handleClickInfo}) => {

    const {setSelectedIcon} = useContext(IconContext)

    const handleDoubleClick = (obj) => {
        setSelectedIcon(prevSelectedIcons => ({ ...prevSelectedIcons, [obj.category]: obj }));
      };
    
  return (
    <div
      onClick={() => handleClickInfo(icons)}
      onDoubleClick={() => handleDoubleClick(icons)}
      
      className="border border-cyan-500 cursor-pointer"
    >
      <img className="w-20" src={icons.icon} />
      <div className="border border-cyan-500 w-8">
        {icons.category === "weapon"
          ? icons.stats.damage
          : icons.category === "shield"
          ? icons.stats.defense
          : icons.stats.armor}
      </div>
    </div>
  );
};

export default Item;
