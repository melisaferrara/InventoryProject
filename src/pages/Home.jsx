import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InformationCard from "../componentes/InformationCard";
import ItemsCard from "../componentes/ItemsCard";
import Equip from "../componentes/Equip";

const Home = () => {
  const [zeldaItems, setZeldaItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("weapons");
  const [information, setInformation] = useState({});

  const getZeldaItems = async () => {
    const data = await fetch(
      `https://practise-game-inventory.vercel.app/api/items`
    );
    const response = await data.json();
    setZeldaItems(response.results);
  };

  const handleClickCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = zeldaItems[selectedCategory];

  const handleClickInfo = (item) => {
    setInformation(item);
  };

  useEffect(() => {
    getZeldaItems();
  }, []);

  return (
    <>
      <div className="text-white">
        <h1 className="text-3xl font-extrabold dark:text-white">
          Zelda Inventory
        </h1>
        <p>(Click twice to equip!)</p>
        <div className="flex gap-2 justify-center p-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">
            Inventory
          </button>
          <Link to="character">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">
              Character
            </button>
          </Link>
          
        </div>
      </div>

      <div className="flex gap-10 text-white p-6">
        <button onClick={() => handleClickCategory("weapons")}>
          <img
            className="w-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmS5JLXst2JDfPk3VpSQBkyzWmYrPQ0WAtd_6woYOmcgNSnSNwIcFA0YD-SDwYnMg1Fk&usqp=CAU"
          />
        </button>
        <button onClick={() => handleClickCategory("shields")}>
          <img
            className="w-11"
            src="https://us.123rf.com/450wm/chekman/chekman1702/chekman170200102/72443952-escudo-gris-en-dise%C3%B1o-plano-aislado-icono-de-escudo-ilustraci%C3%B3n-del-vector.jpg"
          />
        </button>
        <button onClick={() => handleClickCategory("armors")}>
          <img
            className="w-11"
            src="https://png.pngtree.com/png-vector/20191023/ourlarge/pngtree-iron-armor-icon-gray-monochrome-style-png-image_1848671.jpg"
          />
        </button>
      </div>
      <ItemsCard
        filteredItems={filteredItems}
        handleClickInfo={handleClickInfo}
      />
      <InformationCard information={information} />
    </>
  );
};

export default Home;
