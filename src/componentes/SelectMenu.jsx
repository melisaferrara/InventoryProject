import React, { useContext} from "react";
import { IconContext } from "../context/InventoryContext";

const SelectMenu = () => {
   
    const {setSelectedOption, selectedOption} = useContext(IconContext)

    const handleOnChange = (event) =>{
      setSelectedOption(event.target.value)
    }
  
    

    return (
   <div>
     <select onChange={handleOnChange} value={selectedOption}>
      <option value="Equip">Equip</option>
      <option value="Throw">Throw</option>
      <option value="Cancel">Cancel</option>
    </select>
   </div>
  );
};

export default SelectMenu;
