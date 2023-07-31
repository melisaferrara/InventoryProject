import React from "react";
import Item from "./Item";
import Equip from "./Equip";

const ItemsCard = ({ filteredItems, handleClickInfo }) => {
  
  return (
 <div className="flex justify-between">
     <div className="flex flex-wrap gap-3 w-80 text-white">
      {filteredItems?.map((icons) => {
        return (
          <Item
            key={icons.name}
            handleClickInfo={handleClickInfo}
            icons={icons}
          />
        );
      })}
      </div>
      <Equip/>
    
 </div>
  );
};

export default ItemsCard;
