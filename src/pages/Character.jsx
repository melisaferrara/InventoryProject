import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Equip from "../componentes/Equip";

const Character = () => {


  return (
    <>
      <div className="text-white">
        <h1 className="text-3xl font-extrabold dark:text-white">Zelda Inventory</h1>
        <div className="flex gap-2 justify-center p-4">
          <Link to={"/"}>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">Inventory</button>
          </Link>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">Character</button>
        </div>
      </div>
      <div className="text-white flex items-center justify-center gap-10 p-8">
        <div>
          <Equip />
        </div>
        <div className="flex flex-col">
          <p>Name: Link</p>
          <p>Attack: 10</p>
          <p>Defense: 10</p>
          <p>Armor: 10 </p>
        </div>
      </div>
    </>
  );
};

export default Character;
